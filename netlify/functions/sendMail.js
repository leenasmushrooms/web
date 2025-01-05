import nodemailer from 'nodemailer';

export const handler = async (event) => {
  const { fullName, phone, email, transactionId } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'leenasmushroom5@gmail.com',
      pass: 'iahsmlsoyqascprd'
    },
  });

  const mailOptions = {
    from: 'info@leenasmushroom.com',
    to: 'leenasmushroom5@gmail.com',
    subject: 'New Enrollment Submission',
    html: `
      <h3>Enrollment Details:</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Transaction ID:</strong> ${transactionId}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};
