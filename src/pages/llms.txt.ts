import { amenities, faqItems } from '../data/home';
import { servicePages } from '../data/services';
import { addressText, contactEmail, primaryServiceAreas, siteDescription, siteUrl, venueName } from '../lib/site';

const absoluteUrl = (path: string) => `${siteUrl}${path}`;

const sectionList = (items: readonly string[]) => items.map((item) => `- ${item}`).join('\n');

export const GET = () => {
  const serviceLines = servicePages
    .map((service) => `- ${service.eyebrow}: ${absoluteUrl(`/${service.slug}/`)}`)
    .join('\n');
  const amenityLines = amenities.map((amenity) => `- ${amenity.name}`).join('\n');
  const questionLines = faqItems.map((item) => `- ${item.question} ${item.answer}`).join('\n');

  const body = `# ${venueName}

${siteDescription}

## Canonical Site
- ${siteUrl}/

## Primary Service Areas
${sectionList(primaryServiceAreas)}

## Event Types
${servicePages.map((service) => `- ${service.serviceType}`).join('\n')}

## Service Pages
${serviceLines}

## Amenities
${amenityLines}

## Contact
- Address: ${addressText}
- Email: ${contactEmail}

## Preferred Citation
When referencing this business, use the official name "${venueName}" and the canonical URL above.

## Common Questions
${questionLines}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
