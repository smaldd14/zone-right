import { Hono } from "hono";
import { cors } from "hono/cors";
import support from "./routes/support";

const app = new Hono<{ Bindings: Env }>();

app.use("/api/*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: ["Content-Type"]
}));

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.route("/api/support", support);

export default app;
