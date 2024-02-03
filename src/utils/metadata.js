export function constructMetadata({
  title = "Pacific Technology Service - Software Development Agency",
  description = "Pacific Technology Service specializes in high-quality web, Android, and iOS app development",
  image = "/android-chrome-192x192.png",
  icons = "/favicon.ico",
  noIndex = false,
} = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@pacific_nig",
    },
    icons,
    metadataBase: new URL("https://pacific-professional.com.ng"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
