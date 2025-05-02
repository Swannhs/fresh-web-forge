
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
    image: "/articles/article1.png",
    content: "Discover the latest innovations and future trends in wearable technology..."
  },
  {
    id: 2,
    title: "The Rise of Smart Home Devices: Transforming the Way We Live",
    image: "/articles/article2.png",
    content: "Learn how smart home technology is revolutionizing daily life..."
  },
  {
    id: 3,
    title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
    image: "/articles/article3.png",
    content: "Explore how gaming peripherals are changing the entertainment landscape..."
  }
];
