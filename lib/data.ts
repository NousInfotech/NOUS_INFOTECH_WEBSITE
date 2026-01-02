import { Project, Expertise, Package, TeamMember, TimelineData, Testimonial } from "@/types/dataTypes";
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
    role: "Co-Founder & CTO",
    image: "/team/aliakram-new.png",
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/ali-akram-2729ba282/' },
      { platform: 'instagram', url: 'https://www.instagram.com/akram_ackerman_?igsh=MXJkOHU5aXY2MW91eA==' },
      { platform: 'twitter', url: 'https://x.com/Akram_010101'}
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
    name: "Siddique",
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
    role: "Full Stack Developer",
    image: "/team/kannan.png",
    socials: [
      {platform: 'linkedin', url: 'https://www.linkedin.com/in/kannan-r-32a121378/' },
      {platform: 'twitter', url: 'https://x.com/KannanRavi14140'},
      {platform: 'instagram', url: 'https://www.instagram.com/k_a_n_n_a_n___14?utm_source=qr&igsh=MWdycnZleGQ3djRyZA=='}
    ]
   },
];

// Testimonials Data
export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "NOUS INFOTECH transformed our outdated platform into a cutting-edge digital experience. Their attention to detail and technical expertise are unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "GreenLife Co.",
    content: "The custom dashboard they built for us has revolutionized our workflow. It's intuitive, fast, and exactly what we needed to scale our operations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Founder",
    company: "Startuply",
    content: "Working with the team at NOUS was a breeze. They understood our vision from day one and delivered a high-performance web app that our users love.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "VibeDesign",
    content: "Exceptional quality and communication. The premium animations and smooth transitions they implemented gave our site the edge it needed.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5
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









