import { Hono } from "hono";
import { SupportRequestInput, ApiResponse } from "../types";

const support = new Hono<{ Bindings: Env }>();

support.post("/", async (c) => {
  try {
    const body = await c.req.json() as SupportRequestInput;
    
    if (!body.email || !body.message) {
      return c.json<ApiResponse>({
        success: false,
        error: "Email and message are required"
      }, 400);
    }

    if (body.email.length > 255 || body.message.length > 2000) {
      return c.json<ApiResponse>({
        success: false,
        error: "Email or message too long"
      }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return c.json<ApiResponse>({
        success: false,
        error: "Invalid email format"
      }, 400);
    }

    const clientIP = c.req.header("CF-Connecting-IP") || c.req.header("X-Forwarded-For") || "unknown";
    const userAgent = c.req.header("User-Agent") || "unknown";

    const stmt = c.env.DB.prepare(`
      INSERT INTO support_requests (email, message, ip_address, user_agent)
      VALUES (?, ?, ?, ?)
    `);

    await stmt.bind(body.email, body.message, clientIP, userAgent).run();

    return c.json<ApiResponse>({
      success: true,
      data: { message: "Support request submitted successfully" }
    });

  } catch (error) {
    console.error("Error submitting support request:", error);
    
    if (error instanceof Error && error.message.includes("UNIQUE constraint failed")) {
      return c.json<ApiResponse>({
        success: false,
        error: "A support request from this email already exists"
      }, 409);
    }

    return c.json<ApiResponse>({
      success: false,
      error: "Internal server error"
    }, 500);
  }
});

export default support;