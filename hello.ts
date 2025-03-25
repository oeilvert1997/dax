#!/usr/bin/env -S deno run --allow-all
import $ from "@david/dax"; // "dax-sh" in Node

// run a command
await $`mkdir -p ~/mkdirtest2`
// await $`curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz`;
// await $`mkdir -p ~/.local/bin`
// await $`rm -rf ~/.local/bin/nvim`;
// await $`tar -C ~/.local/bin -xzf nvim-linux-x86_64.tar.gz`;
