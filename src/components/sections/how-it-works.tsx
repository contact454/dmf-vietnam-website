"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardCheck,
  MessageCircle,
  FileText,
  Plane,
  CheckCircle2,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Đăng ký tư vấn",
    description:
      "Điền thông tin để được tư vấn miễn phí về lộ trình học tiếng Đức và du học phù hợp với bạn.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Tư vấn 1:1",
    description:
      "Chuyên viên DMF sẽ liên hệ để tìm hiểu mục tiêu, đánh giá năng lực và đề xuất chương trình phù hợp.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Học tiếng Đức & Chuẩn bị hồ sơ",
    description:
      "Tham gia khóa học tiếng Đức từ A1-B2. Đồng thời chuẩn bị hồ sơ du học với sự hỗ trợ toàn diện.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Xin visa & Lên đường",
    description:
      "DMF hỗ trợ hoàn thiện hồ sơ visa, phỏng vấn và chuẩn bị hành trang trước khi sang Đức.",
    icon: Plane,
  },
];

function StepCard({
  step,
  index,
  isInView,
  isLast,
}: {
  step: Step;
  index: number;
  isInView: boolean;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      {/* Desktop: Connecting line */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            className="h-full bg-gradient-to-r from-primary to-primary/30 origin-left"
          />
          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: index * 0.15 + 0.6 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1"
          >
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </motion.div>
        </div>
      )}

      {/* Mobile: Connecting line */}
      {!isLast && (
        <div className="md:hidden absolute left-10 top-20 w-0.5 h-[calc(100%-40px)]">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            className="h-full bg-gradient-to-b from-primary to-primary/30 origin-top"
          />
        </div>
      )}

      <div className="flex md:flex-col items-start md:items-center md:text-center gap-6 md:gap-4">
        {/* Step number and icon */}
        <div className="relative flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20"
          >
            <Icon className="h-8 w-8 text-white" />
          </motion.div>
          {/* Step number badge */}
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shadow-md">
            {step.number}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 md:mt-4">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs mx-auto">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-dmf">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Quy trình đơn giản
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            4 bước để <span className="text-gradient">chinh phục nước Đức</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Từ bước đầu đăng ký đến khi đặt chân đến Đức, DMF đồng hành cùng bạn
            trong suốt hành trình
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isInView={isInView}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Sẵn sàng bắt đầu hành trình?
          </p>
          <a
            href="/lien-he"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <ClipboardCheck className="h-5 w-5" />
            Đăng ký tư vấn ngay
          </a>
        </motion.div>
      </div>
    </section>
  );
}
