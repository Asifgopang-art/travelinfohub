
import { Country, Service, Testimonial } from './types';

export const CONTACT_PHONE = "+44 7426 416286";
export const OFFICE_PHONE = "+44 203 985 2296";
export const WHATSAPP_NUMBER = "447426416286";
export const COMPANY_NAME = "FastestTravel Ltd";
export const COMPANY_DOMAIN = "fastesttravelltd.co.uk";
export const COMPANY_ADDRESS = "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ";
export const COMPANY_REG_NUMBER = "17030612";
export const FACEBOOK_URL = "https://www.facebook.com/share/1B6vh1GD9b/";

export const getWhatsAppLink = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

export const LEGAL_DISCLAIMER = "FastestTravel Ltd is an independent visa consultancy and is not affiliated with any embassy, consulate, or official visa processing centers such as VFS Global or TLScontact. We provide assistance in monitoring and booking available appointments and preparing documentation in line with embassy requirements.";

export const COUNTRIES: Country[] = [
  {
    name: "FRANCE",
    code: "FR",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    description: "Professional assistance for France Visa appointments from the UK"
  },
  {
    name: "ITALY",
    code: "IT",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800",
    description: "Expert Italy Visa appointment monitoring and support"
  },
  {
    name: "GERMANY",
    code: "DE",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
    description: "Germany Visa assistance with meticulous documentation"
  },
  {
    name: "NETHERLANDS",
    code: "NL",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=800",
    description: "Netherlands Visa slot booking and application support"
  },
  {
    name: "SWITZERLAND",
    code: "CH",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
    description: "Swiss Visa application guidance and premium support"
  },
  {
    name: "GREECE",
    code: "GR",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
    description: "Reliable Greece Schengen Visa appointment assistance"
  },
  {
    name: "USA",
    code: "US",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800",
    description: "B1/B2 Visa consultation and renewal assistance"
  },
  {
    name: "CANADA",
    code: "CA",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800",
    description: "Professional guidance for Canadian Visitor Visas"
  },
  {
    name: "TURKEY",
    code: "TR",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800",
    description: "E-Visa and traditional Turkey visa consultation"
  },
  {
    name: "MOROCCO",
    code: "MA",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=800",
    description: "Specialized support for Morocco travel visa processing"
  },
  {
    name: "AUSTRIA",
    code: "AT",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=800",
    description: "Austria Visa expertise and appointment monitoring"
  },
  {
    name: "PORTUGAL",
    code: "PT",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=1200",
    description: "Portugal Visa assistance for travel and residency"
  },
  {
    name: "SWEDEN",
    code: "SE",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=800",
    description: "Sweden Visa processing support and consultation"
  }
];

export const SERVICES: Service[] = [
  {
    id: "appointments",
    title: "PRIORITY APPOINTMENT ASSISTANCE",
    description: "We help clients identify and book the earliest available visa appointments across Europe.",
    icon: "fa-solid fa-calendar-check"
  },
  {
    id: "form_filling",
    title: "EXPERT FORM COMPLETION",
    description: "Accurate visa application form preparation to simplify your submission process.",
    icon: "fa-solid fa-pen-to-square"
  },
  {
    id: "cover_letter",
    title: "PROFESSIONAL COVER LETTERS",
    description: "Custom-drafted cover letters aligned with embassy standards and your travel purpose.",
    icon: "fa-solid fa-file-signature"
  },
  {
    id: "insurance",
    title: "SCHENGEN TRAVEL INSURANCE",
    description: "Embassy-compliant insurance coverage that fulfills all Schengen visa requirements.",
    icon: "fa-solid fa-user-shield"
  },
  {
    id: "checklist",
    title: "DOCUMENT REVIEW",
    description: "A comprehensive audit of your documents to ensure conformity with visa center guidelines.",
    icon: "fa-solid fa-list-check"
  },
  {
    id: "flights",
    title: "FLIGHT ITINERARIES",
    description: "Verified flight documentation suitable for your visa application process.",
    icon: "fa-solid fa-plane"
  },
  {
    id: "hotels",
    title: "HOTEL RESERVATIONS",
    description: "Official hotel proofs prepared in accordance with embassy requirements.",
    icon: "fa-solid fa-hotel"
  },
  {
    id: "business",
    title: "CORPORATE VISA SOLUTIONS",
    description: "Dedicated travel support tailored for business travelers and international teams.",
    icon: "fa-solid fa-briefcase"
  },
  {
    id: "legalisation",
    title: "DOCUMENT AUTHENTICATION",
    description: "Assistance with document legalisation and Apostille for international use.",
    icon: "fa-solid fa-stamp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aparna Bhosale",
    date: "April 2024",
    rating: 5,
    content: "Thank you Enes for your kind help for a Spanish visa. Your company is efficient and reliable. Enes was professional and reliable throughout the process.",
    avatar: "https://picsum.photos/seed/aparna/100/100"
  },
  {
    id: "2",
    name: "Quality Service",
    date: "March 2024",
    rating: 5,
    content: "Excellent and very quick response. They handled my documents professionally and kept me updated at every step. Highly recommended for fast visa solutions.",
    avatar: "https://picsum.photos/seed/quality/100/100"
  },
  {
    id: "3",
    name: "Syed Rehan",
    date: "February 2024",
    rating: 5,
    content: "Highly impressed with transparency and support. I got my appointment within a week when it was showing no slots available on the embassy website.",
    avatar: "https://picsum.photos/seed/syed/100/100"
  }
];
