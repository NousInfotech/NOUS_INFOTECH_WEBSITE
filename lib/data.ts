import { BarChart, Code, Globe, Megaphone, Palette, Smartphone, Zap } from "lucide-react";

// Projects Data
export const projects = [
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

