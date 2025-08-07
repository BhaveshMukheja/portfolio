import Head from "next/head";

type SeoHeadProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

const SeoHead = ({
  title,
  description,
  url = "https://bhavesh-portfolio-self.vercel.app/",
  image = "/assets/projects/portfolio.png", // fixed path format
}: SeoHeadProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhavesh Mukheja",
    url: url,
    image: `https://bhavesh-portfolio-self.vercel.app/${image}`, // Update to your real domain
    jobTitle: "Full-Stack Developer & AI Researcher",
    worksFor: [
      {
        "@type": "Organization",
        name: "Addverb Technologies",
      },
      {
        "@type": "Organization",
        name: "Arogo AI",
      },
    ],
    alumniOf: "IIT Kharagpur",
    sameAs: [
      "https://github.com/BhaveshMukheja",
      "https://www.linkedin.com/in/bhavesh-mukheja-1925b2239/",
    //   "https://twitter.com/your-twitter",
    ],
    description: description,
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Bhavesh, Bhavesh Mukheja, Bhavesh IIT KGP, Bhavesh Addverb Technologies, Bhavesh Addverb, AI Researcher, Full Stack Developer, Portfolio, Bhavesh Publications, React, Node.js, TailwindCSS, Astrophysics, ML in Astrophysics, Web Developer"
      />
      <meta name="author" content="Bhavesh Mukheja" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default SeoHead;
