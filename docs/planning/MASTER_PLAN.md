# MASTER PLAN - DMF VIETNAM WEBSITE

> **Phiên bản**: 2.1
> **Cập nhật**: 2026-02-20
> **Tham chiếu**: ApplyBoard.com UI/UX Analysis

---

## TỔNG QUAN

### Mục tiêu Dự án
Xây dựng website DMF Vietnam theo chuẩn quốc tế, lấy cảm hứng từ ApplyBoard - nền tảng du học hàng đầu thế giới.

### Trạng thái Hiện tại

| Metrics | Giá trị |
|---------|---------|
| **Tiến độ** | ~82% hoàn thành |
| **Phase hiện tại** | Phase 5 - QA/Polish |
| **Homepage** | 11/11 sections hoàn thành |
| **Pages** | 24/26 pages hoàn thành |
| **Components** | 31/35 components hoàn thành |

---

## PHẦN 1: TECH STACK (ĐÃ XÁC ĐỊNH)

### Core Stack

| Layer | Technology | Version | Status |
|-------|------------|---------|--------|
| Framework | Next.js | 16.1.6 | ✅ Installed |
| UI Library | React | 19.2.3 | ✅ Installed |
| Language | TypeScript | 5.x | ✅ Configured |
| Styling | Tailwind CSS | 4.x | ✅ Configured |
| Components | shadcn/ui | latest | ✅ 14 components |
| Animation | Framer Motion | 12.30.0 | ✅ Installed |
| Icons | Lucide React | 0.563.0 | ✅ Installed |

### Cần Bổ sung

| Layer | Technology | Mục đích | Priority |
|-------|------------|----------|----------|
| i18n | next-intl | Song ngữ Đức-Việt | HIGH |
| Forms | React Hook Form + Zod | Form validation | HIGH |
| AI Chat | Vercel AI SDK | DMF Bot Assistant | MEDIUM |
| Analytics | Google Analytics 4 | Tracking | MEDIUM |
| CMS | Sanity / Contentlayer | Blog content | LOW |

---

## PHẦN 2: DESIGN SYSTEM (HỌC TỪ APPLYBOARD)

### 2.1 Color Palette - ApplyBoard Style

```
┌─────────────────────────────────────────────────────────────┐
│  BRAND COLORS                                                │
├─────────────────────────────────────────────────────────────┤
│  Primary Blue    #2759A5  ████████  Trust, Professional     │
│  Primary Dark    #1E4A8A  ████████  Hover states            │
│  Primary Light   #3A6DB8  ████████  Highlights              │
│                                                              │
│  Secondary Orange #E7940D ████████  CTA, Energy             │
│  Secondary Dark   #C67D0B ████████  Hover states            │
│  Secondary Light  #F5A623 ████████  Accents                 │
├─────────────────────────────────────────────────────────────┤
│  SEMANTIC COLORS                                             │
├─────────────────────────────────────────────────────────────┤
│  Success Green   #22C55E  ████████  Confirmations           │
│  Warning Amber   #F59E0B  ████████  Alerts                  │
│  Error Red       #EF4444  ████████  Errors                  │
│  Info Blue       #3B82F6  ████████  Information             │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Typography - ApplyBoard Style

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 Hero | Plus Jakarta Sans | 48-60px | 700 | 1.1 |
| H2 Section | Plus Jakarta Sans | 36-40px | 700 | 1.2 |
| H3 Card | Plus Jakarta Sans | 24-28px | 600 | 1.3 |
| Body Large | Inter | 18px | 400 | 1.6 |
| Body | Inter | 16px | 400 | 1.6 |
| Body Small | Inter | 14px | 400 | 1.5 |
| Button | Inter | 14-16px | 600 | 1 |

### 2.3 Spacing System

```
Base: 4px
─────────────────────────────────
4px   8px   12px  16px  24px  32px  48px  64px  80px  96px
xs    sm    md    base  lg    xl    2xl   3xl   4xl   5xl
```

### 2.4 Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 8px (rounded-lg) |
| Cards | 12px (rounded-xl) |
| Inputs | 8px (rounded-lg) |
| Modals | 16px (rounded-2xl) |
| Pills/Badges | 9999px (rounded-full) |

### 2.5 Shadows (ApplyBoard Style)

```css
/* Subtle - Cards at rest */
shadow-sm: 0 1px 2px rgba(0,0,0,0.05);

