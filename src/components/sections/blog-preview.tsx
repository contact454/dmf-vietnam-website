"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

// Placeholder blog posts - replace with real data from CMS
const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ausbildung-la-gi-co-hoi-nghe-nghiep-tai-duc",
    title: "Ausbildung là gì? Cơ hội nghề nghiệp tại Đức cho người Việt",
    excerpt:
      "Tìm hiểu chi tiết về chương trình đào tạo nghề Ausbildung tại Đức - cơ hội việc làm và định cư lý tưởng cho người Việt Nam.",
    category: "Du học nghề",
    image: "/images/blog/ausbildung-thumb.webp",
    date: "2024-01-15",
    readTime: "8 phút",
    featured: true,
  },
  {
    id: 2,
    slug: "hoc-tieng-duc-tu-a1-den-b2-mat-bao-lau",
    title: "Học tiếng Đức từ A1 đến B2 mất bao lâu? Lộ trình chi tiết",
    excerpt:
      "Bạn đang thắc mắc cần bao lâu để đạt trình độ B2? Bài viết này sẽ giúp bạn lên kế hoạch học tập hiệu quả.",
    category: "Tiếng Đức",
    image: "/images/blog/german-learning-thumb.webp",
    date: "2024-01-10",
    readTime: "6 phút",
  },
  {
    id: 3,
    slug: "chi-phi-du-hoc-duc-2024-cap-nhat-moi-nhat",
    title: "Chi phí du học Đức 2024: Cập nhật mới nhất và đầy đủ nhất",
    excerpt:
      "Tổng hợp chi tiết các khoản chi phí du học Đức bao gồm học phí, sinh hoạt, bảo hiểm và visa.",
    category: "Chi phí",
    image: "/images/blog/study-cost-thumb.webp",
    date: "2024-01-05",
    readTime: "10 phút",
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function BlogCard({
  post,
  index,
  featured = false,
}: {
  post: BlogPost;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <Link href={`/tin-tuc/${post.slug}`} className="block h-full">
        <div
          className={`relative h-full bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 ${
            featured ? "md:flex" : "flex flex-col"
          }`}
        >
          {/* Image */}
          <div
            className={`relative overflow-hidden bg-muted ${
              featured
                ? "md:w-1/2 h-48 md:h-auto"
                : "h-48 w-full"
            }`}
          >
            <ImagePlaceholder
              src={post.image}
              alt={post.title}
              type="blog"
              fill
              className="group-hover:scale-105 transition-transform duration-500"
            />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex flex-col p-6 ${
              featured ? "md:w-1/2 md:p-8" : ""
            }`}
          >
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2 ${
                featured ? "text-xl md:text-2xl" : "text-lg"
              }`}
            >
              {post.title}
            </h3>

            {/* Excerpt */}
            <p
              className={`text-muted-foreground leading-relaxed mb-4 ${
                featured ? "line-clamp-3 md:line-clamp-4" : "line-clamp-2"
              }`}
            >
              {post.excerpt}
            </p>

            {/* Read more */}
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                Đọc tiếp
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function BlogPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-dmf">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
              Blog & Tin tức
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kiến thức <span className="text-gradient">du học Đức</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Cập nhật thông tin mới nhất về du học, định cư và học tiếng Đức từ
              đội ngũ chuyên gia của DMF
            </p>
          </div>

          <Button
            variant="outline"
            className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link href="/tin-tuc">
              Xem tất cả bài viết
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured post */}
          {featuredPost && (
            <BlogCard post={featuredPost} index={0} featured />
          )}

          {/* Regular posts */}
          {regularPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index + 1} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary to-primary/80 rounded-2xl text-white"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Đăng ký nhận tin mới nhất
              </h3>
              <p className="text-white/80 text-sm">
                Nhận thông tin về học bổng, cơ hội du học và tips học tiếng Đức
                mỗi tuần
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 min-w-[200px]"
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6">
                Đăng ký
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
