import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();

    console.log("Sending contact form email:", { name, email, phone });

    // Send email to business owner using Resend API
    const ownerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Plated Moment Contact <onboarding@resend.dev>",
        to: ["pedroluisbruzual01@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #d09e23; border-bottom: 2px solid #d09e23; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            </div>
            
            <div style="margin: 20px 0;">
              <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
              <p>This email was sent from your Plated Moment website contact form.</p>
            </div>
          </div>
        `,
      }),
    });

    if (!ownerEmailResponse.ok) {
      const errorText = await ownerEmailResponse.text();
      console.error("Failed to send owner email:", errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    console.log("Owner email sent successfully");

    // Send confirmation email to customer
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Plated Moment <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting Plated Moment!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #d09e23;">Thank you for reaching out, ${name}!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              We have received your message and will get back to you as soon as possible.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Your event details are important to us, and we look forward to helping make your occasion unforgettable.
            </p>
            
            <div style="margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #d09e23;">
              <p style="margin: 0; color: #666; font-style: italic;">
                "Creating moments that matter, one plate at a time."
              </p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Best regards,<br>
              <strong>The Plated Moment Team</strong>
            </p>
          </div>
        `,
      }),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
