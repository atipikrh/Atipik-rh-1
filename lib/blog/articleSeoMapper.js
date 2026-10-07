import { facebookVideoEmbedUrl } from "../seo/visiteCentreVideo";

const SITE_URL = "https://www.atipikrh.com";

function buildVideoSchema(video, canonicalUrl) {
  if (!video?.watchUrl || !video.title || !video.description) return null;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    embedUrl: facebookVideoEmbedUrl(video.watchUrl),
    thumbnailUrl: `${SITE_URL}${video.thumbnailPath}`,
    url: canonicalUrl,
  };
}

export function buildArticleSeo(article) {
  const canonicalUrl = `${SITE_URL}${article.seo.canonicalPath}`;
  const imageUrl =
    typeof article.image === "string" && article.image.startsWith("http")
      ? article.image
      : `${SITE_URL}${article.image}`;

  const pageTitle = article.seo.metaTitle;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seo.metaDescription,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Atipik RH",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logos/atipik-logo.png`,
      },
    },
    datePublished: article.isoDate || article.date,
    dateModified: article.dateModified || article.isoDate || article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  const faqSchema =
    article.faqItems?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return {
    canonicalUrl,
    imageUrl,
    pageTitle,
    articleSchema,
    faqSchema,
    videoSchema: buildVideoSchema(article.video, canonicalUrl),
  };
}
