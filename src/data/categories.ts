
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
    image: "https://framerusercontent.com/images/yD047Kl5EbewEFW5RyrRcTsrA.png?scale-down-to=1024",
    link: "/products",
    buttonText: "Browse all products"
  },
  {
    id: 2,
    title: "Displays",
    description: "Experience crystal-clear clarity and vibrant visuals with our Displays.",
    image: "https://framerusercontent.com/images/epvE5hFHNlkcGbnrpB2IayKiHUE.png",
    link: "/products/displays",
    buttonText: "Check displays"
  },
  {
    id: 3,
    title: "Headphones",
    description: "Immerse yourself in premium sound quality with our collection of high-fidelity headphones.",
    image: "https://framerusercontent.com/images/Q0vJfOd2ycuoBVOqcEeLEBIEHY.png",
    link: "/products/headphones",
    buttonText: "View Headphones"
  },
  {
    id: 4,
    title: "Phones",
    description: "Stay connected with our selection of cutting-edge smartphones featuring the latest technology.",
    image: "https://framerusercontent.com/images/R3ixekN751tQ9urOSnopl9GZo8.png",
    link: "/products/phones",
    buttonText: "Shop Phones"
  }
];
