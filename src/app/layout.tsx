import type { Metadata } from "next";
import { Nunito_Sans, Sora } from "next/font/google";
import Script from "next/script";

import { clinicInfo, siteConfig, siteMetadata, whatsappUrl } from "@/lib/site";

import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
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
    title: siteMetadata.title,
    description: siteMetadata.openGraphDescription,
    url: siteConfig.url,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.twitterDescription,
  },
};

const veterinarySchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: clinicInfo.name,
  image: `${siteConfig.url}${"/images/branding/logo-igor-araujo.webp"}`,
  telephone: clinicInfo.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinicInfo.address,
    addressLocality: clinicInfo.city,
    addressCountry: "BR",
  },
  areaServed: clinicInfo.city,
  url: siteConfig.url,
  sameAs: [whatsappUrl],
  medicalSpecialty: "VeterinaryMedicine",
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
        {gaId ? (
          <>
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
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(veterinarySchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
