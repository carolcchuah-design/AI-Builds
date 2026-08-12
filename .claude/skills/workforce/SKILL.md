---
name: workforce
description: Entry point to Carol's AI workforce. Use whenever Carol brings any request to the team — content, operations/admin, learning, client/advisory, or research — and it isn't already obviously scoped to a single named agent. Invokes Jill, the orchestrator, who routes and compiles the result. Also trigger on /workforce.
---

# Workforce entry point

Carol's AI workforce is orchestrated by **Jill** (`.claude/agents/jill.md`). This skill's only job is to get her request to Jill and relay the result — the actual routing logic lives in Jill's own agent definition, not here, so it stays in one place.

## What to do

1. If Carol's request is clear, invoke the `jill` subagent via the Task tool with the full request as context.
2. If Carol names a specific agent directly ("have Christina look into X", "ask Monica what's on my calendar"), it's fine to invoke that agent directly instead of routing through Jill — she's the default when it's not obvious who owns something, not a mandatory layer for everything.
3. Relay Jill's compiled result back to Carol as-is; don't re-summarize what she already summarized.

## The roster, for reference

- **jill** — orchestrator / chief of staff
- **joey** — marketing & content (social, newsletter, executive one-pager)
- **journey-check**, **qa-check** — content skill gates
- **monica** — operations & admin (live Gmail + Google Calendar)
- **lisa** — education & learning
- **charlie** — client & advisory (controls `pipeline-tracker`, `proposal-drafter`, `presentation-buddy`, `meddpic-deal-clinic`)
- **christina** — research

## A note on Notion

Notion is **connected** as of this build. Joey has live Notion tools (search/fetch/query/create-pages/update-page) and files the social posts into Carol's actual content calendar after both gates pass, instead of producing copy-ready text for manual entry.

## Known limitation: nested dispatch

In this environment (Claude Code Remote), a subagent's own `Task` tool does not actually get granted to it at runtime, even when its `.md` frontmatter lists `Task` — confirmed independently with both Jill and Charlie, who each reported having only `Read`/`Write` available when they tried to dispatch to their own team/tools. Practical effect: Jill cannot actually delegate to Joey/Monica/etc. by calling Task herself, and Charlie cannot actually delegate to her four tools that way either.

Until/unless that changes, whoever is running this skill (the top-level session invoking `/workforce`) should do the dispatching directly — call each named agent (`joey`, `journey-check`, `qa-check`, `monica`, `charlie`, `christina`, or Charlie's four tools) as its own Agent/Task call, using Jill's or Charlie's routing logic (in their `.md` files) as the plan to follow, rather than expecting Jill or Charlie to fan out on their own. This has been tested and works reliably — it's one extra layer of manual orchestration, not a blocker. In a standard local Claude Code CLI/desktop session, nested subagent dispatch is a normal supported pattern and this workaround likely isn't needed — worth re-testing there.
