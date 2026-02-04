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
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Khóa học tiếng Đức B2 | DMF Vietnam",
  description: "Khóa tiếng Đức B2 - Trình độ nâng cao. Chuẩn bị cho du học đại học, làm việc chuyên nghiệp tại Đức với khả năng ngôn ngữ thành thạo.",
};

const courseInfo = {
  level: "B2",
  title: "Tiếng Đức B2",
  subtitle: "Trình độ nâng cao - Chuẩn du học đại học",
  description: "Khóa học giúp bạn đạt trình độ thành thạo, có thể giao tiếp tự nhiên với người bản ngữ, hiểu các văn bản phức tạp và viết bài luận có cấu trúc. Đây là trình độ chuẩn để xin học đại học tại Đức.",
  duration: "3-4 tháng",
  totalHours: "160 giờ",
  lessons: "80 buổi",
  classSize: "10-12 học viên",
  schedule: "3-5 buổi/tuần",
  color: "bg-purple-500",
  prevLevel: {
    href: "/khoa-hoc-tieng-duc/b1",
    label: "Tiếng Đức B1"
  }
};

const curriculum = [
  {
    module: "Module 1",
    title: "Học thuật và Nghiên cứu",
    topics: [
      "Đọc và phân tích văn bản học thuật",
      "Viết bài luận và báo cáo",
      "Thuyết trình chuyên nghiệp",
      "Tham gia thảo luận học thuật"
    ]
  },
  {
    module: "Module 2",
    title: "Kinh tế và Nghề nghiệp",
    topics: [
      "Giao tiếp trong môi trường doanh nghiệp",
      "Đàm phán và thương lượng",
      "Viết email và báo cáo công việc",
      "Họp và hội nghị chuyên môn"
    ]
  },
  {
    module: "Module 3",
    title: "Xã hội và Chính trị",
    topics: [
      "Phân tích các vấn đề xã hội phức tạp",
      "Tranh luận và bảo vệ quan điểm",
      "Hiểu tin tức và bình luận chính trị",
      "Văn hóa và lịch sử Đức"
    ]
  },
  {
    module: "Module 4",
    title: "Khoa học và Công nghệ",
    topics: [
      "Đọc hiểu văn bản khoa học",
      "Mô tả quy trình và hiện tượng",
      "Thảo luận về công nghệ và đổi mới",
      "Môi trường và phát triển bền vững"
    ]
  }
];

const skills = [
  {
    icon: Headphones,
    title: "Nghe",
    description: "Hiểu các bài giảng, thuyết trình dài và theo dõi các cuộc tranh luận phức tạp"
  },
  {
    icon: MessageSquare,
    title: "Nói",
    description: "Giao tiếp tự nhiên, trình bày quan điểm rõ ràng và tham gia tranh luận"
  },
  {
    icon: FileText,
    title: "Đọc",
    description: "Hiểu các văn bản phức tạp, bài báo chuyên ngành và tác phẩm văn học"
  },
  {
    icon: PenTool,
    title: "Viết",
    description: "Viết bài luận, báo cáo chi tiết với cấu trúc rõ ràng và logic"
  }
];

const outcomes = [
  "Giao tiếp tự nhiên và lưu loát với người bản ngữ",
  "Viết bài luận, báo cáo với cấu trúc phức tạp",
  "Hiểu các bài giảng đại học bằng tiếng Đức",
  "Tham gia thảo luận và tranh luận chuyên nghiệp",
  "Đọc hiểu văn bản học thuật và chuyên ngành",
  "Đạt chuẩn ngôn ngữ để nhập học đại học Đức"
];

const requirements = [
  "Hoàn thành khóa B1 hoặc có chứng chỉ B1 tương đương",
  "Có khả năng giao tiếp tự tin trong các tình huống hàng ngày",
  "Cam kết học tập nghiêm túc với khối lượng bài tập lớn hơn"
];

const opportunities = [
  {
    icon: GraduationCap,
    title: "Du học đại học",
    description: "B2 là yêu cầu ngôn ngữ cho hầu hết các chương trình đại học tại Đức"
  },
  {
    icon: Target,
    title: "Làm việc chuyên nghiệp",
    description: "Đủ trình độ để làm việc trong môi trường chuyên nghiệp tại Đức"
  },
  {
    icon: BookOpen,
    title: "Học lên C1/C2",
    description: "Nền tảng vững chắc để tiếp tục học các trình độ cao hơn"
  }
];

const faqs = [
  {
    question: "B2 có đủ để học đại học tại Đức không?",
    answer: "Có! B2 là trình độ chuẩn để nhập học hầu hết các chương trình đại học tại Đức. Một số chương trình có thể yêu cầu C1."
  },
  {
    question: "Học B2 có khó không?",
    answer: "B2 đòi hỏi nỗ lực lớn hơn các cấp độ trước. Bạn cần làm nhiều bài tập, đọc nhiều và thực hành nói thường xuyên."
  },
  {
    question: "Mất bao lâu để học từ B1 đến B2?",
    answer: "Thông thường mất 3-4 tháng với cường độ học 3-5 buổi/tuần. Thời gian có thể thay đổi tùy theo khả năng tiếp thu."
  },
  {
    question: "DMF có hỗ trợ đăng ký thi không?",
    answer: "Có, DMF hỗ trợ học viên đăng ký thi Goethe B2 hoặc TestDaF, bao gồm cả luyện thi chuyên sâu trước kỳ thi."
  }
];

export default function GermanB2Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-purple-50 via-white to-purple-50/50">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/khoa-hoc-tieng-duc" className="hover:text-primary">Khóa học tiếng Đức</Link>
              <span>/</span>
              <span className="text-gray-900">B2</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-medium mb-6">
                  <BookOpen className="h-4 w-4" />
                  {courseInfo.level} - Upper Intermediate
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
                    <span className="font-semibold text-gray-900">Goethe B2 / TestDaF</span>
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

        {/* Opportunities Section */}
        <section className="py-12 bg-purple-500">
          <div className="container-dmf">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Cơ hội với chứng chỉ B2
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {opportunities.map((item, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              ))}
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
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <skill.icon className="h-6 w-6 text-purple-600" />
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
              <div className="bg-purple-50 rounded-2xl p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-purple-200">
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
                Chương trình học được thiết kế theo chuẩn Goethe Institut và TestDaF
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {curriculum.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                    {item.module}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-purple-500 flex-shrink-0" />
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
        <section className="py-16 lg:py-24 bg-purple-500">
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
                href="/khoa-hoc-tieng-duc"
                className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Tất cả khóa học
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
                Sẵn sàng chinh phục trình độ B2?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký ngay để được tư vấn lộ trình học và cơ hội du học đại học tại Đức
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
