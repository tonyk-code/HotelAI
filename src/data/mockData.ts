export interface Room {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  features: string[];
  description: string;
  type: string;
  view: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export interface Users {
  id: number;
  email: string;
  password: string;
  role: string;
  name: string;
}

export const users = [
  {
    id: 1,
    email: "guest@test.com",
    password: "1234",
    role: "guest",
    name: "Guest User",
  },
  {
    id: 2,
    email: "admin@test.com",
    password: "1234",
    role: "manager",
    name: "Admin User",
  },
];

export const rooms: Room[] = [
  {
    id: "1",
    name: "Ocean View Suite",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1708920326697-b219695c89ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwb2NlYW4lMjB2aWV3fGVufDF8fHx8MTc3NDAxNzczOXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    features: ["King Bed", "Ocean View", "Private Balcony", "Luxury Bathroom"],
    description:
      "Experience breathtaking ocean views from your private suite. This luxurious room features a king-sized bed, modern amenities, and a spacious balcony perfect for morning coffee or evening relaxation.",
    type: "suite",
    view: "ocean",
  },
  {
    id: "2",
    name: "Garden Deluxe Room",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzc0MTExMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    features: ["Queen Bed", "Garden View", "Work Desk", "Rain Shower"],
    description:
      "A peaceful retreat with serene garden views. This room combines modern elegance with comfort, featuring a plush queen bed and contemporary design elements.",
    type: "deluxe",
    view: "garden",
  },
  {
    id: "3",
    name: "Premium Studio",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1558277872-bb3f50054da2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQxMTEyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    features: ["King Bed", "Living Area", "Kitchenette", "City View"],
    description:
      "Spacious studio with separate living area and kitchenette. Perfect for extended stays, this room offers all the comforts of home with hotel luxury.",
    type: "studio",
    view: "city",
  },
  {
    id: "4",
    name: "Tropical Paradise Suite",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1724218666795-6c3a59335474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhbGNvbnklMjB0cm9waWNhbCUyMHZpZXd8ZW58MXx8fHwxNzc0MTExMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    features: ["King Bed", "Ocean View", "Large Balcony", "Jacuzzi"],
    description:
      "Ultimate luxury with panoramic tropical views. This premium suite features a private jacuzzi, expansive balcony, and exclusive amenities for the perfect getaway.",
    type: "suite",
    view: "ocean",
  },
];

export const events: Event[] = [
  {
    id: "1",
    name: "Rooftop Sunset Dinner",
    date: "March 25, 2026",
    time: "7:00 PM - 10:00 PM",
    image:
      "https://images.unsplash.com/photo-1559924687-433731b5f852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb2Z0b3AlMjBkaW5uZXIlMjBldmVudHxlbnwxfHx8fDE3NzQxMTEyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Join us for an unforgettable evening of fine dining under the stars. Experience a curated menu featuring local and international cuisine paired with premium wines.",
  },
  {
    id: "2",
    name: "Wellness & Spa Day",
    date: "March 23, 2026",
    time: "10:00 AM - 6:00 PM",
    image:
      "https://images.unsplash.com/photo-1604161926875-bb58f9a0d81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3NDAyODkzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Rejuvenate your mind and body with our comprehensive wellness program. Includes yoga sessions, spa treatments, and healthy cuisine.",
  },
  {
    id: "3",
    name: "Business Networking Breakfast",
    date: "March 27, 2026",
    time: "8:00 AM - 10:00 AM",
    image:
      "https://images.unsplash.com/photo-1606788635685-979424357e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NzQxMTEyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Connect with fellow business travelers and local entrepreneurs. Enjoy a gourmet breakfast while expanding your professional network.",
  },
];

export const services: Service[] = [
  {
    id: "1",
    name: "Room Cleaning",
    category: "cleaning",
    icon: "Sparkles",
  },
  {
    id: "2",
    name: "Extra Towels",
    category: "cleaning",
    icon: "Shirt",
  },
  {
    id: "3",
    name: "Room Service",
    category: "food",
    icon: "UtensilsCrossed",
  },
  {
    id: "4",
    name: "Restaurant Reservation",
    category: "food",
    icon: "CalendarCheck",
  },
  {
    id: "5",
    name: "AC Repair",
    category: "maintenance",
    icon: "Fan",
  },
  {
    id: "6",
    name: "Technical Support",
    category: "maintenance",
    icon: "Wrench",
  },
];
