import { addressText } from '../lib/site';
import avIcon from '../assets/amenity-av.svg';
import bridalIcon from '../assets/amenity-bridal.svg';
import cateringIcon from '../assets/amenity-catering.svg';
import valetIcon from '../assets/amenity-valet.svg';
import corporateImage from '../assets/space-corporate.jpg';
import privateImage from '../assets/space-private.jpg';
import weddingsImage from '../assets/space-weddings.jpg';

export const spaces = [
  {
    title: 'Weddings',
    image: weddingsImage,
    text: 'Elegant ceremony and reception layouts designed for seamless timelines, memorable photos, and effortless guest flow.',
    href: '/weddings/',
    linkText: 'Explore wedding hosting',
  },
  {
    title: 'Corporate Galas',
    image: corporateImage,
    text: 'Professional staging, polished lighting, and coordinated service for awards nights, launches, and fundraisers.',
    href: '/corporate-events/',
    linkText: 'Explore corporate events',
  },
  {
    title: 'Private Parties',
    image: privateImage,
    text: 'Flexible rooms for anniversaries, milestone birthdays, and celebrations that feel elevated, warm, and well organized.',
    href: '/private-events/',
    linkText: 'Explore private events',
  },
];

export const amenities = [
  {
    name: 'In-house Catering',
    icon: cateringIcon,
    text: 'Seasonal menus, chef-led tastings, and polished table service tailored for every celebration style.',
  },
  {
    name: 'AV Equipment',
    icon: avIcon,
    text: 'Premium sound, discreet lighting, and seamless presentations managed by experts throughout your event.',
  },
  {
    name: 'Bridal Suite',
    icon: bridalIcon,
    text: 'Private prep spaces, calming details, and elegant mirrors designed for memorable wedding moments.',
  },
  {
    name: 'Valet Parking',
    icon: valetIcon,
    text: 'Welcoming arrivals, efficient routing, and attentive attendants ensuring smooth guest access all evening.',
  },
];

export const testimonials = [
  {
    quote:
      'Our gala at Legacy Events was effortless from planning to final toast. The team delivered grace, precision, and unforgettable ambiance.',
    name: 'Corporate client, Belleville',
  },
  {
    quote:
      'From first walkthrough to last dance, every detail felt intentional. Guests still talk about the atmosphere and flawless service.',
    name: 'Wedding client, Quinte region',
  },
  {
    quote:
      'Legacy Events made our celebration feel elevated yet relaxed. The staff handled every transition smoothly and professionally.',
    name: 'Private event client, Belleville',
  },
];

export const faqItems = [
  {
    question: 'Can I tour Legacy Events before booking?',
    answer:
      'Yes. We recommend touring the venue first so we can review your event goals, layout options, and preferred date in person.',
  },
  {
    question: 'How far in advance should I book my event date?',
    answer:
      'Popular dates book quickly, so earlier is better. Share your target date and we will confirm current availability.',
  },
  {
    question: 'Do you work with outside vendors?',
    answer: 'Yes. We can collaborate with your preferred vendors and also recommend trusted local partners when needed.',
  },
  {
    question: 'What types of events can Legacy Events host?',
    answer: 'Legacy Events hosts weddings, corporate galas, and private parties in Belleville, Ontario.',
  },
  {
    question: 'What amenities are available on-site?',
    answer: 'On-site amenities include in-house catering, AV equipment, a bridal suite, and valet parking support.',
  },
  {
    question: 'How quickly will someone respond to my inquiry?',
    answer: 'Our team replies within one business day after you submit the contact form.',
  },
  {
    question: 'Where is Legacy Events located?',
    answer: `Legacy Events is located at ${addressText}, serving Belleville and the Quinte region.`,
  },
];
