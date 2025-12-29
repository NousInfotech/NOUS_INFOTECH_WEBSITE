import { BarChart, Code, Globe, Megaphone, Palette, Smartphone, Zap } from "lucide-react";

// Projects Data
export const projects = [
  {
    title: "TaskFlow Pro",
    category: "Full-Stack | SaaS Platform",
    image: "https://images.pexels.com/photos/3184346/pexels-photo-3184346.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/projects/taskflow-pro",
  },
  {
    title: "ShopVerse Commerce",
    category: "Full-Stack | E-commerce",
    image: "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/projects/shopverse",
  },
  {
    title: "FinTrack Cloud",
    category: "Fintech | Analytics Dashboard",
    image: "https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/projects/fintrack-cloud",
  },
  {
    title: "EstateHub Suite",
    category: "Real Estate | Web Platform",
    image: "https://images.pexels.com/photos/8292837/pexels-photo-8292837.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/projects/estatehub",
  },
  {
    title: "ClinicSync",
    category: "Healthcare | Appointment System",
    image: "https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/projects/clinicsync",
  },
  {
    title: "EduSphere LMS",
    category: "Learning Management System",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/projects/edusphere",
  },
  {
    title: "ChefMate Delivery",
    category: "Food Delivery | MERN App",
    image: "https://images.pexels.com/photos/4393669/pexels-photo-4393669.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/projects/chefmate",
  },
  {
    title: "WorkBloc HR",
    category: "HRMS / Payroll System",
    image: "https://images.pexels.com/photos/5439474/pexels-photo-5439474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/projects/workbloc",
  },
];
// Home Projects Data
export const homeProjects = [
  { title: "Lumina XR", category: "Spatial Design", year: "2024" },
  { title: "Nebula OS", category: "Core Development", year: "2023" },
  { title: "Aetherial", category: "Identity", year: "2023" },
  { title: "Onyx Forge", category: "E-Commerce", year: "2024" },
  { title: "Prism Lab", category: "Analytics", year: "2023" },
  { title: "Vortex Pro", category: "Platform", year: "2024" },
];
// Expertise Data
export const expertiseData = [
  {
    title: "Web & App Development",
    description: "Building high-performance, scalable digital products using cutting-edge technologies.",
    icon: Code,
    color: "from-blue-500/20 to-primary/20",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces that enhance user engagement.",
    icon: Palette,
    color: "from-purple-500/20 to-primary/20",
  },
  {
    title: "Brand Identity",
    description: "Crafting unique brand stories and visual identities that resonate with your audience.",
    icon: Globe,
    color: "from-emerald-500/20 to-primary/20",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing campaigns designed to grow your digital presence and ROI.",
    icon: Megaphone,
    color: "from-orange-500/20 to-primary/20",
  },
  
];
// Services Data
export const services = [
  { title: "Web Development", desc: "Performance-first web applications built with the latest technologies.", icon: Globe },
  { title: "UI/UX Design", desc: "Intuitive and beautiful user interfaces that maximize engagement.", icon: Palette },
  { title: "Brand Strategy", desc: "Defining your digital identity and positioning for market success.", icon: Zap },
  { title: "Mobile Apps", desc: "High-quality native and cross-platform mobile experiences.", icon: Smartphone },
  { title: "SEO Optimization", desc: "Technical SEO to ensure your brand reaches the right audience.", icon: BarChart },
  { title: "FullStack Systems", desc: "Complex backend architectures integrated with seamless frontends.", icon: Code },
];
// Packages Data
export const packages = [
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

