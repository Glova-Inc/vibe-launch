import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASSWORD;

  // ベーシック認証が無効（環境変数未設定）の場合はスキップ
  if (!user || !pass) {
    return NextResponse.next();
  }

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1] || "";
    const decoded = atob(authValue);
    const colonIndex = decoded.indexOf(":");
    if (colonIndex !== -1) {
      const authUser = decoded.substring(0, colonIndex);
      const authPass = decoded.substring(colonIndex + 1);

      if (authUser === user.trim() && authPass === pass.trim()) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Vibe Launch"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
