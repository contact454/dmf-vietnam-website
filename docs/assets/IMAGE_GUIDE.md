# HƯỚNG DẪN QUẢN LÝ HÌNH ẢNH - DMF WEBSITE

> Tài liệu này hướng dẫn nhân viên cách upload và quản lý hình ảnh cho website.

---

## 1. TỔNG QUAN VỊ TRÍ HÌNH ẢNH

### 1.1 Bản đồ Hình ảnh trên Homepage

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER                                                      │
│  └── Logo: 180x40px (SVG/PNG)                               │
├─────────────────────────────────────────────────────────────┤
│  HERO SECTION - Student Image Collage                        │
│  └── 5 ảnh sinh viên floating + overlapping:                │
│      - student-1.webp (400x500px) - Ảnh chính giữa          │
│      - student-2.webp (320x400px) - Góc trên trái           │
│      - student-3.webp (300x380px) - Góc trên phải           │
│      - student-4.webp (280x350px) - Góc dưới trái           │
│      - student-5.webp (320x400px) - Góc dưới phải           │
├─────────────────────────────────────────────────────────────┤
│  SERVICES SECTION                                            │
│  └── Service Images: 400x300px (4 ảnh, mỗi dịch vụ 1 ảnh)  │
│      - german-class.webp (Học tiếng Đức)                    │
│      - ausbildung.webp (Du học nghề)                        │
│      - university.webp (Du học đại học)                     │
│      - germany-city.webp (Định cư Đức)                      │
├─────────────────────────────────────────────────────────────┤
│  STATS SECTION                                               │
│  └── Stat Icons: 56x56px (using Lucide)                     │
├─────────────────────────────────────────────────────────────┤
│  FEATURES SECTION                                            │
│  └── Feature Icons: 48x48px (using Lucide)                  │
├─────────────────────────────────────────────────────────────┤
│  HOW IT WORKS                                                │
│  └── Step Icons: 64x64px (using Lucide)                     │
├─────────────────────────────────────────────────────────────┤
│  COURSES SECTION                                             │
│  └── Course Images: 400x300px (4 ảnh, mỗi cấp độ 1 ảnh)    │
│      - a1-beginner.webp                                      │
│      - a2-elementary.webp                                    │
│      - b1-intermediate.webp                                  │
│      - b2-advanced.webp                                      │
├─────────────────────────────────────────────────────────────┤
│  TESTIMONIALS SECTION                                        │
│  └── Avatar: 100x100px (1:1, circular)                      │
│  └── Background Pattern: CSS (no image needed)              │
├─────────────────────────────────────────────────────────────┤
│  PARTNERS SECTION                                            │
│  └── Partner Logos: 200x80px (grayscale, hover: color)      │
├─────────────────────────────────────────────────────────────┤
│  BLOG PREVIEW                                                │
│  └── Blog Thumbnails: 800x450px (16:9)                      │
│  └── Featured Image: 1200x675px (16:9)                      │
├─────────────────────────────────────────────────────────────┤
│  CTA SECTION                                                 │
│  └── Background: 1920x800px (WebP) + gradient overlay       │
│      - cta-background.webp                                   │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
│  └── Logo: 180x40px (white version)                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. BẢNG KÍCH THƯỚC CHUẨN

### 2.1 Logos & Branding

| Tên | Kích thước | Tỷ lệ | Định dạng | Vị trí |
|-----|-----------|-------|-----------|--------|
| Logo chính | 180x40px | - | SVG/PNG | Header |
| Logo trắng | 180x40px | - | SVG/PNG | Footer |
| Logo vuông | 200x200px | 1:1 | PNG | Social, Favicon |
| Favicon | 32x32px | 1:1 | ICO/PNG | Browser tab |
| Apple Touch | 180x180px | 1:1 | PNG | iOS |
| OG Image | 1200x630px | 1.91:1 | JPG/PNG | Social sharing |

### 2.2 Hero & Banners

| Tên | Kích thước | Tỷ lệ | Định dạng | Ghi chú |
|-----|-----------|-------|-----------|---------|
| Hero Desktop | 1920x1080px | 16:9 | JPG/WebP | Nén < 500KB |
| Hero Mobile | 768x1024px | 3:4 | JPG/WebP | Nén < 200KB |
| Page Banner | 1920x400px | - | JPG/WebP | Subpages |

### 2.3 Thumbnails & Cards

| Tên | Kích thước | Tỷ lệ | Định dạng | Sử dụng |
|-----|-----------|-------|-----------|---------|
| Course Thumbnail | 400x300px | 4:3 | JPG/WebP | Courses section |
| Blog Thumbnail | 800x450px | 16:9 | JPG/WebP | Blog cards |
| Blog Featured | 1200x675px | 16:9 | JPG/WebP | Featured post |
| Gallery Image | 800x600px | 4:3 | JPG/WebP | Galleries |

### 2.4 Avatars & Portraits

