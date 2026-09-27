---
name: code-faq
description: Update BLOG.md (the repo's monthly mini blog built from git log) by delegating to the code-faq agent. Use when the user types /code-faq or asks to write to / refresh the blog.
argument-hint: "[what to write, e.g. 'write to blog']"
---

Delegate this to the `code-faq` agent (defined in `.claude/agents/code-faq.md`) with the Agent tool. Do not edit BLOG.md yourself.

In the prompt to the agent, include:
- The user's request: $ARGUMENTS (if empty: "bring BLOG.md up to date with git history since the last blog update").
- Any work from this session that is not in git log (e.g. changes made on GitHub or other services), with dates.
- The rule from CLAUDE.md: newest content on top, never append posts at the bottom; update an existing post for the current month in place.
- Never include keys, passwords, or connection strings. Do not commit.

When the agent finishes: check `git diff --stat BLOG.md`, check the diff contains no secrets, then give the user a short summary and ask whether to commit and push.
