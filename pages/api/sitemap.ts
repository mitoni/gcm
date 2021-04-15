import { SitemapStream, streamToPromise } from "sitemap";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    const basePages = ["contact-me", "who-I-am", "what-I-do"];

    basePages.forEach((page) => {
      smStream.write({
        url: page,
        changefreq: "never",
      });
    });

    smStream.end();

    const sitemapOutput = (await streamToPromise(smStream)).toString();

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    res.end(sitemapOutput);
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
};