| Tên | Kích thước | Tỷ lệ | Định dạng | Sử dụng |
|-----|-----------|-------|-----------|---------|
| Testimonial Avatar | 100x100px | 1:1 | JPG/WebP | Testimonials |
| Team Photo | 400x400px | 1:1 | JPG/WebP | Team page |
| Team Large | 600x800px | 3:4 | JPG/WebP | Team detail |

### 2.5 Partner Logos

| Tên | Kích thước | Tỷ lệ | Định dạng | Ghi chú |
|-----|-----------|-------|-----------|---------|
| Partner Logo | 200x80px | - | SVG/PNG | Transparent BG |
| University Logo | 200x80px | - | SVG/PNG | Transparent BG |

---

## 3. CẤU TRÚC THƯ MỤC

```
public/
├── images/
│   ├── hero/
│   │   ├── hero-desktop.webp
│   │   ├── hero-mobile.webp
│   │   └── hero-video.mp4 (optional)
│   │
│   ├── services/
│   │   ├── german-class.webp      (Khóa học tiếng Đức)
│   │   ├── ausbildung.webp        (Du học nghề)
│   │   ├── university.webp        (Du học đại học)
│   │   └── germany-city.webp      (Định cư Đức)
│   │
│   ├── courses/
│   │   ├── a1-beginner.webp
│   │   ├── a2-elementary.webp
│   │   ├── b1-intermediate.webp
│   │   └── b2-advanced.webp
│   │
│   ├── team/
│   │   ├── member-1.webp
│   │   ├── member-2.webp
│   │   └── ...
│   │
│   ├── testimonials/
│   │   ├── student-1.webp
│   │   ├── student-2.webp
│   │   └── ...
│   │
│   ├── partners/
│   │   ├── tu-munich.svg
│   │   ├── fu-berlin.svg
│   │   ├── goethe-institut.svg
│   │   └── ...
│   │
│   ├── blog/
│   │   ├── post-1-thumb.webp
│   │   ├── post-1-featured.webp
│   │   └── ...
│   │
│   ├── cta/
│   │   └── cta-background.webp
│   │
│   └── misc/
│       ├── about-hero.webp
│       ├── contact-map.webp
│       └── ...
│
├── logo.svg
├── logo-white.svg
├── logo-square.png
├── favicon.ico
├── apple-touch-icon.png
└── og-image.jpg
```

---

## 4. QUY TẮC ĐẶT TÊN FILE

### 4.1 Format chung

```
[category]-[name]-[variant].[extension]

Ví dụ:
- hero-homepage-desktop.webp
- course-a1-thumbnail.webp
- team-nguyen-van-a.webp
- partner-tu-munich.svg
- blog-ausbildung-guide-thumb.webp
```

### 4.2 Quy tắc

1. **Chữ thường** - Luôn dùng lowercase
2. **Dấu gạch ngang** - Thay khoảng trắng bằng `-`
3. **Không dấu** - Không dùng tiếng Việt có dấu
4. **Có ý nghĩa** - Tên mô tả nội dung ảnh
5. **Ngắn gọn** - Tối đa 50 ký tự

---

## 5. TỐI ƯU HÌNH ẢNH

### 5.1 Định dạng khuyến nghị

| Loại ảnh | Định dạng | Lý do |
|----------|-----------|-------|
| Ảnh chụp (photo) | WebP | Nhỏ hơn 30% so với JPG |
| Logo, icon | SVG | Vector, scale tốt |
| Logo (không có SVG) | PNG | Hỗ trợ transparency |
| Ảnh động | GIF/WebP | Animation support |

### 5.2 Công cụ nén ảnh

