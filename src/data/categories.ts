
export interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "All products",
    description: "Discover endless possibilities with our All Products category. Shop now for everything you need in one convenient place.",
    image: "/categories/watches.png",
    link: "/products",
    buttonText: "Browse all products"
  },
  {
    id: 2,
    title: "Displays",
    description: "Experience crystal-clear clarity and vibrant visuals with our Displays.",
    image: "/categories/displays.png",
    link: "/products/displays",
    buttonText: "Check displays"
  },
  {
    id: 3,
    title: "Headphones",
    description: "Immerse yourself in premium sound quality with our collection of high-fidelity headphones.",
    image: "/categories/headphones.png",
    link: "/products/headphones",
    buttonText: "View Headphones"
  },
  {
    id: 4,
    title: "Phones",
    description: "Stay connected with our selection of cutting-edge smartphones featuring the latest technology.",
    image: "/categories/phones.png",
    link: "/products/phones",
    buttonText: "Shop Phones"
  }
];
