# CF1 — Topic Punchlist

> This summarizes the 2024 and 2025 semesters. It is a historical artifact.

## Week 1, Lecture 1 — Course Overview
- Course structure and arc (JS → project → Python → project → final)
- Assessment (homework 60%, mini projects 20%, final 20%; no tests)
- Tools (p5.js editor, Exercism, GitHub)
- "Type everything yourself" rule (applies to internet code and GenAI)
- Collaboration policy
- Document submission format (plain text / Markdown only)
- Course identity question ("is code my thing?")
- Learning to learn: characterize unknowns, iterate on strategies
- Design and communication: have a story about why you built it
- Anti-gatekeeping stance

## Week 1, Lecture 2 — Intro to p5.js
- What code is (unambiguous instructions to a computer)
- Language families (C-family, scripting languages; p5.js ≠ JavaScript)
- p5.js editor walkthrough
- `setup()` and `draw()` execution model
- Function anatomy: keyword, name, `()`, `{}`
- Arguments / parameters (positional; must look up which is which)
- Reading the docs as a first-class skill
- 2D shapes, stroke, fill

## Week 1, Lecture 3 — Variables, Animation, and Interaction
- `const` vs `let`; ban on `var`
- Declare → initialize → use sequence
- Silent default value bug (use before initialize)
- `=` vs `===` (never use `==`)
- `setup()` once, `draw()` at 60fps
- `frameCount` + modulo for cyclic animation
- Interaction tiers: state variables → query functions → event handlers
- Dot notation preview (`createGraphics`)
- Pedagogy: show finished demo before teaching

## Week 2 — Conditionals, If/Else, Boolean Expressions
- If-statement anatomy: condition in `()`, body in `{}`
- `else` and `else if` chaining
- `else` must be last; one branch guaranteed to run
- Boolean operators: `&&`, `||`
- Truthy and falsy values
- Short-circuit evaluation hazard

## Week 3 — Objects and Classes (JavaScript)
- Pass by value (primitives) vs pass by reference (objects, arrays)
- Spread operator for shallow copy (`{...obj}`)
- Objects as data bundles
- Class anatomy
  - `constructor()`
  - Instance fields (`this.x`)
  - Methods
  - Instantiation with `new`
- "Rubber stamp" metaphor (class = stamp, instance = object)
- Running example: Boids (iterative build across lectures)
- Polymorphism: shared interface, different implementations

## Week 4, Lecture 3 — Lists (JavaScript)
- Array literal syntax; zero-indexing; valid index range `0` to `N-1`
- `array.length`
- For-loop iteration (`for (let i=0; ...)`)
- Array methods (functional style)
  - `forEach`
  - `filter`
  - `map`
  - `reduce`
- Method chaining
- Arrow function callbacks
- Destructuring (objects and arrays, on assignment and in function params)
- Spread operator for object copy with field overrides
- Named parameters via object destructuring

## Week 5, Lecture 1 — Mini Project A
- Project structure and deliverables (code + doc or presentation)
- Self-defined scope
- Creativity requires constraints (Stravinsky)
- No vibe coding for this project
- Moving to local p5.js dev (VS Code, out of browser sandbox)

## Week 5, Lecture 2 — Advanced Objects and Lists (JavaScript)
- Null and undefined ("billion dollar mistake")
- Where OO shines (games, social apps, interactive art)
- OO modeling exercise: identify the classes in a domain
- Polymorphism (formal interfaces in TypeScript; duck typing in JS)
- `filter` / `map` / `reduce` (deeper treatment, chaining example)
- Destructuring (continued)

## Week 5, Lecture 3 — Debugging and Good Coding Practice
- Bounded rationality; you never fully know what you're building
- "Draw toilets" principle (make a bad start to get unstuck)
- Thinking vs "Thinking" vs Action; active externalization
- Perfect is the enemy of the good; prototype first
- Larry Wall's three virtues: laziness, impatience, hubris
- Bug taxonomy: write-time, build-time, runtime, user reports
- Error messages (usually unhelpful; learn to read them)
- Debugging strategies
  - Search the error
  - Rubber duck
  - Print statements
  - Log statements
  - Proper debugger (breakpoints, step over/into/out)
- Islands of certainty (divide and conquer)
- Off-by-one errors / fencepost problem
- "Forever problems" are rare; use undo, git, tests
- Bias toward progress; uncertainty is normal

## Week 6, Lecture 1 — Local Development
- Why leave the browser editor
- Local dev stack: editor (VS Code/Cursor), CLI, git
- Language runtime + package manager pattern
  - JS: Node + npm
  - Python: python3 + poetry
  - Rust: rustup + cargo
- Interpreted vs compiled languages
- Git concepts: commit, push, pull, remote
- Setting up a dev machine (Homebrew / Chocolatey)

## Week 6, Lecture 2 — Python Introduction
- Python syntax vs JavaScript
  - Indentation is semantically meaningful
  - Colon introduces a block
  - No parens around boolean expressions
  - `def` / `elif` keywords
  - Implicit variable declaration
  - `snake_case` convention
- Types: int vs float, `True`/`False`, strings, tuples, sets
- Collection literals: list `[]`, dict `{}`
- For-loops: `for value in collection`
- `enumerate()` for index + value
- `range()` (start, stop, step)
- f-strings
- Dictionaries (intro)
- `SCREAMING_CAPS` for constants (convention only)
- Setup: Thonny vs Homebrew

## Week 7, Lecture 1 — Python Lists, Dicts, Functions
- List methods: `append`, `pop`, `remove`, `del`
- Negative indexing (`list[-1]`)
- `len()` as built-in (not a method)
- Try/except (vs JS try/catch); named exception; traceback
- Dictionary operations: safe access (`.get`), remove (`del`, `pop`, `clear`),
  iteration (`.keys`, `.values`, `.items`)
- Functions: `def`, `return`, multiple params
- Default parameter values
- Keyword arguments; `*` to force named-only params
- Required keyword args (no default)
- Mutability recap: immutable types passed by value, mutable by reference

## Week 7, Lecture 2 — Python Classes
- Class syntax vs JavaScript
  - `__init__(self, ...)` constructor
  - `self` as first argument on all methods
  - `_foo` / `__foo` naming conventions for private-ish fields
- Instantiation without `new`
- Subclassing ("is a" relationships)
- Composition vs inheritance (when "is a" breaks down)
- Programming paradigms
  - Object-oriented
  - Functional (data + functions separated; great for algorithms)
  - Declarative (e.g. HTML)
  - Logic/constraint
- "No one true way"; paradigm choice depends on problem and language

## Week 12, Lecture 1 — Vibe Coding
- Vibe coding as a spectrum (full generation → tutoring only)
- Tools landscape: browser chatbots, vibe platforms (Lovable, Replit, Figma
  Make), in-editor agents (Cursor, Copilot, Claude Code)
- Trade-offs: comprehension vs speed
- Live demo: Roboworld built in class with git snapshots
- Caveat: content has a short shelf life
