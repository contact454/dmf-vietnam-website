# KẾ HOẠCH DỰ ÁN DMF VIETNAM WEBSITE

## 1. TỔNG QUAN DỰ ÁN

### 1.1 Mục tiêu
- Cải tổ hoàn toàn website dmf.edu.vn
- Áp dụng thiết kế modern theo phong cách ApplyBoard
- Tối ưu trải nghiệm người dùng và chuyển đổi

### 1.2 Phạm vi
- Thiết kế lại toàn bộ giao diện
- Xây dựng trên nền tảng mới (Next.js)
- Giữ nguyên nội dung từ website cũ
- Tối ưu SEO và hiệu suất

---

## 2. TECH STACK

| Công nghệ | Version | Mục đích |
|-----------|---------|----------|
| Next.js | 14+ | Framework React với App Router |
| React | 18+ | UI Library |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 3.4+ | Styling |
| shadcn/ui | latest | Component library |
| Framer Motion | 10+ | Animations |
| Lucide Icons | latest | Icons |

### Tùy chọn thêm:
- **CMS**: Sanity / Strapi / Contentlayer
- **Form**: React Hook Form + Zod
- **Analytics**: Google Analytics 4 / Plausible
- **Deployment**: Vercel

---

## 3. SITEMAP & CẤU TRÚC TRANG

### 3.1 Trang chính

```
/ (Trang chủ)
├── /khoa-hoc-tieng-duc
│   ├── /a1
│   ├── /a2
│   ├── /b1
│   └── /b2
├── /du-hoc-duc
│   ├── /du-hoc-nghe (Ausbildung)
│   ├── /du-hoc-dai-hoc
│   └── /dieu-kien-chi-phi
├── /dinh-cu-duc
│   ├── /con-duong-dinh-cu
│   └── /thanh-lap-doanh-nghiep
├── /tin-tuc
│   └── /[slug]
├── /ve-chung-toi
│   ├── /doi-ngu
│   └── /thanh-tich
└── /lien-he
```

### 3.2 Cấu trúc trang chủ

| # | Section | Mô tả |
|---|---------|-------|
| 1 | Header | Logo + Navigation + CTA Button |
| 2 | Hero | Video/Image background + Headline + Sub + CTA |
| 3 | Stats Bar | Số liệu ấn tượng (học viên, năm KN, tỷ lệ visa) |
| 4 | Services | 4 cards dịch vụ chính |
| 5 | Why DMF | USPs - Tại sao chọn DMF |
| 6 | How It Works | Quy trình 4-5 bước |
| 7 | Courses | Preview khóa học tiếng Đức |
| 8 | Testimonials | Đánh giá từ học viên |
| 9 | Partners | Logo trường ĐH/đối tác Đức |
| 10 | Blog | 3 bài viết mới nhất |
| 11 | CTA Section | Đăng ký tư vấn miễn phí |
| 12 | Footer | Links + Contact + Social |

---

## 4. DESIGN SYSTEM

### 4.1 Color Palette

```css
/* Primary */
--primary: #2759A5;        /* Xanh DMF */
--primary-dark: #1E4A8A;
--primary-light: #3A6DB8;

/* Secondary */
--secondary: #E7940D;      /* Cam accent */
--secondary-dark: #C67D0B;
--secondary-light: #F5A623;

/* Neutral */
--dark: #1A1A2E;
--gray-900: #1F2937;
--gray-600: #4B5563;
--gray-400: #9CA3AF;
--gray-100: #F3F4F6;
--white: #FFFFFF;

/* Semantic */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

### 4.2 Typography

```css
/* Font Family */
--font-heading: 'Plus Jakarta Sans', sans-serif;
--font-body: 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### 4.3 Spacing

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 4.4 Components cần xây dựng

#### Layout
- [ ] Header (sticky, transparent option)
- [ ] Footer
- [ ] Container
- [ ] Section wrapper

#### UI Components
- [ ] Button (primary, secondary, outline, ghost)
- [ ] Card (service, course, blog, testimonial)
- [ ] Badge
- [ ] Input / Textarea
- [ ] Select / Dropdown
- [ ] Modal / Dialog
- [ ] Tabs
- [ ] Accordion

