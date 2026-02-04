"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Plane, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

// Service images - upload to /public/images/services/
const services = [
  {
    icon: BookOpen,
    title: "Khóa học tiếng Đức",
    description:
      "Học tiếng Đức từ A1 đến B2 với giáo trình chuẩn châu Âu. Giảng viên bản ngữ, lớp học nhỏ, cam kết đầu ra.",
    href: "/khoa-hoc-tieng-duc",
    colorClass: "text-[oklch(0.55_0.18_250)]",
    bgColorClass: "bg-[oklch(0.95_0.03_250)]",
    image: "/images/services/german-class.webp",
  },
  {
    icon: GraduationCap,
    title: "Du học nghề (Ausbildung)",
    description:
      "Vừa học vừa làm tại Đức, được trả lương và có cơ hội định cư sau khi tốt nghiệp. Hơn 300 ngành nghề.",
    href: "/du-hoc-duc/du-hoc-nghe",
    colorClass: "text-[oklch(0.60_0.12_175)]",
    bgColorClass: "bg-[oklch(0.95_0.03_175)]",
    image: "/images/services/ausbildung.webp",
  },
  {
    icon: Plane,
    title: "Du học đại học",
    description:
      "Học tại các trường đại học công lập Đức miễn học phí. Chương trình tiếng Anh và tiếng Đức.",
    href: "/du-hoc-duc/du-hoc-dai-hoc",
    colorClass: "text-[oklch(0.55_0.15_300)]",
    bgColorClass: "bg-[oklch(0.95_0.03_300)]",
    image: "/images/services/university.webp",
  },
  {
    icon: Building2,
    title: "Định cư Đức",
    description:
      "Tư vấn các con đường định cư tại Đức: du học, làm việc, thành lập doanh nghiệp, đoàn tụ gia đình.",
    href: "/dinh-cu-duc",
    colorClass: "text-secondary",
    bgColorClass: "bg-secondary/10",
    image: "/images/services/germany-city.webp",
  },
];

export function ServicesSection() {
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
            Dịch vụ của chúng tôi
          </span>
          <h2 className="mt-2 mb-4">
            Giải pháp toàn diện cho hành trình{" "}
            <span className="text-gradient">chinh phục nước Đức</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Từ học tiếng Đức đến du học và định cư, DMF đồng hành cùng bạn
            trong mọi bước của hành trình.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-soft group cursor-pointer border-0 overflow-hidden">
                {/* Service image */}
                <div className="relative h-48 overflow-hidden">
                  <ImagePlaceholder
                    src={service.image}
                    alt={service.title}
                    fill
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.bgColorClass} flex items-center justify-center shadow-lg`}
                    >
                      <service.icon className={`h-6 w-6 ${service.colorClass}`} />
                    </div>
                  </div>
                </div>
                <CardHeader className="pt-4 pb-2">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-0">
                  <CardDescription className="text-base mb-6 flex-1">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="justify-start p-0 h-auto hover:bg-transparent group/btn cursor-pointer"
                    asChild
                  >
                    <Link href={service.href} className={service.colorClass}>
                      <span className="group-hover/btn:mr-2 transition-all">Tìm hiểu thêm</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
