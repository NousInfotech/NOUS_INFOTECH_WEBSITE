import { Blog, Project, Expertise, Package, TeamMember, TimelineData } from "@/types/dataTypes";
import {
  Code,
  LayoutDashboard,
  ShoppingCart,
  Smartphone,
  Server,
  CreditCard,
  Bot,
  Rocket,
  Palette,
  LifeBuoy,
} from "lucide-react";


// Nav Links


export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  // { name: "AI Agent", href: "/ai-agent"}
];

// Projects Data
export const projects: Project[] = [
{
  title: "Space Sculpt",
  category: "Website | Development",
  image: "/project-images/spacesculpt.png",
  link: "https://space-sculpt.vercel.app/",
  year: 2024,
},
{
  title: "DBQ Pro",
  category: "Website | Development",
  image: "/project-images/dbq-pro.png",
  link: "https://dbq-pro-puce.vercel.app/",
  year: 2023,
},
{
  title: "LED Display UAE",
  category: "Website | Development",
  image: "/project-images/uae-led.png",
  link: "https://www.leddisplayuae.com/",
  year: 2022,
},
{
  title: "Alghwasa",
  category: "Website | Development",
  image: "/project-images/alghwasa.png",
  link: "https://www.alghwasa.com/",
  year: 2024,
},
{
  title: "Honesty Engineering Works",
  category: "Website | Development",
  image: "/project-images/honesty.png",
  link: "https://www.honestyengineering.in/",
  year: 2021,
},
{
  title: "Pop and Palm",
  category: "Website | Development",
  image: "/project-images/pop-and-palm.png",
  link: "https://www.popandpalmevents.com/",
  year: 2023,
},
{
  title: "Pixel World",
  category: "Website | Development",
  image: "/project-images/pixel-world.png",
  link: "https://www.pixelworld.ae/",
  year: 2024,
},
{
  title: "EOM",
  category: "Website | Development",
  image: "/project-images/eom.png",
  link: "https://www.entrepreneursofmadras.com/",
  year: 2023,
},
{
  title: "SunnySide Up",
  category: "Website | Development",
  image: "/project-images/sunny-side.png",
  link: "https://sunnysidecafe.vercel.app/",
  year: 2024,
},
{
  title: "Kind Rice",
  category: "Website | Development",
  image: "/project-images/kind-rice.png",
  link: "https://www.kindrice.co/",
  year: 2022,
},
{
  title: "Zarak Media",
  category: "Website | Development",
  image: "/project-images/zarak.png",
  link: "https://codeerr-sid.github.io/Zarak_Media/",
  year: 2021,
},
{
  title: "Braai Shack",
  category: "Website | Development",
  image: "/project-images/braai.png",
  link: "https://braaishack.vercel.app/",
  year: 2024,
},
{
  title: "Sri Varsha",
  category: "Website | Development",
  image: "/project-images/srivarsha.png",
  link: "https://sri-varsha.vercel.app/index.html",
  year: 2020,
},
{
  title: "Prepco Healthcare",
  category: "Website | Development",
  image: "/project-images/prepco.png",
  link: "https://prepcohealthcare.com/",
  year: 2023,
},

];

