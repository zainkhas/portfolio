import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zainkhas.me/",
      lastModified: new Date(),
    },
    {
      url: "https://zainkhas.me/work",
      lastModified: new Date(),
    },
    {
      url: "https://zainkhas.me/resume",
      lastModified: new Date(),
    },
  ];
}
