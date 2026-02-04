import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Clock,
  Euro,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Users,
  Award,
  Building2,
  GraduationCap,
  Heart,
  Utensils,
  Car,
  Wrench,
  Stethoscope,
  Hotel
} from "lucide-react";

export const metadata: Metadata = {
  title: "Du học nghề Đức (Ausbildung) | DMF Vietnam",
  description: "Chương trình du học nghề Ausbildung tại Đức. Vừa học vừa làm, được trả lương 800-1.200€/tháng. Tư vấn miễn phí.",
};

const benefits = [
  {
    icon: Euro,
    title: "Được trả lương",
    description: "Nhận lương 800-1.200€/tháng trong suốt quá trình học"
  },
  {
    icon: GraduationCap,
    title: "Không mất học phí",
    description: "Được doanh nghiệp và nhà nước Đức tài trợ học phí"
  },
  {
    icon: Award,
    title: "Bằng cấp EU",
    description: "Bằng nghề được công nhận trên toàn Liên minh châu Âu"
  },
  {
    icon: Building2,
    title: "Cơ hội định cư",
    description: "Con đường ngắn nhất để định cư lâu dài tại Đức"
  }
];

const careers = [
  {
    icon: Stethoscope,
    category: "Y tế & Điều dưỡng",
    jobs: ["Điều dưỡng viên", "Hộ lý", "Kỹ thuật viên y tế", "Dược tá"],
    salary: "1.000-1.300€",
    demand: "Rất cao"
  },
  {
    icon: Hotel,
    category: "Khách sạn & Nhà hàng",
    jobs: ["Đầu bếp", "Nhân viên khách sạn", "Nhân viên nhà hàng", "Lễ tân"],
    salary: "900-1.100€",
    demand: "Cao"
  },
  {
    icon: Wrench,
    category: "Kỹ thuật & Công nghiệp",
    jobs: ["Thợ cơ khí", "Thợ điện", "Kỹ thuật viên ô tô", "Thợ hàn"],
    salary: "900-1.200€",
    demand: "Cao"
  },
  {
    icon: Car,
    category: "Vận tải & Logistics",
    jobs: ["Tài xế xe tải", "Nhân viên kho", "Logistics", "Giao nhận"],
    salary: "800-1.100€",
    demand: "Trung bình"
  }
];

const requirements = [
  {
    title: "Độ tuổi",
    value: "18-35 tuổi",
    note: "Một số ngành có thể linh hoạt hơn"
  },
  {
    title: "Học vấn",
    value: "Tốt nghiệp THPT",
    note: "Hoặc tương đương (THCS + Trung cấp nghề)"
  },
  {
    title: "Tiếng Đức",
    value: "B1 (một số ngành B2)",
    note: "Chứng chỉ Goethe hoặc ÖSD"
  },
  {
    title: "Sức khỏe",
    value: "Tốt",
    note: "Đủ sức khỏe để làm việc"
  }
];

const timeline = [
  {
    duration: "3-6 tháng",
    title: "Học tiếng Đức A1-A2",
    description: "Xây dựng nền tảng tiếng Đức cơ bản"
  },
  {
    duration: "3-4 tháng",
    title: "Học tiếng Đức B1",
    description: "Đạt chuẩn ngôn ngữ để xin visa"
  },
  {
    duration: "2-3 tháng",
    title: "Chuẩn bị hồ sơ & Tìm việc",
    description: "Hoàn thiện hồ sơ, phỏng vấn với doanh nghiệp Đức"
  },
  {
    duration: "1-2 tháng",
    title: "Xin visa & Bay sang Đức",
    description: "Hoàn tất thủ tục visa và di chuyển"
  },
  {
    duration: "2-3.5 năm",
    title: "Ausbildung tại Đức",
    description: "Học nghề và làm việc, nhận lương hàng tháng"
  }
];

