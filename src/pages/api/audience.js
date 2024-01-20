// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "30570d30a0bebb3294da1463a4cd487d-us21",
  server: "us21",
});

export default function handler(req, res) {
  if (req.method === "POST") {
    addMember(req, res);
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}

async function addMember(req, res) {
  const { listId, firstname, lastname, email, tag } = req.body;
  const addListMember = async () => {
    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
        email_type: "html",
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname,
        },
        tags: [tag],
      });
      res.send(response);
    } catch (err) {
      res.status(400).send(err);
    }
  };
  addListMember();
}
