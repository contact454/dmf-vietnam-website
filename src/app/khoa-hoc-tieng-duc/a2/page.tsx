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
  title: "Khóa học tiếng Đức A2 | DMF Vietnam",
  description: "Khóa tiếng Đức A2 - Giao tiếp cơ bản. Nâng cao khả năng giao tiếp, hiểu các văn bản đơn giản về công việc và cuộc sống.",
};

const courseInfo = {
  level: "A2",
  title: "Tiếng Đức A2",
  subtitle: "Giao tiếp cơ bản",
  description: "Khóa học giúp bạn nâng cao khả năng giao tiếp trong các tình huống quen thuộc, hiểu và sử dụng các cấu trúc câu phức tạp hơn, mở rộng vốn từ vựng về công việc và cuộc sống hàng ngày.",
  duration: "2-3 tháng",
  totalHours: "120 giờ",
  lessons: "60 buổi",
  classSize: "12-15 học viên",
  schedule: "3-5 buổi/tuần",
  color: "bg-blue-500",
  prevLevel: {
    href: "/khoa-hoc-tieng-duc/a1",
    label: "Tiếng Đức A1"
  },
  nextLevel: {
    href: "/khoa-hoc-tieng-duc/b1",
    label: "Tiếng Đức B1"
  }
};

const curriculum = [
  {
    module: "Module 1",
    title: "Công việc và Nghề nghiệp",
    topics: [
      "Mô tả công việc và trách nhiệm",
      "Giao tiếp nơi làm việc",
      "Viết CV và thư xin việc cơ bản",
      "Phỏng vấn xin việc đơn giản"
    ]
  },
  {
    module: "Module 2",
    title: "Cuộc sống và Sức khỏe",
    topics: [
      "Khám bệnh và mô tả triệu chứng",
      "Tại hiệu thuốc",
      "Thể thao và lối sống lành mạnh",
      "Các hoạt động giải trí"
    ]
  },
  {
    module: "Module 3",
    title: "Nhà ở và Môi trường",
    topics: [
      "Tìm kiếm và thuê nhà",
      "Mô tả nơi ở và đồ đạc",
      "Hợp đồng thuê nhà",
      "Hàng xóm và cộng đồng"
    ]
  },
  {
    module: "Module 4",
    title: "Giao tiếp Xã hội",
    topics: [
      "Mời và từ chối lời mời",
      "Lên kế hoạch và hẹn gặp",
      "Thảo luận về sở thích",
      "Kể lại các sự kiện trong quá khứ"
    ]
  }
];

const skills = [
  {
    icon: Headphones,
    title: "Nghe",
    description: "Hiểu các đoạn hội thoại về chủ đề quen thuộc và thông báo đơn giản"
  },
  {
    icon: MessageSquare,
    title: "Nói",
    description: "Tham gia hội thoại về các chủ đề hàng ngày, mô tả kinh nghiệm cá nhân"
  },
  {
    icon: FileText,
    title: "Đọc",
    description: "Hiểu email, thư từ đơn giản, quảng cáo và thông báo công cộng"
  },
  {
    icon: PenTool,
    title: "Viết",
    description: "Viết email, tin nhắn cá nhân và điền các biểu mẫu phức tạp hơn"
  }
];

const outcomes = [
  "Giao tiếp trong các tình huống hàng ngày phức tạp hơn",
  "Mô tả kinh nghiệm, sự kiện và kế hoạch",
  "Hiểu và viết email, thư từ đơn giản",
  "Thảo luận về công việc và sở thích",
  "Xử lý các tình huống khi thuê nhà, đi khám bệnh",
  "Diễn đạt ý kiến đơn giản về các chủ đề quen thuộc"
];

const faqs = [
  {
    question: "Điều kiện để học A2 là gì?",
    answer: "Bạn cần hoàn thành khóa A1 hoặc có chứng chỉ A1 tương đương. Nếu không chắc chắn, bạn có thể làm bài test đầu vào miễn phí."
  },
  {
    question: "A2 có đủ để đi du học không?",
    answer: "A2 chưa đủ cho du học nghề hoặc đại học. Bạn cần ít nhất B1 cho du học nghề và B2 cho đại học."
  },
  {
    question: "Học xong A2 thì nên học tiếp gì?",
    answer: "Sau A2, bạn nên tiếp tục học B1 để đạt trình độ giao tiếp tự tin và đủ điều kiện cho du học nghề."
  },
  {
    question: "Có thể học online không?",
    answer: "Có, DMF cung cấp cả hình thức học offline và online. Lớp online có đầy đủ tương tác như lớp trực tiếp."
  }
];

export default function GermanA2Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/khoa-hoc-tieng-duc" className="hover:text-primary">Khóa học tiếng Đức</Link>
              <span>/</span>
              <span className="text-gray-900">A2</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium mb-6">
                  <BookOpen className="h-4 w-4" />
                  {courseInfo.level} - Elementary
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
                    <span className="font-semibold text-gray-900">Goethe A2 / ÖSD A2</span>
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
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <skill.icon className="h-6 w-6 text-blue-600" />
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                    {item.module}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
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
        <section className="py-16 lg:py-24 bg-blue-500">
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
                href={courseInfo.prevLevel.href}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {courseInfo.prevLevel.label}
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
                Sẵn sàng nâng cao trình độ tiếng Đức?
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
