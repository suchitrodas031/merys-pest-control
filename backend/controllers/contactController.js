const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, phone, email, category, message } = req.body;

    const data = await resend.emails.send({
      from: "Mery's Pest Control <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `New Inquiry - ${category}`,
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2 style="color:#8B0015">New Contact Inquiry</h2>
          <hr/>
          <p><b>Name:</b> ${name}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Category:</b> ${category}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log(data);

    res.status(200).json({
      success: true,
      message: "Inquiry Sent Successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to Send Inquiry",
    });

  }
};