/* Default - Cards, dropdowns */
shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);

/* Medium - Cards on hover */
shadow-md: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);

/* Large - Modals, elevated cards */
shadow-lg: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);

/* XL - Hero elements */
shadow-xl: 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04);
```

### 2.6 Transitions (ApplyBoard Style)

```css
/* Standard transitions */
--transition-fast: 150ms ease;    /* Micro-interactions */
--transition-base: 200ms ease;    /* Buttons, links */
--transition-slow: 300ms ease;    /* Cards, modals */
--transition-slower: 400ms ease;  /* Page transitions */

/* Specific easing */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);  /* Smooth out */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);     /* Balanced */
```

---

## PHẦN 3: SITEMAP & PAGES

### 3.1 Cấu trúc Trang

```
/                           ─── Trang chủ ✅
│
├── /khoa-hoc-tieng-duc     ─── Khóa học tiếng Đức (Overview) ✅
│   ├── /a1                 ─── Khóa A1 ✅
│   ├── /a2                 ─── Khóa A2 ✅
│   ├── /b1                 ─── Khóa B1 ✅
│   └── /b2                 ─── Khóa B2 ✅
│
├── /du-hoc-duc             ─── Du học Đức (Overview) ✅
│   ├── /du-hoc-nghe        ─── Ausbildung ✅
│   ├── /du-hoc-dai-hoc     ─── Đại học ✅
│   └── /dieu-kien-chi-phi  ─── Điều kiện & Chi phí ✅
│
├── /dinh-cu-duc            ─── Định cư Đức (Overview) ✅
│   ├── /con-duong-dinh-cu  ─── Con đường định cư ⬜
│   └── /thanh-lap-dn       ─── Thành lập doanh nghiệp ⬜
│
├── /ve-chung-toi           ─── Về chúng tôi ✅
│   ├── /doi-ngu            ─── Đội ngũ ✅
│   └── /thanh-tich         ─── Thành tích ✅
│
├── /tin-tuc                ─── Blog listing ✅
│   └── /[slug]             ─── Blog detail ✅
│
├── /lien-he                ─── Liên hệ ✅
├── /tu-van-mien-phi        ─── Tư vấn miễn phí ✅
├── /dat-lich-tu-van        ─── Đặt lịch tư vấn ✅
├── /faq                    ─── Câu hỏi thường gặp ✅
├── /thong-tin-huu-ich/faq ─── FAQ chi tiết ✅
├── /thong-tin-huu-ich/cuoc-song-tai-duc ─── Life in Germany ✅
├── /chinh-sach-bao-mat     ─── Privacy Policy ✅
└── /dieu-khoan-su-dung     ─── Terms of Use ✅

