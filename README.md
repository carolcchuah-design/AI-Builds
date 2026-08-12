# AI-Builds
Prompts for AI Agents

## Content take workforce

Agents and orchestration for Carol's content pipeline: a raw dictated take goes in, and social posts, a client recap, and a newsletter draft come out — reviewed, gated, and handed back to Carol for the final call.

```
Me (dictate) → Simon (triage) → Chandler (multiply into 9 social + client recap + newsletter)
            → journey-check + qa-check (skill gates, both must pass)
            → Chandler (files social to Notion) / Rachel (reviews client recap) / Monica (newsletter timing)
            → Me (taste, judgment, final call)
```

### Agents (`.claude/agents/`)

| Agent | Role |
|---|---|
| `simon` | Chief of staff — reads the raw take, decides which lane owns it |
| `chandler` | Marketing & content — multiplies one take into 9 social posts, a client recap, and a newsletter draft, in Carol's voice |
| `journey-check` | Skill gate — checks each asset lands for its reader's actual stage (awareness/consideration/decision) |
| `qa-check` | Skill gate — checks voice, claims, formatting, links, length; nothing ships sounding like a language model wrote it |
| `rachel` | Reviews the client recap against what the client actually asked, before it goes near them |
| `monica` | Works out newsletter send timing against the rest of that week's calendar |

### Running it

From a Claude Code session in this repo, invoke the `content-take` skill (`/content-take`) with a pasted raw take. It runs the full pipeline above, stage by stage, and ends with a review package for Carol — nothing is auto-published.

Integrations (Notion, calendar) are instructions-only for now: agents produce copy-ready output and clear recommendations rather than calling live APIs. Wiring those up live is a natural next step once the pipeline itself is proven out.
