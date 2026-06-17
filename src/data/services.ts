import type { ImageMetadata } from 'astro';
import corporateImage from '../assets/space-corporate.jpg';
import privateImage from '../assets/space-private.jpg';
import weddingsImage from '../assets/space-weddings.jpg';

interface ContentBlock {
  title: string;
  body: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface RelatedLink {
  href: string;
  label: string;
  text: string;
}

export interface ServicePageData {
  slug: string;
  pageTitle: string;
  pageDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  image: ImageMetadata;
  imageAlt: string;
  serviceName: string;
  serviceType: string;
  highlights: string[];
  contentBlocks: ContentBlock[];
  faqItems: FaqItem[];
  relatedLinks: RelatedLink[];
}

export const weddingService: ServicePageData = {
  slug: 'weddings',
  pageTitle: 'Wedding Venue in Belleville, ON | Legacy Events',
  pageDescription:
    'Legacy Events is a Belleville wedding venue for ceremonies, receptions, and elegant celebrations with catering, AV support, a bridal suite, and valet parking.',
  eyebrow: 'Wedding Venue',
  heading: 'Wedding venue hosting in Belleville',
  intro:
    'Plan a wedding day that feels elegant, organized, and personal at Legacy Events, a Belleville venue serving couples across the Quinte region.',
  image: weddingsImage,
  imageAlt: 'Wedding reception setup at Legacy Events in Belleville',
  serviceName: 'Wedding venue hosting',
  serviceType: 'Wedding venue',
  highlights: [
    'Ceremony and reception layouts can be planned around guest flow, photography moments, and the timing of the day.',
    'Amenities such as in-house catering, AV equipment, a bridal suite, and valet parking help simplify planning.',
    'Tours help couples review preferred dates, layout needs, and details that should be confirmed early.',
  ],
  contentBlocks: [
    {
      title: 'A calm setting for ceremony-to-reception flow',
      body:
        'Legacy Events supports wedding days that need to feel polished without feeling overproduced. Couples can plan a ceremony, cocktail-style transition, dinner service, speeches, and dancing with a layout that keeps guests comfortable and the day easy to follow. The venue is located in Belleville, close to the Quinte region, which makes it practical for local families and out-of-town guests.',
    },
    {
      title: 'Built for the details guests remember',
      body:
        'The space is designed around the moments that matter most: a graceful entrance, a comfortable meal, clear sightlines for speeches, and a warm setting for photos. Amenities such as in-house catering, AV equipment, a bridal suite, and valet parking support help reduce the number of separate moving pieces couples need to coordinate.',
    },
    {
      title: 'Flexible support before the wedding date',
      body:
        'A venue tour is the best next step because every wedding has a different guest count, timing, vendor mix, and room setup. During the walkthrough, the team can review preferred dates, discuss layout options, and help identify the details that should be planned early so the event day feels organized from arrival to last dance.',
    },
  ],
  faqItems: [
    {
      question: 'Can Legacy Events host both wedding ceremonies and receptions?',
      answer:
        'Yes. Legacy Events can support ceremony and reception timelines, with layout options reviewed during an in-person tour.',
    },
    {
      question: 'Is there a private space for wedding preparation?',
      answer:
        'Yes. The venue lists a bridal suite among its on-site amenities, giving couples a private preparation space before key wedding moments.',
    },
    {
      question: 'How should couples start planning a wedding at Legacy Events?',
      answer:
        'Couples should share their preferred date, guest count, and wedding goals through the contact form so the team can follow up within one business day.',
    },
  ],
  relatedLinks: [
    {
      href: '/corporate-events/',
      label: 'Corporate Events',
      text: 'Explore polished layouts for galas, fundraisers, presentations, and awards nights in Belleville.',
    },
    {
      href: '/private-events/',
      label: 'Private Events',
      text: 'See how Legacy Events supports milestone birthdays, anniversaries, and personal celebrations.',
    },
  ],
};

export const corporateService: ServicePageData = {
  slug: 'corporate-events',
  pageTitle: 'Corporate Event Venue in Belleville, ON | Legacy Events',
  pageDescription:
    'Legacy Events hosts corporate galas, fundraisers, awards nights, and polished business events in Belleville with catering and AV support.',
  eyebrow: 'Corporate Event Venue',
  heading: 'Corporate event venue in Belleville',
  intro:
    'Host galas, fundraisers, launches, and awards nights in a Belleville venue designed for professional presentation and comfortable guest movement.',
  image: corporateImage,
  imageAlt: 'Corporate gala setup at Legacy Events in Belleville',
  serviceName: 'Corporate event hosting',
  serviceType: 'Corporate event venue',
  highlights: [
    'Layouts can support seated dinners, speeches, presentations, sponsor moments, and reception-style networking.',
    'AV equipment and coordinated service help keep programs clear, professional, and on schedule.',
    'Belleville location supports local teams, nonprofit groups, and regional organizations across the Quinte area.',
  ],
  contentBlocks: [
    {
      title: 'A professional setting for high-visibility moments',
      body:
        'Corporate events need a room that feels credible the moment guests arrive. Legacy Events supports galas, fundraisers, launch events, awards nights, and formal dinners with a polished venue environment in Belleville. The space can be arranged around presentations, seated service, sponsor visibility, and natural movement between arrival, program, and reception moments.',
    },
    {
      title: 'Support for presentations, staging, and service',
      body:
        'AV equipment, coordinated lighting, and catering support are useful for events where timing and clarity matter. Whether the event includes speeches, a slideshow, a donor presentation, or an awards program, the team can discuss the sequence during planning so service, sound, and guest experience feel aligned.',
    },
    {
      title: 'A local venue for Belleville and Quinte teams',
      body:
        'Legacy Events gives companies, nonprofits, and organizations a Belleville-based option for events that need more polish than an everyday meeting room. A walkthrough helps confirm room configuration, guest count, arrival flow, and practical details such as parking, vendor access, and presentation requirements.',
    },
  ],
  faqItems: [
    {
      question: 'What types of corporate events can Legacy Events host?',
      answer:
        'Legacy Events can host corporate galas, fundraisers, awards nights, launch events, formal dinners, and private organizational gatherings.',
    },
    {
      question: 'Does the venue support presentations or speeches?',
      answer:
        'Yes. AV equipment is listed among the venue amenities, and presentation needs can be reviewed during the planning process.',
    },
    {
      question: 'Can catering be coordinated for corporate events?',
      answer:
        'Yes. In-house catering is one of the listed amenities, helping corporate hosts plan food service alongside the event timeline.',
    },
  ],
  relatedLinks: [
    {
      href: '/weddings/',
      label: 'Weddings',
      text: 'Learn how Legacy Events supports ceremony and reception timelines for couples across the Quinte region.',
    },
    {
      href: '/private-events/',
      label: 'Private Events',
      text: 'Explore venue options for anniversaries, birthdays, and other private celebrations.',
    },
  ],
};

export const privateService: ServicePageData = {
  slug: 'private-events',
  pageTitle: 'Private Event Venue in Belleville, ON | Legacy Events',
  pageDescription:
    'Legacy Events hosts private parties, anniversaries, milestone birthdays, and personal celebrations in Belleville and the Quinte region.',
  eyebrow: 'Private Event Venue',
  heading: 'Private event venue in Belleville',
  intro:
    'Bring family, friends, and guests together in a Belleville venue suited for anniversaries, milestone birthdays, and private celebrations.',
  image: privateImage,
  imageAlt: 'Private party setup at Legacy Events in Belleville',
  serviceName: 'Private event hosting',
  serviceType: 'Private event venue',
  highlights: [
    'Flexible room layouts help private parties feel organized, comfortable, and personal.',
    'Catering, AV support, and valet parking help simplify the host experience.',
    'The Belleville location serves guests from the city and the wider Quinte region.',
  ],
  contentBlocks: [
    {
      title: 'A flexible venue for personal celebrations',
      body:
        'Private events often need a balance of warmth, organization, and enough polish to make the occasion feel special. Legacy Events supports anniversaries, milestone birthdays, family celebrations, and private parties in Belleville with flexible room layouts and an event setting that feels elevated without becoming complicated.',
    },
    {
      title: 'Designed for hosts who want fewer moving parts',
      body:
        'Amenities such as in-house catering, AV equipment, and valet parking can simplify the planning process for private hosts. Instead of coordinating every element separately, guests can focus on the reason for gathering while the event timeline, food service, arrival experience, and room flow are planned around the celebration.',
    },
    {
      title: 'A place for memorable gatherings in the Quinte region',
      body:
        'Legacy Events is located on Old Highway 2 in Belleville, making it accessible for local guests and visitors from across the Quinte region. A venue tour gives hosts a chance to talk through the guest list, desired atmosphere, preferred date, and any special details that should shape the room setup.',
    },
  ],
  faqItems: [
    {
      question: 'What private events can Legacy Events host?',
      answer:
        'Legacy Events can host milestone birthdays, anniversaries, family celebrations, private parties, and other personal gatherings.',
    },
    {
      question: 'Can the room layout be adjusted for different private events?',
      answer:
        'Yes. Layout options can be reviewed during a venue tour based on guest count, event style, and timing needs.',
    },
    {
      question: 'How soon will someone respond to a private event inquiry?',
      answer: 'The team replies within one business day after a contact form submission.',
    },
  ],
  relatedLinks: [
    {
      href: '/weddings/',
      label: 'Weddings',
      text: 'Explore ceremony and reception planning for couples hosting in Belleville.',
    },
    {
      href: '/corporate-events/',
      label: 'Corporate Events',
      text: 'See how Legacy Events supports galas, fundraisers, awards nights, and business gatherings.',
    },
  ],
};

export const servicePages = [weddingService, corporateService, privateService] as const;
