export interface Blog {
  id: string;
  title: string;
  userName: string;
  userTech: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
}

export const blogData: Blog[] = [
  {
    id: "1",
    title: "The Future of Digital Transformation in 2024",
    userName: "Kannan",
    userTech: "Tech",
    excerpt: "Explore how AI and cloud computing are reshaping the business landscape for modern enterprises.",
    category: "Technology",
    date: "Dec 25, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>Digital transformation is no longer just a buzzword; it's a fundamental shift in how businesses operate and deliver value to customers. As we move into 2024, the landscape is evolving faster than ever, driven by breakthroughs in Artificial Intelligence (AI) and the continued maturity of cloud computing.</p>
      <h2>The AI Revolution</h2>
      <p>Generative AI has taken the world by storm, and its impact on digital transformation is profound. From automating customer service with advanced chatbots to generating personalized marketing content at scale, AI is enabling businesses to operate with unprecedented efficiency and creativity.</p>
      <h2>Cloud-Native Strategies</h2>
      <p>The cloud is the backbone of modern digital infrastructure. In 2024, we see a shift towards 'cloud-native' strategies, where applications are designed specifically for the cloud environment. This approach allows for greater scalability, resilience, and faster time-to-market.</p>
      <blockquote>"The companies that succeed in 2024 will be those that embrace AI not as a replacement for human talent, but as a powerful tool to augment it."</blockquote>
    `
  },
  {
    id: "2",
    title: "Designing for the Next Generation: UX Trends",
    userName: "Aliakram",
    userTech: "Tech",
    excerpt: "A deep dive into why minimalism and accessibility are the keys to successful digital products.",
    category: "Design",
    date: "Dec 20, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>User Experience (UX) design is at a crossroads. As users become more digitally savvy and their expectations higher, designers must find new ways to create interfaces that are both beautiful and functional.</p>
      <h2>Minimalism is Back (But Different)</h2>
      <p>The new minimalism isn't about stripping away everything; it's about intentionality. It's about focusing on the elements that truly matter and removing the noise that distracts from the user's goals.</p>
      <h2>Accessibility is Not Negotiable</h2>
      <p>Inclusive design is no longer an afterthought. In 2024, building accessible digital products is a core requirement. This means considering users with diverse needs from the very beginning of the design process.</p>
    `
  },
  {
    id: "3",
    title: "Maximizing ROI with Data-Driven Marketing",
    userName: "Suhail",
    userTech: "Tech",
    excerpt: "Learn how to leverage analytics to build high-converting marketing campaigns that actually work.",
    category: "Strategy",
    date: "Dec 18, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>In today's competitive landscape, marketing without data is like flying blind. Data-driven marketing allows businesses to understand their customers better, personalize their messages, and optimize their spending for maximum impact.</p>
      <h2>The Power of Analytics</h2>
      <p>Analytics tools provide a wealth of information about how users interact with your brand. By tracking key performance indicators (KPIs), you can identify what's working and what's not, allowing you to make informed decisions about your marketing strategy.</p>
    `
  },
  {
    id: "4",
    title: "Scaling Your Startup: Lessons from Industry Leaders",
    userName: "Rasmiya",
    userTech: "Tech",
    excerpt: "Top insights on culture, growth, and operations from successful founders who made it big.",
    category: "Business",
    date: "Dec 15, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>Scaling a startup is one of the most challenging things an entrepreneur can do. It requires a unique blend of vision, execution, and perseverance. We spoke with several industry leaders to gather their top insights on how to grow a business successfully.</p>
      <h2>Culture is Key</h2>
      <p>As your company grows, maintaining a strong culture becomes increasingly important. Your culture defines who you are as a business and how you treat your employees and customers.</p>
    `
  },
  {
    id: "5",
    title: "The Rise of Sustainable Web Development",
    userName: "Siva",
    userTech: "Tech",
    excerpt: "How reducing your digital carbon footprint can lead to better performance and user experience.",
    category: "Development",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>The internet consumes a massive amount of energy, and its carbon footprint is growing. Sustainable web development is about creating websites and applications that are more energy-efficient and environmentally friendly.</p>
      <h2>Optimizing for Performance</h2>
      <p>Faster websites are not only better for users; they're also better for the planet. By optimizing your code, images, and other assets, you can reduce the amount of data transferred and the energy required to load your pages.</p>
    `
  },
];
