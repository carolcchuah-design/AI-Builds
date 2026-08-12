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

Joey's content-filing step and the broader workforce are written to use a live Notion connection when one is available in the session. As of this build, Notion is **not connected** for this account — `ListConnectors`/`SearchMcpRegistry` show it as available in the connector directory but not installed. Until Carol connects it (via her claude.ai connector settings), filing stays instructions-only: copy-ready output instead of live writes. No code change is needed here once it's connected — Joey and Jill already check for it.
