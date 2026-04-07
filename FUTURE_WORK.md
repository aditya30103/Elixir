# Future Work & Improvement Ideas

Tracked items from the closing review — improvements deferred post-hackathon.

---

## Frontend Performance

- **Dead server-side data loading** — `app/dashboard/page.tsx` loads JSON from disk and passes it as props, but child components (`ElyxDashboard`, `MemberDashboard`) ignore the props and either import their own data or use hardcoded values. Fix the data flow or remove the server-side reads.
- **No list virtualization** — `app/fullstory/page.tsx` renders all story items at once via `.map()`. For a long conversation log this is fine now, but a windowed list (e.g. `react-window`) would help if data grows.
- **Unnecessary `"use client"` on `Navbar.tsx`** — no hooks or event handlers; could be a server component.
- **No fetch timeout in `app/api/why/route.ts`** — add `AbortController` with a 30s timeout so a hanging backend doesn't stall the frontend indefinitely.
- **Remove unused npm dependencies**: `framer-motion`, `react-chrono`, possibly `@radix-ui/react-dialog`, `@radix-ui/react-scroll-area`.

## Frontend Code Quality

- **`MemberDashboard` uses hardcoded quarterly data** — should read from `data/cleaned_member.json` to reflect the actual generated journey.
- **`NarrativePanel.tsx`** uses `GET` but the API route only handles `POST` — if this component is ever re-enabled, fix the HTTP method.
- **Next.js 15 `params` as Promise** — `app/journey/[id]/page.tsx` accesses `params` synchronously; should be awaited per the Next.js 15 app router spec.
- **BP chart is medically misleading** — `BpChart.tsx` stacks systolic on top of diastolic (stackId="a"), which misrepresents blood pressure. Grouped bars or a line chart would be more appropriate.
- **No error boundaries** — add `error.tsx` files to route segments and a `not-found.tsx` for 404s.
- **Add loading states** — add `loading.tsx` files to route segments that fetch data.
- **App title** — `app/layout.tsx` metadata still says "Rohan Patel Journey"; should be "Elyx AI" or dynamic.

## Backend Quality

- **Silent initialization failure in `memory.py`** — if ChromaDB or the embedding model fails on init, the object is created in a broken state (missing attributes). Should re-raise or set a failure flag.
- **No relevance threshold on RAG retrieval** — `rag_pipeline.py` retrieves 10 chunks regardless of semantic distance. Add a minimum similarity score to avoid returning irrelevant context.
- **`orchestrator.py` f-string syntax** — line 63 uses nested quotes inside an f-string, a Python 3.12+ feature. The Dockerfile uses Python 3.11. This will cause a `SyntaxError` if Phase 2 generation is run inside Docker. Rewrite as a separate variable.
- **Deprecated `.dict()` calls** — `orchestrator.py` lines 188, 200 use Pydantic v1-style `.dict()`. Replace with `.model_dump()` for Pydantic v2 compatibility.
- **Use `logging` module** — replace all `print()` statements with `logging` for level-controlled, structured output.
- **Dead code** — `formatter.py:create_final_document()` references a non-existent file (`store/conversation_refined.txt`). Remove it.
- **`models.py:AgentOutput`** is explicitly noted as unused — remove it.
- **`run_phase3.py`** passes the entire 108KB conversation log into every episode's analysis prompt — extremely token-expensive. Filter to relevant weeks before each task.
- **`memory.py:persist_directory` parameter** is accepted but ignored (hardcoded path used instead) — remove dead parameter.

## Repo / Infrastructure

- **Add a `LICENSE` file** — repo has no license (defaults to all rights reserved). Add MIT or Apache 2.0 if open-source.
- **Deduplicate identical data files** — `backend/store/full_conversation_log.json` and `frontend/data/fullStory.json` are identical (109KB each). The frontend could reference the backend copy or vice versa.
- **CI/CD** — no GitHub Actions. A simple workflow running `npm run build` on PRs would catch regressions early.
- **Health check endpoint** — `GET /` returns a message, but a `/health` endpoint that verifies ChromaDB is loaded and the embedding model is ready would be more useful for HF Spaces health probes.
- **`pyproject.toml` is incomplete** — only declares `crewai[tools]`; missing all other dependencies. Either keep it in sync with `requirements.txt` or remove it (Dockerfile uses `requirements.txt`).
