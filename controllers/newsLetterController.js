import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export const sendClientInfo = async (req, res) => {
    try {
        const { name, message } = req.body;
        // const userEmail = process.env.EMAIL;
        // const transporter = nodemailer.createTransport({

        //     service: "gmail",
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: userEmail,
        //         pass: process.env.EMAILPASS

        //     }
        // })

        // const mailOptions = {
        //     from: userEmail,
        //     to: userEmail,
        //     replyTo: userEmail,
        //     subject: "A new client has sended a message for you from your resume website"
        //     , text: `You have a new message from a client with name ${name} and this is there message 
        //     ${message}`

        // }
        // await new Promise((resolve, reject) => {
        //     transporter.sendMail(mailOptions, (err, info) => {
        //         if (err) {
        //             console.log(err);
        //             reject(err);
        //         } else {
        //             resolve(info);
        //         }
        //     });
        // })

        const resend = new Resend(process.env.RESEND_API_KEY);

       const response= await resend.emails.send({
            from: "Prabhkirat Singh <onboarding@resend.dev>",
            to: process.env.EMAIL,
            subject: `New message from your resume website - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 10px;">
          <h2>New Contact Form Submission</h2>
          <p>You received a new message from your resume website.</p>
          
          <h3>Sender Details</h3>
          <p><strong>Name:</strong> ${name}</p>

          <h3>Message</h3>
          <p>${message}</p>
          
          <br>
          <p style="font-size: 12px; color: #777;">
            This message was sent from the portfolio/resume website of <strong>Prbhkirat Singh</strong>.
          </p>
        </div>
      `,


        })

    console.log(response); // log API response for debugging

        res.status(200).json({ msg: "mail successfully sent" });
    } catch (error) {
        res.status(500).json({ msg: "internal server error : " + error.message });
    }



}