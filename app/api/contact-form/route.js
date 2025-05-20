import nodemailer from 'nodemailer'

export async function POST(req) {
    const { name, email, phone, subject, message } = await req.json()

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })


        const recipients = [
            'senseprojects@yahoo.com',
            'senseprojects2019@gmail.com',
            'info@senseprojects.in'
        ];

        await transporter.sendMail({
            from: `"SENSE INTERIORS" <${process.env.SMTP_USER}>`,
            to: recipients,
            subject: `New Contact Message: ${subject}`,
            html: `
  <div style="max-width:600px;margin:0 auto;border:1px solid #ddd;border-radius:8px;font-family:Arial,sans-serif;color:#333;">
  <div style="background: linear-gradient(to right, #0f5c7a, #1198b4); color: #fff; padding: 25px; text-align: center;">
      <h2 style="margin:0;font-size:22px;">New Contact Enquiry</h2>
      <p style="margin:0;font-size:14px;">from Sense Interiors Website</p>
    </div>
    <div style="padding:30px;">
      <table cellpadding="10" cellspacing="0" style="width:100%;border-collapse:collapse;">
        <tr style="background-color:#f9f9f9;">
          <td style="font-weight:bold;width:150px;">Full Name</td>
          <td>${name}</td>
        </tr>
        <tr style="background-color:#fff;">
          <td style="font-weight:bold;">Email</td>
          <td>${email}</td>
        </tr>
        <tr style="background-color:#f9f9f9;">
          <td style="font-weight:bold;">Phone</td>
          <td>${phone}</td>
        </tr>
        <tr style="background-color:#fff;">
          <td style="font-weight:bold;">Subject</td>
          <td>${subject}</td>
        </tr>
        <tr style="background-color:#f9f9f9;">
          <td style="font-weight:bold;">Message</td>
          <td>${message}</td>
        </tr>
      </table>
    </div>
    <div style="background:#f1f1f1;text-align:center;padding:15px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;font-size:12px;color:#666;">
      This email was sent from the <strong>Contact Form</strong> on <strong>Sense Interiors</strong> website.
    </div>
  </div>
`,

        })

        return new Response(JSON.stringify({ success: true }), { status: 200 })
    } catch (error) {
        console.error('Mail error:', error)
        return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 })
    }
}
