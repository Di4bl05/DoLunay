export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  available: boolean;
}

export interface Order {
  id: string;
  productId: string;
  quantity: number;
  customerName: string;
  customerEmail: string;
  status: 'pending' | 'completed' | 'canceled';
}

export interface Request {
  id: string;
  productName: string;
  customerName: string;
  customerEmail: string;
  status: 'pending' | 'fulfilled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
}