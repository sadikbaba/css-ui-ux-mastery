# Universal Project-Based Roadmap

## From CSS, UX Psychology & Design Principles to Production-Ready Frontend Interfaces

**Target Audience:** Complete beginners → Job-ready Frontend / UI Engineers  
**Focus Areas:**

- CSS → How the interface is visually built
- UX Psychology → How users understand and interact with it
- Graphic/Design Principles → Spacing, hierarchy, contrast, balance
- Accessibility → Making it usable for more people
- Frontend Development → Turning the design into a real working interface

**Core Philosophy**  
Every concept is learned by building real projects. Theory exists only to serve the project.  
You never move to the next phase until the current project is:

- Built
- Deployed (when appropriate)
- Documented
- Tested
- Refactored
- Explained in your own words
- Rebuilt from memory without tutorials

---

## Learning Cycle (Mandatory for Every Phase)

1. Learn the concept
2. Understand why it exists
3. Explain the intuition
4. Learn the theory
5. Practice with exercises
6. Build a small Python project (when applicable)
7. Decide whether the project requires a backend
8. If yes → Build Django + Django REST Framework backend
9. Build the web application using React
10. Build the mobile application using React Native
11. Decide whether offline support is appropriate
12. If yes → Implement offline storage + synchronization
13. Deploy everything that should be deployed
14. Refactor and improve the code
15. Write tests when appropriate
16. Write documentation
17. Explain the project in your own words
18. Rebuild the project from memory (no tutorial)
19. Only then move to the next phase

---

# Phase 1: CSS Foundations – Building the Visual Layer

### Phase Overview

- **Goal:** Master the fundamental building blocks of how interfaces are visually constructed with CSS.
- **Estimated study time:** 3–4 weeks (15–20 hours/week)
- **Prerequisites:** Basic computer literacy. No coding experience required.
- **Expected outcome:** You can create clean, well-structured static visual interfaces from scratch and explain every CSS decision you make.

### Concepts

#### 1. The Box Model

- **What it is:** Everything in CSS is a rectangular box consisting of content, padding, border, and margin.
- **Why it exists:** The web was designed as a document medium. Boxes are the universal unit of layout.
- **Real-world analogy:** A picture frame – the photo is the content, the mat is padding, the frame is the border, the wall space around it is margin.
- **Visual intuition:** Draw nested rectangles on paper. Change one value and watch everything shift.
- **Mathematical explanation:** Total width = content-width + padding-left + padding-right + border-left + border-right + margin-left + margin-right (when `box-sizing: content-box`). With `border-box` the math becomes simpler: total width = declared width.
- **Common mistakes:** Forgetting `box-sizing: border-box`, mixing margin collapse, using fixed widths without understanding content size.
- **Best practices:** Always set `box-sizing: border-box` globally. Prefer padding over margin for internal spacing. Use logical properties (`margin-inline`, `padding-block`) for better internationalization.

#### 2. Selectors & Specificity

- **What it is:** The mechanism CSS uses to target HTML elements.
- **Why it exists:** Separation of concerns – structure (HTML) vs presentation (CSS).
- **Real-world analogy:** Postal addresses that can be very specific (“the red house on the corner of 5th and Main”) or general (“all houses”).
- **Visual intuition:** Specificity is a score: Inline (1000) > ID (100) > Class/Attribute/Pseudo (10) > Element (1).
- **Common mistakes:** Overusing `!important`, creating overly specific selectors that become unmaintainable, relying on tag selectors too heavily.
- **Best practices:** Prefer classes. Keep specificity low. Use BEM or similar naming when projects grow.

#### 3. Typography & Color

