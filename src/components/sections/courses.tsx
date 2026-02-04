"use client";

import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Award, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

// Course images - upload to /public/images/courses/
const courses = [
  {
    level: "A1",
    title: "Tiếng Đức A1",
    subtitle: "Người mới bắt đầu",
    description: "Nền tảng giao tiếp cơ bản, làm quen với tiếng Đức từ con số 0",
    duration: "2-3 tháng",
    sessions: "60 buổi",
    price: "Liên hệ",
    features: ["Phát âm chuẩn", "Ngữ pháp cơ bản", "Từ vựng 500+ từ"],
    popular: false,
    href: "/khoa-hoc-tieng-duc/a1",
    image: "/images/courses/a1-beginner.webp",
  },
  {
    level: "A2",
    title: "Tiếng Đức A2",
    subtitle: "Giao tiếp cơ bản",
    description: "Giao tiếp trong các tình huống hàng ngày, mở rộng vốn từ",
    duration: "2-3 tháng",
    sessions: "60 buổi",
    price: "Liên hệ",
    features: ["Giao tiếp đời sống", "Viết email/thư", "Từ vựng 1000+ từ"],
    popular: false,
    href: "/khoa-hoc-tieng-duc/a2",
    image: "/images/courses/a2-elementary.webp",
  },
  {
    level: "B1",
    title: "Tiếng Đức B1",
    subtitle: "Trình độ trung cấp",
    description: "Đủ điều kiện xin visa du học, giao tiếp tự tin trong công việc",
    duration: "3-4 tháng",
    sessions: "80 buổi",
    price: "Liên hệ",
    features: ["Đủ điều kiện visa", "Giao tiếp công sở", "Từ vựng 2000+ từ"],
    popular: true,
    href: "/khoa-hoc-tieng-duc/b1",
    image: "/images/courses/b1-intermediate.webp",
  },
  {
    level: "B2",
    title: "Tiếng Đức B2",
    subtitle: "Trình độ nâng cao",
    description: "Thành thạo tiếng Đức, đủ điều kiện học đại học và làm việc",
    duration: "3-4 tháng",
    sessions: "80 buổi",
    price: "Liên hệ",
    features: ["Học đại học", "Làm việc chuyên môn", "Từ vựng 4000+ từ"],
    popular: false,
    href: "/khoa-hoc-tieng-duc/b2",
    image: "/images/courses/b2-advanced.webp",
  },
];

export function CoursesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-dmf">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Khóa học tiếng Đức
          </span>
          <h2 className="mt-2 mb-4">
            Chương trình đào tạo <span className="text-gradient">chuẩn châu Âu</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Lộ trình học rõ ràng từ A1 đến B2, cam kết đầu ra với chứng chỉ Goethe
            được công nhận toàn cầu.
          </p>
        </motion.div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full card-hover cursor-pointer relative overflow-hidden ${
                  course.popular ? "border-primary shadow-lg" : "border-0 shadow-md"
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-secondary text-secondary-foreground">
                      Phổ biến nhất
                    </Badge>
                  </div>
                )}

                {/* Course image */}
                <div className="relative h-40 overflow-hidden">
                  <ImagePlaceholder
                    src={course.image}
                    alt={course.title}
                    fill
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Level badge overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-white">{course.level}</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="text-center pb-2 pt-4">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.subtitle}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground text-center">
                    {course.description}
                  </p>

                  {/* Course info */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.sessions}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full cursor-pointer ${
                      course.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                    asChild
                  >
                    <Link href={course.href}>
                      Xem chi tiết
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="cursor-pointer" asChild>
            <Link href="/khoa-hoc-tieng-duc">
              Xem tất cả khóa học
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
