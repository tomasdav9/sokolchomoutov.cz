import { clubEmail } from "./data";

export const siteUrl = "https://sokolchomoutov.cz";
export const siteName = "TJ Sokol Olomouc - Chomoutov";
export const siteTitle = "TJ Sokol Olomouc - Chomoutov | Fotbalový klub";
export const siteDescription =
  "Oficiální stránky fotbalového klubu TJ Sokol Olomouc - Chomoutov, z.s. Vedení klubu, partneři, hřiště na Horecké a kontakty.";
export const ogImageUrl =
  "https://989465e506.cbaul-cdnwnd.com/c75b673237e14cef3d0c32cf6a6fa108/200000001-305c231564/10650000_10152776998795962_6764601930849683485_n.jpg?ph=989465e506";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: siteName,
  alternateName: "Sokol Chomoutov",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo.jpg`,
  image: ogImageUrl,
  email: clubEmail,
  telephone: "+420773098048",
  sport: "Football",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Horecká",
    addressLocality: "Olomouc - Chomoutov",
    postalCode: "783 35",
    addressCountry: "CZ",
  },
  sameAs: [
    "https://www.facebook.com/TJSCHfotbal/",
    "https://www.instagram.com/tj_sokol_chomoutov/",
  ],
};
