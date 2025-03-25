#!/usr/bin/env -S deno run --allow-all
import $ from "@david/dax"; // "dax-sh" in Node

const homeDir = Deno.env.get("HOME");
const installDir = homeDir + '/.local/bin';

// run a command
await $`mkdir -p ${installDir}`;
await $`curl -L https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz -o ${homeDir}`;
await $`rm -rf ${installDir}/nvim`;
await $`tar -xzf ${homeDir}/nvim-linux-x86_64.tar.gz -C ${installDir}`;
await $`rm -rf ${homeDir}/nvim-linux-x86_64.tar.gz`;
