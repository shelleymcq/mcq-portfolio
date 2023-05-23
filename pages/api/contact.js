import mail from "@sendgrid/mail";
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Email: ${body.email}\r\n
  First: ${body.first}\r\n
  Last: ${body.last}\r\n
  Company: ${body.company}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "shelleymcq.dev+site@gmail.com",
    from: "shelleymcq.dev@gmail.com",
    subject: `New message from ${body.email}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
};
