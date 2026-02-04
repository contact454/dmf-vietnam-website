# CLAUDE.md - DMF Vietnam Website

> Project context and coding standards for Claude Code sessions.

## Project Overview

| Field | Value |
|-------|-------|
| **Name** | DMF Vietnam Website |
| **Type** | Corporate website for German study abroad consultancy |
| **Status** | ~90% complete, All Pages COMPLETE |
| **Inspiration** | ApplyBoard.com |

## Tech Stack

```
Framework:    Next.js 16.1.6 (App Router)
UI Library:   React 19.2.3
Language:     TypeScript 5.x (strict mode)
Styling:      Tailwind CSS 4.x (OKLCH colors)
Components:   shadcn/ui (new-york style)
Animation:    Framer Motion 12.30.0
Icons:        Lucide React 0.563.0
```

## Design System

### Colors (OKLCH)
```css
--primary:    oklch(0.45 0.12 250)   /* #2759A5 - Blue */
--secondary:  oklch(0.68 0.18 65)    /* #E7940D - Orange */
```

### Fonts
- **Headings:** Plus Jakarta Sans (600-800 weight)
- **Body:** Inter (400-600 weight)

### Border Radius
- Buttons/Inputs: `rounded-lg` (8px)
- Cards: `rounded-xl` (12px)
- Modals: `rounded-2xl` (16px)

## File Structure

```
src/
├── app/           # Next.js App Router pages
├── components/
│   ├── ui/        # shadcn/ui components
│   ├── layout/    # Header, Footer
│   ├── sections/  # Homepage sections
│   └── shared/    # Reusable components
└── lib/           # Utilities (cn helper)
```

## Coding Standards

### TypeScript
- Use strict mode
- Define explicit types for props
- Prefer interfaces over type aliases for objects

### Components
- Use function components with arrow syntax
- Props interface: `ComponentNameProps`
- Export named, not default

```tsx
// GOOD
interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (/* ... */);
}
```

### Styling
- Use Tailwind utility classes
- Use `cn()` from `@/lib/utils` for conditional classes
- Prefer design system tokens over arbitrary values

```tsx
// GOOD
className={cn("text-primary bg-background", isActive && "bg-primary/10")}

// BAD
className="text-[#2759A5] bg-[#fff]"
```

### Imports
- Use `@/` path alias for src imports
- Group: React → External → Internal → Types → Styles

## Key Documents

| Document | Path |
|----------|------|
| Master Plan | `/docs/planning/MASTER_PLAN.md` |
| UI/UX Guide | `/docs/research/DMF-UI-UX-Implementation-Guide.md` |
| Project Plan | `/docs/planning/PROJECT_PLAN.md` |
| Content | `/docs/content/WEBSITE_CONTENT.md` |
| Assets | `/docs/assets/ASSETS_CHECKLIST.md` |

## Current Progress

### Homepage Sections
- [x] Header (desktop + mobile)
- [x] Hero Section (stats cards)
- [x] Services Section (4 cards)
- [x] Stats Section (counter animation) ✅ NEW
- [x] Features Section (6 USPs)
- [x] How It Works (4-step timeline) ✅ NEW
- [x] Courses Section (A1-B2 tabs)
- [x] Testimonials (carousel) ✅ NEW
- [x] Partners (logo grid) ✅ NEW
- [x] Blog Preview (3 posts) ✅ NEW
- [x] CTA Section
- [x] Footer

### Pages (18/18) - COMPLETE
- [x] Homepage (complete)
- [x] Khóa học tiếng Đức - Overview
- [x] Khóa học tiếng Đức - A1
- [x] Khóa học tiếng Đức - A2
- [x] Khóa học tiếng Đức - B1
- [x] Khóa học tiếng Đức - B2
- [x] Du học Đức - Overview
- [x] Du học Đức - Du học nghề (Ausbildung)
- [x] Du học Đức - Du học đại học
- [x] Du học Đức - Điều kiện & Chi phí
- [x] Định cư Đức
- [x] Về chúng tôi
- [x] Về chúng tôi - Đội ngũ
- [x] Liên hệ
- [x] Tin tức - Blog listing
- [x] Tin tức - Blog detail [slug]
- [x] Tư vấn miễn phí
- [x] Đặt lịch tư vấn

## Lessons Learned / Rules

> Add rules here when mistakes are made to prevent recurrence.

### Rule 1: Always use cn() for conditional classes
Never concatenate class strings manually. Always use the `cn()` utility.

### Rule 2: Check existing components before creating new ones
Before creating a new UI component, check if shadcn/ui already has it.

### Rule 3: Read design system before styling
Always reference `/docs/research/DMF-UI-UX-Implementation-Guide.md` before implementing new UI.

### Rule 4: Use OKLCH colors from globals.css
Never hardcode hex colors. Use CSS variables defined in globals.css.

## Commands

```bash
# Development
npm run dev      # Start dev server

# Build
npm run build    # Production build
npm run start    # Start production server

# Lint
npm run lint     # Run ESLint
```

## Notes

- Vietnamese is primary language, German is secondary (i18n planned)
- Target audience: Vietnamese students interested in studying in Germany
- Key features planned: AI Assistant (DMF Bot), i18n (DE/VI)

---

*Last updated: 2026-02-04*
