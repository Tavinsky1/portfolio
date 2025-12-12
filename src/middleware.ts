import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.inksky.net";
const APEX_HOST = "inksky.net";

function normalizeHost(host: string | null): string {
  if (!host) return "";
  return host.toLowerCase().replace(/:\d+$/, "");
}

export function middleware(req: NextRequest) {
  const host = normalizeHost(req.headers.get("host"));

  // Enforce canonical host in production/custom domain.
  // (Skip localhost, preview *.vercel.app, etc.)
  if (host === APEX_HOST) {
    const url = req.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
