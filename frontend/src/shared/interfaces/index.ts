export interface AuthState {
  accessToken: string | null;
  id: number | null;
  username: string | null;
}

export interface ResponseData {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  id: number;
  category: string;
}
