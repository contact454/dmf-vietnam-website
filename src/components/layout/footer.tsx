import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Youtube, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  courses: {
    title: "Khóa học tiếng Đức",
    links: [
      { label: "Tiếng Đức A1", href: "/khoa-hoc-tieng-duc/a1" },
      { label: "Tiếng Đức A2", href: "/khoa-hoc-tieng-duc/a2" },
      { label: "Tiếng Đức B1", href: "/khoa-hoc-tieng-duc/b1" },
      { label: "Tiếng Đức B2", href: "/khoa-hoc-tieng-duc/b2" },
    ],
  },
  studyAbroad: {
    title: "Du học Đức",
    links: [
      { label: "Du học nghề (Ausbildung)", href: "/du-hoc-duc/du-hoc-nghe" },
      { label: "Du học đại học", href: "/du-hoc-duc/du-hoc-dai-hoc" },
      { label: "Điều kiện & Chi phí", href: "/du-hoc-duc/dieu-kien-chi-phi" },
    ],
  },
  company: {
    title: "Về DMF",
    links: [
      { label: "Giới thiệu", href: "/ve-chung-toi" },
      { label: "Đội ngũ giảng viên", href: "/ve-chung-toi/doi-ngu" },
      { label: "Thành tích học viên", href: "/ve-chung-toi/thanh-tich" },
      { label: "Tin tức", href: "/tin-tuc" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
  },
  support: {
    title: "Hỗ trợ",
    links: [
      { label: "Câu hỏi thường gặp", href: "/faq" },
      { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
      { label: "Điều khoản sử dụng", href: "/dieu-khoan-su-dung" },
    ],
  },
};

const contactInfo = {
  phone: "0123 456 789",
  email: "info@dmf.edu.vn",
  address: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh",
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/dmfvietnam", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@dmfvietnam", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter section */}
      <div className="bg-primary">
        <div className="container-dmf py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Đăng ký nhận tin tức mới nhất
              </h3>
              <p className="text-primary-foreground/80">
                Cập nhật thông tin du học, học bổng và cơ hội nghề nghiệp tại Đức
              </p>
            </div>
            <form className="flex w-full max-w-md gap-3">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
              <Button
                type="submit"
                variant="secondary"
                className="shrink-0 gap-2"
              >
                <Send className="h-4 w-4" />
                Đăng ký
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-dmf section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="DMF Vietnam"
                width={150}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              DMF Vietnam - Trung tâm tư vấn du học Đức và đào tạo tiếng Đức hàng đầu.
              Chúng tôi đồng hành cùng bạn trên con đường chinh phục nước Đức.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="h-5 w-5 text-secondary" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="h-5 w-5 text-secondary" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-semibold text-white mb-4">{footerLinks.courses.title}</h3>
            <ul className="space-y-3">
              {footerLinks.courses.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{footerLinks.studyAbroad.title}</h3>
            <ul className="space-y-3">
              {footerLinks.studyAbroad.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mb-4 mt-8">{footerLinks.support.title}</h3>
            <ul className="space-y-3">
              {footerLinks.support.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{footerLinks.company.title}</h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom bar */}
      <div className="container-dmf py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} DMF Vietnam. Tất cả quyền được bảo lưu.</p>
          <p>
            Thiết kế bởi{" "}
            <a
              href="https://dmf.edu.vn"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              DMF Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
