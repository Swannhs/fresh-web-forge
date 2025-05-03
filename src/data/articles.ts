
export interface Article {
  id: number;
  title: string;
  image: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "The Future of Wearable Tech: Trends and Innovations to Watch",
    image: "https://framerusercontent.com/images/4albnHYE88QncxbZbQd4TAJZ8sY.jpg?scale-down-to=2048",
    content: "Discover the latest innovations and future trends in wearable technology..."
  },
  {
    id: 2,
    title: "The Rise of Smart Home Devices: Transforming the Way We Live",
    image: "https://framerusercontent.com/images/w8U0qeGPnEraHS19zHSqO4o34.jpg?scale-down-to=2048",
    content: "Learn how smart home technology is revolutionizing daily life..."
  },
  {
    id: 3,
    title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
    image: "https://framerusercontent.com/images/0qM9Ztm4HZhZHt8vNXGofUBQf2w.jpg?scale-down-to=2048",
    content: "Explore how gaming peripherals are changing the entertainment landscape..."
  }
];
