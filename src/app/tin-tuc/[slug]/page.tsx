import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Tag,
  ArrowRight,
  Newspaper
} from "lucide-react";

// This would normally come from a CMS or database
const post = {
  slug: "du-hoc-nghe-duc-2024-co-hoi-va-thach-thuc",
  title: "Du học nghề Đức 2024: Cơ hội và thách thức cho học viên Việt Nam",
  excerpt: "Tổng quan về thị trường du học nghề Đức năm 2024, những ngành nghề đang có nhu cầu cao và lời khuyên cho các bạn trẻ Việt Nam muốn theo đuổi con đường Ausbildung.",
  category: "Du học Đức",
  author: {
    name: "DMF Vietnam",
    role: "Ban biên tập"
  },
  date: "15/01/2024",
  readTime: "8 phút đọc",
  tags: ["Ausbildung", "Du học Đức", "Visa", "Nghề nghiệp"],
  content: `
## Tổng quan về Ausbildung tại Đức năm 2024

Năm 2024 đánh dấu những thay đổi quan trọng trong chính sách du học nghề của Đức. Với việc thiếu hụt lao động ngày càng trầm trọng, Đức đang mở rộng cửa đón nhận nhiều học viên quốc tế hơn, đặc biệt là từ các nước châu Á như Việt Nam.

### Những thay đổi chính sách mới

Từ tháng 3/2024, Đức đã áp dụng Luật Nhập cư Lao động Chuyên môn mới (Fachkräfteeinwanderungsgesetz), tạo điều kiện thuận lợi hơn cho người lao động và học viên nước ngoài:

- Giảm yêu cầu về trình độ tiếng Đức cho một số ngành nghề
- Đơn giản hóa quy trình xin visa
- Công nhận rộng rãi hơn các bằng cấp nước ngoài

## Các ngành nghề có nhu cầu cao nhất

### 1. Y tế và Điều dưỡng

Đây là ngành có nhu cầu cao nhất tại Đức. Với dân số già hóa, Đức cần thêm hàng trăm nghìn nhân viên y tế trong thập kỷ tới.

**Mức lương trung bình:** 1.000 - 1.300€/tháng trong thời gian học
**Yêu cầu tiếng Đức:** B1-B2

### 2. Khách sạn và Nhà hàng

Ngành du lịch và khách sạn phục hồi mạnh sau đại dịch, tạo ra nhiều cơ hội cho học viên quốc tế.

**Mức lương trung bình:** 900 - 1.100€/tháng
**Yêu cầu tiếng Đức:** B1

### 3. Kỹ thuật và Cơ khí

Đức là cường quốc công nghiệp, luôn cần nhân lực trong lĩnh vực kỹ thuật.

**Mức lương trung bình:** 900 - 1.200€/tháng
**Yêu cầu tiếng Đức:** B1

## Thách thức cho học viên Việt Nam

### Rào cản ngôn ngữ

Tiếng Đức không phải ngôn ngữ dễ học. Nhiều học viên gặp khó khăn trong việc đạt trình độ B1 trong thời gian ngắn.

**Giải pháp:** Bắt đầu học tiếng Đức sớm, học với giáo viên bản ngữ, và tham gia các lớp speaking club thường xuyên.

### Khác biệt văn hóa

Môi trường làm việc và học tập tại Đức rất khác với Việt Nam. Tính đúng giờ, làm việc độc lập và giao tiếp trực tiếp là những điều cần thích nghi.

### Chi phí ban đầu

Mặc dù Ausbildung được trả lương, chi phí chuẩn bị trước khi đi vẫn là khoản đầu tư đáng kể.

## Lời khuyên cho năm 2024

1. **Bắt đầu sớm:** Quá trình từ học tiếng đến sang Đức mất 12-18 tháng. Hãy bắt đầu ngay!

2. **Chọn ngành phù hợp:** Không chỉ dựa vào lương, hãy chọn ngành bạn có đam mê và phù hợp với khả năng.

3. **Chuẩn bị tài chính:** Dự trù 80-150 triệu VNĐ cho toàn bộ quá trình.

4. **Học tiếng Đức nghiêm túc:** Đây là yếu tố quyết định thành công của bạn tại Đức.

5. **Tìm đơn vị tư vấn uy tín:** Một đơn vị tư vấn tốt sẽ giúp bạn tiết kiệm thời gian và tránh các rủi ro.

## Kết luận

Năm 2024 là thời điểm tuyệt vời để bắt đầu hành trình Ausbildung tại Đức. Với sự chuẩn bị kỹ lưỡng và đối tác đồng hành đáng tin cậy, ước mơ du học và định cư Đức hoàn toàn trong tầm tay của bạn.

---

*Bạn muốn được tư vấn chi tiết về chương trình Ausbildung? Liên hệ DMF Vietnam ngay hôm nay để được hỗ trợ miễn phí!*
  `
};

