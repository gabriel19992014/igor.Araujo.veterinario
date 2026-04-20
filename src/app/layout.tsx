import type { Metadata } from "next";
import { Nunito_Sans, Sora } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import { clinicInfo, seoFaqs, seoServiceNames, siteConfig, siteMetadata } from "@/lib/site";

import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-95199S2D4Z";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  applicationName: siteMetadata.siteName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [...siteMetadata.keywords],
  openGraph: {
    siteName: siteMetadata.siteName,
    title: siteMetadata.title,
    description: siteMetadata.openGraphDescription,
    url: siteConfig.url,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: siteMetadata.openGraphImage,
        width: 1200,
        height: 630,
        alt: `Marca ${siteMetadata.siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.twitterDescription,
    images: [siteMetadata.openGraphImage],
  },
};

const veterinarySchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: clinicInfo.name,
  image: `${siteConfig.url}${siteMetadata.openGraphImage}`,
  telephone: clinicInfo.phoneDisplay,
  areaServed: {
    "@type": "City",
    name: clinicInfo.city,
  },
  url: siteConfig.url,
  medicalSpecialty: "VeterinaryMedicine",
  founder: {
    "@type": "Person",
    name: clinicInfo.veterinarian.name,
    jobTitle: clinicInfo.veterinarian.specialty,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${clinicInfo.phoneRaw}`,
    contactType: "customer service",
    areaServed: "Manaus",
    availableLanguage: ["Portuguese"],
  },
  makesOffer: seoServiceNames.map((serviceName) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: serviceName,
      areaServed: clinicInfo.city,
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seoFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              anonymize_ip: true,
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(veterinarySchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
