---
name: local-dev
description: >-
  How to serve the site locally and expose it through a cloudflared tunnel.
  Use this skill whenever you need to run the dev server, create a tunnel,
  or verify pages in a browser — especially before reporting visual work
  as complete. Also covers the `.next` cache conflict between dev and
  production builds.
---

# Local Development and Tunnel Serving

## The `.next` cache conflict

`npm run dev` and `npm run build` both write to the `.next` directory, but
they produce incompatible artifacts. The dev server serves CSS at virtual
paths such as `/_next/static/css/app/layout.css`, while the production
build generates hashed filenames such as `37a23d0fb53b8215.css`. Running
`npm run build` while the dev server is running (or without clearing the
cache afterward) corrupts the dev server's state and causes CSS 404s,
which makes the page render without any styles.

### If styles break

1. Kill the dev server.
2. Delete the `.next` directory: `rm -rf .next`
3. Restart the dev server: `npm run dev -p <port>`

The first compile after clearing the cache takes roughly two minutes
because Next.js has to rebuild everything from scratch.

### Safe workflow

- Run `npm run dev` for local development and `npm run build` for CI or
  deploy verification, but not both in the same worktree at the same time.
- If you need to run a production build to test the static export, stop the
  dev server first, run `npm run build`, inspect the output, then delete
  `.next` and restart the dev server before resuming development.

## Serving through a cloudflared tunnel

Use a cloudflared quick tunnel to expose the local dev server so that
browser automation tools (or the user's phone) can reach it.

```bash
npm run dev -- -p 3002 &

cloudflared tunnel --url http://localhost:3002 &
```

The tunnel prints a URL like `https://<random>.trycloudflare.com`.
Append the route path (for example `/UBER`) to reach a specific page.

### Tunnel troubleshooting

- If cloudflared completes its "precheck" but never registers a connector
  (no URL appears after 30 seconds), kill the process and restart it.
- Quick tunnels are ephemeral — the URL changes every time you restart
  cloudflared. Update any browser tabs or references accordingly.
- The tunnel proxies to localhost, so the dev server must be running on the
  same port you gave to `--url`.

## Verifying in the browser

After starting the tunnel, navigate to the tunneled URL and take a
screenshot to confirm that styles load correctly. A CSS 404 in the network
tab or an unstyled page means the `.next` cache is corrupted — follow the
"If styles break" steps above.
