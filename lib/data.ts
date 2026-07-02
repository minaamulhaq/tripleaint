export interface InventoryItem {
  id: string;
  title: string;
  category: "cars-lhd" | "suvs" | "trucks" | "machinery" | "parts";
  categoryLabel: string;
  year: number;
  specs: string;
  price: string;
  badge: string;
  images: string[];
  badgeType: "accent" | "teal" | "dark";
  dateAdded: string;
  stats: { label: string; val: string }[];
}

export const initialItems: InventoryItem[] = [
  {
    id: "1",
    title: "Lexus LX 600 VIP (LHD)",
    category: "suvs",
    categoryLabel: "LHD SUV",
    year: 2023,
    specs: "3.5L Twin-Turbo V6 / Automatic",
    price: "Ask for Price",
    badge: "Premium Stock",
    dateAdded: "2024-06-15",
    images: ["/car/c1.jpg", "/car/c2.jpg", "/car/c3.jpg"],
    badgeType: "dark",
    stats: [
      { label: "Engine", val: "3445cc" },
      { label: "Mileage", val: "1,200 km" },
      { label: "Steering", val: "LHD" },
    ],
  },
  {
    id: "2",
    title: "Caterpillar 320 Next Gen Excavator",
    category: "machinery",
    categoryLabel: "Heavy Machinery",
    year: 2021,
    specs: "Crawler / 1.19m³ Bucket",
    price: "$95,000 FOB",
    badge: "Taiwan Yard",
    dateAdded: "2024-06-20",
    images: ["/car/c2.jpg", "/car/c4.jpg"],
    badgeType: "accent",
    stats: [
      { label: "Weight", val: "22.5 Tons" },
      { label: "Hours", val: "2,400 hrs" },
      { label: "Condition", val: "Certified" },
    ],
  },
  {
    id: "3",
    title: "Mercedes-Benz Actros 2645",
    category: "trucks",
    categoryLabel: "Commercial Truck",
    year: 2019,
    specs: "6x4 Tractor Head / LHD",
    price: "$52,000 FOB",
    badge: "Direct Sourced",
    dateAdded: "2024-06-25",
    images: ["/car/c3.jpg", "/car/c1.jpg"],
    badgeType: "dark",
    stats: [
      { label: "Power", val: "450 HP" },
      { label: "Axle", val: "6x4" },
      { label: "Engine", val: "OM471" },
    ],
  },
  {
    id: "4",
    title: "Toyota Land Cruiser 300 ZX (LHD)",
    category: "suvs",
    categoryLabel: "LHD SUV",
    year: 2022,
    specs: "3.3L Diesel Twin-Turbo / 4WD",
    price: "$89,500 FOB",
    badge: "Taiwan Stock",
    dateAdded: "2024-06-28",
    images: ["/car/c4.jpg", "/car/c2.jpg", "/car/c1.jpg"],
    badgeType: "teal",
    stats: [
      { label: "Engine", val: "3346cc" },
      { label: "Mileage", val: "15,000 km" },
      { label: "Steering", val: "LHD" },
    ],
  },
  {
    id: "5",
    title: "Komatsu WA380-8 Wheel Loader",
    category: "machinery",
    categoryLabel: "Heavy Machinery",
    year: 2020,
    specs: "Articulated / 3.3m³ Bucket",
    price: "Ask for Price",
    badge: "Taiwan Yard",
    dateAdded: "2024-07-01",
    images: ["/car/c1.jpg", "/car/c3.jpg"],
    badgeType: "dark",
    stats: [
      { label: "Power", val: "191 HP" },
      { label: "Hours", val: "3,800 hrs" },
      { label: "Weight", val: "19.5 Tons" },
    ],
  },
  {
    id: "6",
    title: "Complete Cummins ISX15 Diesel Engine",
    category: "parts",
    categoryLabel: "Auto Parts",
    year: 2022,
    specs: "15.0L Heavy Duty Engine",
    price: "Ask for Price",
    badge: "In Stock",
    dateAdded: "2024-07-02",
    images: ["/car/c2.jpg"],
    badgeType: "accent",
    stats: [
      { label: "Type", val: "Diesel" },
      { label: "Volume", val: "15.0 Liters" },
      { label: "Condition", val: "Fully Rebuilt" },
    ],
  },
  {
    id: "7",
    title: "Toyota Hilux Revo Double Cab (LHD)",
    category: "trucks",
    categoryLabel: "Commercial Truck",
    year: 2020,
    specs: "2.4L Diesel / 4WD / LHD Conversion",
    price: "$28,500 FOB",
    badge: "Just Added",
    dateAdded: "2024-07-03",
    images: ["/car/c3.jpg", "/car/c1.jpg"],
    badgeType: "accent",
    stats: [
      { label: "Engine", val: "2400cc" },
      { label: "Mileage", val: "31,000 km" },
      { label: "Transmission", val: "Manual" },
    ],
  },
  {
    id: "8",
    title: "Hitachi Zaxis 200LC Excavator",
    category: "machinery",
    categoryLabel: "Heavy Machinery",
    year: 2017,
    specs: "Crawler / Heavy Duty Long Reach",
    price: "$54,500 FOB",
    badge: "Taiwan Yard",
    dateAdded: "2024-06-10",
    images: ["/car/c4.jpg", "/car/c2.jpg", "/car/c1.jpg"],
    badgeType: "dark",
    stats: [
      { label: "Power", val: "164 HP" },
      { label: "Hours", val: "5,100 hrs" },
      { label: "Weight", val: "21.5 Tons" },
    ],
  },
];
