"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

// CTA background image - upload to /public/images/cta/
const CTA_BACKGROUND = "/images/cta/cta-background.webp";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={CTA_BACKGROUND}
          alt="Du học Đức cùng DMF"
          fill
          className="object-cover"
        />
        {/* Gradient overlay on top of image */}
        <div className="absolute inset-0 gradient-hero opacity-95" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-dmf relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              Bắt đầu hành trình của bạn ngay hôm nay
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sẵn sàng chinh phục{" "}
              <span className="text-secondary">nước Đức</span>?
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Đăng ký tư vấn miễn phí ngay hôm nay để được đội ngũ chuyên gia DMF
              hỗ trợ lên kế hoạch du học phù hợp nhất với bạn.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base h-14 px-8 cursor-pointer"
                asChild
              >
                <Link href="/lien-he">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Đăng ký tư vấn miễn phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base h-14 px-8 cursor-pointer"
                asChild
              >
                <a href="tel:+84123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Gọi ngay: 0123 456 789
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Tư vấn miễn phí 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Không ràng buộc</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Phản hồi trong 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
