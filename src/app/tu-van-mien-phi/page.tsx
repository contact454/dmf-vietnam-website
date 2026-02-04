"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageCircle,
  CheckCircle2,
  Send,
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  Clock,
  Phone,
  Shield,
  Star,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const consultationTypes = [
  {
    value: "german-course",
    label: "Khóa học tiếng Đức",
    description: "Tư vấn lộ trình học A1-B2",
    icon: BookOpen
  },
  {
    value: "ausbildung",
    label: "Du học nghề (Ausbildung)",
    description: "Học nghề và làm việc tại Đức",
    icon: Briefcase
  },
  {
    value: "university",
    label: "Du học đại học",
    description: "Cử nhân, Thạc sĩ, Tiến sĩ",
    icon: GraduationCap
  },
  {
    value: "settlement",
    label: "Định cư Đức",
    description: "Các con đường định cư",
    icon: Users
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Phản hồi trong 24h",
    description: "Chuyên viên liên hệ tư vấn trong vòng 24 giờ làm việc"
  },
  {
    icon: Shield,
    title: "Hoàn toàn miễn phí",
    description: "Không phát sinh bất kỳ chi phí nào cho buổi tư vấn đầu tiên"
  },
  {
    icon: Star,
    title: "Tư vấn 1-1",
    description: "Được tư vấn riêng với chuyên viên giàu kinh nghiệm"
  }
];

const stats = [
  { value: "10,000+", label: "Học viên tư vấn" },
  { value: "98%", label: "Hài lòng" },
  { value: "24h", label: "Phản hồi" }
];

export default function FreeConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    education: "",
    consultationType: "",
    germanLevel: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Hoàn toàn miễn phí
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Đăng ký tư vấn
                <span className="text-primary"> miễn phí</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Điền thông tin bên dưới để được chuyên viên DMF tư vấn chi tiết về
                khóa học tiếng Đức và chương trình du học phù hợp với bạn.
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-8 lg:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="grid lg:grid-cols-[1fr,400px] gap-12">
              {/* Form */}
              <div className="order-2 lg:order-1">
                {isSubmitted ? (
                  <div className="bg-green-50 rounded-2xl p-8 lg:p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Đăng ký thành công!
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Cảm ơn bạn đã tin tưởng DMF Vietnam. Chuyên viên của chúng tôi
                      sẽ liên hệ bạn trong vòng 24 giờ làm việc.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            age: "",
                            education: "",
                            consultationType: "",
                            germanLevel: "",
                            timeline: "",
                            message: ""
                          });
                        }}
                        variant="outline"
                      >
                        Đăng ký thêm
                      </Button>
                      <Link href="/dat-lich-tu-van">
                        <Button className="bg-primary hover:bg-primary/90">
                          Đặt lịch hẹn cụ thể
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Thông tin đăng ký
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Vui lòng điền đầy đủ thông tin để chúng tôi tư vấn chính xác nhất.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Consultation Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Bạn quan tâm đến <span className="text-red-500">*</span>
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {consultationTypes.map((type) => (
                            <label
                              key={type.value}
                              className={cn(
                                "flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                                formData.consultationType === type.value
                                  ? "border-primary bg-primary/5"
                                  : "border-gray-200 hover:border-gray-300"
                              )}
                            >
                              <input
                                type="radio"
                                name="consultationType"
                                value={type.value}
                                checked={formData.consultationType === type.value}
                                onChange={handleChange}
                                className="sr-only"
                                required
                              />
                              <div className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                formData.consultationType === type.value
                                  ? "bg-primary text-white"
                                  : "bg-gray-100 text-gray-500"
                              )}>
                                <type.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{type.label}</div>
                                <div className="text-sm text-gray-500">{type.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Personal Info */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Họ và tên <span className="text-red-500">*</span>
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nhập họ và tên"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Số điện thoại <span className="text-red-500">*</span>
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0123 456 789"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Năm sinh
                          </label>
                          <Input
                            name="age"
                            type="number"
                            min="1980"
                            max="2010"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="VD: 2000"
                          />
                        </div>
                      </div>

                      {/* Education & German Level */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Trình độ học vấn
                          </label>
                          <select
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            <option value="">Chọn trình độ</option>
                            <option value="thpt">Tốt nghiệp THPT</option>
                            <option value="tc">Trung cấp</option>
                            <option value="cd">Cao đẳng</option>
                            <option value="dh">Đại học</option>
                            <option value="sau-dh">Sau đại học</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Trình độ tiếng Đức
                          </label>
                          <select
                            name="germanLevel"
                            value={formData.germanLevel}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            <option value="">Chọn trình độ</option>
                            <option value="chua-hoc">Chưa học</option>
                            <option value="a1">A1</option>
                            <option value="a2">A2</option>
                            <option value="b1">B1</option>
                            <option value="b2">B2 trở lên</option>
                          </select>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Dự kiến thời gian bắt đầu
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="">Chọn thời gian</option>
                          <option value="ngay">Muốn bắt đầu ngay</option>
                          <option value="1-3-thang">Trong 1-3 tháng</option>
                          <option value="3-6-thang">Trong 3-6 tháng</option>
                          <option value="6-12-thang">Trong 6-12 tháng</option>
                          <option value="chua-xac-dinh">Chưa xác định</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Câu hỏi hoặc yêu cầu cụ thể
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Chia sẻ thêm về mục tiêu, thắc mắc của bạn..."
                          rows={4}
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-secondary hover:bg-secondary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Đang gửi..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Đăng ký tư vấn miễn phí
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        Bằng việc đăng ký, bạn đồng ý với{" "}
                        <Link href="#" className="text-primary hover:underline">
                          chính sách bảo mật
                        </Link>{" "}
                        của chúng tôi.
                      </p>
                    </form>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="order-1 lg:order-2 space-y-6">
                {/* Benefits */}
                <div className="bg-primary/5 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Bạn sẽ nhận được
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{benefit.title}</div>
                          <div className="text-sm text-gray-600">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hotline */}
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <Phone className="h-10 w-10 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-1">
                    Cần hỗ trợ ngay?
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Gọi hotline để được tư vấn trực tiếp
                  </p>
                  <a href="tel:0123456789">
                    <Button className="w-full bg-white text-secondary hover:bg-white/90">
                      0123 456 789
                    </Button>
                  </a>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 italic">
                    "Được tư vấn rất chi tiết và chuyên nghiệp. Nhờ DMF mà mình
                    đã chọn được con đường phù hợp và giờ đã sang Đức học Ausbildung."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Nguyễn Thị Mai</div>
                      <div className="text-xs text-gray-500">Du học sinh tại Berlin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Muốn đặt lịch hẹn cụ thể?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Chọn ngày giờ phù hợp để gặp trực tiếp hoặc tư vấn online với chuyên viên
              </p>
              <Link href="/dat-lich-tu-van">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Đặt lịch tư vấn ngay
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
