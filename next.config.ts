import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Pin Turbopack to this app so `public/` resolves here (avoids wrong root when multiple lockfiles exist). */
const appDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: appDir,
  },
  /** Browsers probe `/favicon.ico` by habit; serve the GV mark from our JPEG asset. */
  async redirects() {
    return [{ source: "/favicon.ico", destination: "/gv-favicon.jpg", permanent: false }];
  },
};

export default nextConfig;
