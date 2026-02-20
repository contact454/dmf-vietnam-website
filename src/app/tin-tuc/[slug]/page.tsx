import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Tag,
  Newspaper
} from "lucide-react";
import {
  formatBlogDate,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getAllBlogPosts,
} from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Không tìm thấy bài viết | DMF Vietnam",
    };
  }
  return {
    title: `${post.title} | DMF Vietnam`,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3);

  return (
    <PageShell>
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
                  <span>{formatBlogDate(post.date)}</span>
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
                        <span className="text-xs text-gray-400">{formatBlogDate(relatedPost.date)}</span>
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
    </PageShell>
  );
}
