#!/usr/bin/env -S deno run --allow-all
import $ from "@david/dax"; // "dax-sh" in Node

// const homePath = Deno.env.get("HOME");
// const installPath = '/opt';

// run a command
await $`curl -LsS https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz -o $HOME/nvim-linux-x86_64.tar.gz`;
await $`sudo tar -xzf $HOME/nvim-linux-x86_64.tar.gz -C $/opt`;
await $`rm -rf $HOME/nvim-linux-x86_64.tar.gz`;
await $`echo 'export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH:/opt/nvim-linux-x86_64/bin' >> $HOME/.zshrc`;