Tổng: 26 pages (24 đã có, 2 đang backlog)
```

### 3.2 Homepage Sections

| # | Section | Mô tả | Status |
|---|---------|-------|--------|
| 1 | Header | Sticky nav + CTA | ✅ Done |
| 2 | Hero | Video/Image + Stats + CTAs | ✅ Done |
| 3 | Services | 4 cards dịch vụ chính | ✅ Done |
| 4 | Features/Why DMF | 6 USPs với icons | ✅ Done |
| 5 | Courses Preview | Tabs A1-B2 | ✅ Done |
| 6 | Stats Bar | Counter animation | ✅ Done |
| 7 | How It Works | 4-5 bước process | ✅ Done |
| 8 | Testimonials | Carousel học viên | ✅ Done |
| 9 | Partners | Logo carousel | ✅ Done |
| 10 | Blog Preview | 3 bài mới nhất | ✅ Done |
| 11 | CTA Section | Đăng ký tư vấn | ✅ Done |
| 12 | Footer | Multi-column links | ✅ Done |

---

## PHẦN 4: COMPONENTS CHECKLIST

### 4.1 UI Components (shadcn/ui)

| Component | File | Status |
|-----------|------|--------|
| Accordion | accordion.tsx | ✅ |
| Avatar | avatar.tsx | ✅ |
| Badge | badge.tsx | ✅ |
| Button | button.tsx | ✅ |
| Card | card.tsx | ✅ |
| Dialog | dialog.tsx | ✅ |
| Input | input.tsx | ✅ |
| Navigation Menu | navigation-menu.tsx | ✅ |
| Select | select.tsx | ✅ |
| Separator | separator.tsx | ✅ |
| Sheet | sheet.tsx | ✅ |
| Skeleton | skeleton.tsx | ✅ |
| Tabs | tabs.tsx | ✅ |
| Textarea | textarea.tsx | ✅ |
| Carousel | carousel.tsx | ✅ |
| Progress | progress.tsx | ⬜ TODO |
| Toast | toast.tsx | ⬜ TODO |
| Form | form.tsx | ⬜ TODO |

### 4.2 Custom Components

| Component | Mô tả | Status |
|-----------|-------|--------|
| SectionWrapper | Container + spacing cho sections | ⬜ TODO |
| SectionHeader | Title + subtitle pattern | ⬜ TODO |
| StatsCard | Counter với animation | ⬜ TODO |
| TestimonialCard | Avatar + quote + rating | ⬜ TODO |
| CourseCard | Chi tiết khóa học | ⬜ TODO |
| BlogCard | Preview bài viết | ⬜ TODO |
| ProcessStep | Step trong How It Works | ⬜ TODO |
| PartnerLogo | Logo với hover effect | ✅ Done |
| LanguageSwitcher | DE/VI toggle | ⬜ TODO |
| ChatBot | AI Assistant FAB | ⬜ TODO |
| ContactForm | Multi-step form | ✅ Done |
| CTABanner | Full-width CTA | ⬜ TODO |

---

## PHẦN 5: APPLYBOARD PATTERNS CẦN ÁP DỤNG

### 5.1 Navigation Pattern

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo]    Menu1 ▼   Menu2 ▼   Menu3    About    [VI|DE] [CTA] │
└────────────────────────────────────────────────────────────────┘

Features từ ApplyBoard:
- Sticky header với backdrop-blur khi scroll
- Dropdown menus với mega-menu support
- Transparent → Solid transition on scroll
- Mobile: Hamburger → Full-screen overlay
```

### 5.2 Hero Pattern

```
┌────────────────────────────────────────────────────────────────┐
│                                                                 │
│     [Badge: #1 Tư vấn Du học Đức]                              │
│                                                                 │
│     KHÁM PHÁ TƯƠNG LAI                                         │
│     CỦA BẠN TẠI ĐỨC                                            │
│                                                                 │
│     Học tiếng Đức • Du học nghề • Du học đại học • Định cư     │
│                                                                 │
│     [Đăng ký tư vấn] [Khám phá khóa học →]                     │
│                                                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                          │
│  │ 10+  │ │2000+ │ │ 98%  │ │ 50+  │                          │
│  │ Năm  │ │Học   │ │Visa  │ │Đối   │                          │
│  │ KN   │ │viên  │ │Pass  │ │tác   │                          │
│  └──────┘ └──────┘ └──────┘ └──────┘                          │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

Features từ ApplyBoard:
- Gradient/Video background
- Trust badge ở trên
- Large heading với gradient text
- Bullet points dịch vụ
- 2 CTAs (Primary + Secondary)
- Stats cards với counter animation
- Scroll indicator animation
```

