import { NextRequest, NextResponse } from "next/server";

interface WaitlistData {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  privacyAgreed: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as WaitlistData;

    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { success: false, message: "必須項目を入力してください。" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "正しいメールアドレスを入力してください。" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.SLACK_WEBHOOK_URL_WAITLIST;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: "Vibe Launch: 新しい説明会申込",
                emoji: true,
              },
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*お名前:*\n${body.name}` },
                { type: "mrkdwn", text: `*メール:*\n${body.email}` },
                {
                  type: "mrkdwn",
                  text: `*会社名:*\n${body.company || "未入力"}`,
                },
                {
                  type: "mrkdwn",
                  text: `*役職:*\n${body.role || "未入力"}`,
                },
              ],
            },
            ...(body.message
              ? [
                  {
                    type: "section" as const,
                    text: {
                      type: "mrkdwn" as const,
                      text: `*参加動機:*\n${body.message}`,
                    },
                  },
                ]
              : []),
            {
              type: "context",
              elements: [
                {
                  type: "mrkdwn",
                  text: `送信日時: ${new Date().toLocaleString("ja-JP", {
                    timeZone: "Asia/Tokyo",
                  })}`,
                },
              ],
            },
          ],
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: "お申し込みを受け付けました。",
    });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { success: false, message: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
