#!/usr/bin/env -S deno run --allow-all
import $ from "@david/dax"; // "dax-sh" in Node

const homeDir = Deno.env.get("HOME");
const installDir = homeDir + "/.local/bin;

// run a command
await $`echo ${homeDir}`;
await $`echo ${installDir}`;
// await $`curl -L https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz -o ${HOME}`;
// await $`mkdir -p ${HOME}/.local/bin`;
// await $`rm -rf ${HOME}/.local/bin/nvim`;
// await $`tar -C ${HOME}/.local/bin -xzf ${HOME}/nvim-linux-x86_64.tar.gz`;
// await $`rm ${HOME}/nvim-linux-x86_64.tar.gz`;
