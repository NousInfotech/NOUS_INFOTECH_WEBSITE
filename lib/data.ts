import {
  Project,
  Expertise,
  Package,
  TeamMember,
  TimelineData,
  TestimonialData,
  AboutPillar,
  AboutFaqItem,
} from "@/types/dataTypes";
import {
  Code,
  LayoutDashboard,
  Link2,
  Bot,
  Layers,
  Workflow,
  Handshake,
  Palette,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Projects", href: "/projects" },
  // { name: "Pricing", href: "/pricing" }, // Temporarily disabled
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Partners", href: "/partners" },
  // { name: "AI Agent", href: "/ai-agent"}
];

// Projects Data
export const projects: Project[] = [
{
  title: "VACEI",
  category: "Platform | Web Development",
  image: "/project-images/vacei.png",
  link: "https://vacei.com/",
  year: 2025,
},
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
{
  title: "Last Bite India",
  category: "App | Development",
  image: "/project-images/last-bite-2.jpeg",
  link: "https://play.google.com/store/apps/details?id=com.nous.lastbite",
  year: 2024,
}

];

// Expertise Data — solution-oriented for technology partnership positioning
export const expertiseData: Expertise[] = [
  {
    title: "Digital Transformation & Operations",
    description:
      "We help businesses move from scattered tools and manual work to a clear, modern digital foundation built for growth.",
    icon: Layers,
    color: "from-blue-500/20 to-primary/20",
    points: [
      "Assess workflows, tools, and operational bottlenecks",
      "Roadmap digitalization with realistic phases",
      "Align tech decisions with business goals",
      "Build infrastructure that scales with you",
    ],
  },
  {
    title: "Workflow & Process Automation",
    description:
      "Turn repetitive manual tasks into reliable automated flows—so your team spends time on decisions, not data entry.",
    icon: Workflow,
    color: "from-purple-500/20 to-pink-500/20",
    points: [
      "Automate approvals, reporting, and handoffs",
      "Reduce errors from copy-paste and spreadsheets",
      "Connect teams with smoother internal processes",
      "From manual workflows to automated businesses",
    ],
  },
  {
    title: "Custom Business Software & Dashboards",
    description:
      "Purpose-built tools, portals, and dashboards that match how your company actually works—not generic off-the-shelf limits.",
    icon: LayoutDashboard,
    color: "from-amber-500/20 to-orange-500/20",
    points: [
      "Internal tools tailored to your operations",
      "Real-time visibility into sales, ops, or inventory",
      "Role-based access and secure data handling",
      "Replace fragmented spreadsheets with one system",
    ],
  },
  {
    title: "Systems Integration & Unified Operations",
    description:
      "When CRMs, spreadsheets, apps, and teams don't talk to each other—we connect them into one coherent digital ecosystem.",
    icon: Link2,
    color: "from-green-500/20 to-emerald-500/20",
    points: [
      "Unify scattered systems into connected workflows",
      "API integrations across your existing tools",
      "Single source of truth for critical business data",
      "Less operational clutter, more clarity",
    ],
  },
  {
    title: "AI & Intelligent Automation",
    description:
      "Practical AI and smart automation that saves hours—not hype. Chatbots, smart routing, and assistive tools your team will actually use.",
    icon: Bot,
    color: "from-teal-500/20 to-cyan-500/20",
    points: [
      "AI assistants for support and internal queries",
      "Automated data capture and categorization",
      "Smarter notifications and decision support",
      "Integrate AI where it delivers real ROI",
    ],
  },
  {
    title: "Web, Apps & Digital Products",
    description:
      "High-performance websites, web apps, and mobile products—built to represent your brand and support real business outcomes.",
    icon: Code,
    color: "from-indigo-500/20 to-primary/20",
    points: [
      "Websites, web apps, and mobile experiences",
      "E-commerce and customer-facing platforms",
      "Fast, secure, and built for conversions",
      "Modern stack with long-term maintainability",
    ],
  },
  {
    title: "UI/UX, Branding & Experience Design",
    description:
      "Design that feels premium and works effortlessly—for customers, staff, and partners using your digital touchpoints.",
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/20",
    points: [
      "Brand identity and visual systems",
      "Intuitive interfaces for web and mobile",
      "User journeys that reduce friction",
      "Consistent experience across every channel",
    ],
  },
  {
    title: "Long-Term Technology Partnership",
    description:
      "We don't disappear after launch. Think of us as your external tech team—evolving systems as your business grows.",
    icon: Handshake,
    color: "from-slate-500/20 to-slate-700/20",
    points: [
      "Ongoing support, updates, and iteration",
      "Strategic guidance as needs change",
      "Dedicated collaboration—not one-off handoffs",
      "Scale operations with a partner you trust",
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
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Tailored solutions for your specific business needs.",
    features: [
      "Dedicated Project Manager",
      "Full Source Code Access",
      "Custom UI/UX Research",
      "Scalable Infrastructure Ops",
      "SLA-backed Support",
      "White-label Option",
    ],
    buttonText: "Contact Us",
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
      { platform: 'twitter', url: 'https://x.com/Akram_010101'},
      { platform: 'instagram', url: 'https://www.instagram.com/akram_ackerman_?igsh=MXJkOHU5aXY2MW91eA==' },
    ]
   },
    {
    name: "Rasmiya Ayoub",
    role: "Co-Founder & Team Lead",
    image: "/team/rasmi_founder.jpeg",
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/rasmiya-ayoub/' },
    ]
  },
    {
    name: "Siddique",
    role: "Backend Developer",
    image: "/team/sidd.png",
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/siddiqueofl/' },
      { platform: 'twitter', url: 'https://x.com/siddiqueofl' },
      { platform: 'instagram', url: 'https://www.instagram.com/siddique.ofl?igsh=Njh2a2pndGRpb2Rk'}
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
  //     {
  //   name: "Sivajnanam S",
  //   role: "Full Stack Developer",
  //   image: "/team/siva.jpeg",
  //   socials: [
  //     {platform: 'linkedin', url: 'https://www.linkedin.com/in/siva-s-6821ba321'},
  //     // {platform: 'twitter', url: 'https://x.com/KannanRavi14140'},
  //     // {platform: 'instagram', url: 'https://www.instagram.com/k_a_n_n_a_n___14?utm_source=qr&igsh=MWdycnZleGQ3djRyZA=='}
  //   ]
  //  },
];