// Expertise Data
export const expertiseData: Expertise[] = [
  {
    title: "Web & App Development",
    description: "Building high-performance, scalable digital products using cutting-edge technologies.",
    icon: Code,
    color: "from-blue-500/20 to-primary/20",
    points: [
      "Fast, responsive & device-friendly builds",
      "Scalable architecture for future growth",
      "Modern tech stack & best coding practices",
      "Customized to your brand & goals",
    ],
  },
  {
    title: "Custom Web Applications & Dashboards",
    description: "Tailor-made applications and dashboards designed to automate workflows and visualize business data.",
    icon: LayoutDashboard,
    color: "from-purple-500/20 to-pink-500/20",
    points: [
      "Custom workflows & automation",
      "Real-time data visualization",
      "Secure authentication & access control",
      "Built to align with internal operations",
    ],
  },
  {
    title: "E-commerce & Marketplace Solutions",
    description: "End-to-end marketplace platforms with secure transactions, logistics, and custom product logic.",
    icon: ShoppingCart,
    color: "from-amber-500/20 to-orange-500/20",
    points: [
      "Payment integration (UPI, Stripe, Razorpay, PayPal, etc.)",
      "Shipping integration with live tracking",
      "Inventory management & stock control",
      "Analytics for sales & performance",
      "Custom logic for unique/special products",
    ],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps built for performance, reliability, and user engagement.",
    icon: Smartphone,
    color: "from-green-500/20 to-emerald-500/20",
    points: [
      "iOS & Android app development",
      "Native & cross-platform builds",
      "Smooth UI/UX experiences",
      "API connectivity & cloud sync",
    ],
  },
  {
    title: "Backend & API Development",
    description: "Secure, scalable server architecture and APIs engineered for seamless integration and data flow.",
    icon: Server,
    color: "from-gray-500/20 to-blue-500/20",
    points: [
      "REST & GraphQL APIs",
      "Authentication & authorization systems",
      "High-performance data handling",
      "Optimized cloud-based server setups",
    ],
  },
  {
    title: "Payment & Financial Integrations",
    description: "Payment gateways, subscription billing, invoicing, and financial systems your users can trust.",
    icon: CreditCard,
    color: "from-indigo-500/20 to-primary/20",
    points: [
      "Payment gateway setup (Stripe, Razorpay, PayPal, etc.)",
      "Subscription billing & recurring payments",
      "Automated invoicing & receipts",
      "Fraud protection & compliance setup",
    ],
  },
  {
    title: "AI & Automation Solutions",
    description: "Smart automation, chatbots, machine learning, and AI integrations to accelerate productivity.",
    icon: Bot,
    color: "from-teal-500/20 to-cyan-500/20",
    points: [
      "Conversational chatbots",
      "Process automation & workflow bots",
      "Predictive analytics & ML models",
      "AI-powered customer & business ops",
    ],
  },
  {
    title: "SEO & Performance Optimization",
    description: "Boost visibility, speed, rankings, and conversions with technical SEO and performance upgrades.",
    icon: Rocket,
    color: "from-yellow-500/20 to-lime-500/20",
    points: [
      "Technical SEO & site structure",
      "Web vitals & speed optimization",
      "Improved ranking & discoverability",
      "Conversion-focused UX improvements",
    ],
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that blends aesthetics with seamless, intuitive digital experiences.",
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/20",
    points: [
      "Wireframes & prototypes",
      "Visual identity & branding",
      "User journey & navigation flow",
      "Design systems & consistency",
    ],
  },
  {
    title: "Maintenance & Support",
    description: "Reliable, ongoing maintenance, updates, bug fixes, and security monitoring for peace of mind.",
    icon: LifeBuoy,
    color: "from-slate-500/20 to-slate-700/20",
    points: [
      "Security patches & monitoring",
      "Bug fixes & error resolution",
      "Feature updates & enhancements",
      "Backups, recovery & uptime care",
    ],
  },
];

// Packages Data
export const packages: Package[] = [
  {
    name: "Basic",
    price: "₹4999",
    description: "Perfect for startups and simple digital presence.",
    features: [
      "Single Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "2 Rounds of Revisions",
    ],
    buttonText: "Start Basic Plan",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹14999",
    description: "The complete solution for growing businesses.",
    features: [
      "Up to 5 Pages",
      "Custom UI/UX Design",
      "CMS Integration",
      "Speed Optimization",
      "Advanced SEO",
      "5 Rounds of Revisions",
    ],
    buttonText: "Choose Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹19999",
    description: "Enterprise-grade digital experiences.",
    features: [
      "Fully Custom Web App",
      "E-commerce Functionality",
      "Premium Animations",
      "Database Integration",
      "Priority 24/7 Support",
      "Unlimited Revisions",
    ],
    buttonText: "Get Premium",
    popular: false,
  },
];

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    name: "Ali Akram",
    role: "Creative Director",
    image: "/team/aliakram-new.png",
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/ali-akram-2729ba282/' },
      { platform: 'instagram', url: 'https://www.instagram.com/akram_ackerman_?igsh=MXJkOHU5aXY2MW91eA==' },
      {platform: 'twitter', url: 'https://x.com/Akram_010101'}
    ]
   },
    {
    name: "Rasmiya Ayoub",
    role: "Lead Software Engineer",
    image: "/project-images/dummy-user.jpg",
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/rasmiya-ayoub/' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#'}
    ]
  },
    {
    name: "User",
    role: "Lead Software Engineer",
    image: "/project-images/dummy-user.jpg",
    socials: [
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'instagram', url: '#'}
    ]
  },
  {
    name: "Kannan Ravi",
    role: "Full Stack Web Developer",
    image: "/team/kannan.png",
    socials: [
      {platform: 'linkedin', url: 'https://www.linkedin.com/in/kannan-r-32a121378/' },
      {platform: 'twitter', url: 'https://x.com/KannanRavi14140'},
      {platform: 'instagram', url: 'https://www.instagram.com/k_a_n_n_a_n___14?utm_source=qr&igsh=MWdycnZleGQ3djRyZA=='}
    ]
   },
];

