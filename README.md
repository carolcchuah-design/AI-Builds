# AI-Builds
Prompts for AI Agents

## Carol's AI workforce

Ava orchestrates a team of specialists across content, operations, learning, client/advisory work, and research. Bring any request to the team; Ava decides who owns it.

```
                              ┌─────────────────────────┐
                    Carol ──▶ │   Ava (orchestrator)     │
                              └────────────┬─────────────┘
             ┌───────────────┬─────────────┼─────────────┬───────────────┐
             ▼               ▼             ▼             ▼               ▼
          Joey            Monica          Lisa         Charlie       Christina
     (content, multi-   (ops & admin,  (education &  (client &      (research)
      format, in Carol's  live Gmail +   learning)     advisory)
      voice)              Calendar)
             │                                            │
             ▼                                            ▼
   journey-check + qa-check                  pipeline-tracker · proposal-drafter
   (skill gates)                             presentation-buddy · meddpic-deal-clinic
```

### Agents (`.claude/agents/`)

| Agent | Role |
|---|---|
| `ava` | Orchestrator / chief of staff — reads any request, routes it, compiles the result |
| `joey` | Marketing & content — drafts social posts, a newsletter, and an executive one-pager simultaneously, leveraging `carol-li-voice` |
| `journey-check` | Skill gate — checks each asset lands for its reader's actual stage (awareness/consideration/decision) |
| `qa-check` | Skill gate — checks voice, claims, formatting, links, length before anything ships |
| `monica` | Operations & admin — connected to Carol's real Gmail and Google Calendar; confirms before any calendar action visible to others |
| `lisa` | Education & learning — curates and condenses learning material into actionable takeaways |
| `charlie` | Client & advisory — reviews client-facing content against what the client actually asked; controls four single-task tools below |
| `christina` | Research — sources, verifies claims, resolves `[NEEDS SOURCE]` flags |
| `pipeline-tracker` | *(Charlie's tool)* Deal/account status, stale-deal flags, weekly priorities |
| `proposal-drafter` | *(Charlie's tool)* Drafts a client proposal from a brief, in `carol-gsd-voice` |
| `presentation-buddy` | *(Charlie's tool)* Structures presentation narrative and talk tracks (not the visual deck) |
| `meddpic-deal-clinic` | *(Charlie's tool)* MEDDPIC health check on a specific deal |

### Running it

From a Claude Code session in this repo, invoke the `workforce` skill (`/workforce`) with any request. It hands off to Ava, who routes to the right specialist(s) and compiles a single result — nothing publishes or sends without Carol's sign-off. You can also address any agent by name directly (e.g. "ask Christina to look into X") without going through Ava.

**Known limitation (Claude Code Remote):** subagents don't actually get their own `Task` tool in this environment, even when their `.md` file lists it — confirmed with both Ava and Charlie. So true self-dispatch (Ava calling Joey, Charlie calling her four tools) doesn't fire on its own here; whoever's running the session should call each specialist directly instead, using Ava's/Charlie's routing logic as the plan. Tested, reliable, just one extra manual layer. Worth re-testing in a standard local Claude Code CLI/desktop session, where nested dispatch is normally supported.

### Integrations

- **Gmail + Google Calendar**: live, connected to Monica. Read/search/draft/organize freely; anything visible to another person (creating/editing/deleting an event, responding to an invite) requires Carol's confirmation first.
- **Notion**: live, connected to Joey. He searches for the real content calendar, reads its actual schema, and files social posts into it after both gates pass — no more copy-ready fallback.
