
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  featured?: boolean;
  category?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Endless Display Pro",
    price: 699.99,
    image: "/products/display.png",
    featured: true,
    category: "displays"
  },
  {
    id: 2,
    name: "SmartWatch Ultra",
    price: 299.99,
    image: "/products/watch.png",
    featured: true,
    category: "watches"
  },
  {
    id: 3,
    name: "Clear Sound Headphones",
    price: 199.99,
    image: "/products/headphones.png",
    featured: true,
    category: "headphones"
  },
  {
    id: 4,
    name: "Crystal Display XG",
    price: 499.99,
    image: "/products/display.png",
    category: "displays"
  },
  {
    id: 5,
    name: "Fitness Watch Pro",
    price: 249.99,
    image: "/products/watch.png",
    category: "watches"
  },
  {
    id: 6,
    name: "Ultra Bass Headphones",
    price: 179.99,
    image: "/products/headphones.png",
    category: "headphones"
  }
];
