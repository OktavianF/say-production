export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "SAY PRODUCTION",
    "image": "https://sayproduction.my.id/logos/logo.png",
    "@id": "https://sayproduction.my.id",
    "url": "https://sayproduction.my.id",
    "telephone": "+6285649409491",
    "priceRange": "Rp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Porobo, Mojodadi, Lopang, Kec. Kembangbahu",
      "addressLocality": "Kabupaten Lamongan",
      "addressRegion": "Jawa Timur",
      "postalCode": "62282",
      "addressCountry": "ID"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "28"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
