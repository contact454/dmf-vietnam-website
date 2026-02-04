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
  PenTool,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Khóa học tiếng Đức B1 | DMF Vietnam",
  description: "Khóa tiếng Đức B1 - Trình độ trung cấp. Đạt chuẩn để xin visa du học nghề, giao tiếp tự tin trong hầu hết các tình huống.",
};

const courseInfo = {
  level: "B1",
  title: "Tiếng Đức B1",
  subtitle: "Trình độ trung cấp - Chuẩn du học nghề",
  description: "Khóa học giúp bạn đạt trình độ giao tiếp tự tin, có thể xử lý hầu hết các tình huống trong cuộc sống và công việc. Đây là trình độ tối thiểu để xin visa du học nghề (Ausbildung) tại Đức.",
  duration: "3-4 tháng",
  totalHours: "160 giờ",
  lessons: "80 buổi",
  classSize: "12-15 học viên",
  schedule: "3-5 buổi/tuần",
  color: "bg-amber-500",
  popular: true,
  prevLevel: {
    href: "/khoa-hoc-tieng-duc/a2",
    label: "Tiếng Đức A2"
  },
  nextLevel: {
    href: "/khoa-hoc-tieng-duc/b2",
    label: "Tiếng Đức B2"
  }
};

const curriculum = [
  {
    module: "Module 1",
    title: "Công việc và Sự nghiệp",
    topics: [
      "Phỏng vấn xin việc chuyên nghiệp",
      "Thảo luận về điều kiện làm việc",
      "Viết đơn xin việc và CV chi tiết",
      "Giao tiếp trong môi trường công sở"
    ]
  },
  {
    module: "Module 2",
    title: "Giáo dục và Đào tạo",
    topics: [
      "Hệ thống giáo dục tại Đức",
      "Đăng ký học và thủ tục nhập học",
      "Thảo luận về mục tiêu học tập",
      "Tìm hiểu về Ausbildung"
    ]
  },
  {
    module: "Module 3",
    title: "Xã hội và Văn hóa",
    topics: [
      "Thảo luận về các vấn đề xã hội",
      "Văn hóa và phong tục Đức",
      "Tin tức và sự kiện thời sự",
      "So sánh văn hóa Việt-Đức"
    ]
  },
  {
    module: "Module 4",
    title: "Du lịch và Thủ tục",
    topics: [
      "Lên kế hoạch du lịch chi tiết",
      "Xử lý các tình huống bất ngờ",
      "Thủ tục visa và giấy tờ",
      "Giao tiếp tại cơ quan hành chính"
    ]
  }
];

const skills = [
  {
    icon: Headphones,
    title: "Nghe",
    description: "Hiểu nội dung chính của các bài nói về chủ đề quen thuộc trong công việc, học tập"
  },
  {
    icon: MessageSquare,
    title: "Nói",
    description: "Xử lý hầu hết các tình huống khi du lịch, thảo luận về các chủ đề quen thuộc"
  },
  {
    icon: FileText,
    title: "Đọc",
    description: "Hiểu các văn bản về chủ đề quen thuộc, email công việc, thông báo chính thức"
  },
  {
    icon: PenTool,
    title: "Viết",
    description: "Viết văn bản có cấu trúc về các chủ đề quen thuộc, thư từ, báo cáo đơn giản"
  }
];

const outcomes = [
  "Giao tiếp tự tin trong hầu hết các tình huống",
  "Thảo luận về các chủ đề quen thuộc một cách chi tiết",
  "Hiểu nội dung chính của các văn bản phức tạp",
  "Viết văn bản có cấu trúc rõ ràng",
  "Xử lý các tình huống khi đi du lịch tại Đức",
  "Đạt chuẩn ngôn ngữ để xin visa du học nghề"
];

const requirements = [
  "Hoàn thành khóa A2 hoặc có chứng chỉ A2 tương đương",
  "Có nền tảng ngữ pháp tiếng Đức cơ bản",
  "Cam kết học tập nghiêm túc và làm bài tập đầy đủ"
];

const faqs = [
  {
    question: "B1 có đủ để đi du học nghề không?",
    answer: "Có! B1 là trình độ tối thiểu để xin visa du học nghề (Ausbildung) tại Đức. Một số ngành nghề có thể yêu cầu B2."
  },
  {
    question: "Mất bao lâu để học từ A1 đến B1?",
    answer: "Thông thường mất khoảng 6-9 tháng để học từ A1 đến B1, tùy thuộc vào cường độ học và khả năng tiếp thu."
  },
  {
    question: "Chứng chỉ B1 có giá trị bao lâu?",
    answer: "Chứng chỉ Goethe B1 hoặc ÖSD B1 không có thời hạn. Tuy nhiên, một số cơ quan có thể yêu cầu chứng chỉ không quá 2 năm."
  },
  {
    question: "Có luyện thi chứng chỉ không?",
    answer: "Có, DMF cung cấp các buổi luyện thi chuyên sâu trước kỳ thi Goethe/ÖSD B1, giúp bạn làm quen với format và chiến lược thi."
  }
];

export default function GermanB1Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-amber-50 via-white to-amber-50/50">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/khoa-hoc-tieng-duc" className="hover:text-primary">Khóa học tiếng Đức</Link>
              <span>/</span>
              <span className="text-gray-900">B1</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-white text-sm font-medium">
                    <BookOpen className="h-4 w-4" />
                    {courseInfo.level} - Intermediate
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-white text-xs font-medium">
                    <Star className="h-3 w-3" />
                    Phổ biến nhất
                  </div>
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
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative">
                <div className="absolute -top-3 right-6 px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                  Khóa học được chọn nhiều nhất
                </div>
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
                    <span className="font-semibold text-gray-900">Goethe B1 / ÖSD B1</span>
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

        {/* Why B1 Important */}
        <section className="py-12 bg-amber-500">
          <div className="container-dmf">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Tại sao B1 là cột mốc quan trọng?
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto">
                B1 là trình độ tối thiểu để xin visa du học nghề (Ausbildung) tại Đức. Với chứng chỉ B1,
                bạn đủ điều kiện ngôn ngữ để bắt đầu hành trình du học và làm việc tại Đức.
              </p>
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
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                    <skill.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Điều kiện đầu vào
                </h2>
              </div>
              <div className="bg-amber-50 rounded-2xl p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <p className="text-gray-600">
                    Chưa chắc chắn về trình độ? <Link href="/lien-he" className="text-primary font-medium hover:underline">Làm bài test đầu vào miễn phí</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                    {item.module}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
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
        <section className="py-16 lg:py-24 bg-amber-500">
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
                Sẵn sàng cho hành trình du học nghề?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký ngay để được tư vấn lộ trình học và cơ hội du học nghề tại Đức
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
