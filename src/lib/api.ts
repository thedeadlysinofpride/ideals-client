const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export interface Product {
  id: string;
  productId: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  badge: string | null;
  inStock: boolean;
  colors: Array<{ name: string; hex: string; image: string }>;
  gallery: string[];
  highlights: string[];
  model: string;
}

export const api = {
  async getProducts(): Promise<{ success: boolean; data: Product[] }> {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    const result = await res.json();

    if (result.success && result.data) {
      result.data = result.data.map((product: any) => ({
        ...product,
        colors:
          typeof product.colors === "string"
            ? JSON.parse(product.colors)
            : product.colors,
      }));
    }

    return result;
  },

  async getProductById(
    id: string,
  ): Promise<{ success: boolean; data: Product }> {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    const result = await res.json();

    if (result.success && result.data) {
      result.data.colors =
        typeof result.data.colors === "string"
          ? JSON.parse(result.data.colors)
          : result.data.colors;
    }

    return result;
  },

  async login(
    email: string,
    password: string,
  ): Promise<{ success: boolean; data: { token: string; user: any } }> {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Login failed");
    return data;
  },

  async createProduct(product: any, token: string) {
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error("Failed to create product");
    return res.json();
  },

  async updateProduct(id: string, product: any, token: string) {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error("Failed to update product");
    return res.json();
  },

  async deleteProduct(id: string, token: string) {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to delete product");
    return res.json();
  },

  async updateStock(id: string, inStock: boolean, token: string) {
    const res = await fetch(`${API_URL}/products/${id}/stock`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ inStock }),
    });
    if (!res.ok) throw new Error("Failed to update stock");
    return res.json();
  },

  async applyDiscount(
    id: string,
    discount: number,
    discountExpiry?: string,
    token?: string,
  ) {
    const res = await fetch(`${API_URL}/products/${id}/discount`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ discount, discountExpiry }),
    });
    if (!res.ok) throw new Error("Failed to apply discount");
    return res.json();
  },
};
