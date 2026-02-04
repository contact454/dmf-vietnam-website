import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Heart,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  GraduationCap,
  Briefcase,
  Globe,
  Star,
  Shield,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Về DMF Vietnam | Đào tạo tiếng Đức & Tư vấn du học",
  description: "DMF Vietnam - Trung tâm đào tạo tiếng Đức và tư vấn du học Đức hàng đầu. 10+ năm kinh nghiệm, 2000+ học viên thành công.",
};

const stats = [
  { value: "10+", label: "Năm kinh nghiệm", icon: Clock },
  { value: "2000+", label: "Học viên đã đào tạo", icon: Users },
  { value: "500+", label: "Học viên tại Đức", icon: Globe },
  { value: "98%", label: "Tỷ lệ đậu visa", icon: Award }
];

const values = [
  {
    icon: Heart,
    title: "Tận tâm",
    description: "Đồng hành cùng học viên từ bước đầu tiên đến khi thành công tại Đức"
  },
  {
    icon: Shield,
    title: "Uy tín",
    description: "Cam kết chất lượng, minh bạch thông tin và đúng hẹn trong mọi dịch vụ"
  },
  {
    icon: Lightbulb,
    title: "Chuyên nghiệp",
    description: "Đội ngũ giàu kinh nghiệm, quy trình làm việc chuẩn hóa"
  },
  {
    icon: Target,
    title: "Hiệu quả",
    description: "Tập trung vào kết quả thực tế, tỷ lệ thành công cao"
  }
];

const services = [
  {
    icon: GraduationCap,
    title: "Đào tạo tiếng Đức",
    description: "Khóa học từ A1 đến B2, giáo viên có chứng chỉ quốc tế, cam kết đầu ra"
  },
  {
    icon: Briefcase,
    title: "Tư vấn du học nghề",
    description: "Hỗ trợ tìm vị trí Ausbildung, chuẩn bị hồ sơ, xin visa"
  },
  {
    icon: Award,
    title: "Tư vấn du học đại học",
    description: "Tư vấn chọn trường, ngành học, hỗ trợ hồ sơ và visa"
  },
  {
    icon: Globe,
    title: "Hỗ trợ định cư",
    description: "Tư vấn các con đường định cư lâu dài tại Đức"
  }
];

const milestones = [
  { year: "2014", event: "Thành lập DMF Vietnam", description: "Bắt đầu hoạt động đào tạo tiếng Đức" },
  { year: "2016", event: "Mở rộng dịch vụ tư vấn", description: "Triển khai tư vấn du học nghề Ausbildung" },
  { year: "2018", event: "500 học viên", description: "Cột mốc 500 học viên được đào tạo" },
  { year: "2020", event: "Đối tác tại Đức", description: "Thiết lập mạng lưới đối tác doanh nghiệp Đức" },
  { year: "2022", event: "1500 học viên", description: "Mở rộng quy mô, đào tạo cả online" },
  { year: "2024", event: "2000+ học viên", description: "Tiếp tục phát triển và mở rộng dịch vụ" }
];

const partners = [
  "Goethe Institut",
  "ÖSD",
  "IHK",
  "Các trường nghề tại Đức",
  "Doanh nghiệp Đức",
  "Đại sứ quán Đức"
];

const whyChooseUs = [
  "Đội ngũ giáo viên có chứng chỉ giảng dạy quốc tế",
  "Chương trình học chuẩn Goethe Institut",
  "Cam kết đầu ra, học lại miễn phí nếu không đạt",
  "Hỗ trợ toàn diện từ học tiếng đến định cư",
  "Mạng lưới đối tác rộng khắp tại Đức",
  "Tỷ lệ đậu visa 98%",
  "Hỗ trợ học viên sau khi sang Đức",
  "Chi phí hợp lý, nhiều ưu đãi"
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Users className="h-4 w-4" />
                  Về DMF Vietnam
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Đồng hành cùng bạn
                  <span className="text-primary"> chinh phục nước Đức</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  DMF Vietnam là trung tâm đào tạo tiếng Đức và tư vấn du học Đức hàng đầu tại Việt Nam.
                  Với hơn 10 năm kinh nghiệm, chúng tôi đã đồng hành cùng hàng nghìn học viên
                  thực hiện ước mơ học tập, làm việc và định cư tại Đức.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Đăng ký tư vấn
                  </Button>
                  <Link href="/ve-chung-toi/doi-ngu">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Xem đội ngũ
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-gray-500">Hình ảnh đội ngũ DMF</p>
                  </div>
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-sm text-gray-500">Năm kinh nghiệm</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">2000+</div>
                      <div className="text-sm text-gray-500">Học viên</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="container-dmf">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-white/80 mx-auto mb-2" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-primary/5 rounded-2xl p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Sứ mệnh
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mang đến cho học viên Việt Nam con đường ngắn nhất và hiệu quả nhất
                  để học tập, làm việc và định cư tại Đức. Chúng tôi cam kết đồng hành
                  toàn diện từ khâu học tiếng, chuẩn bị hồ sơ đến khi học viên ổn định
                  cuộc sống tại Đức.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-secondary/5 rounded-2xl p-8 lg:p-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Tầm nhìn
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Trở thành đơn vị tư vấn du học Đức uy tín và chất lượng hàng đầu
                  tại Việt Nam. Xây dựng cộng đồng người Việt thành công tại Đức,
                  là cầu nối văn hóa và kinh tế giữa hai quốc gia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Giá trị cốt lõi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những giá trị định hình mọi hoạt động của DMF Vietnam
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Dịch vụ của chúng tôi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hỗ trợ toàn diện cho hành trình du học và định cư Đức
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Tại sao chọn DMF Vietnam?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Với kinh nghiệm hơn 10 năm trong lĩnh vực đào tạo tiếng Đức và tư vấn du học,
                  chúng tôi tự hào là đối tác đáng tin cậy của hàng nghìn học viên.
                </p>
                <Link href="/lien-he">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Liên hệ ngay
                  </Button>
                </Link>
              </div>

              <div className="grid gap-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Hành trình phát triển
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-6 mb-8 last:mb-0 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Year badge */}
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10 flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      {milestone.year}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 bg-white rounded-xl border border-gray-200 p-6 lg:w-[calc(50%-4rem)] ${
                      index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                    }`}>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Đội ngũ của chúng tôi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Đội ngũ giáo viên và tư vấn viên giàu kinh nghiệm, tận tâm với học viên
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Users className="h-16 w-16 text-gray-300" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">Tên giáo viên</h3>
                    <p className="text-sm text-gray-500">Chức vụ</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/ve-chung-toi/doi-ngu">
                <Button variant="outline" size="lg">
                  Xem toàn bộ đội ngũ
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Liên hệ với chúng tôi
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Địa chỉ</h3>
                  <p className="text-sm text-gray-600">
                    123 Đường ABC, Quận XYZ<br />
                    TP. Hồ Chí Minh
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Điện thoại</h3>
                  <p className="text-sm text-gray-600">
                    Hotline: 0123 456 789<br />
                    Zalo: 0123 456 789
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-sm text-gray-600">
                    info@dmf.edu.vn<br />
                    tuyensinh@dmf.edu.vn
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Giờ làm việc</h3>
                  <p className="text-sm text-gray-600">
                    T2 - T7: 8:00 - 20:00<br />
                    CN: 8:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Sẵn sàng bắt đầu hành trình?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đăng ký tư vấn miễn phí để được hỗ trợ lên kế hoạch học tập và du học Đức
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                  Đăng ký tư vấn miễn phí
                </Button>
                <Link href="/lien-he">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Xem thông tin liên hệ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