const relatedPosts = [
  {
    slug: "top-10-nganh-ausbildung-luong-cao-nhat",
    title: "Top 10 ngành Ausbildung có lương cao nhất tại Đức",
    category: "Du học Đức",
    date: "10/01/2024"
  },
  {
    slug: "kinh-nghiem-xin-visa-du-hoc-duc-2024",
    title: "Kinh nghiệm xin visa du học Đức 2024 thành công",
    category: "Kinh nghiệm",
    date: "08/01/2024"
  },
  {
    slug: "so-sanh-ausbildung-va-du-hoc-dai-hoc-duc",
    title: "So sánh Ausbildung và Du học đại học Đức",
    category: "Du học Đức",
    date: "05/01/2024"
  }
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${post.title} | DMF Vietnam`,
    description: post.excerpt
  };
}

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/tin-tuc" className="hover:text-primary">Tin tức</Link>
              <span>/</span>
              <span className="text-gray-900 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="max-w-3xl">
              {/* Category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg text-gray-600 mb-6">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container-dmf">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Newspaper className="h-20 w-20 text-gray-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 lg:py-12">
          <div className="container-dmf">
            <div className="grid lg:grid-cols-[1fr,300px] gap-12">
              {/* Main Content */}
              <article className="max-w-none">
                <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary prose-strong:text-gray-900">
                  {/* Render markdown content - in production use a markdown renderer */}
                  {post.content.split('\n').map((line, index) => {
                    if (line.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.replace('## ', '')}</h2>;
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.replace('### ', '')}</h3>;
                    }
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={index} className="font-semibold text-gray-900">{line.replace(/\*\*/g, '')}</p>;
                    }
                    if (line.startsWith('- ')) {
                      return <li key={index} className="ml-6 text-gray-600">{line.replace('- ', '')}</li>;
                    }
                    if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                      return <li key={index} className="ml-6 text-gray-600 list-decimal">{line.replace(/^\d+\.\s/, '')}</li>;
                    }
                    if (line.startsWith('---')) {
                      return <hr key={index} className="my-8 border-gray-200" />;
                    }
                    if (line.startsWith('*') && line.endsWith('*')) {
                      return <p key={index} className="italic text-gray-600">{line.replace(/\*/g, '')}</p>;
                    }
                    if (line.trim() === '') {
                      return <br key={index} />;
                    }
                    return <p key={index} className="text-gray-600 mb-4">{line}</p>;
                  })}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="h-4 w-4 text-gray-400" />
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-700">Chia sẻ:</span>
                    <div className="flex items-center gap-2">
                      <button className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Facebook className="h-5 w-5" />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors">
                        <Copy className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{post.author.role}</p>
                      <p className="text-sm text-gray-600">
                        DMF Vietnam chuyên đào tạo tiếng Đức và tư vấn du học Đức với hơn 10 năm kinh nghiệm.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Related Posts */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Bài viết liên quan</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <Link
                        key={index}
                        href={`/tin-tuc/${relatedPost.slug}`}
                        className="block group"
                      >
                        <span className="text-xs text-primary">{relatedPost.category}</span>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <span className="text-xs text-gray-400">{relatedPost.date}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary rounded-xl p-6 text-center">
                  <h3 className="font-semibold text-white mb-2">Cần tư vấn?</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Đăng ký để được tư vấn miễn phí về du học Đức
                  </p>
                  <Link href="/lien-he">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                      Đăng ký ngay
                    </Button>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-gray-200">
          <div className="container-dmf">
            <div className="flex items-center justify-between">
              <Link
                href="/tin-tuc"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Tất cả bài viết
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Bạn muốn du học Đức?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký tư vấn miễn phí để được hỗ trợ lên kế hoạch chi tiết
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lien-he">
                  <Button size="lg" className="bg-white text-secondary hover:bg-white/90 w-full sm:w-auto">
                    Đăng ký tư vấn miễn phí
                  </Button>
                </Link>
                <Link href="/du-hoc-duc">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Tìm hiểu thêm
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