### 5.3 Service Cards Pattern

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│    [Icon]       │  │    [Icon]       │  │    [Icon]       │
│                 │  │                 │  │                 │
│  Khóa học       │  │  Du học         │  │  Định cư        │
│  tiếng Đức      │  │  Đức            │  │  Đức            │
│                 │  │                 │  │                 │
│  Từ A1 đến B2,  │  │  Ausbildung và  │  │  Con đường      │
│  cam kết đầu ra │  │  Đại học        │  │  định cư...     │
│                 │  │                 │  │                 │
│  [Tìm hiểu →]   │  │  [Tìm hiểu →]   │  │  [Tìm hiểu →]   │
└─────────────────┘  └─────────────────┘  └─────────────────┘

Features từ ApplyBoard:
- Icon với background gradient
- Hover: translateY(-8px) + shadow-xl
- Arrow icon animate on hover
- Consistent card height (min-height)
```

### 5.4 Testimonials Pattern (ApplyBoard Style)

```
┌────────────────────────────────────────────────────────────────┐
│                                                                 │
│  "Nhờ DMF, em đã đỗ visa và đang học                           │
│   Ausbildung tại Berlin. Cảm ơn thầy cô!"                      │
│                                                                 │
│  ┌────┐  Nguyễn Văn A                                          │
│  │ 📷 │  Du học sinh Ausbildung - Berlin                       │
│  └────┘  ⭐⭐⭐⭐⭐                                              │
│                                                                 │
│  ○ ○ ● ○ ○  [←] [→]                                           │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

Features từ ApplyBoard:
- Large quote marks decoration
- Avatar với border
- Star rating
- Carousel với dots + arrows
- Auto-play với pause on hover
```

### 5.5 How It Works Pattern

```
    ①                ②                ③                ④
    ●────────────────●────────────────●────────────────●
    │                │                │                │
┌───┴───┐        ┌───┴───┐        ┌───┴───┐        ┌───┴───┐
│ Đăng  │        │ Tư vấn│        │ Chuẩn │        │ Lên   │
│ ký    │        │ 1:1   │        │ bị hồ │        │ đường │
│       │        │       │        │ sơ    │        │       │
└───────┘        └───────┘        └───────┘        └───────┘

Features từ ApplyBoard:
- Numbered steps với connecting line
- Icons cho mỗi step
- Animation: steps appear sequentially
- Mobile: Vertical timeline
```

### 5.6 Stats Counter Pattern

```
┌────────────────────────────────────────────────────────────────┐
│                                                                 │
│    10+              2,000+           98%              50+      │
│    Năm              Học viên         Tỷ lệ            Đối tác  │
│    kinh nghiệm      thành công       đậu visa         Đức      │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

Features từ ApplyBoard:
- Count-up animation on scroll (Intersection Observer)
- Suffix support (+, %, etc.)
- Background: gradient hoặc solid color
- Stagger animation cho mỗi number
```

---

## PHẦN 6: FEATURES ĐẶC BIỆT

### 6.1 AI Assistant - DMF Bot

**Vị trí**: FAB góc phải dưới
**Công nghệ**: Vercel AI SDK + OpenAI/Claude
**Ngôn ngữ**: Song ngữ Đức-Việt (auto-detect)

**Tính năng**:
- Trả lời FAQ (khóa học, chi phí, visa)
- Hướng dẫn đăng ký
- Đề xuất chương trình phù hợp
- Chuyển ngôn ngữ tự động

**UI**:
```
        ┌─────────────────────────┐
        │ 🤖 DMF Bot      DE | VI │
        ├─────────────────────────┤
        │                         │
        │  [Chat messages]        │
        │                         │
        │  ┌───────────────────┐  │
        │  │ Quick replies:    │  │
        │  │ • Khóa học A1     │  │
        │  │ • Chi phí du học  │  │
        │  │ • Điều kiện visa  │  │
        │  └───────────────────┘  │
        ├─────────────────────────┤
        │ [Message...    ] [Send] │
        └─────────────────────────┘
              │
    ┌─────────┘
    │
   [💬]  ← FAB button (pulse animation)