// Blog Data
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
  {
  id: "6",
  title: "Building Scalable Full-Stack Applications in 2025",
  userName: "Arjun",
  userTech: "Full Stack",
  excerpt: "A practical guide to designing scalable, secure, and maintainable full-stack applications.",
  category: "Development",
  date: "Jan 05, 2025",
  readTime: "7 min read",
  image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=2000",
  content: `
    <p>Modern applications must scale seamlessly as user demand grows. Full-stack development today requires careful planning across frontend, backend, and infrastructure.</p>
    <h2>Choosing the Right Stack</h2>
    <p>Selecting technologies like React, Next.js, Node.js, and scalable databases ensures long-term growth and performance.</p>
    <h2>Backend & Infrastructure</h2>
    <p>Using APIs, caching, and cloud-native services helps applications handle high traffic efficiently.</p>
  `
},
{
  id: "7",
  title: "Modern Mobile App Development: From Idea to Launch",
  userName: "Priya",
  userTech: "Mobile App",
  excerpt: "Learn how to turn an app idea into a polished product using modern development tools.",
  category: "App Development",
  date: "Jan 12, 2025",
  readTime: "6 min read",
  image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=2000",
  content: `
    <p>Mobile app development has evolved rapidly with frameworks that allow faster development and better performance.</p>
    <h2>Cross-Platform Development</h2>
    <p>Technologies like React Native and Flutter allow developers to build apps for multiple platforms with a single codebase.</p>
    <h2>User Experience Matters</h2>
    <p>Designing intuitive interfaces and smooth interactions is key to retaining users.</p>
  `
},
{
  id: "8",
  title: "Creating High-Performance Websites with Modern Tools",
  userName: "Karthik",
  userTech: "Web",
  excerpt: "Best practices for building fast, responsive, and SEO-friendly websites.",
  category: "Website Development",
  date: "Jan 18, 2025",
  readTime: "5 min read",
  image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=2000",
  content: `
    <p>Website performance directly impacts user engagement and search rankings. Modern tools make optimization easier than ever.</p>
    <h2>Performance Optimization</h2>
    <p>Using techniques like code splitting, image optimization, and lazy loading significantly improves load times.</p>
    <h2>SEO & Accessibility</h2>
    <p>Semantic HTML, proper metadata, and accessible design ensure your website reaches a wider audience.</p>
  `
}

];

// Timeline Data
export const timelineData: TimelineData[] = [
  {
    title: "Discovery & Alignment",
    description: "Understand problem, goals, constraints, expectations, stakeholders, risks, and measurable success criteria.",
    image: "/time-line-images/commercial-finalization.jpg"
  },
  {
    title: "Requirements & Planning",
    description: "Document scope, assumptions, dependencies, priorities, phases, milestones, timelines, and responsibilities clearly.",
    image: "/time-line-images/delivery-support.png"
  },
  {
    title: "Commercial Finalization",
    description: "Finalize pricing, deliverables, timelines, responsibilities, payment terms, and acceptance conditions collaboratively.",
    image: "/time-line-images/desing-review.jpg"
  },
  {
    title: "Solution Design",
    description: "Define structure, workflows, data relationships, user flows, and overall solution experience.",
    image: "/time-line-images/discovery-alignment.jpg"
  },
  {
    title: "Design Review & Approval",
    description: "Review designs, refine details, resolve gaps, validate assumptions, and approve direction.",
    image: "/time-line-images/feedback.jpg"
  },
  {
    title: "Execution & Feedback",
    description: "Execute incrementally, share progress, perform reviews, apply feedback, and track quality.",
    image: "/time-line-images/requirements-planning.jpg"
  },
  {
    title: "Delivery & Support",
    description: "Finalize deliverables, complete validations, handover documentation, and provide ongoing support.",
    image: "/time-line-images/solution-design.jpg"
  }
];









