import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Target,
  FileText,
  Headphones,
  MessageSquare,
  PenTool
} from "lucide-react";

export const metadata: Metadata = {
  title: "Khóa học tiếng Đức A1 | DMF Vietnam",
  description: "Khóa tiếng Đức A1 dành cho người mới bắt đầu. Học cách giao tiếp cơ bản, làm quen với ngữ pháp và từ vựng tiếng Đức.",
};

const courseInfo = {
  level: "A1",
  title: "Tiếng Đức A1",
  subtitle: "Dành cho người mới bắt đầu",
  description: "Khóa học dành cho những ai chưa từng học tiếng Đức. Bạn sẽ làm quen với bảng chữ cái, cách phát âm, ngữ pháp cơ bản và học cách giao tiếp trong các tình huống đơn giản hàng ngày.",
  duration: "2-3 tháng",
  totalHours: "120 giờ",
  lessons: "60 buổi",
  classSize: "12-15 học viên",
  schedule: "3-5 buổi/tuần",
  color: "bg-emerald-500",
  nextLevel: {
    href: "/khoa-hoc-tieng-duc/a2",
    label: "Tiếng Đức A2"
  }
};

const curriculum = [
  {
    module: "Module 1",
    title: "Làm quen với tiếng Đức",
    topics: [
      "Bảng chữ cái và cách phát âm",
      "Chào hỏi và giới thiệu bản thân",
      "Số đếm từ 0-100",
      "Ngày, tháng, năm"
    ]
  },
  {
    module: "Module 2",
    title: "Cuộc sống hàng ngày",
    topics: [
      "Gia đình và bạn bè",
      "Nghề nghiệp và nơi làm việc",
      "Thói quen hàng ngày",
      "Thời gian và lịch trình"
    ]
  },
  {
    module: "Module 3",
    title: "Mua sắm và Ẩm thực",
    topics: [
      "Đồ ăn và đồ uống",
      "Mua sắm tại siêu thị",
      "Đặt món tại nhà hàng",
      "Giá cả và thanh toán"
    ]
  },
  {
    module: "Module 4",
    title: "Di chuyển và Du lịch",
    topics: [
      "Phương tiện giao thông",
      "Hỏi đường và chỉ đường",
      "Đặt phòng khách sạn",
      "Tại sân bay và nhà ga"
    ]
  }
];

const skills = [
  {
    icon: Headphones,
    title: "Nghe",
    description: "Hiểu các câu và từ vựng thông dụng về các chủ đề quen thuộc"
  },
  {
    icon: MessageSquare,
    title: "Nói",
    description: "Giao tiếp đơn giản khi trao đổi thông tin về các chủ đề quen thuộc"
  },
  {
    icon: FileText,
    title: "Đọc",
    description: "Hiểu các văn bản ngắn, đơn giản như quảng cáo, thực đơn, lịch trình"
  },
  {
    icon: PenTool,
    title: "Viết",
    description: "Viết các tin nhắn ngắn, điền form và viết bưu thiếp đơn giản"
  }
];

const outcomes = [
  "Giới thiệu bản thân và người khác",
  "Đặt và trả lời các câu hỏi cá nhân đơn giản",
  "Giao tiếp cơ bản khi đi mua sắm, ăn uống",
  "Hiểu và sử dụng các cụm từ hàng ngày",
  "Đọc hiểu các biển báo, thông báo đơn giản",
  "Viết tin nhắn ngắn và điền các form cơ bản"
];

const faqs = [
  {
    question: "Tôi chưa biết gì về tiếng Đức, có học được không?",
    answer: "Hoàn toàn được! Khóa A1 được thiết kế dành riêng cho người mới bắt đầu, chưa có bất kỳ kiến thức nào về tiếng Đức."
  },
  {
    question: "Học xong A1 có thể giao tiếp được không?",
    answer: "Sau khóa A1, bạn có thể giao tiếp cơ bản trong các tình huống đơn giản như chào hỏi, mua sắm, hỏi đường."
  },
  {
    question: "Có cam kết đầu ra không?",
    answer: "Có, DMF cam kết đầu ra. Nếu không đạt chứng chỉ A1 sau khóa học, bạn được học lại miễn phí."
  },
  {
    question: "Lịch học như thế nào?",
    answer: "Lớp học 3-5 buổi/tuần, mỗi buổi 2 giờ. Có lớp sáng, chiều và tối để phù hợp với lịch trình của bạn."
  }
];

export default function GermanA1Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/khoa-hoc-tieng-duc" className="hover:text-primary">Khóa học tiếng Đức</Link>
              <span>/</span>
              <span className="text-gray-900">A1</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium mb-6">
                  <BookOpen className="h-4 w-4" />
                  {courseInfo.level} - Beginner
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {courseInfo.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {courseInfo.subtitle}
                </p>
                <p className="text-gray-600 mb-8">
                  {courseInfo.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Đăng ký ngay
                  </Button>
                  <Button size="lg" variant="outline">
                    Tư vấn miễn phí
                  </Button>
                </div>
              </div>

              {/* Course Info Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Thông tin khóa học</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="h-5 w-5" />
                      Thời lượng
                    </div>
                    <span className="font-semibold text-gray-900">{courseInfo.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3 text-gray-600">
                      <BookOpen className="h-5 w-5" />
                      Tổng số giờ học
                    </div>
                    <span className="font-semibold text-gray-900">{courseInfo.totalHours}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="h-5 w-5" />
                      Lịch học
                    </div>
                    <span className="font-semibold text-gray-900">{courseInfo.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="h-5 w-5" />
                      Sĩ số lớp
                    </div>
                    <span className="font-semibold text-gray-900">{courseInfo.classSize}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Target className="h-5 w-5" />
                      Chứng chỉ
                    </div>
                    <span className="font-semibold text-gray-900">Goethe A1 / ÖSD A1</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">Học phí</div>
                  <div className="text-3xl font-bold text-primary">Liên hệ</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Kỹ năng bạn sẽ đạt được
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Phát triển toàn diện 4 kỹ năng ngôn ngữ theo chuẩn CEFR châu Âu
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                    <skill.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nội dung khóa học
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chương trình học được thiết kế theo chuẩn Goethe Institut
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {curriculum.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                    {item.module}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-16 lg:py-24 bg-emerald-500">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Sau khi hoàn thành khóa học
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Bạn sẽ có thể thực hiện những điều sau bằng tiếng Đức
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Câu hỏi thường gặp
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-gray-200">
          <div className="container-dmf">
            <div className="flex items-center justify-between">
              <Link
                href="/khoa-hoc-tieng-duc"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Tất cả khóa học
              </Link>
              <Link
                href={courseInfo.nextLevel.href}
                className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                {courseInfo.nextLevel.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Sẵn sàng bắt đầu học tiếng Đức?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký ngay để được tư vấn lộ trình học phù hợp với mục tiêu của bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Đăng ký tư vấn miễn phí
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Xem lịch khai giảng
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
