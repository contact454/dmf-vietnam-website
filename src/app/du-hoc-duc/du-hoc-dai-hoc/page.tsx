import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Clock,
  Euro,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Award,
  Building2,
  Globe,
  Briefcase,
  Users,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Du học Đại học Đức | DMF Vietnam",
  description: "Du học đại học tại Đức - Học phí thấp, chất lượng cao. Bằng cấp được công nhận toàn cầu. Tư vấn miễn phí.",
};

const benefits = [
  {
    icon: Euro,
    title: "Học phí thấp",
    description: "Đại học công lập chỉ khoảng 150-300€/kỳ phí hành chính"
  },
  {
    icon: Award,
    title: "Chất lượng hàng đầu",
    description: "Top 50 trường ĐH tốt nhất thế giới đến từ Đức"
  },
  {
    icon: Globe,
    title: "Bằng cấp quốc tế",
    description: "Được công nhận và đánh giá cao trên toàn cầu"
  },
  {
    icon: Briefcase,
    title: "Cơ hội việc làm",
    description: "18 tháng ở lại tìm việc sau khi tốt nghiệp"
  }
];

const programs = [
  {
    title: "Cử nhân (Bachelor)",
    duration: "3-4 năm",
    language: "Tiếng Đức hoặc Anh",
    requirement: "THPT + B2/C1 hoặc IELTS 6.0+",
    description: "Chương trình cử nhân với nhiều ngành học đa dạng"
  },
  {
    title: "Thạc sĩ (Master)",
    duration: "1.5-2 năm",
    language: "Tiếng Đức hoặc Anh",
    requirement: "Cử nhân + B2/C1 hoặc IELTS 6.5+",
    description: "Chương trình thạc sĩ chuyên sâu, nhiều ngành dạy bằng tiếng Anh"
  },
  {
    title: "Tiến sĩ (PhD)",
    duration: "3-5 năm",
    language: "Tiếng Đức hoặc Anh",
    requirement: "Thạc sĩ + Đề cương nghiên cứu",
    description: "Nghiên cứu sinh với nhiều học bổng hấp dẫn"
  }
];

const fields = [
  "Kỹ thuật & Công nghệ",
  "Kinh tế & Quản trị",
  "Công nghệ thông tin",
  "Y khoa & Dược",
  "Khoa học tự nhiên",
  "Nghệ thuật & Thiết kế",
  "Khoa học xã hội",
  "Luật & Chính trị"
];

const requirements = [
  {
    title: "Học vấn",
    items: [
      "Tốt nghiệp THPT với điểm tốt (thường GPA 7.0+)",
      "Một số ngành yêu cầu Studienkolleg (dự bị đại học)",
      "Bằng cử nhân để học thạc sĩ"
    ]
  },
  {
    title: "Ngôn ngữ",
    items: [
      "Tiếng Đức B2/C1 (TestDaF, DSH, Goethe)",
      "Hoặc tiếng Anh IELTS 6.0-6.5+ cho chương trình tiếng Anh",
      "Một số chương trình thạc sĩ chỉ cần tiếng Anh"
    ]
  },
  {
    title: "Tài chính",
    items: [
      "Chứng minh tài chính khoảng 11.208€/năm (tài khoản phong tỏa)",
      "Chi phí sinh hoạt 800-1.000€/tháng",
      "Được làm thêm 20h/tuần (khoảng 450-600€/tháng)"
    ]
  }
];

const costs = [
  { item: "Học phí (ĐH công lập)", amount: "150-300€/kỳ", note: "Chỉ là phí hành chính" },
  { item: "Tài khoản phong tỏa", amount: "11.208€/năm", note: "Yêu cầu bắt buộc cho visa" },
  { item: "Bảo hiểm y tế", amount: "110€/tháng", note: "Bắt buộc cho sinh viên" },
  { item: "Nhà ở", amount: "300-600€/tháng", note: "Tùy thành phố" },
  { item: "Sinh hoạt", amount: "200-400€/tháng", note: "Ăn uống, đi lại, cá nhân" },
  { item: "Làm thêm (thu nhập)", amount: "450-600€/tháng", note: "20h/tuần" }
];

const topUniversities = [
  "Technical University of Munich (TUM)",
  "Ludwig Maximilian University of Munich",
  "Heidelberg University",
  "Humboldt University of Berlin",
  "RWTH Aachen University",
  "University of Freiburg",
  "University of Göttingen",
  "Karlsruhe Institute of Technology"
];