```

### 6.2 i18n - Song ngữ Đức-Việt

**Library**: next-intl
**URL Pattern**:
- `dmf.edu.vn/` → Tiếng Việt (default)
- `dmf.edu.vn/de/` → Tiếng Đức

**Language Switcher**:
```
┌─────────────┐
│ 🇻🇳 VI | 🇩🇪 DE │
└─────────────┘
```

**Files cần tạo**:
```
/messages
  ├── vi.json    # Tiếng Việt
  └── de.json    # Tiếng Đức
```

### 6.3 Multi-step Registration Form

**Pattern**: Wizard với progress bar

```
Step 1          Step 2          Step 3          Step 4
  ●───────────────○───────────────○───────────────○

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Step 1: Thông tin cá nhân                         │
│                                                     │
│  Họ và tên      [________________________]         │
│  Email          [________________________]         │
│  Số điện thoại  [________________________]         │
│                                                     │
│                              [Tiếp tục →]          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Steps**:
1. Thông tin cá nhân (Họ tên, Email, SĐT)
2. Mục tiêu (Học tiếng Đức / Du học / Định cư)
3. Chi tiết (Trình độ hiện tại, Thời gian dự kiến)
4. Xác nhận + Submit

**Features**:
- Inline validation (real-time)
- Progress bar hiển thị step
- Save draft (localStorage)
- Confetti animation khi hoàn thành

---

## PHẦN 7: PHASE & MILESTONES

### Phase 1: FOUNDATION (✅ COMPLETED)

| Task | Status | Notes |
|------|--------|-------|
| Setup Next.js 16 | ✅ | App Router |
| Configure TypeScript 5 | ✅ | Strict mode |
| Setup Tailwind CSS 4 | ✅ | OKLCH colors |
| Install shadcn/ui | ✅ | 14 components |
| Setup Framer Motion | ✅ | Animations ready |
| Create Design System | ✅ | globals.css |
| Font optimization | ✅ | Plus Jakarta + Inter |
| Header component | ✅ | Desktop + Mobile |
| Footer component | ✅ | Multi-column |

### Phase 2: HOMEPAGE (🔄 IN PROGRESS - 60%)

| Task | Status | Priority |
|------|--------|----------|
| Hero Section | ✅ | - |
| Services Section | ✅ | - |
| Features Section | ✅ | - |
| Courses Section | ✅ | - |
| CTA Section | ✅ | - |
| Stats Bar (Counter) | ⬜ | HIGH |
| How It Works | ⬜ | HIGH |
| Testimonials | ⬜ | HIGH |
| Partners Logo | ⬜ | MEDIUM |
| Blog Preview | ⬜ | MEDIUM |

### Phase 3: CORE PAGES (⬜ TODO)

| Task | Dependency | Priority |
|------|------------|----------|
| Khóa học Overview | Homepage done | HIGH |
| Course Detail (A1-B2) | Course Overview | HIGH |
| Du học nghề | Homepage done | HIGH |
| Du học đại học | Homepage done | HIGH |
| Điều kiện & Chi phí | Du học pages | MEDIUM |
| Liên hệ | Forms setup | HIGH |
| Về chúng tôi | Content ready | MEDIUM |

### Phase 4: FEATURES (⬜ TODO)

| Task | Dependency | Priority |
|------|------------|----------|
| i18n Setup | Core pages | HIGH |
| Contact Form | Form components | HIGH |
| AI Bot (DMF Bot) | API setup | MEDIUM |
| Blog System | CMS decision | LOW |
| Search & Filter | Multiple pages | LOW |

### Phase 5: POLISH (⬜ TODO)

| Task | Dependency | Priority |
|------|------------|----------|
| Animations (Framer) | All pages | MEDIUM |
| SEO Optimization | All pages | HIGH |
| Performance Audit | All pages | HIGH |
| Accessibility Audit | All components | MEDIUM |
| Cross-browser Testing | All pages | MEDIUM |

