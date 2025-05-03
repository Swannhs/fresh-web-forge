
export interface BlogPost {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Wearable Tech: Trends and Innovations to Watch",
    image: "/lovable-uploads/34e031b4-176b-49d9-a3b3-b748b09f09aa.png",
    excerpt: "Explore the latest innovations in wearable technology and discover what's on the horizon for these increasingly essential devices.",
    date: "Apr 8, 2022"
  },
  {
    id: 2,
    title: "The Rise of Smart Home Devices: Transforming the Way We Live",
    image: "/lovable-uploads/3698d58c-6b80-4c3d-a316-52a77b6051b3.png",
    excerpt: "How smart home technology is revolutionizing everyday living and creating more connected homes across the world.",
    date: "Mar 15, 2022"
  },
  {
    id: 3,
    title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
    image: "/lovable-uploads/78e1b3ea-d2f4-4895-83f5-7bc6612d83ec.png",
    excerpt: "The latest gaming technology that's changing not just entertainment but other industries too with innovative applications.",
    date: "Feb 28, 2022"
  },
  {
    id: 4,
    title: "Sustainable Tech: How Companies Are Going Green",
    image: "/lovable-uploads/0a67f8d3-ab6e-422e-8e47-3a21fcd7c729.png",
    excerpt: "Innovative approaches tech companies are taking to reduce their environmental footprint while maintaining product quality.",
    date: "Jan 20, 2022"
  },
  {
    id: 5,
    title: "The Evolution of Wireless Earbuds: What's Next?",
    image: "/products/headphones.png",
    excerpt: "From simple bluetooth headsets to advanced audio engineering, the rapid evolution of wireless audio technology.",
    date: "Dec 12, 2021"
  },
  {
    id: 6,
    title: "How AI is Enhancing Modern Electronics",
    image: "/products/display.png",
    excerpt: "The integration of artificial intelligence in everyday consumer electronics and its benefits for users around the world.",
    date: "Nov 5, 2021"
  }
];