- **Squoosh** (https://squoosh.app) - Online, miễn phí
- **TinyPNG** (https://tinypng.com) - PNG/JPG
- **SVGOMG** (https://jakearchibald.github.io/svgomg/) - SVG

### 5.3 Mục tiêu dung lượng

| Loại | Dung lượng tối đa |
|------|-------------------|
| Hero image | < 500KB |
| Thumbnail | < 100KB |
| Avatar | < 50KB |
| Logo SVG | < 20KB |
| Partner logo | < 30KB |

---

## 6. PLACEHOLDER HIỆN TẠI

Các section hiện đang sử dụng placeholder, cần thay thế bằng ảnh thật:

### 6.1 Hero Section - Student Image Collage

**File:** `src/components/sections/hero.tsx`

**Design Pattern:** 5 ảnh sinh viên floating collage với animation, chồng lên nhau tạo hiệu ứng sống động như ApplyBoard.

**Ảnh cần upload:**
- `/public/images/hero/student-1.webp` (400x500px) - Ảnh chính giữa, lớn nhất
- `/public/images/hero/student-2.webp` (320x400px) - Góc trên trái
- `/public/images/hero/student-3.webp` (300x380px) - Góc trên phải
- `/public/images/hero/student-4.webp` (280x350px) - Góc dưới trái
- `/public/images/hero/student-5.webp` (320x400px) - Góc dưới phải

**Gợi ý nội dung ảnh:**
- Ảnh sinh viên Việt Nam đang học tại Đức
- Ảnh chụp tại trường đại học/công ty Đức
- Ảnh mặc đồng phục hoặc trong môi trường chuyên nghiệp
- Nên có nụ cười tự tin, ánh sáng tốt

### 6.2 Services Section

**File:** `src/components/sections/services.tsx`

**Ảnh cần upload:**
- `/public/images/services/german-class.webp` (400x300px) - Lớp học tiếng Đức
- `/public/images/services/ausbildung.webp` (400x300px) - Du học nghề
- `/public/images/services/university.webp` (400x300px) - Du học đại học
- `/public/images/services/germany-city.webp` (400x300px) - Định cư Đức

### 6.3 Courses Section

**File:** `src/components/sections/courses.tsx`

**Ảnh cần upload:**
- `/public/images/courses/a1-beginner.webp` (400x300px)
- `/public/images/courses/a2-elementary.webp` (400x300px)
- `/public/images/courses/b1-intermediate.webp` (400x300px)
- `/public/images/courses/b2-advanced.webp` (400x300px)

### 6.4 Testimonials Section

**File:** `src/components/sections/testimonials.tsx`

```tsx
// Hiện tại: Placeholder gradient + chữ cái đầu
<div className="bg-gradient-to-br from-primary/20 to-secondary/20">
  <span>{testimonial.name.charAt(0)}</span>
</div>

// Cần thay: Ảnh thật
<Image
  src={testimonial.image}  // "/images/testimonials/student-1.webp"
  alt={testimonial.name}
  fill
  className="object-cover"
/>
```

**Ảnh cần upload:**
- `/public/images/testimonials/student-1.webp` (100x100px)
- `/public/images/testimonials/student-2.webp` (100x100px)
- `/public/images/testimonials/student-3.webp` (100x100px)
- `/public/images/testimonials/student-4.webp` (100x100px)
- `/public/images/testimonials/student-5.webp` (100x100px)

### 6.5 Partners Section

**File:** `src/components/sections/partners.tsx`

```tsx
// Hiện tại: Icon placeholder
<Icon className="h-6 w-6 text-muted-foreground" />

// Cần thay: Logo thật
<Image
  src={partner.logo}  // "/images/partners/tu-munich.svg"
  alt={partner.name}
  width={200}
  height={80}
  className="object-contain"
/>
```

**Logo cần upload:**
- `/public/images/partners/tu-munich.svg`
- `/public/images/partners/fu-berlin.svg`
- `/public/images/partners/rwth-aachen.svg`
- `/public/images/partners/goethe-institut.svg`
- ... (tất cả 12 partners)

### 6.6 Blog Preview Section

**File:** `src/components/sections/blog-preview.tsx`

```tsx
// Hiện tại: Gradient placeholder
<div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5">
  <BookOpen className="h-12 w-12 text-primary/30" />
</div>

// Cần thay: Ảnh bài viết
<Image
  src={post.image}  // "/images/blog/ausbildung-guide.webp"
  alt={post.title}
  fill
  className="object-cover"
/>
```

**Ảnh cần upload:**
- `/public/images/blog/ausbildung-thumb.webp` (800x450px)
- `/public/images/blog/german-learning-thumb.webp` (800x450px)
- `/public/images/blog/study-cost-thumb.webp` (800x450px)

### 6.7 CTA Section

**File:** `src/components/sections/cta.tsx`

**Ảnh cần upload:**
- `/public/images/cta/cta-background.webp` (1920x800px) - Ảnh nền CTA

---

## 7. HƯỚNG DẪN UPLOAD ẢNH

### Bước 1: Chuẩn bị ảnh

1. Resize về đúng kích thước yêu cầu
2. Nén ảnh bằng Squoosh hoặc TinyPNG
3. Đổi tên theo quy tắc

### Bước 2: Upload vào thư mục

1. Mở thư mục `public/images/`
2. Vào thư mục con tương ứng (testimonials, partners, blog...)
3. Copy file ảnh vào

### Bước 3: Cập nhật code

1. Mở file component tương ứng
2. Thay đường dẫn placeholder bằng đường dẫn ảnh mới
3. Bỏ comment code `<Image />` nếu có

### Bước 4: Kiểm tra

1. Chạy `npm run dev`
2. Mở browser xem kết quả
3. Kiểm tra responsive trên mobile

---

## 8. CHECKLIST HÌNH ẢNH

### Branding
- [ ] Logo chính (SVG)
- [ ] Logo trắng (SVG)
- [ ] Favicon (ICO)
- [ ] OG Image (1200x630)
- [ ] Apple Touch Icon (180x180)

### Homepage
- [ ] 5 Hero student images (collage floating)
- [ ] 4 Service images (400x300 mỗi ảnh)
- [ ] 4 Course images (400x300 mỗi ảnh)
- [ ] 5 Testimonial avatars (100x100 mỗi ảnh)
- [ ] 12 Partner logos (200x80 mỗi logo)
- [ ] 3 Blog thumbnails (800x450 mỗi ảnh)
- [ ] CTA background (1920x800)

### Subpages
- [ ] About page hero
- [ ] Team photos (nếu có)
- [ ] Contact page map
- [ ] Course detail images

---

*Cập nhật: 2026-02-03*
