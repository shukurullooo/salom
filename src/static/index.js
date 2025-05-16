import apple from "../assets/311.jpg";
import xiomi from "../assets/322.jpg";
import iphone from "../assets/333.jpg";
import mac from "../assets/344.jpg";

export const HEROS = [
  {
    id: 1,
    title: "Mobile & Computing",
    image: apple, // Public papkaga joylashtiring
    items: [
      "Galaxy S25 Ultra",
      "Galaxy Z Fold6",
      "Galaxy Tab S10 FE+",
      "Galaxy Watch Ultra",
    ],

    name: "Galaxy S25 Ultra",
    description:
      "Get up to $350 instant trade-in and double the storage on us.",
  },

  {
    id: 2,
    title: "TV & Audio",
    image: xiomi, // Public papkaga joylashtiring
    items: ["Neo QLED 8K", "Neo QLED 4K", "Q-Series Soundbar"],

    name: "Neo QLED 8K",
    description:
      "Ultra-slim and packed with a punch. The Neo QLED 8K offers a stunning design and enhanced 8K picture quality, just in time for you.",
  },

  {
    id: 3,
    title: "Home Appliances",
    image: iphone, // Public papkaga joylashtiring
    items: [
      "Bespoke Refrigerators",
      "Bespoke Laundry",
      "Bespoke Vacuum",
      "Bespoke Dishwashers",
    ],

    name: "Bespoke Refrigerators",
    description:
      "Hot deals on cool appliances up to $1500 on Bespoke Refrigerators. Plus, get up to $500 off with trade-in and credits of 5 years of Samsung Care for as low as $5 with select purchases.",
  },

  {
    id: 4,
    title: "Monitors & Memory",
    image: mac, // Public papkaga joylashtiring
    items: ['49" Odyssey 3D', '27" Odyssey 3D', "PRO SSD"],

    name: "Odyssey G9",
    description: "Wrap yourself in a spectacular curved detail.",
  },
];

export const LINKS = ["Home", "About", "Contact", "Service", "Help", "Product"];

import img1 from "../assets/311.jpg";
import img2 from "../assets/322.jpg";
import img3 from "../assets/333.jpg";

export const slides = [
  {
    id: 1,
    image: img1,
    title: "Galaxy S25 Ultra",
    description:
      "Get up to $630 instant trade-in and double the storage on us.",
    subText: "Plus, get more with New Galaxy Club!",
  },
  {
    id: 2,
    image: img2,
    title: "Galaxy Buds Pro",
    description: "Experience the best sound quality in any environment.",
    subText: "Limited time offer available now!",
  },
  {
    id: 3,
    image: img3,
    title: "Galaxy Watch 6",
    description: "Track your health with advanced sensors.",
    subText: "Buy one, get 30% off on the second.",
  },
];

export const footer = {
  footer_categories: [
    {
      title: "SHOP",
      links: [
        "Phones",
        "Tablets",
        "Watches",
        "Mobile Accessories",
        "Mobile Audio",
        "TV & Home Theater",
        "Computing",
        "Monitors",
        "Memory & Storage",
        "Home Appliances",
        "Smart Home",
        "Samsung Experience Stores",
        "Apps & Services",
        "Shop Certified Re-Newed",
        "Samsung Authorized Reseller Program",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Chat with Us",
        "Order Help",
        "Product Help",
        "Your Account",
        "Register Your Product",
        "Request a Repair",
        "Contact Us",
        "Samsung Community",
        "Give Feedback",
        "Slide-in Electric Range Recall",
        "Manuals & Software",
        "Returns",
      ],
    },
    {
      title: "OFFERS",
      links: [
        "Offers",
        "Samsung Rewards",
        "Education Offers Program",
        "Government Offers Program",
        "Military Offers Program",
        "Employee Offers Program",
        "First Responders Offers Program",
        "Business Offers Program",
      ],
    },
    {
      title: "SUSTAINABILITY",
      links: [
        "Overview",
        "Environment",
        "Digital Responsibility",
        "Security and Privacy",
        "Accessibility",
        "Labor & Human Rights",
        "Belonging & Culture",
        "Sustainable Supply Chain",
        "Corporate Citizenship",
        "Corporate Sustainability",
      ],
    },
    {
      title: "ABOUT US",
      links: [
        "Leadership & Mission",
        "Out Buisness",
        "Brand identity",
        "Careers",
        "Investor Relations",
        "Newsroom",
        "Ethics",
        "Samsung Design",
      ],
    },
  ],
  copyright: "Copyright© 1995-2025 SAMSUNG. All Rights Reserved.",
  footer_links: [
    "Privacy",
    "Do Not Sell Or Share My Personal Information",
    "Washington Privacy Notice",
    "Legal",
    "Accessibility Help",
    "Sitemap",
  ],
};
