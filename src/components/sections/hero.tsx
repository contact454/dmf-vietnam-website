"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

// Diamond images - upload to /public/images/hero/
// Each image should have a solid color background matching the design
const diamondImages = [
  {
    src: "/images/hero/student-top.webp",
    alt: "Học viên DMF",
    position: "top",
    bgColor: "bg-amber-400" // Yellow/Orange background
  },
  {
    src: "/images/hero/student-left.webp",
    alt: "Du học sinh với laptop",
    position: "left",
    bgColor: "bg-emerald-500" // Green background
  },
  {
    src: "/images/hero/student-right.webp",
    alt: "Sinh viên tại Đức",
    position: "right",
    bgColor: "bg-purple-500" // Purple background
  },
  {
    src: "/images/hero/student-bottom.webp",
    alt: "Học viên thành công",
    position: "bottom",
    bgColor: "bg-rose-500" // Red/Pink background
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-12 lg:py-20 overflow-hidden">
      {/* Light blue background container with rounded corners */}
      <div className="container-dmf">
        <div className="relative bg-blue-50 rounded-[2rem] lg:rounded-[2.5rem] px-8 py-12 lg:px-16 lg:py-20 overflow-hidden">

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Column - Text & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-slate-800">Tương lai của bạn</span>
                <br />
                <span className="text-primary">vươn tầm thế giới</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Khám phá hơn 50+ trường đại học và cơ sở đào tạo nghề tại Đức.
                Tỷ lệ đậu visa 98%. Mở khóa tiềm năng của bạn cùng DMF Vietnam!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-base h-12 px-8 rounded-lg cursor-pointer"
                  asChild
                >
                  <Link href="/lien-he">
                    Đăng ký tư vấn miễn phí
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-8 mt-10 justify-center lg:justify-start"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-slate-500">Học viên thành công</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-slate-500">Tỷ lệ đậu visa</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-slate-500">Đối tác tại Đức</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Diamond Image Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] lg:h-[520px] hidden md:flex items-center justify-center"
            >
              {/* Diamond Grid Container */}
              <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">

                {/* Top Diamond */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]"
                >
                  <div
                    className={`relative w-full h-full rounded-3xl overflow-hidden shadow-xl transform rotate-45 ${diamondImages[0].bgColor}`}
                  >
                    <div className="absolute inset-0 transform -rotate-45 scale-[1.42]">
                      <ImagePlaceholder
                        src={diamondImages[0].src}
                        alt={diamondImages[0].alt}
                        fill
                        type="avatar"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Left Diamond */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute top-1/2 left-0 -translate-y-1/2 w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]"
                >
                  <div
                    className={`relative w-full h-full rounded-3xl overflow-hidden shadow-xl transform rotate-45 ${diamondImages[1].bgColor}`}
                  >
                    <div className="absolute inset-0 transform -rotate-45 scale-[1.42]">
                      <ImagePlaceholder
                        src={diamondImages[1].src}
                        alt={diamondImages[1].alt}
                        fill
                        type="avatar"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Right Diamond */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-1/2 right-0 -translate-y-1/2 w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]"
                >
                  <div
                    className={`relative w-full h-full rounded-3xl overflow-hidden shadow-xl transform rotate-45 ${diamondImages[2].bgColor}`}
                  >
                    <div className="absolute inset-0 transform -rotate-45 scale-[1.42]">
                      <ImagePlaceholder
                        src={diamondImages[2].src}
                        alt={diamondImages[2].alt}
                        fill
                        type="avatar"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Diamond */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]"
                >
                  <div
                    className={`relative w-full h-full rounded-3xl overflow-hidden shadow-xl transform rotate-45 ${diamondImages[3].bgColor}`}
                  >
                    <div className="absolute inset-0 transform -rotate-45 scale-[1.42]">
                      <ImagePlaceholder
                        src={diamondImages[3].src}
                        alt={diamondImages[3].alt}
                        fill
                        type="avatar"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Center decorative element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DMF</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Mobile Diamond Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:hidden mt-10 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px]">
              {/* Mobile - smaller diamond grid */}
              {diamondImages.map((image, index) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2", // top
                  "top-1/2 left-0 -translate-y-1/2", // left
                  "top-1/2 right-0 -translate-y-1/2", // right
                  "bottom-0 left-1/2 -translate-x-1/2", // bottom
                ];
                return (
                  <div
                    key={index}
                    className={`absolute ${positions[index]} w-[110px] h-[110px]`}
                  >
                    <div
                      className={`relative w-full h-full rounded-2xl overflow-hidden shadow-lg transform rotate-45 ${image.bgColor}`}
                    >
                      <div className="absolute inset-0 transform -rotate-45 scale-[1.42]">
                        <ImagePlaceholder
                          src={image.src}
                          alt={image.alt}
                          fill
                          type="avatar"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Center logo - mobile */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">DMF</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
