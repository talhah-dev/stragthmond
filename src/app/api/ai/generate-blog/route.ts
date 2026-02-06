import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { title, category, excerpt, tone, length } = await req.json();

        if (!title) {
            return NextResponse.json(
                { success: false, message: "Title is required" },
                { status: 400 }
            );
        }

        const prompt = `
Write a high-quality, long-form blog post for a premium real estate website.

Title: ${title}
Category: ${category ?? "Insights"}
Short Description: ${excerpt ?? ""}

Tone: ${tone ?? "professional, confident, helpful"}
Length: ${length ?? "1200-1800 words"}

Requirements:
- Clear introduction
- Use headings and subheadings
- Bullet points where helpful
- Practical advice
- Strong conclusion
- FAQ section (3-5 questions)

Return only the blog content. No markdown code blocks.
`;

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a professional real estate content writer." },
                { role: "user", content: prompt },
            ],
            temperature: 0.7,
        });

        const content = completion.choices[0]?.message?.content;

        return NextResponse.json(
            { success: true, content },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                message: error?.message ?? "AI generation failed",
            },
            { status: 500 }
        );
    }
}
