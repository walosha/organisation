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
    return await fetchItemsWithPagination(req, res);
  }
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
        published: true,
        author: {
          connect: { id: "1803aab6-f836-4d8e-99e7-8735a806d2e5" },
        },
      },
    });
    res.status(200).json({ message: "Post created successfully" });
  });
}

async function fetchItemsWithPagination(req, res) {
  const { page, take } = req.query;
  console.log({ page, take });
  try {
    // Convert page and take to numbers
    const pageNumber = parseInt(page, 10);
    const itemsPerPage = parseInt(take, 10);

    // Calculate the skip value based on page number and page size
    const skip = (pageNumber - 1) * itemsPerPage;

    // Fetch items for the current page
    const items = await prisma.post.findMany({
      skip,
      take: itemsPerPage,
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
      orderBy: [
        {
          updatedAt: "desc",
        },
      ],
    });

    console.log({ items });

    // Fetch total count of items for pagination
    const totalItems = await prisma.post.count({ where: { published: true } });
    console.log({ totalItems });

    // Calculate hasNext and hasPrevious based on the current page and total items
    const hasNext = skip + itemsPerPage < totalItems;
    const hasPrevious = skip > 0;

    const data = {
      page: pageNumber,
      itemsPerPage,
      totalItems,
      hasNext,
      hasPrevious,
      items,
    };

    res.status(200).json({ data, message: "Items fetched successfully" });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}

// Example: Fetch items for the first page with 6 items per page
