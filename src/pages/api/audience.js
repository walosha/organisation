// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = require("@mailchimp/mailchimp_marketing");
const crypto = require("crypto");
console.log("process.env.MAILCHAMP_KEY", process.env.MAILCHAMP_KEY);

mailchimp.setConfig({
  apiKey: process.env.MAILCHAMP_KEY,
  server: "us21",
});

export default function handler(req, res) {
  if (req.method === "POST") {
    addMember(req, res);
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}

function calculateSubscriberHash(email) {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}

async function addMember(req, res) {
  const { email } = req.body;
  const listId = "b13ece84e2";
  try {
    // Check if the user is already a member
    const memberInfo = await mailchimp.lists.getListMember(
      listId,
      calculateSubscriberHash(email),
      {
        email_address: email,
      }
    );
    if (memberInfo.status === "unsubscribed") {
      const response = await mailchimp.lists.updateListMember(
        listId,
        calculateSubscriberHash(email),
        {
          email_address: email,
          status: "subscribed",
          email_type: "html",
          merge_fields: {
            FNAME: "",
            LNAME: "",
          },
        }
      );
      res.send(response);
    } else {
      // If the user is already subscribed, you may want to handle it accordingly
      res.send({ message: "User is already subscribed." });
    }
  } catch (err) {
    if (err.status === 404) {
      // Handle 404
      console.log(err.status, { err: true });
      // If the user is not found (404), add them as a new member
      const response = await mailchimp.lists.addListMember(listId, {
        status: "subscribed",
        email_address: email,
        email_type: "html",
        merge_fields: {
          FNAME: "",
          LNAME: "",
        },
        // tags: [tag],
      });
      res.send(response);
    } else if (err.status === 400) {
      // Handle 400 - Bad Request
      console.log(err.status, { err: true, details: err.response.body });

      // Send more details about the error in the response
      res
        .status(400)
        .send({ error: "Bad Request", details: err.response.body });
    } else {
      // Handle other status codes
      console.error({ err });
      res.status(500).send(err);
    }
  }
}
