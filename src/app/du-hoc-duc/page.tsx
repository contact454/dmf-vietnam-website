import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Briefcase,
  FileText,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Globe,
  Euro,
  Building2,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Du học Đức | DMF Vietnam",
  description: "Chương trình du học Đức: Du học nghề (Ausbildung), Du học đại học. Tư vấn miễn phí, hỗ trợ visa, cam kết đầu ra.",
};

const programs = [
  {
    icon: Briefcase,
    title: "Du học nghề (Ausbildung)",
    subtitle: "Vừa học vừa làm, được trả lương",
    description: "Chương trình đào tạo nghề kép tại Đức. Học lý thuyết tại trường nghề và thực hành tại doanh nghiệp. Được nhận lương từ 800-1.200€/tháng.",
    duration: "2-3.5 năm",
    requirements: "Tiếng Đức B1, THPT",
    salary: "800-1.200€/tháng",
    features: [
      "Không tốn học phí",
      "Được trả lương trong khi học",
      "Bằng cấp được công nhận toàn EU",
      "Cơ hội định cư lâu dài"
    ],
    color: "bg-secondary",
    href: "/du-hoc-duc/du-hoc-nghe"
  },
  {
    icon: GraduationCap,
    title: "Du học đại học",
    subtitle: "Học phí thấp, chất lượng cao",
    description: "Theo học tại các trường đại học công lập Đức với học phí gần như miễn phí. Bằng cấp được công nhận toàn cầu.",
    duration: "3-4 năm (Cử nhân)",
    requirements: "Tiếng Đức B2/C1, THPT",
    salary: "Làm thêm 20h/tuần",
    features: [
      "Học phí chỉ ~300€/kỳ",
      "Được làm thêm 20h/tuần",
      "Nhiều ngành học đa dạng",
      "Cơ hội việc làm sau tốt nghiệp"
    ],
    color: "bg-primary",
    href: "/du-hoc-duc/du-hoc-dai-hoc"
  }
];

const whyGermany = [
  {
    icon: Euro,
    title: "Học phí thấp",
    description: "Đại học công lập miễn học phí, du học nghề được trả lương"
  },
  {
    icon: Award,
    title: "Chất lượng giáo dục",
    description: "Top 10 hệ thống giáo dục tốt nhất thế giới"
  },
  {
    icon: TrendingUp,
    title: "Cơ hội việc làm",
    description: "Nền kinh tế lớn nhất châu Âu, thiếu hụt lao động"
  },
  {
    icon: Globe,
    title: "Định cư dễ dàng",
    description: "Chính sách nhập cư thân thiện với du học sinh"
  },
  {
    icon: Building2,
    title: "Môi trường sống",
    description: "An toàn, hiện đại, chất lượng cuộc sống cao"
  },
  {
    icon: Users,
    title: "Cộng đồng Việt",
    description: "Cộng đồng người Việt lớn, dễ hòa nhập"
  }
];

const stats = [
  { value: "500+", label: "Học viên đã sang Đức" },
  { value: "98%", label: "Tỷ lệ đậu visa" },
  { value: "50+", label: "Đối tác tại Đức" },
  { value: "10+", label: "Năm kinh nghiệm" }
];

const process = [
  {
    step: "01",
    title: "Tư vấn & Đánh giá",
    description: "Tư vấn miễn phí, đánh giá hồ sơ và xác định chương trình phù hợp"
  },
  {
    step: "02",
    title: "Học tiếng Đức",
    description: "Đào tạo tiếng Đức từ A1 đến B1/B2 theo yêu cầu chương trình"
  },
  {
    step: "03",
    title: "Chuẩn bị hồ sơ",
    description: "Hỗ trợ hoàn thiện hồ sơ, tìm kiếm vị trí Ausbildung hoặc trường ĐH"
  },
  {
    step: "04",
    title: "Xin visa",
    description: "Hướng dẫn và hỗ trợ toàn bộ quy trình xin visa du học"
  },
  {
    step: "05",
    title: "Sang Đức",
    description: "Hỗ trợ đặt vé, đón sân bay và ổn định cuộc sống ban đầu"
  }
];

export default function StudyAbroadPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                Du học Đức
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Khám phá cơ hội
                <span className="text-primary"> du học Đức</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Du học nghề hoặc đại học tại Đức - Quốc gia có nền giáo dục hàng đầu châu Âu
                với chi phí thấp và cơ hội định cư lâu dài.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Tư vấn miễn phí
                </Button>
                <Button size="lg" variant="outline">
                  Xem chương trình
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

        {/* Programs Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Chọn chương trình phù hợp
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hai con đường du học Đức phổ biến nhất dành cho học viên Việt Nam
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={cn("p-6", program.color)}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                        <program.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{program.title}</h3>
                        <p className="text-white/80">{program.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{program.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-100">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Thời gian</div>
                        <div className="font-semibold text-gray-900 text-sm">{program.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Yêu cầu</div>
                        <div className="font-semibold text-gray-900 text-sm">{program.requirements}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Thu nhập</div>
                        <div className="font-semibold text-gray-900 text-sm">{program.salary}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={program.href}
                      className={cn(
                        "inline-flex items-center justify-center w-full py-3 rounded-lg font-medium transition-colors",
                        program.color === "bg-secondary"
                          ? "bg-secondary text-white hover:bg-secondary/90"
                          : "bg-primary text-white hover:bg-primary/90"
                      )}
                    >
                      Tìm hiểu thêm
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements Link */}
            <div className="mt-8 text-center">
              <Link
                href="/du-hoc-duc/dieu-kien-chi-phi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition-colors"
              >
                <FileText className="h-5 w-5" />
                Xem chi tiết điều kiện & chi phí
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Germany Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tại sao chọn du học Đức?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Đức là điểm đến du học lý tưởng với nhiều ưu điểm vượt trội
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyGermany.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Quy trình du học cùng DMF
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                5 bước đơn giản để bắt đầu hành trình du học Đức của bạn
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

              <div className="space-y-8 lg:space-y-0">
                {process.map((item, index) => (
                  <div
                    key={item.step}
                    className={cn(
                      "relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:py-8",
                      index % 2 === 0 ? "" : ""
                    )}
                  >
                    <div className={cn(
                      "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                      index % 2 === 0 ? "lg:text-right lg:mr-8" : "lg:text-left lg:ml-8 lg:col-start-2"
                    )}>
                      <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-sm font-bold mb-3"
                      )}>
                        Bước {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
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
                Bắt đầu hành trình du học Đức ngay hôm nay
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký tư vấn miễn phí để được hỗ trợ chọn chương trình phù hợp với mục tiêu của bạn
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
