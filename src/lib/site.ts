export const venueName = 'Legacy Events';
export const siteUrl = (import.meta.env.SITE ?? 'https://legacyevents.ca').replace(/\/$/, '');
export const contactEmail = 'Info@legacyeventsbelleville.onmicrosoft.com';
export const web3formsKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';
export const siteDescription =
  'Legacy Events is an event venue in Belleville, Ontario, Canada for weddings, corporate galas, and private parties.';
export const siteSlogan = 'Where your story becomes a legacy';

export const addressText = '4211 Old Highway 2, Belleville, ON K8N 4Z4';
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=4211+Old+Highway+2,+Belleville,+ON+K8N+4Z4';

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: '4211 Old Highway 2',
  addressLocality: 'Belleville',
  addressRegion: 'ON',
  postalCode: 'K8N 4Z4',
  addressCountry: 'CA',
} as const;

export const serviceAreaName = 'Belleville and Quinte region';
export const extendedServiceAreaName = 'Belleville and the Quinte region';
export const primaryServiceAreas = ['Belleville, Ontario', 'Quinte region'] as const;

interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

interface OpeningHoursSpecification {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export const localSeo: {
  googleBusinessProfileUrl: string;
  sameAsUrls: string[];
  geoCoordinates?: GeoCoordinates;
  openingHoursSpecification: OpeningHoursSpecification[];
} = {
  googleBusinessProfileUrl: '',
  sameAsUrls: [],
  openingHoursSpecification: [],
};

export const sameAsUrls = [localSeo.googleBusinessProfileUrl, ...localSeo.sameAsUrls].filter(Boolean);

export const optionalEventVenueSchema = {
  ...(sameAsUrls.length > 0 ? { sameAs: sameAsUrls } : {}),
  ...(localSeo.geoCoordinates
    ? {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: localSeo.geoCoordinates.latitude,
          longitude: localSeo.geoCoordinates.longitude,
        },
      }
    : {}),
  ...(localSeo.openingHoursSpecification.length > 0
    ? {
        openingHoursSpecification: localSeo.openingHoursSpecification.map((hours) => ({
          '@type': 'OpeningHoursSpecification',
          ...hours,
        })),
      }
    : {}),
};
