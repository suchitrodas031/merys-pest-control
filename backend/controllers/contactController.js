const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Error:", error);
  } else {
    console.log("SMTP Server Ready");
  }
});

exports.sendContactEmail = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      category,
      message,
    } = req.body;

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,

      to: process.env.ADMIN_EMAIL,

      subject: `New Inquiry - ${category}`,

      html: `
      
      <div style="font-family:Arial;padding:20px">

      <h2 style="color:#8B0015">
      New Contact Inquiry
      </h2>

      <hr>

      <p><b>Name :</b> ${name}</p>

      <p><b>Phone :</b> ${phone}</p>

      <p><b>Email :</b> ${email}</p>

      <p><b>Category :</b> ${category}</p>

      <p><b>Message :</b></p>

      <p>${message}</p>

      </div>

      `,
    });

    res.status(200).json({
      success: true,
      message: "Inquiry Sent Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Unable to Send Inquiry",
    });

  }
};