### Phase 6: LAUNCH (⬜ TODO)

| Task | Dependency | Priority |
|------|------------|----------|
| Content Review | Client approval | HIGH |
| Final QA | All testing done | HIGH |
| Deployment Setup | Vercel | HIGH |
| DNS Migration | Deployment ready | HIGH |
| Go-live | All above | HIGH |
| Post-launch Monitoring | Go-live | MEDIUM |

---

## PHẦN 8: CONTENT & ASSETS CHECKLIST

### 8.1 Content cần Thu thập (từ Client)

| Loại | Chi tiết | Status |
|------|----------|--------|
| **Số liệu thống kê** | Năm KN, học viên, tỷ lệ visa, đối tác | ⬜ CẦN BỔ SUNG |
| **Thông tin liên hệ** | Địa chỉ, SĐT, Email, Fanpage | ⬜ CẦN BỔ SUNG |
| **Chi tiết khóa học** | Học phí, thời lượng, lịch khai giảng | ⬜ CẦN BỔ SUNG |
| **Đội ngũ** | Tên, chức vụ, ảnh, mô tả | ⬜ CẦN BỔ SUNG |
| **Testimonials** | Tên, khóa, review, ảnh | ⬜ CẦN BỔ SUNG |
| **Đối tác** | Logo các trường/doanh nghiệp | ⬜ CẦN BỔ SUNG |
| **Blog content** | Các bài viết hiện có | ⬜ CẦN BỔ SUNG |

### 8.2 Assets cần Thu thập/Tạo

| Asset | Specs | Status |
|-------|-------|--------|
| Logo DMF | SVG + PNG (transparent) | ✅ Có (cần optimize) |
| Hero Images | 1920x1080, WebP | ⬜ CẦN BỔ SUNG |
| OG Image | 1200x630 | ⬜ CẦN TẠO |
| Favicons | 16x16, 32x32, 180x180 | ⬜ CẦN TẠO |
| Team Photos | 400x400, square crop | ⬜ CẦN BỔ SUNG |
| Testimonial Photos | 100x100, square crop | ⬜ CẦN BỔ SUNG |
| Partner Logos | SVG hoặc PNG transparent | ⬜ CẦN BỔ SUNG |
| Course Icons | 64x64, consistent style | ⬜ Using Lucide ✅ |
| Video (nếu có) | MP4, compressed | ⬜ OPTIONAL |

---

## PHẦN 9: PERFORMANCE TARGETS

### Core Web Vitals (theo Google)

| Metric | Target | Hiện tại |
|--------|--------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | TBD |
| FID (First Input Delay) | < 100ms | TBD |
| CLS (Cumulative Layout Shift) | < 0.1 | TBD |
| FCP (First Contentful Paint) | < 1.8s | TBD |
| TTFB (Time to First Byte) | < 800ms | TBD |

### Lighthouse Scores

| Category | Target |
|----------|--------|
| Performance | > 90 |
| Accessibility | > 95 |
| Best Practices | > 95 |
| SEO | > 95 |

### Optimization Techniques

- [x] Font optimization (next/font)
- [ ] Image optimization (next/image + WebP)
- [ ] Code splitting (dynamic imports)
- [ ] Lazy loading (components + images)
- [ ] Bundle analysis + tree shaking
- [ ] CDN (Vercel Edge Network)
- [ ] Caching headers

---

## PHẦN 10: FILE STRUCTURE (RECOMMENDED)

