import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Target,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Khóa học tiếng Đức | DMF Vietnam",
  description: "Đào tạo tiếng Đức từ A1 đến B2. Lộ trình học bài bản, giáo viên bản ngữ, cam kết đầu ra. Đăng ký ngay!",
};

const courses = [
  {
    level: "A1",
    title: "Tiếng Đức A1",
    subtitle: "Dành cho người mới bắt đầu",
    description: "Làm quen với tiếng Đức, học cách giao tiếp cơ bản trong các tình huống hàng ngày.",
    duration: "2-3 tháng",
    lessons: "60 buổi",
    skills: [
      "Giới thiệu bản thân",
      "Số đếm, ngày tháng",
      "Mua sắm, đặt hàng",
      "Hỏi đường, chỉ đường"
    ],
    color: "bg-emerald-500",
    href: "/khoa-hoc-tieng-duc/a1"
  },
  {
    level: "A2",
    title: "Tiếng Đức A2",
    subtitle: "Giao tiếp cơ bản",
    description: "Nâng cao khả năng giao tiếp, hiểu các văn bản đơn giản về công việc và cuộc sống.",
    duration: "2-3 tháng",
    lessons: "60 buổi",
    skills: [
      "Giao tiếp nơi làm việc",
      "Đặt lịch hẹn",
      "Viết email đơn giản",
      "Mô tả kinh nghiệm"
    ],
    color: "bg-blue-500",
    href: "/khoa-hoc-tieng-duc/a2"
  },
  {
    level: "B1",
    title: "Tiếng Đức B1",
    subtitle: "Trình độ trung cấp",
    description: "Đạt chuẩn để xin visa du học nghề, giao tiếp tự tin trong hầu hết các tình huống.",
    duration: "3-4 tháng",
    lessons: "80 buổi",
    skills: [
      "Thảo luận chủ đề quen thuộc",
      "Viết văn bản có cấu trúc",
      "Xử lý tình huống du lịch",
      "Diễn đạt ý kiến cá nhân"
    ],
    color: "bg-amber-500",
    href: "/khoa-hoc-tieng-duc/b1",
    popular: true
  },
  {
    level: "B2",
    title: "Tiếng Đức B2",
    subtitle: "Trình độ nâng cao",
    description: "Chuẩn bị cho du học đại học, làm việc chuyên nghiệp tại Đức với khả năng ngôn ngữ thành thạo.",
    duration: "3-4 tháng",
    lessons: "80 buổi",
    skills: [
      "Thuyết trình chuyên nghiệp",
      "Viết báo cáo, luận văn",
      "Tranh luận, phản biện",
      "Hiểu văn bản phức tạp"
    ],
    color: "bg-purple-500",
    href: "/khoa-hoc-tieng-duc/b2"
  }
];

const features = [
  {
    icon: GraduationCap,
    title: "Giáo viên bản ngữ",
    description: "Đội ngũ giáo viên người Đức và Việt Nam có chứng chỉ giảng dạy quốc tế"
  },
  {
    icon: Target,
    title: "Cam kết đầu ra",
    description: "Học lại miễn phí nếu không đạt chứng chỉ sau khóa học"
  },
  {
    icon: Users,
    title: "Lớp học nhỏ",
    description: "Tối đa 12-15 học viên/lớp để đảm bảo chất lượng giảng dạy"
  },
  {
    icon: MessageCircle,
    title: "Luyện nói thực tế",
    description: "Thực hành giao tiếp với người bản xứ qua các buổi Speaking Club"
  }
];

const stats = [
  { value: "2000+", label: "Học viên đã đào tạo" },
  { value: "95%", label: "Tỷ lệ đậu chứng chỉ" },
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "50+", label: "Lớp học mỗi năm" }
];

export default function GermanCoursesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4" />
                Khóa học tiếng Đức
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Học tiếng Đức từ A1 đến B2
                <span className="text-primary"> cùng DMF</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Lộ trình học bài bản, giáo viên có chứng chỉ quốc tế, cam kết đầu ra.
                Chuẩn bị hành trang ngôn ngữ cho hành trình du học và làm việc tại Đức.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Đăng ký tư vấn miễn phí
                </Button>
                <Button size="lg" variant="outline">
                  Xem lịch khai giảng
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-primary">
          <div className="container-dmf">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Chọn khóa học phù hợp với bạn
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Từ người mới bắt đầu đến trình độ nâng cao, chúng tôi có khóa học phù hợp cho mọi mục tiêu
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {courses.map((course) => (
                <Link
                  key={course.level}
                  href={course.href}
                  className="group relative bg-white rounded-xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  {course.popular && (
                    <div className="absolute -top-3 right-6 px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                      Phổ biến nhất
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div className={cn(
                      "flex items-center justify-center w-16 h-16 rounded-xl text-white font-bold text-xl",
                      course.color
                    )}>
                      {course.level}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-500">{course.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {course.lessons}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    Xem chi tiết
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tại sao học tiếng Đức tại DMF?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Phương pháp giảng dạy hiện đại, đội ngũ chất lượng, cam kết kết quả
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lộ trình học tập
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Từ A1 đến B2, mỗi cấp độ mở ra cơ hội mới cho tương lai của bạn
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

              <div className="space-y-8 lg:space-y-0">
                {courses.map((course, index) => (
                  <div
                    key={course.level}
                    className={cn(
                      "relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center",
                      index % 2 === 0 ? "" : "lg:direction-rtl"
                    )}
                  >
                    <div className={cn(
                      "bg-white rounded-xl border border-gray-200 p-6",
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left lg:col-start-2"
                    )}>
                      <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-medium mb-3",
                        course.color
                      )}>
                        {course.level}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <Link
                        href={course.href}
                        className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                      >
                        Tìm hiểu thêm
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Bắt đầu hành trình học tiếng Đức ngay hôm nay
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký tư vấn miễn phí để được hỗ trợ chọn khóa học phù hợp với mục tiêu của bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Đăng ký tư vấn miễn phí
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Gọi hotline: 0123 456 789
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