const faqs = [
  {
    question: "Du học Đức có đắt không?",
    answer: "Không! Đức là một trong những nước có chi phí du học thấp nhất ở châu Âu. Đại học công lập gần như miễn học phí, bạn chỉ cần lo chi phí sinh hoạt khoảng 800-1.000€/tháng và có thể làm thêm 20h/tuần."
  },
  {
    question: "Tôi cần học tiếng Đức không?",
    answer: "Tùy chương trình. Nhiều chương trình thạc sĩ dạy hoàn toàn bằng tiếng Anh. Tuy nhiên, biết tiếng Đức giúp bạn tìm việc làm thêm dễ hơn và hòa nhập tốt hơn."
  },
  {
    question: "Sau khi tốt nghiệp có được ở lại Đức không?",
    answer: "Có! Sau khi tốt nghiệp, bạn được cấp visa 18 tháng để tìm việc. Nếu có việc làm đúng ngành, bạn sẽ được cấp visa làm việc và có thể xin thường trú sau 2-4 năm."
  },
  {
    question: "Khi nào nên nộp hồ sơ?",
    answer: "Thường có 2 đợt nhập học: Mùa đông (tháng 10) với deadline nộp hồ sơ tháng 7, và mùa hè (tháng 4) với deadline tháng 1. Nên chuẩn bị hồ sơ trước 6-12 tháng."
  }
];

export default function UniversityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/10 via-white to-primary/5">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/du-hoc-duc" className="hover:text-primary">Du học Đức</Link>
              <span>/</span>
              <span className="text-gray-900">Du học đại học</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium mb-6">
                  <GraduationCap className="h-4 w-4" />
                  University
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Du học Đại học Đức
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Học phí thấp, chất lượng cao, bằng cấp quốc tế
                </p>
                <p className="text-gray-600 mb-8">
                  Đức là điểm đến du học lý tưởng với hệ thống giáo dục đại học hàng đầu thế giới.
                  Học phí gần như miễn phí tại đại học công lập, bằng cấp được công nhận toàn cầu,
                  và cơ hội việc làm rộng mở sau khi tốt nghiệp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Đăng ký tư vấn miễn phí
                  </Button>
                  <Button size="lg" variant="outline">
                    Xem ngành học
                  </Button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tổng quan du học ĐH Đức</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Học phí (ĐH công)</span>
                    <span className="font-semibold text-green-600">~150-300€/kỳ</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Chi phí sinh hoạt</span>
                    <span className="font-semibold text-gray-900">800-1.000€/tháng</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Làm thêm</span>
                    <span className="font-semibold text-gray-900">20h/tuần</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Yêu cầu tiếng Đức</span>
                    <span className="font-semibold text-gray-900">B2/C1 hoặc tiếng Anh</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">Visa sau tốt nghiệp</span>
                    <span className="font-semibold text-primary">18 tháng tìm việc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Lợi ích du học đại học Đức
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

        {/* Programs Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Các bậc học
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Thời gian: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Ngôn ngữ: {program.language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Yêu cầu: {program.requirement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fields of Study */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ngành học phổ biến
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Đức có hệ thống giáo dục đa dạng với hàng ngàn chương trình học
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {fields.map((field, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 font-medium hover:border-primary hover:text-primary transition-colors cursor-pointer"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Điều kiện du học
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{req.title}</h3>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Costs Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Chi phí dự kiến
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-700">
                  <div>Hạng mục</div>
                  <div className="text-center">Số tiền</div>
                  <div className="text-right">Ghi chú</div>
                </div>
                {costs.map((cost, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 border-t border-gray-100">
                    <div className="text-gray-900">{cost.item}</div>
                    <div className="text-center font-semibold text-primary">{cost.amount}</div>
                    <div className="text-right text-sm text-gray-500">{cost.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Universities */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Các trường đại học hàng đầu
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Đức có nhiều trường đại học nằm trong top thế giới
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topUniversities.map((uni, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{uni}</span>
                </div>
              ))}
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
                href="/du-hoc-duc/du-hoc-nghe"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Du học nghề
              </Link>
              <Link
                href="/du-hoc-duc/dieu-kien-chi-phi"
                className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Điều kiện & Chi phí
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
                Sẵn sàng chinh phục đại học Đức?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký tư vấn miễn phí để được hỗ trợ chọn trường và ngành học phù hợp
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
