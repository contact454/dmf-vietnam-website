"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Youtube,
  CheckCircle2,
  ArrowRight,
  Users,
  GraduationCap,
  Briefcase,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    details: ["123 Đường ABC, Phường XYZ", "Quận 1, TP. Hồ Chí Minh"],
    action: {
      label: "Xem bản đồ",
      href: "https://maps.google.com"
    }
  },
  {
    icon: Phone,
    title: "Điện thoại",
    details: ["Hotline: 0123 456 789", "Zalo: 0123 456 789"],
    action: {
      label: "Gọi ngay",
      href: "tel:0123456789"
    }
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@dmf.edu.vn", "tuyensinh@dmf.edu.vn"],
    action: {
      label: "Gửi email",
      href: "mailto:info@dmf.edu.vn"
    }
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    details: ["Thứ 2 - Thứ 7: 8:00 - 20:00", "Chủ nhật: 8:00 - 17:00"],
    action: null
  }
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/dmfvietnam", color: "bg-blue-600" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/dmfvietnam", color: "bg-red-600" },
  { icon: MessageCircle, label: "Zalo", href: "https://zalo.me/dmfvietnam", color: "bg-blue-500" }
];

const inquiryTypes = [
  { value: "german-course", label: "Khóa học tiếng Đức", icon: GraduationCap },
  { value: "ausbildung", label: "Du học nghề (Ausbildung)", icon: Briefcase },
  { value: "university", label: "Du học đại học", icon: GraduationCap },
  { value: "settlement", label: "Định cư Đức", icon: Users },
  { value: "other", label: "Khác", icon: HelpCircle }
];

const faqs = [
  {
    question: "Làm sao để đăng ký học tiếng Đức?",
    answer: "Bạn có thể đăng ký trực tiếp tại văn phòng, gọi hotline 0123 456 789, hoặc điền form trên website. Chúng tôi sẽ liên hệ tư vấn trong vòng 24h."
  },
  {
    question: "Có được học thử miễn phí không?",
    answer: "Có, DMF cung cấp 1 buổi học thử miễn phí cho các khóa tiếng Đức. Liên hệ để đặt lịch học thử."
  },
  {
    question: "Chi phí tư vấn du học là bao nhiêu?",
    answer: "Buổi tư vấn đầu tiên hoàn toàn miễn phí. Chi phí dịch vụ tư vấn du học sẽ được thông báo cụ thể sau khi đánh giá hồ sơ."
  },
  {
    question: "Thời gian phản hồi là bao lâu?",
    answer: "Chúng tôi cam kết phản hồi trong vòng 24h làm việc qua điện thoại hoặc email."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageCircle className="h-4 w-4" />
                Liên hệ
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Liên hệ với
                <span className="text-primary"> DMF Vietnam</span>
              </h1>
              <p className="text-lg text-gray-600">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí
                về các khóa học tiếng Đức và chương trình du học.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-8">
          <div className="container-dmf">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-600">{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary font-medium hover:gap-2 gap-1 transition-all"
                    >
                      {info.action.label}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content: Form + Map */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Gửi yêu cầu tư vấn
                </h2>
                <p className="text-gray-600 mb-8">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ bạn trong vòng 24h.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Gửi thành công!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24h.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          inquiryType: "",
                          message: ""
                        });
                      }}
                      variant="outline"
                    >
                      Gửi yêu cầu khác
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        Bạn quan tâm đến <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {inquiryTypes.map((type) => (
                          <label
                            key={type.value}
                            className={cn(
                              "flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all",
                              formData.inquiryType === type.value
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            <input
                              type="radio"
                              name="inquiryType"
                              value={type.value}
                              checked={formData.inquiryType === type.value}
                              onChange={handleChange}
                              className="sr-only"
                              required
                            />
                            <type.icon className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{type.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nội dung tin nhắn
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Nhập nội dung bạn muốn tư vấn..."
                        rows={4}
                      />
                    </div>

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
                          Gửi yêu cầu tư vấn
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Bằng việc gửi form, bạn đồng ý với{" "}
                      <Link href="#" className="text-primary hover:underline">
                        chính sách bảo mật
                      </Link>{" "}
                      của chúng tôi.
                    </p>
                  </form>
                )}
              </div>

              {/* Map & Social */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Vị trí văn phòng
                </h2>
                <p className="text-gray-600 mb-8">
                  Ghé thăm văn phòng DMF Vietnam để được tư vấn trực tiếp.
                </p>

                {/* Map placeholder */}
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-8">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary/50 mx-auto mb-2" />
                      <p className="text-gray-500">Bản đồ Google Maps</p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline"
                      >
                        Xem trên Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Kết nối với chúng tôi</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center text-white transition-transform hover:scale-105",
                          social.color
                        )}
                        title={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
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

        {/* Quick Contact CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Cần hỗ trợ ngay?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Gọi hotline để được tư vấn trực tiếp với chuyên viên của chúng tôi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0123456789">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto">
                    <Phone className="h-4 w-4 mr-2" />
                    Gọi 0123 456 789
                  </Button>
                </a>
                <a href="https://zalo.me/0123456789" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat qua Zalo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
