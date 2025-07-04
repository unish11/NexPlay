import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Format the email content
    const emailContent = `
NEXPLAY Creator Program Application

=== PERSONAL INFORMATION ===
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Location: ${formData.location}

=== SOCIAL MEDIA PLATFORMS ===
Primary Platform: ${formData.primaryPlatform}
Primary Link: ${formData.primaryLink}

Secondary Platforms:
${formData.secondaryPlatform1 ? `${formData.secondaryPlatform1}: ${formData.secondaryLink1}` : "None"}
${formData.secondaryPlatform2 ? `${formData.secondaryPlatform2}: ${formData.secondaryLink2}` : ""}

=== AUDIENCE INSIGHTS ===
Total Followers: ${formData.totalFollowers}
Average Views: ${formData.averageViews}
Engagement Rate: ${formData.engagementRate}%

=== CONTENT & GOALS ===
Content Type: ${formData.contentType}

Why Join Program:
${formData.whyJoin}

Promotion Plan:
${formData.promotionPlan}

=== ADDITIONAL INFO ===
Media Kit/Resume: ${formData.mediaKit || "Not provided"}
Additional Info: ${formData.additionalInfo || "None"}

=== AGREEMENTS ===
Agreed to Terms: ${formData.agreeTerms ? "Yes" : "No"}
Allow Promotional Use: ${formData.allowPromotion ? "Yes" : "No"}

Submitted: ${new Date().toLocaleString()}
    `

    // Send email using a service like Resend, SendGrid, or similar
    // For now, we'll simulate success
    console.log("Creator Application Received:", emailContent)

    // In a real implementation, you would send the email here
    // Example with Resend:
    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'applications@nexplay.com',
      to: 'nexplayorg@gmail.com',
      subject: `Creator Program Application - ${formData.fullName}`,
      text: emailContent,
    })
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}
