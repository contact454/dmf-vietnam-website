"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ImagePlaceholder,
  getInitials,
  IMAGE_DIMENSIONS,
} from "@/components/shared/image-placeholder";
import { VideoCard } from "@/components/shared/video-popup";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  program: string;
  image: string;
  quote: string;
  rating: number;
}

// Placeholder testimonials - replace with real data from client
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    role: "Du học sinh Ausbildung",
    program: "Điều dưỡng - Berlin",
    image: "/images/testimonials/student-1.webp",
    quote:
      "Nhờ DMF, em đã đỗ B1 chỉ sau 8 tháng học và nhận được visa du học nghề. Giảng viên rất tận tâm, phương pháp học hiệu quả. Em rất biết ơn thầy cô đã đồng hành cùng em!",
    rating: 5,
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    role: "Sinh viên Đại học",
    program: "CNTT - Munich",
    image: "/images/testimonials/student-2.webp",
    quote:
      "Từ một người không biết gì về tiếng Đức, sau 1 năm học tại DMF, em đã đạt B2 và được nhận vào TU Munich. Cảm ơn DMF đã giúp em biến ước mơ thành hiện thực!",
    rating: 5,
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    role: "Du học sinh Ausbildung",
    program: "Khách sạn - Hamburg",
    image: "/images/testimonials/student-3.webp",
    quote:
      "Quy trình hỗ trợ visa của DMF rất chuyên nghiệp. Chỉ sau 3 tuần nộp hồ sơ, em đã nhận được visa. Giờ em đang học nghề khách sạn tại Hamburg và rất hài lòng!",
    rating: 5,
  },
  {
    id: 4,
    name: "Phạm Đức Anh",
    role: "Kỹ sư tại Đức",
    program: "Cơ khí - Stuttgart",
    image: "/images/testimonials/student-4.webp",
    quote:
      "Tôi đã học tiếng Đức tại DMF cách đây 5 năm. Giờ tôi đã có công việc ổn định tại một công ty ô tô lớn ở Stuttgart. DMF là bước đệm quan trọng cho sự nghiệp của tôi.",
    rating: 5,
  },
  {
    id: 5,
    name: "Võ Thanh Tâm",
    role: "Du học sinh Đại học",
    program: "Y khoa - Heidelberg",
    image: "/images/testimonials/student-5.webp",
    quote:
      "Lớp học nhỏ, giảng viên người Đức bản ngữ, tài liệu chuẩn. Đó là những gì em tìm kiếm và DMF đã đáp ứng hoàn hảo. Em đang theo học Y khoa tại Heidelberg!",
    rating: 5,
  },
];

// Video testimonials - placeholder data
const videoTestimonials = [
  {
    id: 1,
    title: "Hành trình du học nghề của Minh Anh",
    description: "Từ A1 đến B1 trong 8 tháng",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "/images/testimonials/video-thumb-1.webp",
  },
  {
    id: 2,
    title: "Trải nghiệm học tại TU Munich",
    description: "Sinh viên CNTT tại Đức",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "/images/testimonials/video-thumb-2.webp",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-full p-6 md:p-8 bg-background rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
      {/* Quote icon */}
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
          <Quote className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Quote text */}
      <blockquote className="text-foreground leading-relaxed mb-6 min-h-[120px]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Rating */}
      <div className="mb-6">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <ImagePlaceholder
          src={testimonial.image}
          alt={testimonial.name}
          type="avatar"
          fallbackText={getInitials(testimonial.name)}
          {...IMAGE_DIMENSIONS.avatarMd}
          className="rounded-full flex-shrink-0"
        />
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-primary font-medium">
            {testimonial.program}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/20 overflow-hidden">
      <div className="container-dmf">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            Học viên nói gì về DMF
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Câu chuyện <span className="text-gradient">thành công</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hàng nghìn học viên đã tin tưởng và đồng hành cùng DMF. Đây là những
            chia sẻ từ các bạn đã chinh phục ước mơ nước Đức.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-xl border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors" />
              <CarouselNext className="static translate-y-0 h-12 w-12 rounded-xl border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors" />
            </div>
          </Carousel>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border/50 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-primary">
                    {String.fromCharCode(64 + i)}
                  </span>
                </div>
              ))}
            </div>
            <span>
              <strong className="text-foreground">2000+</strong> học viên đã
              thành công
            </span>
          </div>
        </motion.div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
              <Play className="h-4 w-4" />
              Video Testimonials
            </div>
            <h3 className="text-2xl font-bold">Xem câu chuyện thực tế</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videoTestimonials.map((video) => (
              <VideoCard
                key={video.id}
                videoUrl={video.videoUrl}
                thumbnailUrl={video.thumbnailUrl}
                title={video.title}
                description={video.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