- **What it is:** Fonts, line-height, letter-spacing, color systems, contrast.
- **Why it exists:** Text is the primary content on most interfaces. Color conveys meaning and hierarchy.
- **Real-world analogy:** Book design – type size, leading, and color guide the eye through the story.
- **Mathematical explanation:** Ideal line length ≈ 45–75 characters. Line-height often 1.4–1.6× font-size. Contrast ratio (WCAG) is calculated from relative luminance.
- **Common mistakes:** Using pure black (#000) on pure white, insufficient contrast, too many typefaces, tiny body text.
- **Best practices:** Limit to 2 typefaces. Use a type scale (1.25 or 1.333 ratio). Always check contrast.

#### 4. The Cascade & Inheritance

- **What it is:** How conflicting CSS rules are resolved and how properties flow from parent to child.
- **Why it exists:** CSS was designed to allow progressive enhancement and theme overrides.
- **Real-world analogy:** Company policy hierarchy – head office rules can be overridden by department rules which can be overridden by team rules.
- **Common mistakes:** Accidental global styles that leak, not understanding `inherit` vs `initial` vs `unset`.

### Practice

- **Short exercises:** Recreate the box model with colored borders only using padding/margin. Create 5 different specificity battles and predict the winner.
- **Coding exercises:** Build a simple “Business Card” page using only HTML + CSS. No frameworks.
- **Thinking questions:** Why does margin collapse only happen vertically? What problem does `box-sizing: border-box` solve that the original model created?
- **Debugging exercises:** Given a broken layout where text overflows, diagnose whether the issue is box model, white-space, or overflow property.

### Architecture Decision

**Does this project require a backend?**  
**No.**  
This phase is purely about visual construction. Data is static. There is no user-generated content, authentication, or persistence needed.

### Web Application (React)

**Project Name:** “Digital Business Card”

**Features:**

- Personal photo, name, title, short bio
- Social links
- Dark/light mode toggle (using CSS variables)
- Responsive from 320px to 1440px+

**Folder structure:**

```
digital-business-card/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Avatar.jsx
│   │   └── ThemeToggle.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── card.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

**UI Ideas:** Clean centered card with subtle shadow, elegant typography, soft color palette.

### Mobile Application (React Native)

Same “Digital Business Card” as a native-feeling mobile screen.

- Use `StyleSheet` or styled-components equivalent
- Safe area handling
- Haptic feedback on theme toggle (if desired)

### Offline Support

**Not required.** The content is static and ships with the app. No data synchronization needed.

### Deployment

- **Web:** Deploy React build to Vercel or Netlify (free tier).
- **Mobile:** Build APK/IPA for personal testing (Expo recommended for speed). No store submission yet.
- No backend or database.

### Testing

- Manual visual regression across browsers (Chrome, Firefox, Safari)
- Lighthouse accessibility & performance audit (target ≥ 95)
- Responsive testing with browser dev tools + real devices

### Refactoring

- Extract CSS variables for colors, spacing, and type scale
- Convert magic numbers into a spacing scale (4px, 8px, 12px, 16px, 24px, 32px…)
- Replace any remaining pixel units with relative units where sensible

### Documentation

- README with live demo link, screenshots, design decisions
- Comment the “why” behind key CSS choices (not the “what”)

### Portfolio

**GitHub appearance:**

- Clean README with before/after screenshots
- Live demo badge
- Skills demonstrated: CSS Box Model, Specificity, Custom Properties, Responsive Design, React basics, React Native basics

### Reflection

- Why does the box model exist in the form it does?
- What problem does low specificity solve in large codebases?
- Can I rebuild this entire card from memory in under 90 minutes?

### Milestone Challenge

Create three variations of the same business card (minimal, bold, elegant) using only CSS variables to switch themes. No JavaScript theme logic beyond a class toggle.

---

# Phase 2: Layout Mastery – Flexbox, Grid & Responsive Design

### Phase Overview

- **Goal:** Gain complete control over how elements are arranged in two dimensions and across viewport sizes.
- **Estimated study time:** 3–5 weeks
- **Prerequisites:** Phase 1 completed and rebuilt from memory
- **Expected outcome:** You can layout any common interface (navigation, cards, dashboards, galleries) without fighting the CSS.

### Concepts

#### 1. Flexbox

- **What it is:** One-dimensional layout model for distributing space and aligning items.
- **Why it exists:** Floats and positioning were never designed for modern component layouts.
- **Real-world analogy:** People standing in a line who can stretch, shrink, or pack themselves according to rules you set.
- **Visual intuition:** Main axis vs cross axis. Flex-grow, flex-shrink, flex-basis form a powerful triad.
- **Mathematical explanation:** Available free space is distributed according to flex-grow factors. Shrink is proportional to flex-shrink × flex-basis.
- **Common mistakes:** Forgetting `min-width: 0` on flex children that contain long text, using flex when Grid is more appropriate.
- **Best practices:** Use Flexbox for components and one-dimensional flows. Prefer `gap` over margins between items.

#### 2. CSS Grid

- **What it is:** Two-dimensional layout system.
- **Why it exists:** Complex page layouts and overlapping designs were extremely difficult before Grid.
- **Real-world analogy:** A spreadsheet or city grid where you place items into cells and can span multiple cells.
- **Visual intuition:** Explicit tracks vs implicit tracks. `fr` unit is “fraction of free space”.
- **Mathematical explanation:** `1fr` = remaining space / sum of all fr units after fixed sizes are accounted for.
- **Common mistakes:** Overusing Grid for simple one-dimensional lists, not understanding grid areas.
- **Best practices:** Use Grid for page-level and two-dimensional component layouts. Combine with Flexbox inside cells.

#### 3. Responsive Design & Media Queries / Container Queries

- **What it is:** Adapting layout and typography to different screen sizes and container sizes.
- **Why it exists:** Users access the web from phones, tablets, laptops, and large monitors.
- **Real-world analogy:** A restaurant that rearranges tables and menus depending on whether 4 or 40 people arrive.
- **Common mistakes:** Designing only for desktop then “bolting on” mobile, too many breakpoints, fixed pixel breakpoints instead of content-driven ones.
- **Best practices:** Mobile-first. Use relative units. Prefer container queries when component-driven design is used.

### Practice

- Recreate classic layouts: Holy Grail, Magazine, Dashboard sidebar + content, Card grids that reflow.
- Thinking: When would you choose Flexbox over Grid and vice versa?
- Debugging: A grid item is overflowing – diagnose track sizing vs content size.

### Architecture Decision

**Does this project require a backend?**  
**No.** Static content and pure layout practice.

### Web Application (React)

**Project Name:** “Responsive Portfolio / Case Study Site”

**Features:**

- Hero section
- Project grid that changes columns based on viewport
- Sticky or fixed navigation
- Footer with multiple columns that collapse on mobile
- Smooth scroll and section highlighting

**Folder structure** follows a clean feature-based or component-based React structure with separate CSS modules or a global design token file.

### Mobile Application (React Native)

Port the portfolio into a native mobile experience using React Navigation (stack + tabs if needed). Focus on native feel: proper safe areas, platform-specific shadows, and performance.

### Offline Support

Not required (static content).

### Deployment

- Web → Vercel/Netlify
- Mobile → Expo internal distribution or TestFlight / internal testing track

### Testing

- Cross-device visual testing
- Lighthouse
- Keyboard navigation of the entire page

### Refactoring

- Create a consistent spacing and type scale used across all sections
- Extract layout primitives (`Stack`, `Grid`, `Cluster`, `Sidebar`) as reusable React components

### Documentation

Document every major layout decision and the breakpoints chosen (and why).

### Portfolio

Strong visual README with multiple device screenshots and a clear “Layout skills demonstrated” section.

### Reflection

- Why did CSS need both Flexbox and Grid?
- Can I look at any website and reverse-engineer its layout technique?

### Milestone Challenge

Build a complex dashboard layout (sidebar + top bar + main content + cards) that works beautifully from 320px to 2560px using only Flexbox + Grid + container queries where appropriate. No JavaScript for layout.

---

# Phase 3: Graphic & Design Principles – Spacing, Hierarchy, Contrast, Balance

### Phase Overview

- **Goal:** Move from “technically correct CSS” to “visually intentional and professional interfaces”.
- **Estimated study time:** 3–4 weeks
- **Prerequisites:** Phase 1 + 2
- **Expected outcome:** You can critique any interface and articulate exactly why it feels “off” or excellent, then fix it with purpose.

### Concepts

#### 1. Visual Hierarchy

- **What it is:** Guiding the eye through content in order of importance using size, weight, color, space, and position.
- **Why it exists:** Users do not read; they scan. Hierarchy creates a clear path.
- **Real-world analogy:** Newspaper front page – headline, subhead, lead photo, body text.
- **Mathematical / Systematic approach:** Type scales (modular scale), spacing scales (4pt or 8pt grid), limited color roles (primary, secondary, accent, neutral).

#### 2. Spacing & Rhythm

- **What it is:** Consistent use of space to create relationships and breathing room.
- **Why it exists:** Random spacing creates visual noise and cognitive friction.
- **Real-world analogy:** Music – consistent rhythm feels professional; irregular gaps feel amateur.
- **Best practices:** Adopt an 8-point spacing system. Use multiples. Create vertical rhythm with consistent baseline.

#### 3. Contrast & Balance

- **What it is:** Difference that creates focus (contrast) and distribution of visual weight (balance).
- **Why it exists:** Low contrast = invisible content. Unbalanced layouts feel unstable.
- **Common mistakes:** Everything the same size/weight/color, equal visual weight on both sides when hierarchy is needed, insufficient whitespace.

#### 4. Alignment & Proximity (Gestalt)

- Covered deeper in Phase 4, but introduced here as design tools.

### Practice

- Take a deliberately bad UI (provided or self-made) and improve hierarchy, spacing, and contrast in three iterations.
- Thinking questions: “Where does the eye go first? Second? Why?”

### Architecture Decision

**No backend required.** Pure visual design system work.

### Web + Mobile Applications

**Project Name:** “Design System Showcase / Component Gallery”

Build a living style guide that demonstrates:

- Color palette with contrast ratios
- Typography scale
- Spacing scale
- Elevation (shadows)
- Example components (buttons, cards, form fields) in all states

Implement in React (web) and React Native (mobile) sharing as many design tokens as possible.

### Offline Support

Not applicable.

### Deployment

Deploy the style guide as a public site (great portfolio piece).

### Testing

- Contrast checking tools (axe, Lighthouse, Stark)
- Visual regression (Percy or Chromatic if possible, or manual)

### Refactoring

Turn the design tokens into a single source of truth (CSS variables or a tokens JSON consumed by both web and mobile).

### Documentation

Extensive “Design Decisions” document explaining every scale and why certain values were chosen.

### Portfolio

This project becomes one of the strongest pieces in a junior-to-mid portfolio because it shows intentional design thinking, not just coding.

### Reflection

- Can I explain why 8px spacing systems became dominant?
- What happens to usability when hierarchy is removed?

### Milestone Challenge

Redesign a real (or realistic) cluttered SaaS dashboard using only the principles of hierarchy, spacing, contrast, and balance. Document the before/after reasoning.

---

# Phase 4: UX Psychology – How Users Understand and Interact

### Phase Overview

- **Goal:** Understand the cognitive and psychological principles that make interfaces feel intuitive or frustrating.
- **Estimated study time:** 4 weeks
- **Prerequisites:** Phases 1–3
- **Expected outcome:** You design interactions that respect human limitations and mental models.

### Concepts

#### 1. Gestalt Principles

- Proximity, Similarity, Continuity, Closure, Figure-Ground, Common Fate
- **Why they exist:** The brain organizes visual information into meaningful wholes automatically.

#### 2. Cognitive Load & Progressive Disclosure

- Working memory is extremely limited (≈4±1 items).
- **Why it matters:** Overwhelming users causes abandonment.

#### 3. Fitts’s Law & Hick’s Law

- **Fitts’s Law:** Time to acquire a target is a function of distance and size.  
  Mathematical form: \( T = a + b \log_2 (1 + D/W) \)
- **Hick’s Law:** Decision time increases with number and complexity of choices.

#### 4. Feedback, Affordances & Signifiers

- Users need clear signals of what is interactive and what just happened.
- Don Norman’s concepts applied to digital interfaces.

#### 5. Mental Models & Consistency

- Users bring expectations from the real world and from other digital products.

### Practice

- Analyze 5 popular apps for Gestalt usage and cognitive load.
- Redesign a multi-step form applying progressive disclosure and clear feedback.

### Architecture Decision

**Does this project require a backend?**  
**Yes (light).**  
We will build a multi-step “Smart Onboarding / Profile Setup” flow that saves progress. A simple backend allows persistence across devices and demonstrates real UX of saving state.

**Architecture:**

- Django + Django REST Framework → simple User Profile API
- JWT or session auth (keep it minimal)
- React web frontend
- React Native mobile app
- Both clients talk to the same API

### Web Application

**Project:** Guided multi-step onboarding with:

- Progress indicator
- Smart defaults
- Inline validation with helpful messages
- Ability to go back without losing data
- Success confirmation with clear next actions

### Mobile Application

Same flow optimized for mobile (bottom sheets, native inputs, keyboard handling, offline-tolerant draft saving).

### Offline Support

**Yes – appropriate.**  
Users may lose connection mid-onboarding.

- Local storage strategy: Save form draft to AsyncStorage (RN) / localStorage or IndexedDB (web) on every meaningful change.
- Synchronization: On reconnect, push draft to backend. Last-write-wins or simple timestamp comparison for this phase.
- Conflict handling: Prefer server version if user has already completed on another device; otherwise upload local draft.
- UX while offline: Clear banner “Working offline – progress saved on this device”, disable final submit until online (or queue it).

### Deployment

- Backend: Railway / Render / Fly.io (Django + PostgreSQL)
- Web: Vercel
- Mobile: Expo

### Testing

- Unit tests for critical form validation logic
- API tests with Django test client
- Manual usability testing with 3 people (watch them struggle)

### Refactoring

- Extract form step components
- Centralize validation schema (consider Zod or similar)
- Improve loading and error states

### Documentation

- UX decision log (why each interaction was designed that way)
- API documentation (even if simple)

### Portfolio

Excellent project because it combines psychology, interaction design, and full-stack awareness.

### Reflection

- Which psychological principle had the biggest impact on your design decisions?
- Can you now spot high cognitive load in any interface within seconds?

### Milestone Challenge

Take a complex settings screen from a real product and redesign the information architecture + interaction to dramatically reduce cognitive load. Document the psychological rationale.

---

# Phase 5: Accessibility – Making Interfaces Usable for More People

### Phase Overview

- **Goal:** Build interfaces that work for people with diverse abilities and situations.
- **Estimated study time:** 3–4 weeks
- **Prerequisites:** Phases 1–4
- **Expected outcome:** You treat accessibility as a core quality attribute, not an afterthought. You can audit and fix common a11y issues.

### Concepts

#### 1. WCAG Principles (POUR)

- Perceivable, Operable, Understandable, Robust

#### 2. Semantic HTML & ARIA

- When native HTML is enough vs when ARIA is required
- Roles, states, properties
- Common anti-patterns (ARIA on non-interactive elements, missing labels)

#### 3. Keyboard Navigation & Focus Management

- Focus order, focus traps (modals), skip links, visible focus indicators

#### 4. Color Contrast, Text Alternatives, Motion

- Contrast ratios (4.5:1 / 3:1)
- `prefers-reduced-motion`
- Screen reader testing basics

#### 5. Inclusive Design Mindset

- Accessibility benefits everyone (temporary impairments, situational limitations, aging).

### Practice

- Audit previous projects with axe DevTools + keyboard only + screen reader (VoiceOver / NVDA).
- Fix every critical and serious issue.

### Architecture Decision

**Backend optional but useful.**  
We will take the strongest previous project (or the onboarding flow) and make a fully accessible version. A backend is helpful if we add user preferences (e.g., “high contrast mode” or “reduced motion” stored per user).

Recommended: Extend the Phase 4 project or create an “Accessible Component Library + Demo App”.

### Web + Mobile

Build or upgrade components so they are fully keyboard accessible, properly labeled, and respect system preferences. On mobile, ensure TalkBack / VoiceOver compatibility and proper accessibility props in React Native.

### Offline Support

Same strategy as Phase 4 if extending that project.

### Deployment

Same as previous full-stack phase.

### Testing

- Automated: axe-core, eslint-plugin-jsx-a11y, Lighthouse
- Manual: Keyboard-only traversal, screen reader walkthrough, Windows High Contrast mode, forced colors
- User testing with at least one person who relies on assistive technology (or detailed simulation)

### Refactoring

- Create accessible primitive components (`AccessibleButton`, `AccessibleModal`, `AccessibleTabs`, etc.)
- Document accessibility contracts for each component

### Documentation

- Accessibility statement
- Keyboard shortcuts map
- Known limitations

### Portfolio

Accessibility work is highly valued by employers. Document the audit → fix process clearly.

### Reflection

- Why is “accessibility is a spectrum, not a binary” an important mental model?
- How does good accessibility often improve the experience for users without disabilities?

### Milestone Challenge

Take a popular open-source component library or a complex widget (date picker, combobox, data table) and make it pass WCAG 2.2 AA as thoroughly as possible. Write a public case study.

---

# Phase 6: Frontend Development – Turning Design into Production Interfaces

### Phase Overview

- **Goal:** Master the modern frontend engineering practices required to ship real products.
- **Estimated study time:** 6–8 weeks
- **Prerequisites:** All previous phases
- **Expected outcome:** You can take a design (or design system) and produce a maintainable, tested, accessible, performant React + React Native application that talks to a backend.

### Concepts

- Component architecture & composition
- State management (local → context → external when needed)
- Styling strategies at scale (CSS Modules, CSS-in-JS, Tailwind, design tokens)
- Performance (code splitting, memoization, virtualization, image optimization)
- Forms & validation at production quality
- Error boundaries, loading states, empty states, skeleton UIs
- Internationalization readiness
- Testing strategies (unit, integration, visual, e2e)

### Practice

Deep practice converting high-fidelity designs into pixel-accurate, resilient components.

### Architecture Decision

**Yes – full production architecture.**

**Recommended Capstone Project:**  
“Personal Finance Tracker” or “Habit Tracker” or “Team Task Board” – something with real data, authentication, CRUD, and rich UI.

**Stack:**

- Backend: Django + Django REST Framework + PostgreSQL + simple JWT auth
- Web: React + Vite + React Router + your chosen styling solution + React Query (or similar) for server state
- Mobile: React Native (Expo) + React Navigation + same API
- Shared: Design tokens, validation schemas where possible

### Offline Support

**Yes – highly appropriate.**

- Local-first or offline-capable strategy using a local database (e.g., WatermelonDB, SQLite via Expo, or IndexedDB + background sync)
- Optimistic updates
- Conflict resolution strategy (last-write-wins with clear UI feedback, or more sophisticated CRDT if ambitious)
- Clear offline indicators and queue status

### Deployment

- Backend + DB: Railway / Render / Fly.io / AWS
- Web: Vercel / Netlify
- Mobile: Expo EAS Build → TestFlight + Google Play internal testing (or full store if ready)
- Environment management, secrets, CI basics

### Testing

- Backend: Django tests + API tests
- Frontend: Vitest / Jest + React Testing Library
- Critical user flows: Playwright or Cypress
- Accessibility regression tests
- Visual regression if possible

### Refactoring

- Extract domain logic
- Improve folder structure for scalability
- Performance profiling and fixes
- Accessibility audit of the full application

### Documentation

- Architecture Decision Records (ADRs)
- Component storybook or equivalent
- API docs (drf-spectacular or similar)
- Setup & contribution guide
- User-facing help / empty states copy

### Portfolio

This is the flagship project.  
README must include:

- Live demo
- Screenshots / video walkthrough
- Architecture diagram
- Design system highlights
- Accessibility statement
- Tech decisions and trade-offs
- What you would improve next

### Reflection

- What was the hardest part of turning a static design into a living, data-driven interface?
- How did previous phases (CSS, design principles, UX psychology, a11y) directly influence the quality of this application?

### Milestone Challenge

Add one advanced feature that touches every previous domain: e.g., a fully accessible, beautifully designed, offline-capable data visualization dashboard with excellent empty/loading/error states and clear UX feedback.

---

# Final Roadmap Assets

## Complete Learning Timeline (Approximate)

| Phase | Focus                           | Duration  | Cumulative |
| ----- | ------------------------------- | --------- | ---------- |
| 1     | CSS Foundations                 | 3–4 weeks | 1 month    |
| 2     | Layout (Flex/Grid/Responsive)   | 3–5 weeks | 2–2.5 mo   |
| 3     | Design Principles               | 3–4 weeks | 3–3.5 mo   |
| 4     | UX Psychology                   | 4 weeks   | 4–4.5 mo   |
| 5     | Accessibility                   | 3–4 weeks | 5–5.5 mo   |
| 6     | Production Frontend Engineering | 6–8 weeks | 7–8 months |

Realistically 7–10 months of consistent, deliberate practice to reach strong junior / solid mid-level portfolio readiness, depending on weekly hours and prior experience.

## Portfolio Checklist

- [x] Digital Business Card (Phase 1)
- [x] Responsive Portfolio / Layout showcase (Phase 2)
- [x] Living Design System / Style Guide (Phase 3)
- [x] Multi-step Onboarding with UX psychology (Phase 4)
- [x] Accessibility case study + component library (Phase 5)
- [x] Full production application (Phase 6) – flagship
- [x] Clear before/after or process documentation for at least two projects
- [x] Live demos for every web project
- [x] Architecture diagrams for full-stack projects
- [x] Accessibility statements

## GitHub Project Checklist (for each repo)

- [x] Clear, professional README
- [x] Live demo link
- [x] Screenshots or GIF / video
- [x] Tech stack listed
- [x] Setup instructions
- [x] Design / UX decisions section
- [x] Accessibility notes
- [x] License
- [x] Clean commit history (or squashed meaningful commits)
- [x] No secrets in the repository

## Interview Preparation Checklist

- [x] Can explain the box model and `box-sizing` clearly
- [x] Can white-board Flexbox vs Grid decision
- [x] Can walk through a design system token architecture
- [x] Can discuss Fitts’s Law / Hick’s Law with examples
- [x] Can audit a page for accessibility issues live
- [x] Can explain how you structured a React component library
- [x] Can discuss offline strategies and trade-offs
- [x] Can defend technical decisions made in the capstone
- [x] Have 2–3 stories ready using STAR method about debugging layout, improving UX, or fixing a11y issues

## Free Learning Resources

- MDN Web Docs (CSS, HTML, Accessibility)
- web.dev (Responsive, Performance, a11y)
- freeCodeCamp Responsive Web Design + Frontend Libraries
- CSS-Tricks (Guides on Flexbox & Grid)
- The A11Y Project
- Inclusive Components (Heydon Pickering)
- React Official Docs + Beta Docs
- React Native Docs + Expo Docs
- Django & DRF official tutorials
- Laws of UX (lawsofux.com)
- Refactoring UI (free samples + paid book – highly recommended)

## Recommended Books

- _Don’t Make Me Think_ – Steve Krug
- _The Design of Everyday Things_ – Don Norman
- _Refactoring UI_ – Adam Wathan & Steve Schoger
- _CSS Secrets_ – Lea Verou
- _Inclusive Components_ – Heydon Pickering
- _Designing Interfaces_ – Jenifer Tidwell
- _About Face_ – Alan Cooper (more advanced interaction design)

## Official Documentation to Live In

- MDN CSS Reference
- WCAG 2.2
- WAI-ARIA Authoring Practices
- React Docs
- React Native Docs
- Django REST Framework docs

## Practice Websites & Tools

- Frontend Mentor (real designs to implement)
- CodePen / StackBlitz for quick experiments
- axe DevTools
- Lighthouse
- Wave Evaluation Tool
- Stark (contrast)
- Excalidraw or Figma (for quick design thinking – free tiers exist)

## Common Interview Questions

1. Explain the CSS box model and the difference `box-sizing` makes.
2. When do you choose Flexbox over Grid?
3. How do you create a consistent spacing system?
4. What is the difference between an affordance and a signifier?
5. How would you reduce cognitive load on a complex form?
6. Walk me through making a modal accessible.
7. How do you handle focus management in a single-page application?
8. Explain your approach to offline support in a mobile app.
9. How do you organize CSS / styles in a large React codebase?
10. Describe a time you improved the usability or accessibility of an interface.

## Advanced Topics to Study Next

- Advanced animation & micro-interactions (Framer Motion, Reanimated)
- Design systems at scale (Storybook, token pipelines, multi-platform)
- Performance deep dives (Core Web Vitals, React profiling)
- Advanced accessibility (complex widgets, screen reader testing mastery)
- CSS architecture (CUBE CSS, ITCSS, utility-first at scale)
- Server Components / modern React patterns
- Cross-platform design systems (web + mobile + possibly desktop)
- Design engineering collaboration workflows
- Metrics & experimentation (how to measure UX impact)

---

**Final Note from Your Mentor**

This roadmap is deliberately rigorous. Most people skip the “rebuild from memory” and “explain in your own words” steps. Those two steps are where real mastery is forged.

Do not rush.  
Ship every project.  
Document the thinking, not just the code.  
When you finish Phase 6 and can rebuild the core of your capstone without looking anything up, you will be dangerous in the best possible way.

Now go build.

— Your AI Technical Mentor  
_Senior Software Engineer • AI Engineer • Curriculum Designer_
