"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, CheckCircle, Building2 } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: StatItem[] = [
  { value: 10, suffix: "+", label: "Năm kinh nghiệm", icon: Award },
  { value: 2000, suffix: "+", label: "Học viên thành công", icon: Users },
  { value: 98, suffix: "%", label: "Tỷ lệ đậu visa", icon: CheckCircle },
  { value: 50, suffix: "+", label: "Đối tác tại Đức", icon: Building2 },
];

function useCounter(end: number, duration: number = 2, isInView: boolean) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimeRef.current) / (duration * 1000),
        1
      );

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      countRef.current = Math.floor(easeOutQuart * end);
      setCount(countRef.current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, isInView]);

  return count;
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: StatItem;
  index: number;
  isInView: boolean;
}) {
  const count = useCounter(stat.value, 2, isInView);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="flex flex-col items-center text-center p-6 md:p-8">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-7 w-7 text-primary" />
        </div>

        {/* Counter */}
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {count.toLocaleString()}
          <span className="text-secondary">{stat.suffix}</span>
        </div>

        {/* Label */}
        <div className="text-sm md:text-base text-muted-foreground font-medium">
          {stat.label}
        </div>
      </div>

      {/* Divider - show on all except last */}
      {index < stats.length - 1 && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
      )}
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 bg-gradient-to-b from-background to-muted/30"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-dmf relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thành tích nổi bật của{" "}
            <span className="text-gradient">DMF Vietnam</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hơn một thập kỷ đồng hành cùng hàng nghìn học viên chinh phục ước mơ
            du học và định cư tại Đức
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="bg-background rounded-3xl shadow-lg border border-border/50 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
