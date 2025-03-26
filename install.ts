#!/usr/bin/env -S deno run --allow-all
import $ from "@david/dax"; // "dax-sh" in Node

const homePath = Deno.env.get("HOME");
const installPath = '/opt';

// run a command
await $`curl -LsS https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz -o ${homePath}/nvim-linux-x86_64.tar.gz`;
await $`sudo tar -xzf ${homePath}/nvim-linux-x86_64.tar.gz -C ${installPath}`;
await $`rm -rf ${homePath}/nvim-linux-x86_64.tar.gz`;
await $`echo 'export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH:/opt/nvim-linux-x86_64/bin' >> ${homePath}/.zshrc`;
