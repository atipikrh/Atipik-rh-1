import { facebookVideoEmbedUrl } from "../seo/visiteCentreVideo";
import { getAuthorProfile, toIsoDate } from "../seo/brandMeasures";

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

  const author = getAuthorProfile(article.author);
  const datePublished = toIsoDate(article.isoDate || article.date) || article.isoDate || article.date;
  const dateModified = toIsoDate(article.dateModified) || datePublished;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seo.metaDescription,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.absoluteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Atipik RH",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logos/atipik-logo.png`,
      },
    },
    datePublished,
    dateModified,
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
