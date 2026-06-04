import { defineConfig } from 'vite';

const base = process.env.BASE_PATH ?? '/silentparty/';

export default defineConfig({
  base,
  plugins: [
    {
      name: 'redirect-base',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const withoutSlash = base.replace(/\/$/, '');
          if (req.url === withoutSlash) {
            req.url = base;
          }
          next();
        });
      },
    },
  ],
});
