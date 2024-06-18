export interface AuthState {
  token: string | null;
  id: number | null;
  fullName: string | null;
}

export interface ResponseData {
  token: string;
  data: {
    id: number;
    fullName: string;
    email: string;
  };
}
