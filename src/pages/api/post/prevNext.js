import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await getPreviousAndNextPosts(req, res);
  } else {
    return await fetchItemsWithPagination(req, res);
  }
}

async function getPreviousAndNextPosts(req, res) {
  const { id } = req.query;

  try {
    const nextPost = await prisma.post.findMany({
      where: {
        id: { gt: id },
      },
      orderBy: { id: "asc" },
      take: 1,
    });

    const previousPost = await prisma.post.findMany({
      where: {
        id: { lt: id },
      },
      orderBy: { id: "desc" },
      take: 1,
    });

    return res.status(200).json({
      data: {
        nextPost: nextPost[0] || null,
        previousPost: previousPost[0] || null,
      },
      message: "Post fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
