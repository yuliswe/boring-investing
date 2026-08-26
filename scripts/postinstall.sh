#!/bin/sh
# Local developer conveniences only; never fail `npm install`/`npm ci`, because
# this also runs in CI where Homebrew is absent and the git config is not needed.

git config core.hooksPath scripts/git-hooks 2>/dev/null || true

if [ -z "$CI" ] && command -v brew >/dev/null 2>&1; then
  brew install dotenv-linter || true
fi

exit 0
