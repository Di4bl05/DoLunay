// Mock database functions for products
// Replace this with actual database implementation later

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  store: string;
}

// Mock data storage
const products: Product[] = [];

export const db = {
  async getProducts(): Promise<Product[]> {
    // In production, this would query a real database
    return products;
  },

  async getProductById(id: string): Promise<Product | null> {
    const product = products.find(p => p.id === id);
    return product || null;
  },

  async createProduct(productData: Omit<Product, 'id'>): Promise<Product> {
    const newProduct = {
      id: Date.now().toString(),
      ...productData,
    };
    products.push(newProduct);
    return newProduct;
  },

  async updateProduct(id: string, productData: Partial<Product>): Promise<Product | null> {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    products[index] = { ...products[index], ...productData };
    return products[index];
  },

  async deleteProduct(id: string): Promise<boolean> {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    products.splice(index, 1);
    return true;
  },
};
