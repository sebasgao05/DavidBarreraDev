import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  section?: 'home' | 'about' | 'projects' | 'contact';
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'David Barrera - Desarrollador Full Stack & Ingeniero de Sistemas',
  description = 'Desarrollador Full Stack especializado en React, Node.js, AWS y desarrollo de aplicaciones web modernas. Experiencia en cloud computing y arquitectura de sistemas.',
  keywords = 'desarrollador, full stack, react, nodejs, aws, javascript, typescript, ingeniero sistemas, cloud computing',
  image = '/og-image.jpg',
  url = 'https://david-barrera.com/',
  section = 'home',
  structuredData
}) => {
  const { i18n } = useTranslation();

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "WebPage"],
    "name": "David Barrera",
    "jobTitle": "Full Stack Developer & Systems Engineer",
    "description": description,
    "url": "https://david-barrera.com",
    "image": "https://david-barrera.com/profile-david.webp",
    "sameAs": [
      "https://linkedin.com/in/sebasgao05",
      "https://github.com/sebasgao05"
    ],
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "React"
      },
      {
        "@type": "Thing", 
        "name": "Node.js"
      },
      {
        "@type": "Thing",
        "name": "AWS"
      },
      {
        "@type": "Thing",
        "name": "TypeScript"
      }
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Systems Engineering"
    },
    "email": "sebasgao05@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressLocality": "Bogotá"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    }
  };

  const getSectionMeta = () => {
    switch (section) {
      case 'about':
        return {
          title: `Sobre Mí - ${title}`,
          description: 'Conoce más sobre mi experiencia como desarrollador Full Stack y mi trayectoria profesional.',
          keywords: `${keywords}, sobre mi, experiencia, trayectoria profesional`
        };
      case 'projects':
        return {
          title: `Proyectos - ${title}`,
          description: 'Explora mis proyectos de desarrollo web, aplicaciones y soluciones tecnológicas.',
          keywords: `${keywords}, proyectos, portfolio, aplicaciones web`
        };
      case 'contact':
        return {
          title: `Contacto - ${title}`,
          description: 'Ponte en contacto conmigo para colaboraciones y oportunidades profesionales.',
          keywords: `${keywords}, contacto, colaboración, trabajo`
        };
      default:
        return { title, description, keywords };
    }
  };

  const sectionMeta = getSectionMeta();

  return (
    <Helmet>
      <title>{sectionMeta.title}</title>
      <meta name="description" content={sectionMeta.description} />
      <meta name="keywords" content={sectionMeta.keywords} />
      <link rel="canonical" href={url} />
      <html lang={i18n.language} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="es" href="https://david-barrera.com/?lang=es" />
      <link rel="alternate" hrefLang="en" href="https://david-barrera.com/?lang=en" />
      <link rel="alternate" hrefLang="x-default" href="https://david-barrera.com/" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={sectionMeta.title} />
      <meta property="og:description" content={sectionMeta.description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={i18n.language === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:site_name" content="David Barrera Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={sectionMeta.title} />
      <meta name="twitter:description" content={sectionMeta.description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="David Barrera" />
      <meta name="theme-color" content="#3b82f6" />
    </Helmet>
  );
};

export default SEOHead;