#### Sections
- [ ] Hero Section (với video background)
- [ ] Stats Bar
- [ ] Services Grid
- [ ] Features List
- [ ] Process Steps
- [ ] Testimonials Carousel
- [ ] Partners Logo Grid
- [ ] Blog Grid
- [ ] CTA Banner
- [ ] Contact Form

---

## 5. NỘI DUNG CẦN THU THẬP

### 5.1 Từ website cũ (dmf.edu.vn)

- [ ] Thông tin công ty (giới thiệu, lịch sử, tầm nhìn)
- [ ] Chi tiết các khóa học tiếng Đức (A1, A2, B1, B2)
- [ ] Thông tin chương trình du học nghề
- [ ] Thông tin du học đại học
- [ ] Điều kiện, chi phí các chương trình
- [ ] Quy trình xin visa, hồ sơ cần thiết
- [ ] Thông tin định cư, thành lập DN
- [ ] Đội ngũ giảng viên
- [ ] Testimonials học viên
- [ ] Bài viết blog hiện có
- [ ] Thông tin liên hệ (địa chỉ, SĐT, email, fanpage)
- [ ] Lịch khai giảng các lớp

### 5.2 Tài nguyên cần thu thập/tạo mới

- [ ] Logo DMF (file gốc SVG/PNG chất lượng cao)
- [ ] Hình ảnh hero section
- [ ] Ảnh lớp học, học viên
- [ ] Ảnh đội ngũ giảng viên
- [ ] Logo các trường ĐH đối tác tại Đức
- [ ] Logo các đối tác/chứng nhận
- [ ] Video giới thiệu (nếu có)
- [ ] Favicon và app icons

### 5.3 Số liệu thống kê

- [ ] Số năm hoạt động
- [ ] Số học viên đã đào tạo
- [ ] Tỷ lệ đậu visa
- [ ] Số học viên đang học/làm việc tại Đức
- [ ] Số đối tác/trường liên kết

---

## 6. PHASES & MILESTONES

### Phase 1: Chuẩn bị & Thiết kế
- [ ] Thu thập nội dung từ website cũ
- [ ] Thu thập/tạo assets (hình ảnh, logo, icons)
- [ ] Hoàn thiện wireframes
- [ ] Thiết kế mockup các trang chính
- [ ] Review và duyệt thiết kế

### Phase 2: Development - Foundation
- [ ] Setup Next.js project
- [ ] Cấu hình Tailwind CSS
- [ ] Cài đặt shadcn/ui
- [ ] Setup TypeScript types
- [ ] Xây dựng Design System (colors, typography, spacing)
- [ ] Xây dựng Layout components (Header, Footer)

### Phase 3: Development - Pages
- [ ] Trang chủ (Homepage)
- [ ] Trang Khóa học tiếng Đức
- [ ] Trang Du học Đức
- [ ] Trang Định cư Đức
- [ ] Trang Tin tức/Blog
- [ ] Trang Về chúng tôi
- [ ] Trang Liên hệ

### Phase 4: Polish & Optimize
- [ ] Thêm animations (Framer Motion)
- [ ] Responsive testing
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Accessibility check

### Phase 5: Testing & Launch
- [ ] Cross-browser testing
- [ ] Content review
- [ ] Final QA
- [ ] Deployment setup
- [ ] DNS migration
- [ ] Go-live
- [ ] Post-launch monitoring

---

## 7. CHECKLIST TRƯỚC KHI BẮT ĐẦU CODE

### Quyết định cần đưa ra:

- [ ] Xác nhận tech stack (Next.js + Tailwind + shadcn/ui)
- [ ] Chọn CMS (Contentlayer / Sanity / Strapi / None)
- [ ] Chọn hosting (Vercel / VPS / Other)
- [ ] Xác định domain cho dev (dev.dmf.edu.vn?)
- [ ] Font chính thức (Plus Jakarta Sans + Inter?)
- [ ] Xác nhận color palette

### Tài nguyên bắt buộc:

- [ ] Logo DMF chất lượng cao
- [ ] Ít nhất 1 hình hero section
- [ ] Nội dung trang chủ
- [ ] Thông tin liên hệ

---

## 8. GHI CHÚ

### Tham khảo thiết kế:
- ApplyBoard: https://www.applyboard.com
- Website hiện tại: https://dmf.edu.vn

### Style keywords:
- Modern Corporate
- Clean & Professional
- Education-focused
- Trust-building
- Conversion-optimized

---

*Cập nhật lần cuối: {{DATE}}*
