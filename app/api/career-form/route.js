import nodemailer from 'nodemailer'

export async function POST(request) {
  const { name, email, position, message } = await request.json()

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

    const recipients = ['hr@senseprojects.in'] 

    await transporter.sendMail({
      from: `"SENSE INTERIORS" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: `New Career Application`,
     html: `
  <div style="font-family: 'Segoe UI', sans-serif; font-size: 15px; color: #333; max-width: 700px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
    <div style="background: linear-gradient(to right, #0f5c7a, #1198b4); color: #fff; padding: 25px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px;">SENSE INTERIORS</h1>
      <p style="margin: 5px 0 0;">New Career Application Received</p>
    </div>

    <div style="padding: 30px;">
      <p style="font-size: 16px; margin-bottom: 20px;">You’ve received a new job application with the following details:</p>
      <table cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f9f9f9;">
          <td style="width: 30%; font-weight: bold;">Full Name</td>
          <td style="width: 70%;">${name}</td>
        </tr>
        <tr style="background-color: #fff;">
          <td style="font-weight: bold;">Email Address</td>
          <td>${email}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="font-weight: bold;">Position of Interest</td>
          <td>${position}</td>
        </tr>
        <tr style="background-color: #fff;">
          <td style="font-weight: bold;">Message</td>
          <td>${message}</td>
        </tr>
      </table>
    </div>

    <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 13px; color: #666;">
      <p style="margin: 0;">This email was generated from the <strong>SENSE INTERIORS</strong> career form.</p>
    </div>
  </div>
`

    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Mail error:', error)
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
      status: 500,
    })
  }
}
