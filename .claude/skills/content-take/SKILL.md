---
name: content-take
description: Runs Carol's full content pipeline end to end — from a raw dictated take through Simon, Chandler, the journey/QA skill gates, and the Rachel/Chandler/Monica owner actions, ending with a review package back to Carol. Use whenever Carol pastes a raw take (a hot take, musing, or thought-leadership fragment) and wants it turned into social posts, a client recap, and a newsletter draft. Also trigger on /content-take.
---

# Content Take Pipeline

This skill runs the workforce built around Carol's content flowchart: **Me → Simon → Chandler → (skill gates) → (Chandler / Rachel / Monica) → Me.**

The agents this pipeline uses (`simon`, `chandler`, `journey-check`, `qa-check`, `rachel`, `monica`) live in `.claude/agents/`. Invoke each one with the Task tool, using its exact name as the subagent type, passing along the outputs from the previous stage as context. Do not skip a stage or merge two stages into one call — each one is a distinct, auditable step, which is the point of the pipeline.

## Step 0 — Get the raw take

If Carol hasn't already pasted a raw take (a hot take, musing, or thought-leadership fragment — a transcript of what she dictated), ask for it before doing anything else. Don't proceed on a placeholder.

## Step 1 — Simon (triage)

Invoke `simon` with the raw take. Read its output:
- If `LANE: Not ready`, stop here. Report Simon's reasoning to Carol and ask what's needed before it can move — do not force it through the rest of the pipeline.
- Otherwise, carry Simon's brief (spine, lane, flags) into Step 2.

## Step 2 — Chandler (content multiplication)

Invoke `chandler` with Simon's brief and the original raw take. Chandler should return all 11 assets (9 social posts, client recap, newsletter draft) clearly labeled.

If Simon's lane was "Client-specific" rather than the default, tell Chandler explicitly to skip the social multiplication and produce only the client recap.

## Step 3 — Skill gates (journey-check and qa-check)

Invoke both `journey-check` and `qa-check` against Chandler's full asset set. These are independent checks — run both, don't let one substitute for the other.

- Collect every `FLAG` from both. If an asset is flagged by either gate, send it back to Chandler with the specific flag(s) for a targeted rewrite (not a full regeneration of all 11 assets) — then re-run just that asset through both gates again before proceeding.
- Only assets that pass both gates move to Step 4.
- Cap re-work at 2 rounds per asset. If something is still failing after two rewrite attempts, stop and flag it to Carol directly rather than looping indefinitely — this usually means the underlying take needs Carol's input, not another automated pass.

## Step 4 — Owner actions (parallel)

Once assets clear both gates, run the three owner actions. These don't depend on each other — invoke them independently:

1. **Chandler — files the nine social posts.** Since this system doesn't have a live Notion connection yet, have Chandler output the nine posts formatted exactly as they should be entered into the content calendar: platform, tone, tagged, ready to schedule. Present this as a copy-ready block, not a live action taken.
2. **Rachel — reviews the client recap.** Invoke `rachel` with the client recap and ask Carol (if not already known) for the original client ask/context Rachel needs to do a real review — don't let Rachel rubber-stamp without it. If Rachel's verdict is `NEEDS REVISION` or `HOLD`, surface that clearly rather than passing the recap through.
3. **Monica — thinks through newsletter timing.** Invoke `monica` with the newsletter draft. If Carol hasn't provided that week's calendar context, ask for it, but let Monica still produce a provisional recommendation flagged as such rather than blocking entirely.

## Step 5 — Back to me

Compile a single summary for Carol. This is the step no agent gets to do — the point is Carol applies taste, judgment, ambition, customer obsession, and heart to the finished package, not that the pipeline decides anything on her behalf. The summary should include:

- The final 9 social posts, client recap, and newsletter draft (post-gate, post-rewrite versions).
- Rachel's verdict on the client recap, and Monica's recommended send window for the newsletter, both called out clearly — these are the two decisions Carol needs to weigh in on before anything ships.
- Anything held or escalated during the pipeline (failed re-work, missing context Rachel/Monica needed, Simon's "not ready" calls).

Do not present this as "done" or "ready to publish." Present it as ready for Carol's review — she decides what actually goes out.