const faqs = [
  {
    question: "Ausbildung là gì?",
    answer: "Ausbildung là hệ thống đào tạo nghề kép của Đức. Bạn vừa học lý thuyết tại trường nghề (1-2 ngày/tuần) vừa thực hành tại doanh nghiệp (3-4 ngày/tuần). Trong suốt quá trình học, bạn được trả lương như một nhân viên."
  },
  {
    question: "Tôi cần chuẩn bị bao nhiêu tiền?",
    answer: "Chi phí trước khi đi khoảng 150-200 triệu VNĐ (bao gồm học tiếng Đức, dịch vụ tư vấn, visa, vé máy bay, chi phí ban đầu). Sau khi sang Đức, bạn tự túc từ lương Ausbildung."
  },
  {
    question: "Sau khi học xong tôi có thể ở lại Đức không?",
    answer: "Có! Sau khi hoàn thành Ausbildung, bạn được cấp visa 18 tháng để tìm việc. Nếu có việc làm, bạn sẽ được cấp visa làm việc và có thể xin thường trú (Niederlassungserlaubnis) sau 2-4 năm."
  },
  {
    question: "Tôi không có kinh nghiệm nghề có được không?",
    answer: "Được! Ausbildung là chương trình đào tạo nghề, không yêu cầu kinh nghiệm. Bạn sẽ được đào tạo từ đầu và nhận bằng nghề sau khi hoàn thành."
  }
];

export default function AusbildungPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-secondary/10 via-white to-secondary/5">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/du-hoc-duc" className="hover:text-primary">Du học Đức</Link>
              <span>/</span>
              <span className="text-gray-900">Du học nghề</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white text-sm font-medium mb-6">
                  <Briefcase className="h-4 w-4" />
                  Ausbildung
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Du học nghề Đức
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Vừa học vừa làm, được trả lương
                </p>
                <p className="text-gray-600 mb-8">
                  Chương trình đào tạo nghề kép (Ausbildung) tại Đức - Con đường nhanh nhất
                  để có nghề nghiệp ổn định và định cư lâu dài tại Đức. Không cần học phí,
                  được trả lương từ 800-1.200€/tháng ngay từ ngày đầu tiên.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Đăng ký tư vấn miễn phí
                  </Button>
                  <Button size="lg" variant="outline">
                    Xem ngành nghề
                  </Button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tổng quan Ausbildung</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Thời gian</span>
                    <span className="font-semibold text-gray-900">2 - 3.5 năm</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Lương tháng</span>
                    <span className="font-semibold text-secondary">800 - 1.200€</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Học phí</span>
                    <span className="font-semibold text-green-600">Miễn phí</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Yêu cầu tiếng Đức</span>
                    <span className="font-semibold text-gray-900">B1 / B2</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">Độ tuổi</span>
                    <span className="font-semibold text-gray-900">18 - 35 tuổi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Lợi ích của Ausbildung
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ngành nghề phổ biến
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Các ngành nghề đang có nhu cầu tuyển dụng cao tại Đức
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {careers.map((career, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <career.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{career.category}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm">
                        <span className="text-secondary font-medium">{career.salary}/tháng</span>
                        <span className="text-gray-500">Nhu cầu: {career.demand}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {career.jobs.map((job, jobIndex) => (
                      <span key={jobIndex} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Điều kiện tham gia
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-6">
                {requirements.map((req, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-sm text-gray-500 mb-1">{req.title}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{req.value}</div>
                    <div className="text-sm text-gray-600">{req.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lộ trình thực hiện
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Từ khi bắt đầu học tiếng Đức đến khi làm việc tại Đức
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="inline-flex px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-2">
                        {item.duration}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
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
                href="/du-hoc-duc"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Tổng quan du học Đức
              </Link>
              <Link
                href="/du-hoc-duc/du-hoc-dai-hoc"
                className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Du học đại học
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
                Sẵn sàng bắt đầu hành trình Ausbildung?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký tư vấn miễn phí để được hỗ trợ chọn ngành nghề phù hợp
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