// Testimonials Data
export const testimonialsData: TestimonialData[] = [
  {
    id: "1",
    name: "Lakshmi Nandhakumar",
    role: "CEO",
    company: "Prepco Healthcare",
    content: "I want to take a moment to thank you and your entire team for your hard work and dedication in completing the Prepco Healthcare website (prepcohealthcare.com). Your patience and understanding throughout this process have been invaluable. I really appreciate your team's ability to adapt to the changes and challenges we've faced over the past few months.",
    rating: 5.0,
    linkedIn: "https://www.linkedin.com/in/lakshmi-nandhakumar-28209b392/",
    link: "https://prepcohealthcare.com/"
  },
  {
    id: "2",
    name: "Kishore Jeyachandran",
    role: "CEO",
    company: "R.K.BROTHERS AGRO FOODS PVT LTD",
    content: "If you want to turn your dream website into reality, I highly recommend Nous Infotech. Their skilled, passionate team delivers exceptional web development and outstanding service.",
    rating: 5.0,
    linkedIn: "https://www.linkedin.com/in/kishore-jeyachandran-jk-blog/",
    link: "https://www.kindrice.co/"
  },
  {
    id: "3",
    name: "Nithin Alexander",
    role: "Founder & CEO",
    company: " ENTREPRENEURS OF MADRAS",
    content: "Nous Infotech crafted our community website with exceptional care and understanding, ensuring it truly represented our vision. Their transparent process, from strategy calls to delivery, was impressive. I highly recommend their services to anyone seeking a professional and dedicated team!",
    rating: 5.0,
    linkedIn: "https://www.linkedin.com/in/nithin-alexander/",
    link: "https://www.entrepreneursofmadras.com/"
  },
  {
    id: "4",
    name: "Ilyas Imen",
    role: "Founder & CEO",
    company: "Last Bite India",
    content: "From concept to launch, the team delivered our **food delivery website and mobile apps (Android & iOS)** flawlessly. The platform is fast, intuitive, and scalable, with a smooth ordering and delivery flow. Their execution, communication, and attention to detail exceeded our expectations.",
    rating: 5.0,
    link: "https://lastbiteindia.com/"
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
    description: "Finalize scope, deliverables, timelines, responsibilities, payment terms, and acceptance conditions collaboratively.",
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

// About page — hero, story, team, highlights
export const aboutPageContent = {
  banner: {
    eyebrow: "About Nous Infotech",
    headline: "Your technology partner for",
    headlineAccent: "real business transformation.",
    description:
      "We are a focused team of engineers, designers, and strategists who help companies escape manual chaos—digitalizing operations, automating workflows, and building software that becomes the backbone of how you grow.",
    leaderSectionEyebrow: "Together we can achieve more",
    leaderName: "Suhail",
    leaderRole: "Founder & CEO",
    leaderImage: "/team/nous-ceo1.png",
    leaderQuote:
      "If you can dream about it, if you can picture it in your mind",
    leaderQuoteAccent: "THEN YOU CAN ACHIEVE IT",
    leaderTaglinePrefix: "Driving Innovation",
    leaderTaglineAccent: "with Purpose.",
  },
  highlights: [
    { title: "Automate", description: "Workflows & manual operations" },
    { title: "Integrate", description: "Scattered tools & systems" },
    { title: "Partner", description: "Long-term technology support" },
    { title: "Build", description: "Custom apps & digital products" },
  ],
  story: {
    title: "The story",
    titleAccent: "behind Nous.",
    paragraphs: [
      "Nous Infotech started with a simple observation: too many capable businesses were held back not by ambition, but by scattered tools, manual processes, and technology that never quite fit how they actually worked.",
      "We set out to be different—not another vendor shipping templates, but a long-term partner that listens first, designs with intent, and builds systems teams trust. From workflow automation and custom dashboards to full firm digitalization, we help companies operate with clarity and scale with confidence.",
      "Today we work with startups and established businesses alike—as their external tech team—delivering premium digital products and the operational infrastructure that makes growth sustainable.",
    ],
  },
  team: {
    eyebrow: "Our team",
    title: "The minds powering",
    titleAccent: "your digital evolution.",
    subtitle:
      "Founders, engineers, and builders who combine technical depth with business sense—committed to partnerships that last well beyond launch day.",
  },
};

// About page — mission, vision, values
export const aboutMissionVisionValues: AboutPillar[] = [
  {
    title: "Mission",
    description:
      "Help businesses digitalize and automate with clarity—unifying scattered operations into smart systems that teams actually enjoy using.",
  },
  {
    title: "Vision",
    description:
      "To be the technology partner modern companies rely on: the external tech team that simplifies operations, builds lasting infrastructure, and grows with you.",
  },
  {
    title: "Values",
    description:
      "Partnership over transactions. Honest scope and timelines. Solutions that make business owners feel confident—not overwhelmed by jargon.",
  },
];

// About page — expertise snapshot (philosophical angle; full grid lives on /expertise)
export const aboutExpertiseSnapshot = {
  headline: "Built for companies ready to move beyond",
  headlineAccent: "manual chaos.",
  body: "We partner with businesses that have outgrown spreadsheets, disconnected tools, and patchwork processes. From workflow automation to custom software and unified systems—we help you scale with technology that works for your team.",
  focusAreas: [
    "Digital transformation",
    "Workflow automation",
    "Custom business software",
    "Systems integration",
    "AI & smart automation",
    "Long-term tech partnership",
  ],
};

// About page — working together FAQ
export const aboutFaqItems: AboutFaqItem[] = [
  {
    question: "Are you a vendor or a long-term technology partner?",
    answer:
      "Both, depending on what you need—but our sweet spot is long-term partnership. We digitalize operations, automate workflows, and stay involved as your business evolves, not just at launch.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Book a consultation or demo call. We learn how your business runs today, where friction lives, and what success looks like. Then we propose a clear roadmap—phases, timelines, and deliverables—before any build begins.",
  },
  {
    question: "Can we see examples of your digitalization work?",
    answer:
      "Our public portfolio shows a selection of projects. Many firm digitalization builds are under NDA—we walk through those privately on a demo call so you can see relevant work without compromising client confidentiality.",
  },
  {
    question: "What does communication look like during delivery?",
    answer:
      "You get regular checkpoints, async updates, and one clear decision thread. Larger engagements include design reviews and incremental demos so your team stays aligned without surprise at the finish line.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "We provide documentation, handover, and optional ongoing support or retainer arrangements—updates, monitoring, and iteration as your operations grow and change.",
  },
];









