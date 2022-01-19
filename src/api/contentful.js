import contentful from "contentful";

const client = contentful.createClient({
  space: "0jomzuod9ed3",
  accessToken: "NUgr0P91NskCprP60jTIF9vIiwadKcPtRX-cFKHDufY",
});

async function getPeople() {
  const entries = await client.getEntries({
    content_type: "Pacific_Professional",
  });
  return entries.items;
}
