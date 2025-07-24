-- Migration: Create support_requests table
-- Created: 2025-07-24

CREATE TABLE support_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT,
  user_agent TEXT,
  status TEXT DEFAULT 'open'
);

-- Indexes for performance
CREATE INDEX idx_email_created ON support_requests(email, created_at);
CREATE INDEX idx_created_at ON support_requests(created_at);
CREATE INDEX idx_status ON support_requests(status);