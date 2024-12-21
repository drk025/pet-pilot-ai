// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Important for devcontainer
    port: 4321
  }
});
