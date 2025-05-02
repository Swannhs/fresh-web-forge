
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  featured: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Headphones x-2BM",
    price: 149.99,
    image: "/products/headphones.png",
    description: "Premium noise-canceling headphones for an immersive audio experience",
    featured: true,
    category: "headphones"
  },
  {
    id: 2,
    name: "eWatch SF 4",
    price: 349.99,
    image: "/products/watch.png",
    description: "Smart watch with advanced health monitoring and fitness tracking",
    featured: true,
    category: "watches"
  },
  {
    id: 3,
    name: "eDisplay XR",
    price: 649.99,
    image: "/products/display.png",
    description: "High-resolution display with brilliant colors and minimal bezels",
    featured: true,
    category: "displays"
  }
];
