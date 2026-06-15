import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/notify", async (req, res) => {
    try {
      const { name, email, phone, treatment, date, time, message } = req.body;
      
      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        console.warn("Gmail settings are not configured. Skipping email notification.");
        return res.status(200).json({ success: true, message: "Email skipped, credentials not found." });
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD
        }
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // Admin receives the notification
        replyTo: email,
        subject: `New Dental Appointment: ${name}`,
        text: `
New appointment request received!

Patient Name: ${name}
Phone Number: ${phone}
Email Address: ${email || 'Not provided'}
Treatment type: ${treatment}
Requested Date: ${date}
Requested Time: ${time}
Message: 
${message || 'No additional message.'}
        `
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Email notification error:", error);
      res.status(500).json({ error: "Failed to send email notification" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
