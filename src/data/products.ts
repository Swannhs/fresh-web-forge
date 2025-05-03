
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
    image: "https://framerusercontent.com/images/kUOQ8u8fRfnwNx6SFLSesC5Von0.png",
    featured: true,
    category: "displays"
  },
  {
    id: 2,
    name: "SmartWatch Ultra",
    price: 299.99,
    image: "https://framerusercontent.com/images/93R1mlfMfzDub1dmWfaygjX44g.png",
    featured: true,
    category: "watches"
  },
  {
    id: 3,
    name: "Clear Sound Headphones",
    price: 199.99,
    image: "https://framerusercontent.com/images/iihhlY75uwJhVitKr3AWmJPXJ2c.png",
    featured: true,
    category: "headphones"
  },
  {
    id: 4,
    name: "Crystal Display XG",
    price: 499.99,
    image: "https://framerusercontent.com/images/kUOQ8u8fRfnwNx6SFLSesC5Von0.png",
    category: "displays"
  },
  {
    id: 5,
    name: "Fitness Watch Pro",
    price: 249.99,
    image: "https://framerusercontent.com/images/93R1mlfMfzDub1dmWfaygjX44g.png",
    category: "watches"
  },
  {
    id: 6,
    name: "Ultra Bass Headphones",
    price: 179.99,
    image: "https://framerusercontent.com/images/iihhlY75uwJhVitKr3AWmJPXJ2c.png",
    category: "headphones"
  }
];
