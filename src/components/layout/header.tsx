"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { ChevronDown, Globe, GraduationCap, BookOpen, Users, Phone, FileText, HelpCircle, Briefcase, Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

// Types
interface NavLink {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

interface NavSection {
  label: string;
  href?: string;
  links: NavLink[];
  featured?: {
    title: string;
    description: string;
    href: string;
    cta: string;
  };
}

// Navigation Data
const aboutLinks: NavLink[] = [
  {
    title: "Giới thiệu DMF",
    href: "/ve-chung-toi",
    icon: Building,
    description: "Tìm hiểu về sứ mệnh và tầm nhìn của chúng tôi",
  },
  {
    title: "Đội ngũ chuyên gia",
    href: "/ve-chung-toi/doi-ngu",
    icon: Users,
    description: "Gặp gỡ các chuyên gia tư vấn giàu kinh nghiệm",
  },
  {
    title: "Liên hệ",
    href: "/lien-he",
    icon: Phone,
    description: "Kết nối với chúng tôi ngay hôm nay",
  },
];

const programLinks: NavLink[] = [
  {
    title: "Tiếng Đức A1",
    href: "/khoa-hoc-tieng-duc/a1",
    icon: BookOpen,
    description: "Bắt đầu hành trình với tiếng Đức cơ bản",
  },
  {
    title: "Tiếng Đức A2",
    href: "/khoa-hoc-tieng-duc/a2",
    icon: BookOpen,
    description: "Nâng cao kỹ năng giao tiếp hàng ngày",
  },
  {
    title: "Tiếng Đức B1",
    href: "/khoa-hoc-tieng-duc/b1",
    icon: GraduationCap,
    description: "Trình độ trung cấp, đủ điều kiện du học",
  },
  {
    title: "Tiếng Đức B2",
    href: "/khoa-hoc-tieng-duc/b2",
    icon: GraduationCap,
    description: "Thành thạo tiếng Đức chuyên nghiệp",
  },
];

const serviceLinks: NavLink[] = [
  {
    title: "Du học nghề (Ausbildung)",
    href: "/du-hoc-duc/du-hoc-nghe",
    icon: Briefcase,
    description: "Vừa học vừa làm, được trả lương hấp dẫn",
  },
  {
    title: "Du học đại học",
    href: "/du-hoc-duc/du-hoc-dai-hoc",
    icon: GraduationCap,
    description: "Học phí thấp, bằng cấp quốc tế",
  },
  {
    title: "Định cư Đức",
    href: "/dinh-cu-duc",
    icon: MapPin,
    description: "Lộ trình định cư an toàn và bền vững",
  },
];

const infoLinks: NavLink[] = [
  {
    title: "Điều kiện & Chi phí",
    href: "/du-hoc-duc/dieu-kien-chi-phi",
    icon: FileText,
    description: "Thông tin chi tiết về yêu cầu và học phí",
  },
  {
    title: "Cuộc sống tại Đức",
    href: "/thong-tin-huu-ich/cuoc-song-tai-duc",
    icon: Globe,
    description: "Khám phá văn hóa và đời sống Đức",
  },
  {
    title: "Câu hỏi thường gặp",
    href: "/thong-tin-huu-ich/faq",
    icon: HelpCircle,
    description: "Giải đáp mọi thắc mắc của bạn",
  },
];

const navSections: NavSection[] = [
  {
    label: "Về DMF",
    links: aboutLinks,
    featured: {
      title: "Tư vấn miễn phí",
      description: "Đặt lịch tư vấn 1-1 với chuyên gia của chúng tôi ngay hôm nay",
      href: "/tu-van-mien-phi",
      cta: "Đặt lịch ngay",
    },
  },
  {
    label: "Khóa học tiếng Đức",
    href: "/khoa-hoc-tieng-duc",
    links: programLinks,
  },
  {
    label: "Du học & Định cư",
    links: serviceLinks,
    featured: {
      title: "Ausbildung 2025",
      description: "Chương trình du học nghề được yêu thích nhất với hơn 500+ học viên",
      href: "/du-hoc-duc/du-hoc-nghe",
      cta: "Tìm hiểu thêm",
    },
  },
  {
    label: "Thông tin hữu ích",
    links: infoLinks,
  },
];

// Custom hook for scroll detection
function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

// List Item Component for Mega Menu
function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & NavLink) {
  return (
    <NavigationMenuLink
      className={cn(
        "flex w-full flex-row gap-x-3 rounded-lg p-3",
        "transition-colors duration-200",
        "hover:bg-gray-50 focus:bg-gray-50",
        "data-[active=true]:bg-gray-50",
        "outline-none cursor-pointer",
        className
      )}
      {...props}
      asChild
    >
      <Link href={href}>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-sm font-semibold text-gray-900">{title}</span>
          {description && (
            <span className="text-xs text-gray-500 line-clamp-1">{description}</span>
          )}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

// Mobile Menu Component
interface MobileMenuProps {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}

function MobileMenu({ open, children, className }: MobileMenuProps) {
  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-x-0 top-16 bottom-0 z-40 bg-white/95 backdrop-blur-lg",
        "flex flex-col overflow-hidden border-t border-gray-200 lg:hidden"
      )}
    >
      <div
        className={cn(
          "flex-1 overflow-y-auto p-4",
          "animate-in slide-in-from-top-2 duration-200",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

// Mobile Accordion Section
interface MobileAccordionProps {
  label: string;
  links: NavLink[];
  onLinkClick: () => void;
}

function MobileAccordion({ label, links, onLinkClick }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-base font-semibold text-gray-900">{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <div className="space-y-1 pl-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onLinkClick}
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50"
            >
              <link.icon className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium text-gray-900">{link.title}</p>
                {link.description && (
                  <p className="text-xs text-gray-500">{link.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Header Component
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScroll(10);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-white"
      )}
    >
      <nav className="container-dmf">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="DMF Vietnam"
              width={120}
              height={48}
              className="h-10 lg:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {navSections.map((section, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent px-3 py-2 text-[14px] font-medium",
                        "text-gray-700 hover:text-gray-900",
                        "hover:bg-transparent focus:bg-transparent",
                        "data-[state=open]:bg-transparent data-[state=open]:text-primary"
                      )}
                    >
                      {section.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white">
                      <div
                        className={cn(
                          "p-4",
                          section.featured ? "w-[540px]" : "w-[380px]"
                        )}
                      >
                        <div
                          className={cn(
                            section.featured ? "grid grid-cols-5 gap-4" : ""
                          )}
                        >
                          {/* Links Column */}
                          <ul
                            className={cn(
                              "space-y-1",
                              section.featured ? "col-span-3" : ""
                            )}
                          >
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <ListItem {...link} />
                              </li>
                            ))}
                          </ul>

                          {/* Featured Card */}
                          {section.featured && (
                            <div className="col-span-2 flex flex-col">
                              <div className="flex-1 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/10 p-4 flex flex-col justify-between">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    {section.featured.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {section.featured.description}
                                  </p>
                                </div>
                                <Link
                                  href={section.featured.href}
                                  className="mt-3 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                  {section.featured.cta}
                                  <ChevronDown className="ml-1 h-3 w-3 -rotate-90" />
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom Link */}
                        {section.href && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <Link
                              href={section.href}
                              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              Xem tất cả {section.label.toLowerCase()} →
                            </Link>
                          </div>
                        )}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {/* Blog Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/tin-tuc"
                      className={cn(
                        "inline-flex h-10 items-center justify-center px-3 py-2",
                        "text-[14px] font-medium text-gray-700",
                        "hover:text-gray-900 transition-colors cursor-pointer"
                      )}
                    >
                      Tin tức
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side: Language & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer">
              <Image
                src="/images/flags/vn.svg"
                alt="Vietnamese"
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span className="text-sm font-medium">VI</span>
              <ChevronDown className="h-3 w-3" />
            </button>

            {/* CTA Button */}
            <Button className="bg-secondary text-white hover:bg-secondary/90 font-semibold cursor-pointer">
              Đăng ký tư vấn
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={isMobileMenuOpen} className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={isMobileMenuOpen}>
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="flex-1">
            {navSections.map((section, index) => (
              <MobileAccordion
                key={index}
                label={section.label}
                links={section.links}
                onLinkClick={closeMobileMenu}
              />
            ))}

            {/* Blog Link */}
            <Link
              href="/tin-tuc"
              onClick={closeMobileMenu}
              className="flex items-center py-4 text-base font-semibold text-gray-900 border-b border-gray-100"
            >
              Tin tức
            </Link>
          </div>

          {/* Mobile Footer */}
          <div className="mt-auto pt-4 pb-8 space-y-3">
            {/* Language Selector */}
            <button className="flex items-center gap-2 w-full p-3 rounded-lg bg-gray-50">
              <Image
                src="/images/flags/vn.svg"
                alt="Vietnamese"
                width={24}
                height={18}
                className="rounded-sm"
              />
              <span className="text-sm font-medium text-gray-700">Tiếng Việt</span>
              <ChevronDown className="h-4 w-4 text-gray-500 ml-auto" />
            </button>

            {/* CTA Button */}
            <Button className="w-full bg-secondary text-white hover:bg-secondary/90 font-semibold h-12">
              Đăng ký tư vấn miễn phí
            </Button>
          </div>
        </div>
      </MobileMenu>
    </header>
  );
}
