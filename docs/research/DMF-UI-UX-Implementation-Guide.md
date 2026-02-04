# Hướng dẫn Triển khai UI/UX cho DMF Website

> Tài liệu này tóm tắt các pattern từ nghiên cứu ApplyBoard và cách áp dụng cho DMF Vietnam.

---

## 1. Tổng quan Dự án

| Thuộc tính | Giá trị |
|------------|---------|
| **Tên dự án** | DMF Vietnam Website |
| **Lấy cảm hứng từ** | ApplyBoard.com |
| **Ngôn ngữ** | Song ngữ Đức - Việt |
| **Tính năng đặc biệt** | AI Assistant (Chatbot) |

---

## 2. Hệ thống Màu sắc

### 2.1. Bảng màu Chính (Brand Colors)

| Tên | Mã Hex | Sử dụng |
|-----|--------|---------|
| **Primary Blue** | `#2759A5` | Navigation, Logo, CTA chính |
| **Secondary Orange** | `#E7940D` | Accent, CTA phụ, Highlights |
| **White** | `#FFFFFF` | Background chính |
| **Dark Text** | `#1A1A2E` | Văn bản chính |

### 2.2. Màu Ngữ nghĩa (Semantic Colors)

| Tên | Mã Hex | Sử dụng |
|-----|--------|---------|
| **Success Green** | `#22C55E` | Thành công, hoàn thành |
| **Warning Amber** | `#F59E0B` | Cảnh báo, chú ý |
| **Error Red** | `#EF4444` | Lỗi, hạn chót |
| **Info Blue** | `#3B82F6` | Thông tin |

### 2.3. Thang độ Xám (Neutral Grays)

```
Gray-50:  #F9FAFB  (Background nhẹ)
Gray-100: #F3F4F6  (Card background)
Gray-200: #E5E7EB  (Border)
Gray-300: #D1D5DB  (Disabled)
Gray-400: #9CA3AF  (Placeholder)
Gray-500: #6B7280  (Secondary text)
Gray-600: #4B5563  (Body text)
Gray-700: #374151  (Heading)
Gray-800: #1F2937  (Dark heading)
Gray-900: #111827  (Darkest)
```

### 2.4. Tâm lý học Màu sắc

