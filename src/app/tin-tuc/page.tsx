import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Newspaper,
  Calendar,
  Clock,
  Search,
  ChevronLeft,
  ChevronRight,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  formatBlogDate,
  getAllBlogPosts,
  getBlogCategories,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Tin tức & Blog | DMF Vietnam",
  description: "Cập nhật tin tức du học Đức, kinh nghiệm học tiếng Đức, chia sẻ từ học viên thành công tại DMF Vietnam.",
};

export default function BlogPage() {
  const categories = getBlogCategories();
  const allPosts = getAllBlogPosts();
  const featuredPost = (allPosts.find((post) => post.featured) ?? allPosts[0])!;
  const posts = allPosts.filter((post) => post.slug !== featuredPost?.slug);
  const activeCategory = "all";

  return (
    <PageShell>
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
                      {featuredPost.author.name}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatBlogDate(featuredPost.date)}
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
              {posts.map((post) => (
                <Link
                  key={post.id}
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
                      <span className="text-xs text-gray-400">{formatBlogDate(post.date)}</span>
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
                        {post.author.name}
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
    </PageShell>
  );
}
