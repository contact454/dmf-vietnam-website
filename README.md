# DMF Vietnam Website

> Website tư vấn du học Đức và đào tạo tiếng Đức hàng đầu Việt Nam

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.6 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5.x (strict mode) |
| **Styling** | Tailwind CSS 4.x (OKLCH colors) |
| **Components** | shadcn/ui (new-york style) |
| **Animation** | Framer Motion 12.x |
| **Icons** | Lucide React |

## Features

- **18 Pages** - Đầy đủ các trang: Khóa học, Du học, Định cư, Liên hệ, Tin tức...
- **Responsive Design** - Tối ưu cho mọi thiết bị
- **Modern UI/UX** - Thiết kế theo chuẩn ApplyBoard
- **Smooth Animations** - Framer Motion scroll animations
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Fast Performance** - Static generation, optimized images

## Pages

### Khóa học tiếng Đức
- `/khoa-hoc-tieng-duc` - Tổng quan khóa học
- `/khoa-hoc-tieng-duc/a1` - Tiếng Đức A1
- `/khoa-hoc-tieng-duc/a2` - Tiếng Đức A2
- `/khoa-hoc-tieng-duc/b1` - Tiếng Đức B1
- `/khoa-hoc-tieng-duc/b2` - Tiếng Đức B2

### Du học Đức
- `/du-hoc-duc` - Tổng quan du học
- `/du-hoc-duc/du-hoc-nghe` - Du học nghề (Ausbildung)
- `/du-hoc-duc/du-hoc-dai-hoc` - Du học đại học
- `/du-hoc-duc/dieu-kien-chi-phi` - Điều kiện & Chi phí

### Khác
- `/dinh-cu-duc` - Định cư Đức
- `/ve-chung-toi` - Về chúng tôi
- `/ve-chung-toi/doi-ngu` - Đội ngũ giảng viên
- `/tin-tuc` - Tin tức & Blog
- `/lien-he` - Liên hệ
- `/tu-van-mien-phi` - Tư vấn miễn phí
- `/dat-lich-tu-van` - Đặt lịch tư vấn

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/contact454/dmf-vietnam-website.git

# Navigate to project directory
cd dmf-vietnam-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── khoa-hoc-tieng-duc/ # German courses pages
│   ├── du-hoc-duc/         # Study abroad pages
│   ├── dinh-cu-duc/        # Settlement page
│   ├── ve-chung-toi/       # About pages
│   ├── tin-tuc/            # News/Blog pages
│   ├── lien-he/            # Contact page
│   └── ...
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer
│   ├── sections/           # Homepage sections
│   └── shared/             # Reusable components
└── lib/                    # Utilities & animations
```

## Design System

### Colors (OKLCH)

| Color | Variable | Usage |
|-------|----------|-------|
| Primary Blue | `--primary` | Main brand color, CTAs |
| Secondary Orange | `--secondary` | Accent, highlights |
| Teal | `--service-settle` | Settlement services |
| Purple | `--service-consult` | Consulting services |

### Typography

- **Headings**: Plus Jakarta Sans (600-800 weight)
- **Body**: Inter (400-600 weight)

### Components

- Buttons: `rounded-lg` (8px)
- Cards: `rounded-xl` (12px) with soft shadows
- Modals: `rounded-2xl` (16px)

## Key Components

| Component | Description |
|-----------|-------------|
| `FloatingCTA` | Floating consultation button |
| `VideoPopup` | Video testimonial modal |
| `ServiceTabs` | Animated tab navigation |
| `ImagePlaceholder` | Smart image with fallback |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Documentation

- [Master Plan](docs/planning/MASTER_PLAN.md)
- [Project Plan](docs/planning/PROJECT_PLAN.md)
- [UI/UX Guide](docs/research/DMF-UI-UX-Implementation-Guide.md)
- [Image Guide](docs/assets/IMAGE_GUIDE.md)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by DMF Vietnam.

## Contact

- **Website**: [dmf.edu.vn](https://dmf.edu.vn)
- **Email**: info@dmf.edu.vn
- **Phone**: 0123 456 789

---

Built with ❤️ by DMF Team
