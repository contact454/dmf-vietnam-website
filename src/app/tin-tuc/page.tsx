import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Search,
  ChevronLeft,
  ChevronRight,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tin tức & Blog | DMF Vietnam",
  description: "Cập nhật tin tức du học Đức, kinh nghiệm học tiếng Đức, chia sẻ từ học viên thành công tại DMF Vietnam.",
};

const categories = [
  { slug: "all", label: "Tất cả", count: 24 },
  { slug: "du-hoc-duc", label: "Du học Đức", count: 8 },
  { slug: "tieng-duc", label: "Học tiếng Đức", count: 6 },
  { slug: "kinh-nghiem", label: "Kinh nghiệm", count: 5 },
  { slug: "tin-tuc", label: "Tin tức", count: 3 },
  { slug: "hoc-vien", label: "Học viên chia sẻ", count: 2 }
];

const featuredPost = {
  slug: "du-hoc-nghe-duc-2024-co-hoi-va-thach-thuc",
  title: "Du học nghề Đức 2024: Cơ hội và thách thức cho học viên Việt Nam",
  excerpt: "Tổng quan về thị trường du học nghề Đức năm 2024, những ngành nghề đang có nhu cầu cao và lời khuyên cho các bạn trẻ Việt Nam muốn theo đuổi con đường Ausbildung.",
  category: "Du học Đức",
  author: "DMF Vietnam",
  date: "15/01/2024",
  readTime: "8 phút đọc",
  image: null
};

const posts = [
  {
    slug: "hoc-tieng-duc-tu-a1-den-b1-mat-bao-lau",
    title: "Học tiếng Đức từ A1 đến B1 mất bao lâu?",
    excerpt: "Thời gian học tiếng Đức phụ thuộc vào nhiều yếu tố. Bài viết chia sẻ kinh nghiệm và lộ trình học hiệu quả.",
    category: "Học tiếng Đức",
    author: "Nguyễn Văn A",
    date: "12/01/2024",
    readTime: "5 phút đọc",
    image: null
  },
  {
    slug: "top-10-nganh-ausbildung-luong-cao-nhat",
    title: "Top 10 ngành Ausbildung có lương cao nhất tại Đức",
    excerpt: "Danh sách các ngành nghề Ausbildung có mức lương hấp dẫn và cơ hội việc làm cao sau khi tốt nghiệp.",
    category: "Du học Đức",
    author: "DMF Vietnam",
    date: "10/01/2024",
    readTime: "6 phút đọc",
    image: null
  },
  {
    slug: "kinh-nghiem-xin-visa-du-hoc-duc-2024",
    title: "Kinh nghiệm xin visa du học Đức 2024 thành công",
    excerpt: "Chia sẻ chi tiết quy trình xin visa du học Đức, các giấy tờ cần chuẩn bị và những lưu ý quan trọng.",
    category: "Kinh nghiệm",
    author: "Trần Thị B",
    date: "08/01/2024",
    readTime: "7 phút đọc",
    image: null
  },
  {
    slug: "so-sanh-ausbildung-va-du-hoc-dai-hoc-duc",
    title: "So sánh Ausbildung và Du học đại học Đức: Nên chọn con đường nào?",
    excerpt: "Phân tích ưu nhược điểm của hai con đường du học phổ biến nhất để giúp bạn đưa ra quyết định phù hợp.",
    category: "Du học Đức",
    author: "DMF Vietnam",
    date: "05/01/2024",
    readTime: "8 phút đọc",
    image: null
  },
  {
    slug: "5-sai-lam-khi-hoc-tieng-duc",
    title: "5 sai lầm phổ biến khi học tiếng Đức và cách khắc phục",
    excerpt: "Những lỗi thường gặp của người Việt khi học tiếng Đức và phương pháp để học hiệu quả hơn.",
    category: "Học tiếng Đức",
    author: "Lê Văn C",
    date: "02/01/2024",
    readTime: "5 phút đọc",
    image: null
  },
  {
    slug: "cuoc-song-hoc-vien-viet-nam-tai-duc",
    title: "Cuộc sống của học viên Việt Nam tại Đức như thế nào?",
    excerpt: "Chia sẻ từ các cựu học viên DMF về cuộc sống học tập và làm việc hàng ngày tại Đức.",
    category: "Học viên chia sẻ",
    author: "Phạm Thị D",
    date: "28/12/2023",
    readTime: "6 phút đọc",
    image: null
  },
  {
    slug: "chi-phi-sinh-hoat-tai-duc-2024",
    title: "Chi phí sinh hoạt tại Đức 2024: Cần chuẩn bị bao nhiêu tiền?",
    excerpt: "Tổng hợp chi phí nhà ở, ăn uống, đi lại và các khoản phí khác khi sống tại Đức.",
    category: "Kinh nghiệm",
    author: "DMF Vietnam",
    date: "25/12/2023",
    readTime: "7 phút đọc",
    image: null
  },
  {
    slug: "hoc-bong-du-hoc-duc-danh-cho-sinh-vien-viet-nam",
    title: "Các học bổng du học Đức dành cho sinh viên Việt Nam",
    excerpt: "Tổng hợp các chương trình học bổng từ chính phủ Đức và các tổ chức dành cho sinh viên Việt Nam.",
    category: "Du học Đức",
    author: "DMF Vietnam",
    date: "20/12/2023",
    readTime: "8 phút đọc",
    image: null
  },
  {
    slug: "lam-them-khi-du-hoc-duc-can-biet-gi",
    title: "Làm thêm khi du học Đức: Những điều cần biết",
    excerpt: "Quy định về làm thêm, các công việc phổ biến và kinh nghiệm cân bằng học tập - làm việc.",
    category: "Kinh nghiệm",
    author: "Hoàng Văn E",
    date: "18/12/2023",
    readTime: "6 phút đọc",
    image: null
  }
];

export default function BlogPage() {
  const activeCategory = "all";

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Newspaper className="h-4 w-4" />
                Blog & Tin tức
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tin tức &
                <span className="text-primary"> Chia sẻ</span>
              </h1>
              <p className="text-lg text-gray-600">
                Cập nhật thông tin mới nhất về du học Đức, kinh nghiệm học tiếng Đức
                và những chia sẻ hữu ích từ đội ngũ DMF và các học viên thành công.
              </p>
            </div>
          </div>
        </section>

        {/* Categories & Search */}
        <section className="py-8 border-b border-gray-200 sticky top-16 bg-white z-40">
          <div className="container-dmf">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Categories */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                      activeCategory === category.slug
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {category.label}
                    <span className="ml-1 text-xs opacity-70">({category.count})</span>
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  className="pl-10 pr-4 py-2 w-full lg:w-64 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container-dmf">
            <Link
              href={`/tin-tuc/${featuredPost.slug}`}
              className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Newspaper className="h-20 w-20 text-gray-300" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                      Nổi bật
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 lg:py-16">
          <div className="container-dmf">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post, index) => (
                <Link
                  key={index}
                  href={`/tin-tuc/${post.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                    <Newspaper className="h-12 w-12 text-gray-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="p-2 rounded-lg border border-gray-200 text-gray-400 cursor-not-allowed">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-primary text-white font-medium">
                1
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                3
              </button>
              <span className="px-2 text-gray-400">...</span>
              <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                8
              </button>
              <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Đăng ký nhận tin mới
              </h2>
              <p className="text-white/80 mb-8">
                Nhận thông tin mới nhất về du học Đức, học bổng và các sự kiện của DMF
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-6">
                  Đăng ký
                </Button>
              </form>
              <p className="text-xs text-white/60 mt-4">
                Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
