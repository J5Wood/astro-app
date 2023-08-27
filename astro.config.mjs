import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  output: "server",
  adapter: cloudflare()
});