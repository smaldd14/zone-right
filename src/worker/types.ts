export interface SupportRequest {
  id?: number;
  email: string;
  message: string;
  created_at?: string;
  ip_address?: string;
  user_agent?: string;
  status?: 'open' | 'in_progress' | 'resolved' | 'closed';
}

export interface SupportRequestInput {
  email: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}