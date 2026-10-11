// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://hi.mcenahle.dev",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  server: { port: 5000 },
  integrations: [icon()],
});
