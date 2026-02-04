import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Home,
  Briefcase,
  GraduationCap,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileText,
  Shield,
  Euro,
  Globe,
  Heart,
  Award,
  MapPin,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Định cư Đức | DMF Vietnam",
  description: "Các con đường định cư Đức: Qua du học nghề, du học đại học, làm việc (Blue Card), thành lập doanh nghiệp. Tư vấn miễn phí.",
};

const pathways = [
  {
    icon: Briefcase,
    title: "Qua Du học nghề (Ausbildung)",
    subtitle: "Con đường phổ biến nhất",
    duration: "4-6 năm để có PR",
    description: "Hoàn thành Ausbildung, làm việc 2 năm và đạt đủ điều kiện xin thường trú (Niederlassungserlaubnis).",
    steps: [
      "Hoàn thành Ausbildung (2-3.5 năm)",
      "Làm việc theo ngành đã học (2 năm)",
      "Đóng bảo hiểm xã hội đầy đủ",
      "Tiếng Đức B1 trở lên",
      "Xin Niederlassungserlaubnis"
    ],
    advantages: [
      "Chi phí thấp, được trả lương",
      "Không cần bằng đại học",
      "Tỷ lệ thành công cao",
      "Có việc làm ổn định"
    ],
    color: "bg-secondary",
    popular: true
  },
  {
    icon: GraduationCap,
    title: "Qua Du học đại học",
    subtitle: "Dành cho sinh viên",
    duration: "5-7 năm để có PR",
    description: "Tốt nghiệp đại học Đức, tìm việc làm đúng ngành và làm việc đủ thời gian để xin thường trú.",
    steps: [
      "Tốt nghiệp đại học Đức (3-5 năm)",
      "18 tháng tìm việc (Job-seeker visa)",
      "Làm việc đúng ngành (2 năm)",
      "Xin Niederlassungserlaubnis"
    ],
    advantages: [
      "Bằng cấp quốc tế",
      "Cơ hội việc làm cao",
      "Thu nhập tốt sau tốt nghiệp",
      "Mở rộng network"
    ],
    color: "bg-primary"
  },
  {
    icon: Award,
    title: "Qua Blue Card EU",
    subtitle: "Dành cho chuyên gia",
    duration: "21-33 tháng để có PR",
    description: "Dành cho người có bằng đại học và được tuyển dụng với mức lương cao tại Đức.",
    steps: [
      "Có bằng đại học được công nhận",
      "Có hợp đồng lao động với lương đủ ngưỡng",
      "Xin EU Blue Card",
      "Làm việc 21-33 tháng",
      "Xin Niederlassungserlaubnis"
    ],
    advantages: [
      "Thời gian ngắn nhất",
      "Thu nhập cao",
      "Gia đình được đi cùng",
      "Có thể chuyển sang nước EU khác"
    ],
    color: "bg-blue-600"
  },
  {
    icon: Building2,
    title: "Qua Thành lập doanh nghiệp",
    subtitle: "Dành cho doanh nhân",
    duration: "3-5 năm để có PR",
    description: "Thành lập công ty hoặc chi nhánh tại Đức, tạo việc làm và đóng góp kinh tế.",
    steps: [
      "Chuẩn bị kế hoạch kinh doanh",
      "Chứng minh vốn và năng lực",
      "Xin visa doanh nhân",
      "Thành lập và vận hành công ty",
      "Xin Niederlassungserlaubnis sau 3 năm"
    ],
    advantages: [
      "Làm chủ doanh nghiệp",
      "Không giới hạn thu nhập",
      "Gia đình được đi cùng",
      "Tự do kinh doanh"
    ],
    color: "bg-purple-600"
  }
];

const residenceTypes = [
  {
    type: "Visa du học / làm việc",
    duration: "1-4 năm",
    description: "Visa tạm thời, phải gia hạn định kỳ",
    icon: FileText
  },
  {
    type: "Niederlassungserlaubnis (PR)",
    duration: "Vô thời hạn",
    description: "Thường trú, không cần gia hạn, gần như quyền công dân",
    icon: Shield
  },
  {
    type: "Quốc tịch Đức",
    duration: "Vĩnh viễn",
    description: "Sau 6-8 năm cư trú, có đầy đủ quyền công dân EU",
    icon: Globe
  }
];

const requirements = {
  pr: [
    "Cư trú hợp pháp tại Đức đủ thời gian (thường 5 năm, hoặc ngắn hơn với Blue Card)",
    "Tiếng Đức B1 trở lên",
    "Đóng bảo hiểm xã hội đầy đủ (60 tháng)",
    "Có thu nhập ổn định, không nhận trợ cấp",
    "Có chỗ ở phù hợp",
    "Không có tiền án, tiền sự"
  ],
  citizenship: [
    "Cư trú tại Đức ít nhất 6-8 năm",
    "Có Niederlassungserlaubnis",
    "Tiếng Đức B1 trở lên + kiến thức xã hội Đức",
    "Tự túc tài chính",
    "Không có tiền án",
    "Từ bỏ quốc tịch cũ (một số trường hợp được giữ 2 quốc tịch)"
  ]
};