- **Xanh dương (#2759A5)**: Tạo cảm giác tin tưởng, chuyên nghiệp, ổn định - phù hợp cho lĩnh vực giáo dục
- **Cam (#E7940D)**: Năng động, thân thiện, kêu gọi hành động - phù hợp cho CTA
- **Kết hợp Xanh-Cam**: Cân bằng giữa sự tin cậy và năng lượng

---

## 3. Typography

### 3.1. Font Stack

| Loại | Font chính | Font dự phòng |
|------|------------|---------------|
| **Headings** | Plus Jakarta Sans | Inter, system-ui |
| **Body** | Inter | system-ui, sans-serif |
| **Mono** | JetBrains Mono | monospace |

### 3.2. Quy mô Typography (Type Scale)

Base: 16px, Scale: Major Third (1.25)

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 48px (3rem) | 700 | 1.2 |
| H2 | 36px (2.25rem) | 700 | 1.25 |
| H3 | 28px (1.75rem) | 600 | 1.3 |
| H4 | 24px (1.5rem) | 600 | 1.35 |
| H5 | 20px (1.25rem) | 600 | 1.4 |
| Body Large | 18px (1.125rem) | 400 | 1.6 |
| Body | 16px (1rem) | 400 | 1.6 |
| Body Small | 14px (0.875rem) | 400 | 1.5 |
| Caption | 12px (0.75rem) | 500 | 1.4 |

### 3.3. Micro-copy

- **Labels**: UPPERCASE, letter-spacing: 0.05em
- **Buttons**: Sentence case, font-weight: 600
- **Links**: Underline on hover

---

## 4. Spacing System

Base: 4px

```
space-1:  4px   (0.25rem)
space-2:  8px   (0.5rem)
space-3:  12px  (0.75rem)
space-4:  16px  (1rem)
space-5:  20px  (1.25rem)
space-6:  24px  (1.5rem)
space-8:  32px  (2rem)
space-10: 40px  (2.5rem)
space-12: 48px  (3rem)
space-16: 64px  (4rem)
space-20: 80px  (5rem)
space-24: 96px  (6rem)
```

---

## 5. Component Patterns

### 5.1. Buttons

```
Primary:   bg-primary text-white hover:brightness-90
Secondary: bg-secondary text-white hover:brightness-90
Outline:   border-primary text-primary hover:bg-primary/10
Ghost:     text-primary hover:bg-primary/5
```

**States:**
- Default → Hover (brightness -10%) → Active (brightness -15%) → Disabled (opacity 50%)
- Focus: ring-2 ring-primary ring-offset-2

### 5.2. Cards

```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
```

### 5.3. Form Inputs

- Border radius: 8px
- Border: 1px solid Gray-300
- Focus: border-primary + ring-2 ring-primary/20
- Error: border-red-500 + ring-2 ring-red/20
- Padding: 12px 16px

### 5.4. Skeleton Loading

```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

---

## 6. Layout Patterns

### 6.1. Container Widths

| Breakpoint | Max Width |
|------------|-----------|
| sm (640px) | 100% |
| md (768px) | 720px |
| lg (1024px) | 960px |
| xl (1280px) | 1200px |
| 2xl (1536px) | 1400px |

### 6.2. Grid System

- **Homepage sections**: Single column, full-width backgrounds
- **Course cards**: 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Blog posts**: 3 columns grid
- **Sidebar layout**: 280px sidebar + fluid content

---

## 7. UX Patterns Áp dụng

### 7.1. Homepage Sections

| # | Section | Pattern | Mô tả |
|---|---------|---------|-------|
| 1 | Header | Sticky Navigation | Logo + Menu + Language Switch + CTA |
| 2 | Hero | Video/Image BG | Headline + Subtext + 2 CTAs |
| 3 | Stats Bar | Counter Animation | 4 số liệu nổi bật |
| 4 | Services | Card Grid | 4 dịch vụ chính |
| 5 | Why DMF | Feature List | USPs với icons |
| 6 | How It Works | Stepper | 4-5 bước quy trình |
| 7 | Courses | Horizontal Scroll | Preview khóa học A1-B2 |
| 8 | Testimonials | Carousel | Review học viên |
| 9 | Partners | Logo Carousel | Đối tác, trường ĐH |
| 10 | Blog | Card Grid | 3 bài viết mới nhất |
| 11 | CTA Section | Full-width | Đăng ký tư vấn |
| 12 | Footer | Multi-column | Links + Contact + Social |

### 7.2. Form Patterns

**Multi-step Wizard (Đăng ký tư vấn):**

```
Step 1: Thông tin cá nhân (Họ tên, Email, SĐT)
Step 2: Mục tiêu (Học tiếng Đức / Du học / Định cư)
Step 3: Chi tiết (Trình độ hiện tại, Thời gian dự kiến)
Step 4: Xác nhận
```

**Features:**
- Progress bar hiển thị bước hiện tại
- Inline validation (real-time)
- Confetti animation khi hoàn thành

### 7.3. Search & Filter (Trang Chương trình)

**Faceted Search:**
- Left sidebar: Filters (Quốc gia, Chi phí, Thời gian, Loại chương trình)
- Main content: Card grid với kết quả
- Dynamic update (AJAX, không reload trang)
- Debounce 300ms cho search input

---

## 8. AI Assistant - "DMF Bot"

### 8.1. Tổng quan

| Thuộc tính | Giá trị |
|------------|---------|
| **Tên** | DMF Bot (hoặc tên khác do client đặt) |
| **Vị trí** | FAB (Floating Action Button) góc phải dưới |
| **Công nghệ** | OpenAI API / Claude API |
| **Ngôn ngữ** | Đức + Việt (tự động detect hoặc chọn) |

### 8.2. Tính năng

1. **Trả lời FAQ**: Thông tin khóa học, chi phí, visa, etc.
2. **Hướng dẫn đăng ký**: Dẫn dắt qua form đăng ký
3. **Đề xuất chương trình**: Dựa trên thông tin user cung cấp
4. **Hỗ trợ đa ngôn ngữ**: Tự động chuyển Đức/Việt

### 8.3. UI Design

```
┌─────────────────────────────┐
│  🤖 DMF Bot          DE|VI  │
├─────────────────────────────┤
│                             │
│  [Chat messages here]       │
│                             │
│  ┌─────────────────────┐    │
│  │ Gợi ý: Khóa học A1  │    │
│  │ Gợi ý: Chi phí      │    │
│  │ Gợi ý: Visa Đức     │    │
│  └─────────────────────┘    │
├─────────────────────────────┤
│  [Input] [Send]             │
└─────────────────────────────┘
```

### 8.4. Implementation

```typescript
// Sử dụng AI SDK (Vercel AI SDK)
// Route: /api/chat

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages, locale } = await req.json();

  const systemPrompt = locale === 'de'
    ? 'Du bist DMF Bot, ein Assistent für DMF Vietnam...'
    : 'Bạn là DMF Bot, trợ lý của DMF Vietnam...';

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
```

---

## 9. Internationalization (i18n) - Song ngữ Đức-Việt

### 9.1. Cấu trúc

```
/messages
  ├── vi.json    # Tiếng Việt (mặc định)
  └── de.json    # Tiếng Đức
```

### 9.2. Implementation với next-intl

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['vi', 'de'],
  defaultLocale: 'vi',
  localePrefix: 'as-needed'
});

// URL patterns:
// dmf.edu.vn/          → Tiếng Việt
// dmf.edu.vn/de/       → Tiếng Đức
// dmf.edu.vn/de/kurse  → Khóa học (Đức)
```

### 9.3. Language Switcher

```
┌─────────────┐
│  🇻🇳 VI | 🇩🇪 DE  │
└─────────────┘
```

- Vị trí: Header, góc phải
- Lưu preference: localStorage + cookie
- Smooth transition khi chuyển ngôn ngữ

### 9.4. Nội dung cần dịch

| Loại | Ví dụ |
|------|-------|
| **UI Labels** | Buttons, Menu, Form labels |
| **Static Content** | Homepage, About, Contact |
| **Dynamic Content** | Blog posts, Course descriptions |
| **Meta/SEO** | Title, Description, OG tags |
| **Error Messages** | Form validation, 404, etc. |

### 9.5. Ví dụ Translation Files

**vi.json:**
```json
{
  "nav": {
    "home": "Trang chủ",
    "courses": "Khóa học",
    "study_abroad": "Du học Đức",
    "about": "Về chúng tôi",
    "contact": "Liên hệ"
  },
  "hero": {
    "title": "Khám phá Tương lai tại Đức",
    "subtitle": "Học tiếng Đức, Du học và Định cư cùng DMF Vietnam",
    "cta_primary": "Đăng ký tư vấn miễn phí",
    "cta_secondary": "Khám phá khóa học"
  }
}
```

**de.json:**
```json
{
  "nav": {
    "home": "Startseite",
    "courses": "Kurse",
    "study_abroad": "Studium in Deutschland",
    "about": "Über uns",
    "contact": "Kontakt"
  },
  "hero": {
    "title": "Entdecken Sie Ihre Zukunft in Deutschland",
    "subtitle": "Deutsch lernen, Studieren und Leben mit DMF Vietnam",
    "cta_primary": "Kostenlose Beratung",
    "cta_secondary": "Kurse entdecken"
  }
}
```

---

## 10. Animations & Micro-interactions

### 10.1. Transition Defaults

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-slower: 500ms ease;
```

### 10.2. Scroll Animations (Framer Motion)

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### 10.3. Hover Effects

| Element | Effect |
|---------|--------|
| Buttons | brightness(-10%), scale(1.02) |
| Cards | translateY(-4px), shadow-lg |
| Links | underline slide-in |
| Images | scale(1.05) với overflow:hidden |

### 10.4. Success States

- **Form submit**: Confetti animation (canvas-confetti)
- **Step complete**: Checkmark animation
- **Counter**: Count-up animation on scroll

---

## 11. Performance Optimization

### 11.1. Kỹ thuật Áp dụng

| Kỹ thuật | Implementation |
|----------|----------------|
| **Lazy Loading** | next/image với loading="lazy" |
| **Code Splitting** | Dynamic imports, React.lazy |
| **Font Optimization** | next/font với display="swap" |
| **Image Optimization** | WebP/AVIF, srcset, sizes |
| **CDN** | Vercel Edge Network |

### 11.2. Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| FCP | < 1.8s |
| TTFB | < 800ms |

---

## 12. Accessibility (a11y)

### 12.1. Checklist

- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus visible states
- [ ] ARIA labels cho icons/buttons
- [ ] Alt text cho images
- [ ] Color contrast ratio >= 4.5:1
- [ ] Skip to content link
- [ ] Form labels liên kết với inputs
- [ ] Error messages accessible

### 12.2. Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 13. Tech Stack Final

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript 5+ |
| **Styling** | Tailwind CSS 3.4+ |
| **Components** | shadcn/ui |
| **Animation** | Framer Motion |
| **Icons** | Lucide Icons |
| **Forms** | React Hook Form + Zod |
| **i18n** | next-intl |
| **AI Chat** | Vercel AI SDK + OpenAI/Claude |
| **Analytics** | Google Analytics 4 |
| **Deployment** | Vercel |

---

## 14. File Structure

```
src/
├── app/
│   ├── [locale]/              # i18n routing
│   │   ├── (marketing)/       # Public pages
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── khoa-hoc/      # Courses
│   │   │   ├── du-hoc-duc/    # Study abroad
│   │   │   ├── dinh-cu/       # Settlement
│   │   │   ├── ve-chung-toi/  # About
│   │   │   ├── tin-tuc/       # Blog
│   │   │   └── lien-he/       # Contact
│   │   └── layout.tsx
│   ├── api/
│   │   └── chat/              # AI Assistant API
│   └── globals.css
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/                # Header, Footer, etc.
│   ├── sections/              # Homepage sections
│   ├── forms/                 # Contact, Registration forms
│   ├── chat/                  # AI Assistant components
│   └── shared/                # Reusable components
├── lib/
│   ├── utils.ts
│   └── i18n.ts
├── hooks/
├── types/
├── messages/                  # i18n translations
│   ├── vi.json
│   └── de.json
└── config/
    └── site.ts
```

---

## 15. Checklist Triển khai

### Phase 1: Foundation
- [ ] Khởi tạo Next.js project
- [ ] Cấu hình Tailwind CSS + shadcn/ui
- [ ] Setup i18n (next-intl)
- [ ] Tạo Design Tokens (colors, typography, spacing)
- [ ] Tạo base components (Button, Card, Input)

### Phase 2: Layout & Navigation
- [ ] Header component (sticky, responsive)
- [ ] Footer component
- [ ] Language Switcher
- [ ] Mobile menu

### Phase 3: Homepage
- [ ] Hero section
- [ ] Stats bar (với animation)
- [ ] Services section
- [ ] Why DMF section
- [ ] How It Works
- [ ] Courses preview
- [ ] Testimonials carousel
- [ ] Partners section
- [ ] Blog preview
- [ ] CTA section

### Phase 4: Pages
- [ ] Courses pages (A1, A2, B1, B2)
- [ ] Study abroad pages
- [ ] Settlement pages
- [ ] About page
- [ ] Contact page
- [ ] Blog listing + detail

### Phase 5: Features
- [ ] Multi-step registration form
- [ ] AI Assistant (DMF Bot)
- [ ] Search & Filter (programs)

### Phase 6: Polish
- [ ] Animations (Framer Motion)
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing

---

*Tài liệu này được tạo dựa trên nghiên cứu UI/UX của ApplyBoard, điều chỉnh cho DMF Vietnam.*
*Cập nhật: 2026-02-03*
