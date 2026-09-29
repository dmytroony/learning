FROM local-ubuntu-base:24.04

WORKDIR /workspace

# Global npm packages (e.g. Claude Code) are installed as root during the base
# image build, but the container runs as ubuntu (1000:1000) — fix ownership so
# npm/claude can self-update without sudo.
RUN chown -R 1000:1000 /usr/local/nvm/versions/node/*/lib/node_modules

CMD ["tail", "-f", "/dev/null"]