const benefits = [
  {
    icon: Shield,
    title: "An sinh xã hội",
    description: "Bảo hiểm y tế, thất nghiệp, hưu trí toàn diện"
  },
  {
    icon: GraduationCap,
    title: "Giáo dục miễn phí",
    description: "Con cái được học miễn phí từ mẫu giáo đến đại học"
  },
  {
    icon: Euro,
    title: "Thu nhập cao",
    description: "Mức lương trung bình 4.000-5.000€/tháng"
  },
  {
    icon: Globe,
    title: "Tự do đi lại EU",
    description: "Đi lại, làm việc, sinh sống tại 27 nước EU"
  },
  {
    icon: Heart,
    title: "Chất lượng cuộc sống",
    description: "Top 10 quốc gia đáng sống nhất thế giới"
  },
  {
    icon: Users,
    title: "Bảo lãnh gia đình",
    description: "Có thể bảo lãnh vợ/chồng, con cái sang Đức"
  }
];

const timeline = [
  { year: "Năm 1-3", milestone: "Học tiếng Đức + Ausbildung/Đại học", status: "Visa du học" },
  { year: "Năm 3-5", milestone: "Hoàn thành đào tạo + Tìm việc", status: "Visa làm việc" },
  { year: "Năm 5-6", milestone: "Làm việc ổn định + Xin PR", status: "Niederlassungserlaubnis" },
  { year: "Năm 8+", milestone: "Xin quốc tịch Đức (tùy chọn)", status: "Công dân Đức" }
];

const faqs = [
  {
    question: "Định cư Đức mất bao lâu?",
    answer: "Tùy con đường bạn chọn. Nhanh nhất là qua Blue Card (21-33 tháng để có PR). Qua Ausbildung mất khoảng 4-6 năm, qua du học đại học mất 5-7 năm. Để có quốc tịch cần thêm 2-3 năm nữa."
  },
  {
    question: "Niederlassungserlaubnis (PR) có những quyền lợi gì?",
    answer: "Với PR, bạn được ở lại Đức vô thời hạn, không cần gia hạn visa, được làm việc tự do, nhận trợ cấp xã hội, bảo lãnh gia đình. Chỉ khác công dân là không được bầu cử và cần visa khi đi một số nước."
  },
  {
    question: "Tôi có thể mang gia đình sang Đức không?",
    answer: "Có! Khi bạn có visa làm việc hoặc PR, bạn có thể bảo lãnh vợ/chồng và con dưới 18 tuổi sang Đức. Vợ/chồng cần tiếng Đức A1, con cái được đi học miễn phí."
  },
  {
    question: "Có cần từ bỏ quốc tịch Việt Nam không?",
    answer: "Theo luật Đức, thường phải từ bỏ quốc tịch cũ khi nhập tịch. Tuy nhiên có một số ngoại lệ. Nếu chỉ xin PR (thường trú) thì không cần từ bỏ quốc tịch Việt Nam."
  }
];

export default function SettlementPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Home className="h-4 w-4" />
                Định cư Đức
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Con đường
                <span className="text-primary"> định cư Đức</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Khám phá các lộ trình định cư tại Đức - Quốc gia có chất lượng cuộc sống hàng đầu châu Âu,
                an sinh xã hội tốt và cơ hội phát triển sự nghiệp không giới hạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Tư vấn miễn phí
                </Button>
                <Button size="lg" variant="outline">
                  Xem các con đường
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Residence Types */}
        <section className="py-12 bg-primary">
          <div className="container-dmf">
            <div className="grid md:grid-cols-3 gap-6">
              {residenceTypes.map((type, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
                  <type.icon className="h-10 w-10 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-1">{type.type}</h3>
                  <div className="text-secondary font-semibold mb-2">{type.duration}</div>
                  <p className="text-white/80 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pathways Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                4 con đường định cư phổ biến
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chọn lộ trình phù hợp với hoàn cảnh và mục tiêu của bạn
              </p>
            </div>

            <div className="space-y-8">
              {pathways.map((pathway, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="grid lg:grid-cols-3">
                    {/* Header */}
                    <div className={cn("p-6 lg:p-8", pathway.color)}>
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          <pathway.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          {pathway.popular && (
                            <span className="inline-block px-2 py-0.5 bg-white/20 text-white text-xs font-medium rounded mb-2">
                              Phổ biến nhất
                            </span>
                          )}
                          <h3 className="text-xl font-bold text-white">{pathway.title}</h3>
                          <p className="text-white/80">{pathway.subtitle}</p>
                          <div className="flex items-center gap-2 mt-3 text-white">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">{pathway.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/90 mt-4">{pathway.description}</p>
                    </div>

                    {/* Steps */}
                    <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-4">Các bước thực hiện</h4>
                      <ol className="space-y-2">
                        {pathway.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-700 flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Advantages */}
                    <div className="p-6 lg:p-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Ưu điểm</h4>
                      <ul className="space-y-2">
                        {pathway.advantages.map((adv, advIndex) => (
                          <li key={advIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lộ trình định cư điển hình
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ví dụ lộ trình qua con đường du học nghề (Ausbildung)
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6 mb-8 last:mb-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm text-center z-10">
                      {item.year}
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{item.milestone}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Điều kiện xin thường trú & quốc tịch
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* PR Requirements */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-primary p-6">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Thường trú (PR)</h3>
                      <p className="text-white/80">Niederlassungserlaubnis</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {requirements.pr.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Citizenship Requirements */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-secondary p-6">
                  <div className="flex items-center gap-3">
                    <Globe className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Quốc tịch Đức</h3>
                      <p className="text-white/80">Einbürgerung</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {requirements.citizenship.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Quyền lợi khi định cư tại Đức
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những lợi ích bạn và gia đình được hưởng khi trở thành thường trú nhân
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Bắt đầu hành trình định cư Đức
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký tư vấn miễn phí để được hỗ trợ chọn lộ trình phù hợp với hoàn cảnh của bạn
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
