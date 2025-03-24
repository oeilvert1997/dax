# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/devcontainers/base:ubuntu

RUN chsh -s /bin/zsh vscode

RUN curl -fsSL https://deno.land/install.sh | DENO_INSTALL=/usr/local sh

USER vscode

RUN mkdir -p ~/.zsh/completion \
  && touch ~/.zsh/completion/_deno \
  && deno completions zsh > ~/.zsh/completion/_deno \
  && echo '' >> ~/.zshrc \
  && echo 'fpath=(~/.zsh/completion $fpath)' >> ~/.zshrc \
  && echo 'autoload -U compinit' >> ~/.zshrc \
  && echo 'compinit' >> ~/.zshrc