```
src/
├── app/
│   ├── [locale]/                 # i18n routing
│   │   ├── (marketing)/          # Public pages group
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── khoa-hoc-tieng-duc/
│   │   │   │   ├── page.tsx      # Overview
│   │   │   │   ├── [level]/      # a1, a2, b1, b2
│   │   │   │   │   └── page.tsx
│   │   │   ├── du-hoc-duc/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── du-hoc-nghe/
│   │   │   │   ├── du-hoc-dai-hoc/
│   │   │   │   └── dieu-kien-chi-phi/
│   │   │   ├── dinh-cu-duc/
│   │   │   ├── ve-chung-toi/
│   │   │   ├── tin-tuc/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   └── lien-he/
│   │   └── layout.tsx
│   ├── api/
│   │   ├── chat/                 # AI Bot API (planned)
│   │   └── forms/[formType]/     # Contact/Consult/Booking API ✅
│   ├── layout.tsx                # Root layout
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   ├── ui/                       # shadcn/ui (14+ components)
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # Homepage sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── features.tsx
│   │   ├── courses.tsx
│   │   ├── stats.tsx
│   │   ├── how-it-works.tsx
│   │   ├── testimonials.tsx
│   │   ├── partners.tsx
│   │   ├── blog-preview.tsx
│   │   └── cta.tsx
│   ├── forms/                    # Contact, Registration
│   ├── chat/                     # AI Assistant
│   └── shared/                   # Reusable components
│
├── lib/
│   ├── utils.ts                  # cn() helper
│   ├── animations.ts             # motion variants
│   ├── submit-form.ts            # client submit helper
│   ├── forms.ts                  # server form validation + persistence
│   └── blog.ts                   # centralized blog data
│
├── hooks/                        # Custom hooks
│   ├── use-counter.ts
│   ├── use-intersection.ts
│   └── use-media-query.ts
│
├── types/                        # TypeScript types
│
├── messages/                     # i18n translations
│   ├── vi.json
│   └── de.json
│
└── config/
    └── site.ts                   # Site configuration
```

---

## PHẦN 11: IMMEDIATE NEXT STEPS

### Priority 1: Production Hardening

1. **CRM Integration** - Cấu hình webhook thật cho form API và quy trình xử lý lead.
2. **Observability** - Bổ sung logging + alert cho form submissions và lỗi runtime.
3. **Quality Gate** - Duy trì CI lint/test/build cho toàn bộ PR.

### Priority 2: Content Operations

1. Chuẩn hóa quy trình cập nhật blog trong `src/lib/blog.ts` hoặc chuyển sang CMS.
2. Bổ sung ảnh thật cho blog/testimonials/partners thay cho placeholder.
3. Kiểm duyệt nội dung pháp lý (privacy/terms) với đội ngũ vận hành.

### Priority 3: Feature Backlog

1. **i18n Setup** - next-intl với DE/VI.
2. **AI Bot** - DMF Assistant.
3. **Progress/Toast/Form primitives** - hoàn thiện UI checklist còn lại.

---

## PHẦN 12: NOTES & DECISIONS

### Đã Quyết định

- ✅ Tech Stack: Next.js 16 + React 19 + Tailwind 4 + shadcn/ui
- ✅ Design Style: ApplyBoard-inspired, clean, professional
- ✅ Colors: Primary Blue #2759A5 + Secondary Orange #E7940D
- ✅ Fonts: Plus Jakarta Sans (headings) + Inter (body)
- ✅ Hosting: Vercel (dự kiến)

### Cần Quyết định

- ⬜ CMS: Sanity vs Contentlayer vs None (static)
- ⬜ AI Provider: OpenAI vs Claude cho Bot
- ⬜ Analytics: GA4 vs Plausible vs Vercel Analytics
- ⬜ Domain: dev.dmf.edu.vn cho staging?

### Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Thiếu content từ client | HIGH | Placeholder content + clear checklist |
| Scope creep (thêm features) | MEDIUM | Strict phase boundaries |
| Performance issues | MEDIUM | Regular Lighthouse audits |
| i18n complexity | MEDIUM | Setup early, test often |

---

*Master Plan này được cập nhật dựa trên phân tích ApplyBoard và trạng thái hiện tại của dự án.*

**Tạo bởi**: Claude Code
**Ngày**: 2026-02-20
**Version**: 2.1
