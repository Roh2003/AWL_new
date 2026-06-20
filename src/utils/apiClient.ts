/**
 * API Client utility for the admin dashboard.
 * All requests go through this module which automatically attaches the auth token.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export type ApiResponse<T = unknown> = {
  success: boolean;
  message: string;
  data: T;
  errors: unknown[];
};

export class ApiError extends Error {
  status: number;
  errors: unknown[];

  constructor(message: string, status: number, errors: unknown[] = []) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("awl_admin_token");
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = getToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const json = await res.json();

  if (!res.ok) {
    // If 401, clear token and redirect to login
    if (res.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("awl_admin_token");
      localStorage.removeItem("awl_admin_user");
      window.location.href = "/admin/login";
    }

    throw new ApiError(
      json?.message || "Request failed",
      res.status,
      json?.errors || []
    );
  }

  return json as ApiResponse<T>;
}

export const apiClient = {
  get: <T>(endpoint: string) =>
    request<T>(endpoint, { method: "GET" }),

  post: <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  patch: <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),

  delete: <T>(endpoint: string) =>
    request<T>(endpoint, { method: "DELETE" }),
};
