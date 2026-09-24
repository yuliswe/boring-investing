---
name: tunnel-dev
description: >-
  Start the Next.js dev server and a cloudflared quick tunnel, then verify
  the page renders correctly in the browser.
allowed-tools:
  - Bash
  - Read
  - mcp__claude-in-chrome__tabs_context_mcp
  - mcp__claude-in-chrome__tabs_create_mcp
  - mcp__claude-in-chrome__tabs_close_mcp
  - mcp__claude-in-chrome__navigate
  - mcp__claude-in-chrome__read_page
  - mcp__claude-in-chrome__computer
  - mcp__claude-in-chrome__read_console_messages
  - mcp__claude-in-chrome__read_network_requests
---

# Tunnel Dev

Start a local dev server, expose it through a cloudflared quick tunnel,
and verify the page renders correctly in a browser.

## Steps

### 1. Pick a port

Choose a port that is not already in use (default 3002). Check with:

```bash
lsof -i :3002 -sTCP:LISTEN
```

If the port is taken, increment until a free one is found.

### 2. Clear stale `.next` cache if needed

If a previous `npm run build` left artifacts in `.next`, the dev server
will serve broken CSS. Delete `.next` before starting:

```bash
rm -rf .next
```

Only do this if styles are broken or if a production build ran in this
worktree since the last dev session.

### 3. Start the dev server in the background

```bash
npm run dev -- -p <port> &
```

Wait for the "Ready" line in the output before proceeding.

### 4. Start cloudflared in the background

```bash
cloudflared tunnel --url http://localhost:<port> 2>&1 &
```

Watch the output for the tunnel URL (a line containing
`https://<random>.trycloudflare.com`). If no URL appears within 30
seconds, kill cloudflared and restart it.

### 5. Verify in the browser

Open the tunnel URL in a browser tab using the chrome automation tools.
Check the following:

- The page loads without a blank white screen.
- Styles are applied (the page is not unstyled raw HTML).
- No CSS 404 errors appear in the network tab or console.
- Navigate to at least one company page (append a stock symbol like
  `/MSFT/` to the tunnel URL) and confirm it renders with charts and
  styled cards.

If verification fails because styles are missing, follow the "If styles
break" procedure in the `local-dev` skill: kill the dev server, delete
`.next`, and restart from step 3.

### 6. Report the result

Tell the user:

- The tunnel URL.
- Whether the page rendered correctly.
- The port the dev server is running on.
- How to stop everything: `kill %1 %2` (or the specific PIDs).
