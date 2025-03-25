#!/usr/bin/env -S deno run --allow-all
import $ from "@david/dax"; // "dax-sh" in Node

const homePath = Deno.env.get("HOME");
const installPath = homePath + '/.local/bin';

// run a command
await $`mkdir -p ${installPath}`;
await $`curl -LsS https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz -o ${homePath}/nvim-linux-x86_64.tar.gz`;
await $`rm -rf ${installPath}/nvim`;
await $`tar -xzf ${homePath}/nvim-linux-x86_64.tar.gz -C ${installPath}`;
await $`rm -rf ${homePath}/nvim-linux-x86_64.tar.gz`;
