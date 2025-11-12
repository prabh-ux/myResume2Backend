import nodemailer from 'nodemailer';

export const sendClientInfo = async (req, res) => {
    try {
        const { name, message } = req.body;
        const userEmail = process.env.EMAIL;
        const transporter = nodemailer.createTransport({

            service: "gmail",
            auth: {
                user: userEmail,
                pass: process.env.EMAILPASS

            }
        })

        const mailOptions = {
            from: userEmail,
            to: userEmail,
            replyto: userEmail,
            subject:"A new client has sended a message for you from your resume website"
            ,text:`You have a new message from a client with name ${name} and this is there message 
            ${message}`

        }

        await transporter.sendMail(mailOptions);

        res.status(200).json({ msg: "mail successfully sent" });
    } catch (error) {
        res.status(500).json({ msg: "internal server error : " + error.message });
    }



}