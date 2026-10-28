# Stash feature inventory (for website QA)

Generated 2026-10-27 from the dev app code (C:\Users\Tim\Desktop\Dev\Stash\dev). Used to check that the website promises only real features and forgets none. Flags: DEV-ONLY = in dev, not in prod · PARTIAL · HIDDEN · NOT BUILT.

NOTE: prod (stash.info) is June 2026 code with notes only. Dev has tasks, events, resources, trackers, kanban, goals, today, MCP, reminders, comments.

## Capture
- One dock box for Add and Ask; Stash guesses which (orange = add, blue = ask). `/` = search.
- AI picks item type: note, task, event, resource, tracker reading.
- Offline prefixes: task:, todo, event:, add person, important:, !!, due phrases, reminder/repeat words.
- Brain dump: ramble -> parent note + up to 12 child tasks/events/people, one Undo. Works from Slack, Siri, API.
- + menu: Photo, Record, Task, Note, Event, Resource, Data. Photos get AI caption + title.
- Drag & drop a file onto home (single file). Paste images into editor.
- Recorder: Brain Dump / Meeting / Ideation modes, live transcript, AI summary, "spotted N items". Online only.
- Chat save verbs: "remember to", "note that", "remind me to".
- Quick tracker logging: "weight 174.8".
- Siri: Ask Stash, Add to Stash, Send To Stash (iOS share menu). HIDDEN: Update Stash. PARTIAL: Paste to Stash.
- REMOVED: Apple Notes sync. NOT BUILT: Android/desktop share target, multi-file drop.

## Item types
- Notes (rich text). Tasks: due, P1-P4, status, assignee, repeats, reminders, checklists, Important boost. Convert note<->task<->event.
- Events: start/end, all-day, location, repeats, reminders, agenda/outcomes, week strip.
- Resources: Person, Vendor, Thing, Place, Agent (auto-classified). Person: birthday, emails, phones, socials, address, vCard export. Contacts stash.
- Trackers: log or list; 14 templates (Follow-ups, Weight, Sleep, Mood, Habit, Medication x2, Vitals, Expenses, Time, Symptoms, Dr Visits, Home maintenance, Inventory); charts, stats, goals, CSV export, AI handoff.
- Agents: Stashbot built in; catalog of 11 outside AIs (ChatGPT, Claude, Claude Cowork, ChatGPT Work, Perplexity, Gemini, Grok, Copilot, Mistral, DeepSeek, Meta AI) via hand-off. HIDDEN: "Ask & bring back".
- Chats stash (saved AI chats). Comments on any item.

## AI
- Auto title, tags, captions; auto stash/list. Filing after save.
- Smart tags: Important, Idea, Memory, Brain Dump, Decision, Meeting. Max 5 tags.
- "Task spotted" chip; Extract items macro.
- Writing macros: Re-write, Fix grammar, Add humor, Summary, Extract items, Who is mentioned; free-form ask with Accept/Reject.
- Get help on tasks: Agent drafts steps, plan with dates, draft a message, what am I missing.
- Milestone starter tasks on Goals.
- Ask Stash: Q&A over all items with sources; same brain serves app, Siri, Slack, voice, MCP.
- Activity/Decisions with Undo; close-call duplicate flags; "undo that" by command.
- Models: Gemini on Vertex AI + text-embedding-005; OpenAI realtime for voice.

## Voice
- Home mic assistant (create, add, edit, move, delete, share, find, read aloud, undo, record). Editor dictation/voice edit. Read aloud. Voice choice setting.

## Editor (Tiptap/ProseMirror)
- Headings, bold/italic/underline, sub/super, color, highlight, fonts, alignment, links, task lists, tables, resizable images, @mentions, checklists.
- Markdown mode + shortcuts, view source, import .md/.txt/.html, export .md/.html.
- Wiki links [[ with backlinks, hover preview, offline.
- Find in note, outline rail, Quick View.
- History with diffs. Retention: all 24h, daily 7d, weekly 4w, monthly 12m, yearly 3y. Recycle bin (online).
- Autosave 20s idle; 1 MB note cap. Editors light-theme only.

## Organization & views
- Stashes (Inbox, personal, Shared by you, Shared with you, Stash Guide, Chats, Contacts) + Lists per stash.
- Views (reorderable): Recent, Today, Notes, Tasks, Events, Trackers, Resources, Kanban, Goals, Graph. HIDDEN: month Calendar.
- Kanban by Lists/Stash/Status/Due/Assignee; wide screens, online.
- Graph depth 1-2 + bubble overview. Goals with milestones. Tags with # autocomplete.

## Search
- Live title search fanning out to other types/stashes. Natural-language filter ("P1 tasks due this week"), common ones offline.
- Contents Search: exact text + AI relevancy (Strong/Good/Loose).

## Sharing
- Share item or stash by email; Owner/Contributor/Viewer; up to 100 people. Share locked items (recipient needs passphrase).
- Public read-only link; "Save to Stash" follows the note. Locked notes can't be public.
- Assign tasks (push + "For you"). Comments with @mentions. Live co-editing with Accept/Reject.
- Deep links /v/<id>, web+stash:.

## Integrations
- Slack: capture, pin-to-save, save thread, summary, ask, find, edit, share, link channel. NOT BUILT: Marketplace listing.
- MCP server: Claude (.ai/Desktop/Cowork/Code), ChatGPT, Codex, Cursor, Grok/Grokbot, Hermes, OpenClaw, any MCP app. OAuth 2.1 or token. Tools: stash_add/ask/find/open/recent/update. Locked notes never returned.
- NO Obsidian or Notion integration. NO Groq. NOT BUILT: public REST API with personal tokens.

## Import / export
- Bulk export: Stash JSON or Google OKF zip (Markdown+YAML, todo.txt, .ics, .vcf, tracker CSVs, attachments).
- Per-item: link, text, .md, .html, .ics, .vcf, .csv, .json.
- Import: .md/.txt/.html into a note; contacts from .vcf / Outlook CSV. NOT BUILT: Notion, Evernote, Apple Notes, Obsidian, JSON re-import.

## Offline & sync
- Offline-first (Hive) with sync queue. Offline: all item types, wiki links, graph, common filters, tracker logging. Online only: AI, Kanban, bin, comments, recording.

## Platforms
- Web app installed as PWA on iOS, Android, Windows, macOS. No app stores. Siri on iPhone/iPad/Watch. Slack. MCP clients.

## Privacy & auth
- E2EE per item (X25519 + AES-GCM-256, PBKDF2 passphrase). Locked items out of AI, Slack, MCP, public links, graph.
- Passphrase set/change/hint/remove.
- Sign-in: Firebase email+password. NO Google/Apple sign-in.
- Waitlist signup code (5 letters) from website waitlist.
- Per-surface revocable tokens; Slack tokens KMS-encrypted; Turnstile on contact form.
- Anonymization: only emails/phones stripped on outside-AI hand-off. No general anonymization.
- Hosting: Google Cloud (Firebase, Vertex AI us-central1). Voice audio -> OpenAI.
- Delete account, delete cached data.

## Pricing
- NOTHING built: no plans, billing, tokens. Only an AI quota toast and 30 calls/min API limit.

## Notifications (DEV-ONLY)
- Web push reminders (before/at, snooze, done), assignment pushes.

## Do not promise on the website
Notion/Evernote/Obsidian/Apple Notes import · Google sign-in · "anonymized" AI · 50 restore points · Groq · app stores · Android/desktop share · public REST API · paid plans as live · Slack Marketplace · notification center · dark editors.
