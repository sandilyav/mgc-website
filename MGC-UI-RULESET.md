📜 MGC UI DESIGN & FRONTEND RULESET

(Mandatory – do not violate)

1. DESIGN SYSTEM ENFORCEMENT
	1.	All UI must be derived from a single centralized design system.
	2.	No inline styles are allowed.
	3.	No hard-coded colors, fonts, or spacing values are allowed.
	4.	All values must come from design tokens (CSS variables or theme constants).
	5.	No page-specific or one-off UI styles are allowed.

⸻

2. COMPONENT ARCHITECTURE
	1.	Every UI element must be a reusable component.
	2.	Each component must have:
	•	one base style
	•	optional variants only when strictly necessary
	3.	Variants must be implemented using inheritance, not duplication.
	4.	Do not create unique components for single-use cases.
	5.	All components must be stored in a centralized component library.

⸻

3. VARIANT CONTROL
	1.	Variants are allowed only for semantic roles:
	•	primary
	•	secondary
	•	tertiary
	•	error
	•	success
	•	warning
	2.	Do not create visual variants based on page context (e.g., “heroButton”, “loginButton”).
	3.	New variants require justification and must be reusable across the site.

⸻

4. COLOR RULES
	1.	Only approved palette tokens may be used.
	2.	Colors must be applied via semantic roles:
	•	–color-primary
	•	–color-secondary
	•	–color-background
	•	–color-text
	•	–color-border
	•	–color-accent
	•	–color-error
	3.	Do not use raw hex values in components.
	4.	Do not use gradients or decorative colors.

⸻

5. TYPOGRAPHY RULES
	1.	Only two fonts are allowed:
	•	one serif for headings
	•	one sans-serif for body and UI
	2.	Only predefined typography styles may be used:
	•	h1, h2, h3, h4
	•	body
	•	small
	•	button
	3.	No custom font sizes or weights per page.
	4.	Line height and letter spacing must come from tokens.

⸻

6. SPACING & LAYOUT
	1.	Use only the defined spacing scale:
	•	4, 8, 16, 24, 32, 48, 64, 80
	2.	Do not use arbitrary pixel values.
	3.	Layout must use a global grid system.
	4.	Section padding must be consistent site-wide.

⸻

7. FORMS
	1.	All forms must use the same input components.
	2.	Inputs must share:
	•	height
	•	border radius
	•	label style
	•	focus state
	•	error state
	3.	Labels must always be visible (no placeholder-only labels).
	4.	Error and success states must use system tokens only.
	5.	All form elements must be keyboard accessible.

⸻

8. BUTTONS
	1.	Buttons must derive from a single base button component.
	2.	Allowed variants:
	•	primary
	•	secondary
	•	tertiary (outline)
	3.	No custom button styles per page.
	4.	Button sizes must use predefined size tokens only.

⸻

9. NAVIGATION
	1.	Navigation components must be reusable.
	2.	No custom navigation styles per page.
	3.	Main navigation must expose:
	•	Heritage
	•	Facilities
	•	Membership
	•	Events
	•	Member Login
	4.	Navigation must be accessible and keyboard navigable.

⸻

10. TABLES & LISTS
	1.	All tables must use the same table component.
	2.	Zebra striping and hover states must use system tokens.
	3.	No table-specific custom styling.

⸻

11. ICONS
	1.	Only one icon set may be used.
	2.	Icons must be line-based, not filled.
	3.	Icon colors must come from color tokens.

⸻

12. MOTION & INTERACTION
	1.	Only subtle animations are allowed:
	•	fade
	•	slide
	2.	Duration must be 200–300ms.
	3.	No bouncing, spinning, or flashing animations.
	4.	Animations must be consistent across the site.

⸻

13. RESPONSIVE DESIGN
	1.	Mobile-first design is mandatory.
	2.	Touch targets must be at least 44px high.
	3.	Layout must adapt from mobile → tablet → desktop using same components.

⸻

14. PERFORMANCE & MAINTAINABILITY
	1.	Do not duplicate components.
	2.	Do not duplicate styles.
	3.	Use semantic class names:
	•	button-primary
	•	card-default
	•	form-input
	4.	Avoid deeply nested CSS selectors.

⸻

15. ACCESSIBILITY
	1.	All text must meet contrast requirements.
	2.	Focus states must be visible.
	3.	Forms must be screen-reader friendly.
	4.	Navigation must be keyboard accessible.

⸻

16. CHANGE CONTROL
	1.	Do not introduce new UI patterns without updating the design system.
	2.	If a new variant is needed, it must be added at the system level.
	3.	One-off visual exceptions are forbidden.

⸻

17. GOVERNING PRINCIPLE

If a UI element is not part of the design system, it must not exist.

⸻

FINAL SYSTEM INSTRUCTION

You must:
	•	Build a single unified UI system
	•	Reuse components everywhere
	•	Prefer inheritance over invention
	•	Prefer clarity over decoration
	•	Prefer consistency over creativity

Violation of these rules is considered an error.



Just say:
“Generate the Windsurf system prompt”
or
“Generate the full package (prompt + tokens + components + structure)”