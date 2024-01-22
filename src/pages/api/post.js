import prisma from "@/lib/prisma";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createPost(req, res);
  } else {
    return await fetchPost(req, res);
  }
}

async function fetchPost(req, res) {
  const post = await prisma.post.findFirst();
  return res
    .status(200)
    .json({ data: post, message: "Post fetched successfully" });
}

async function createPost(req, res) {
  const form = formidable({});
  form.parse(req, async (err, fields, files) => {
    if (err) reject({ err });
    const { title, body, image, tags, titleURL } = fields;
    await prisma.post.create({
      data: {
        title: title[0],
        body: body[0],
        image: image[0],
        tags: tags[0],
        titleURL: titleURL[0],
        author: {
          connect: { id: "9249ad37-df4e-4d96-ae63-4f0c696436d2" },
        },
      },
    });
    res.status(200).json({ message: "Post created successfully" });
  });
}
