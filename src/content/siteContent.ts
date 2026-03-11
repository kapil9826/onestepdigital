const phone = "8982616362";
const email = "info@onestepdigitalsolutions.com";

function toWhatsAppLink(number: string) {
  const digits = number.replace(/\D/g, "");
  const withCountry = digits.length === 10 ? `91${digits}` : digits;
  const text = encodeURIComponent(
    "Hi One Step Digital Solutions! I'm interested in your IT services. Please share more details and pricing."
  );
  return `https://wa.me/${withCountry}?text=${text}`;
}

export const siteContent = {
  brand: {
    name: "One Step Digital Solutions",
    tagline: "From Leads to Growth",
    shortName: "OSDS"
  },
  hero: {
    kicker: "Next-Generation IT Services Company",
    headline: "Transforming Ideas into Scalable Digital Solutions",
    subheadline:
      "We power businesses with cutting-edge web development, AI automation, cloud infrastructure, and mobile apps — delivering premium digital experiences that drive real growth.",
    trustLine: "4+ Years of Excellence • 100+ Projects Delivered • 50+ Happy Clients",
    stats: [
      { k: "4+", v: "Years Experience" },
      { k: "100+", v: "Projects Delivered" },
      { k: "50+", v: "Happy Clients" }
    ],
    valueCards: [
      {
        icon: "globe",
        title: "Web Development",
        desc: "Modern, scalable web applications built with the latest technologies."
      },
      {
        icon: "smartphone",
        title: "Mobile Apps",
        desc: "Cross-platform mobile solutions for iOS and Android."
      },
      {
        icon: "brain",
        title: "AI & Automation",
        desc: "Intelligent solutions that automate workflows and drive efficiency."
      }
    ]
  },
  marquee: [
    "Web Development",
    "Digital Marketing",
    "Ads Management",
    "Video Editing",
    "Graphic Design",
    "AI & Automation",
    "Cloud & DevOps",
    "UI/UX Design",
    "E-commerce Solutions",
    "Digital Transformation"
  ],
  services: {
    title: "End-to-End IT Services for the Digital Age",
    desc: "From ideation to deployment, we deliver comprehensive digital solutions tailored to your business needs. Our expert team combines technical excellence with creative innovation to build products that stand out.",
    cards: [
      {
        icon: "globe",
        gradient: "from-blue-600 to-cyan-400",
        title: "Web Development",
        desc: "We craft high-performance, scalable web applications using modern frameworks. From simple landing pages to complex enterprise platforms, we ensure every project is fast, secure, and future-ready.",
        bullets: [
          "React, Next.js, Vue.js, Angular",
          "Node.js, Python, PHP backends",
          "RESTful APIs & GraphQL",
          "Progressive Web Apps (PWA)",
          "Performance optimization & SEO"
        ]
      },
      {
        icon: "smartphone",
        gradient: "from-purple-600 to-pink-500",
        title: "Mobile App Development",
        desc: "Build powerful cross-platform mobile experiences with native performance. We deliver iOS and Android apps that users love, with seamless UX and robust architecture.",
        bullets: [
          "React Native & Flutter development",
          "iOS (Swift) & Android (Kotlin)",
          "App Store & Play Store deployment",
          "Push notifications & offline mode",
          "App maintenance & updates"
        ]
      },
      {
        icon: "brain",
        gradient: "from-orange-500 to-yellow-400",
        title: "AI & Automation Solutions",
        desc: "Harness the power of artificial intelligence to automate repetitive tasks, gain insights from data, and create smarter user experiences that scale with your business.",
        bullets: [
          "Machine learning model development",
          "Natural language processing (NLP)",
          "Business process automation",
          "Predictive analytics & dashboards",
          "ChatGPT & AI integration"
        ]
      },
      {
        icon: "cloud",
        gradient: "from-teal-500 to-green-400",
        title: "Cloud & DevOps",
        desc: "Accelerate your development cycle with cloud-native infrastructure. We set up CI/CD pipelines, manage deployments, and ensure your applications run reliably at scale.",
        bullets: [
          "AWS, Azure & Google Cloud",
          "Docker & Kubernetes orchestration",
          "CI/CD pipeline setup",
          "Infrastructure as Code (IaC)",
          "24/7 monitoring & support"
        ]
      },
      {
        icon: "palette",
        gradient: "from-rose-500 to-pink-600",
        title: "UI/UX Design",
        desc: "Create stunning, intuitive interfaces that convert visitors into customers. Our design team blends aesthetics with psychology to craft experiences that users love.",
        bullets: [
          "User research & persona mapping",
          "Wireframing & prototyping",
          "Figma design systems",
          "Usability testing & iteration",
          "Brand identity & style guides"
        ]
      },
      {
        icon: "film",
        gradient: "from-indigo-500 to-blue-600",
        title: "Digital Marketing & Content",
        desc: "Drive targeted traffic and build your brand with our comprehensive digital marketing services. From ad management to high-quality video editing, we help you get noticed.",
        bullets: [
          "Ads Management (Google, Meta)",
          "Social Media Growth Strategy",
          "Professional Video Editing & Reels",
          "Graphic Design & Branding",
          "SEO & Search Optimization"
        ]
      },
      {
        icon: "shoppingCart",
        gradient: "from-cyan-600 to-blue-600",
        title: "E-commerce Solutions",
        desc: "Launch and scale your online store with powerful e-commerce platforms. We build custom shopping experiences with seamless payment integration and inventory management.",
        bullets: [
          "Shopify, WooCommerce, Magento",
          "Custom e-commerce platforms",
          "Payment gateway integration",
          "Inventory & order management",
          "Conversion rate optimization"
        ]
      }
    ]
  },
  metrics: [
    { value: "4+", label: "Years Experience", icon: "award" },
    { value: "100+", label: "Projects Delivered", icon: "briefcase" },
    { value: "50+", label: "Happy Clients", icon: "smile" },
    { value: "24/7", label: "Support Available", icon: "headphones" }
  ],
  projects: {
    title: "Our Portfolio of Success",
    desc: "Real projects. Real results. Explore how we've helped businesses across industries transform their digital presence and achieve measurable growth.",
    items: [
      {
        tag: "E-commerce",
        title: "Fashion Retail Platform",
        subtitle: "Full-stack e-commerce with AI recommendations",
        desc: "Built a complete e-commerce ecosystem with personalized AI-driven product recommendations, resulting in 45% higher conversion rates.",
        tech: ["React", "Node.js", "ML"],
        outcome: "+45% Conversions",
        gradient: "from-purple-600 to-pink-600"
      },
      {
        tag: "FinTech",
        title: "Investment Analytics Dashboard",
        subtitle: "Real-time financial data visualization",
        desc: "Developed a sophisticated analytics dashboard processing millions of data points in real-time for a leading investment firm.",
        tech: ["Vue.js", "Python", "AWS"],
        outcome: "1M+ Data Points/sec",
        gradient: "from-blue-600 to-cyan-500"
      },
      {
        tag: "Healthcare",
        title: "Telemedicine Mobile App",
        subtitle: "HIPAA-compliant patient management",
        desc: "Created a secure telemedicine platform connecting 10,000+ patients with healthcare providers through video consultations.",
        tech: ["Flutter", "Firebase", "WebRTC"],
        outcome: "10K+ Patients Served",
        gradient: "from-teal-500 to-green-500"
      },
      {
        tag: "SaaS",
        title: "HR Management System",
        subtitle: "AI-powered workforce automation",
        desc: "Automated HR workflows for a 500-employee company, reducing manual processes by 70% with intelligent automation.",
        tech: ["Next.js", "AI/ML", "PostgreSQL"],
        outcome: "70% Time Saved",
        gradient: "from-orange-500 to-red-500"
      },
      {
        tag: "EdTech",
        title: "Online Learning Platform",
        subtitle: "Interactive e-learning with gamification",
        desc: "Built an engaging e-learning platform with video streaming, quizzes, and gamification serving 25,000+ students.",
        tech: ["React", "Node.js", "MongoDB"],
        outcome: "25K+ Students",
        gradient: "from-indigo-600 to-purple-600"
      },
      {
        tag: "Logistics",
        title: "Fleet Management System",
        subtitle: "Real-time GPS tracking & route optimization",
        desc: "Developed an intelligent fleet management solution with ML-based route optimization, reducing fuel costs by 30%.",
        tech: ["React Native", "Maps API", "ML"],
        outcome: "-30% Fuel Costs",
        gradient: "from-cyan-600 to-blue-600"
      }
    ]
  },
  process: {
    title: "Our Proven Development Process",
    desc: "We follow a structured, agile methodology that ensures transparency, quality, and on-time delivery at every stage of your project.",
    steps: [
      {
        icon: "search",
        title: "Requirement Analysis",
        desc: "We deep-dive into your business goals, target audience, and technical requirements to build a comprehensive project roadmap.",
        bullets: [
          "Stakeholder interviews & workshops",
          "Competitive analysis & market research",
          "Technical feasibility assessment",
          "Project scope & timeline definition"
        ]
      },
      {
        icon: "pen",
        title: "UI/UX Design",
        desc: "Our designers create intuitive, beautiful interfaces backed by user research and industry best practices.",
        bullets: [
          "User flow & wireframe creation",
          "Interactive prototype development",
          "Design system & component library",
          "Client review & approval cycles"
        ]
      },
      {
        icon: "code",
        title: "Development",
        desc: "Our engineers build your solution using clean, scalable code with modern frameworks and best practices.",
        bullets: [
          "Agile sprints with regular demos",
          "Code reviews & quality gates",
          "API development & integration",
          "Performance optimization"
        ]
      },
      {
        icon: "checkCircle",
        title: "Testing & QA",
        desc: "Rigorous testing across devices, browsers, and use cases ensures your product launches without issues.",
        bullets: [
          "Automated & manual testing",
          "Security vulnerability scanning",
          "Performance & load testing",
          "Cross-browser compatibility"
        ]
      },
      {
        icon: "rocket",
        title: "Deployment",
        desc: "Smooth, zero-downtime deployment with monitoring systems in place to ensure everything runs perfectly.",
        bullets: [
          "CI/CD pipeline deployment",
          "Database migration & backups",
          "Performance monitoring setup",
          "Post-launch support & optimization"
        ]
      }
    ]
  },
  testimonials: {
    title: "What Our Clients Say",
    desc: "Don't just take our word for it. Hear from the businesses we've helped transform through digital innovation.",
    items: [
      {
        name: "Rajesh Kumar",
        role: "CEO, TechVentures India",
        quote: "One Step Digital Solutions transformed our entire digital infrastructure. Their team's technical expertise and professionalism is unmatched. We saw a 60% increase in online revenue within 3 months of launch.",
        rating: 5,
        avatar: "RK"
      },
      {
        name: "Sarah Mitchell",
        role: "Founder, GreenCart E-commerce",
        quote: "The e-commerce platform they built for us is absolutely phenomenal. It handles thousands of daily transactions flawlessly. The AI recommendations alone boosted our average order value by 35%.",
        rating: 5,
        avatar: "SM"
      },
      {
        name: "Priya Sharma",
        role: "CTO, HealthBridge Solutions",
        quote: "Working with OSDS was a game-changer. They built our telemedicine app in record time without compromising on quality or security. Their cloud architecture is rock-solid and scales effortlessly.",
        rating: 5,
        avatar: "PS"
      },
      {
        name: "Michael Chen",
        role: "Director, DataFlow Analytics",
        quote: "The data analytics dashboard they built processes over a million data points per second. Incredible engineering. Their team understood our complex requirements and delivered beyond expectations.",
        rating: 5,
        avatar: "MC"
      },
      {
        name: "Anita Patel",
        role: "Operations Manager, LogiTech",
        quote: "Our fleet management system is a marvel. Real-time tracking, AI route optimization, and 30% reduction in fuel costs. The ROI was visible within the first month of deployment.",
        rating: 5,
        avatar: "AP"
      },
      {
        name: "David Wright",
        role: "Product Lead, EduPlatform",
        quote: "The learning platform they built serves 25,000+ students with zero downtime. The gamification features increased user engagement by 80%. Absolutely brilliant work from a talented team.",
        rating: 5,
        avatar: "DW"
      }
    ]
  },
  contact: {
    phone,
    email,
    callLink: `tel:${phone}`,
    whatsAppLink: toWhatsAppLink(phone),
    title: "Let's Build Your Next Big Digital Product",
    desc: "Ready to transform your business with cutting-edge technology? Our team is here to guide you from concept to launch. Get your free consultation today.",
    bullets: [
      "Free initial consultation",
      "Detailed project proposal within 24 hours",
      "Transparent pricing with no hidden costs",
      "Dedicated project manager assigned",
      "Agile development with regular updates"
    ],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      github: "https://github.com"
    }
  }
} as const;
