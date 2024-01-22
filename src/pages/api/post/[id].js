import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return res
      .status(200)
      .json({ data: post, message: "Updated fetched successfully" });
  } else {
    return await fetchPost(req, res);
  }
}

async function fetchPost(req, res) {
  const { id } = req.query;
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return res
    .status(200)
    .json({ data: post, message: "Post fetched successfully" });
}
