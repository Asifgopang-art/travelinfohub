
export interface Country {
  name: string;
  code: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface VisaFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  passportNumber: string;
  destination: string;
  visaType: string;
  travelDate: string;
}
