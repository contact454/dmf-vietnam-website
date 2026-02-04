"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap, Award, Handshake } from "lucide-react";
import {
  ImagePlaceholder,
  IMAGE_DIMENSIONS,
} from "@/components/shared/image-placeholder";

interface Partner {
  id: number;
  name: string;
  category: "university" | "company" | "institution";
  logo?: string;
}

// Placeholder partners - replace with real data from client
const partners: Partner[] = [
  { id: 1, name: "TU München", category: "university", logo: "/images/partners/tu-munich.svg" },
  { id: 2, name: "Universität Heidelberg", category: "university", logo: "/images/partners/uni-heidelberg.svg" },
  { id: 3, name: "FU Berlin", category: "university", logo: "/images/partners/fu-berlin.svg" },
  { id: 4, name: "RWTH Aachen", category: "university", logo: "/images/partners/rwth-aachen.svg" },
  { id: 5, name: "Universität Hamburg", category: "university", logo: "/images/partners/uni-hamburg.svg" },
  { id: 6, name: "LMU München", category: "university", logo: "/images/partners/lmu-munich.svg" },
  { id: 7, name: "Goethe Institut", category: "institution", logo: "/images/partners/goethe-institut.svg" },
  { id: 8, name: "TestDaF Institut", category: "institution", logo: "/images/partners/testdaf.svg" },
  { id: 9, name: "Siemens", category: "company", logo: "/images/partners/siemens.svg" },
  { id: 10, name: "Bosch", category: "company", logo: "/images/partners/bosch.svg" },
  { id: 11, name: "Mercedes-Benz", category: "company", logo: "/images/partners/mercedes.svg" },
  { id: 12, name: "Deutsche Bahn", category: "company", logo: "/images/partners/deutsche-bahn.svg" },
];

const categories = [
  {
    key: "university",
    label: "Trường Đại học",
    icon: GraduationCap,
    count: partners.filter((p) => p.category === "university").length,
  },
  {
    key: "company",
    label: "Doanh nghiệp",
    icon: Building2,
    count: partners.filter((p) => p.category === "company").length,
  },
  {
    key: "institution",
    label: "Tổ chức",
    icon: Award,
    count: partners.filter((p) => p.category === "institution").length,
  },
];

function PartnerLogo({ partner, index }: { partner: Partner; index: number }) {
  const getCategoryIcon = () => {
    switch (partner.category) {
      case "university":
        return GraduationCap;
      case "company":
        return Building2;
      case "institution":
        return Award;
      default:
        return Handshake;
    }
  };

  const Icon = getCategoryIcon();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="group relative bg-background rounded-xl border border-border/50 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Logo */}
      <div className="flex flex-col items-center justify-center min-h-[80px] gap-3">
        {partner.logo ? (
          <ImagePlaceholder
            src={partner.logo}
            alt={partner.name}
            type="logo"
            {...IMAGE_DIMENSIONS.partnerLogo}
            className="grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <>
            <div className="w-12 h-12 rounded-xl bg-muted/50 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300">
              <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {partner.name}
            </span>
          </>
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

export function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-dmf">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Đối tác tin cậy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hợp tác với các{" "}
            <span className="text-gradient">tổ chức uy tín tại Đức</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DMF tự hào là đối tác của nhiều trường đại học, doanh nghiệp và tổ
            chức giáo dục hàng đầu tại Đức
          </p>
        </motion.div>

        {/* Category stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.key}
                className="flex items-center gap-3 px-4 py-2 bg-muted/50 rounded-full"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  <strong className="text-foreground">{category.count}+</strong>{" "}
                  <span className="text-muted-foreground">
                    {category.label}
                  </span>
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <PartnerLogo key={partner.id} partner={partner} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Bạn là doanh nghiệp hoặc tổ chức muốn hợp tác với DMF?
          </p>
          <a
            href="/lien-he"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <Handshake className="h-5 w-5" />
            Liên hệ hợp tác
            <span className="ml-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
