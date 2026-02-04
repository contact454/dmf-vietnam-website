"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigation = {
  about: {
    label: "Về DMF",
    href: "/ve-chung-toi",
    items: [
      { label: "Giới thiệu", href: "/ve-chung-toi", description: "Tìm hiểu về DMF Vietnam" },
      { label: "Đội ngũ", href: "/ve-chung-toi/doi-ngu", description: "Đội ngũ chuyên gia tư vấn" },
      { label: "Liên hệ", href: "/lien-he", description: "Thông tin liên hệ" },
    ],
  },
  programs: {
    label: "Chương trình học",
    href: "/chuong-trinh-hoc",
    items: [
      { label: "Tiếng Đức A1", href: "/khoa-hoc-tieng-duc/a1", description: "Dành cho người mới bắt đầu" },
      { label: "Tiếng Đức A2", href: "/khoa-hoc-tieng-duc/a2", description: "Giao tiếp cơ bản" },
      { label: "Tiếng Đức B1", href: "/khoa-hoc-tieng-duc/b1", description: "Trình độ trung cấp" },
      { label: "Tiếng Đức B2", href: "/khoa-hoc-tieng-duc/b2", description: "Trình độ nâng cao" },
    ],
  },
  services: {
    label: "Dịch vụ",
    href: "/dich-vu",
    items: [
      { label: "Du học nghề (Ausbildung)", href: "/du-hoc-duc/du-hoc-nghe", description: "Vừa học vừa làm, được trả lương" },
      { label: "Du học đại học", href: "/du-hoc-duc/du-hoc-dai-hoc", description: "Học phí thấp, chất lượng cao" },
      { label: "Định cư Đức", href: "/dinh-cu-duc", description: "Các lộ trình định cư" },
    ],
  },
  info: {
    label: "Thông tin hữu ích",
    href: "/thong-tin-huu-ich",
    items: [
      { label: "Điều kiện & Chi phí", href: "/du-hoc-duc/dieu-kien-chi-phi", description: "Thông tin chi tiết" },
      { label: "Cuộc sống tại Đức", href: "/thong-tin-huu-ich/cuoc-song-tai-duc", description: "Tìm hiểu văn hóa Đức" },
      { label: "Câu hỏi thường gặp", href: "/thong-tin-huu-ich/faq", description: "FAQ" },
    ],
  },
  blog: { label: "Blog", href: "/tin-tuc" },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled && "shadow-sm border-b border-border"
      )}
    >
      {/* Main navigation */}
      <nav className="container-dmf">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="DMF Vietnam"
              width={120}
              height={48}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Về DMF dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-600 hover:text-gray-900 hover:bg-transparent data-[state=open]:bg-transparent">
                    {navigation.about.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2 border border-gray-200 rounded bg-white shadow-lg">
                      {navigation.about.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded px-3 py-2 text-[13px] text-gray-600 no-underline outline-none transition-colors hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Chương trình học dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-600 hover:text-gray-900 hover:bg-transparent data-[state=open]:bg-transparent">
                    {navigation.programs.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2 border border-gray-200 rounded bg-white shadow-lg">
                      {navigation.programs.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded px-3 py-2 text-[13px] text-gray-600 no-underline outline-none transition-colors hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Dịch vụ dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-600 hover:text-gray-900 hover:bg-transparent data-[state=open]:bg-transparent">
                    {navigation.services.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[220px] p-2 border border-gray-200 rounded bg-white shadow-lg">
                      {navigation.services.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded px-3 py-2 text-[13px] text-gray-600 no-underline outline-none transition-colors hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Thông tin hữu ích dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-600 hover:text-gray-900 hover:bg-transparent data-[state=open]:bg-transparent">
                    {navigation.info.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2 border border-gray-200 rounded bg-white shadow-lg">
                      {navigation.info.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded px-3 py-2 text-[13px] text-gray-600 no-underline outline-none transition-colors hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Blog - simple link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href={navigation.blog.href}
                      className="inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 focus:outline-none cursor-pointer"
                    >
                      {navigation.blog.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Language selector and CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
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
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 cursor-pointer">
              Đăng ký tư vấn
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {/* Mobile navigation items */}
                <div className="space-y-4">
                  <div>
                    <Link
                      href={navigation.about.href}
                      className="font-semibold text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {navigation.about.label}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {navigation.about.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={navigation.programs.href}
                      className="font-semibold text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {navigation.programs.label}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {navigation.programs.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={navigation.services.href}
                      className="font-semibold text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {navigation.services.label}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {navigation.services.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={navigation.info.href}
                      className="font-semibold text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {navigation.info.label}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {navigation.info.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={navigation.blog.href}
                    className="font-semibold text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {navigation.blog.label}
                  </Link>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-secondary text-secondary-foreground cursor-pointer">
                    Đăng ký tư vấn
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
