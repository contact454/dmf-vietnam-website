"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageIcon, User, Building2, FileText } from "lucide-react";

type PlaceholderType = "default" | "avatar" | "logo" | "blog";

interface ImagePlaceholderProps {
  src?: string | null;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  type?: PlaceholderType;
  fallbackText?: string;
  className?: string;
  placeholderClassName?: string;
  priority?: boolean;
}

const placeholderConfig: Record<
  PlaceholderType,
  {
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
  }
> = {
  default: {
    icon: ImageIcon,
    gradient: "from-primary/20 via-secondary/10 to-primary/5",
  },
  avatar: {
    icon: User,
    gradient: "from-primary/20 to-secondary/20",
  },
  logo: {
    icon: Building2,
    gradient: "from-muted/50 to-muted/30",
  },
  blog: {
    icon: FileText,
    gradient: "from-primary/10 via-secondary/5 to-primary/10",
  },
};

/**
 * ImagePlaceholder Component
 *
 * Hiển thị ảnh với fallback placeholder đẹp khi ảnh chưa có.
 * Nhân viên chỉ cần upload ảnh vào đúng đường dẫn và component sẽ tự động hiển thị.
 *
 * @example
 * // Avatar (testimonial)
 * <ImagePlaceholder
 *   src="/images/testimonials/student-1.webp"
 *   alt="Nguyễn Văn A"
 *   type="avatar"
 *   fallbackText="N"
 *   width={100}
 *   height={100}
 *   className="rounded-full"
 * />
 *
 * @example
 * // Blog thumbnail
 * <ImagePlaceholder
 *   src="/images/blog/article-1.webp"
 *   alt="Bài viết về Ausbildung"
 *   type="blog"
 *   fill
 *   className="rounded-xl"
 * />
 *
 * @example
 * // Partner logo
 * <ImagePlaceholder
 *   src="/images/partners/tu-munich.svg"
 *   alt="TU München"
 *   type="logo"
 *   width={200}
 *   height={80}
 * />
 */
export function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  fill = false,
  type = "default",
  fallbackText,
  className,
  placeholderClassName,
  priority = false,
}: ImagePlaceholderProps) {
  const config = placeholderConfig[type];
  const Icon = config.icon;

  // Check if image source is valid (not null, undefined, or placeholder path)
  const hasValidSrc = src && !src.includes("placeholder") && src.trim() !== "";

  // Common container classes
  const containerClasses = cn(
    "relative overflow-hidden",
    fill ? "absolute inset-0" : "",
    className
  );

  if (hasValidSrc) {
    return (
      <div className={containerClasses}>
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          className={cn("object-cover", fill ? "w-full h-full" : "")}
          onError={(e) => {
            // Hide broken image and show placeholder
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const placeholder = target.nextElementSibling;
            if (placeholder) {
              (placeholder as HTMLElement).style.display = "flex";
            }
          }}
        />
        {/* Hidden placeholder shown on error */}
        <div
          className={cn(
            "hidden absolute inset-0 bg-gradient-to-br items-center justify-center",
            config.gradient,
            placeholderClassName
          )}
        >
          {fallbackText ? (
            <span className="text-xl font-bold text-primary">
              {fallbackText}
            </span>
          ) : (
            <Icon className="w-1/4 h-1/4 text-muted-foreground/50" />
          )}
        </div>
      </div>
    );
  }

  // Render placeholder
  return (
    <div
      className={cn(
        containerClasses,
        "bg-gradient-to-br flex items-center justify-center",
        config.gradient,
        placeholderClassName
      )}
      style={!fill ? { width, height } : undefined}
    >
      {fallbackText ? (
        <span
          className={cn(
            "font-bold text-primary",
            type === "avatar" ? "text-xl" : "text-2xl"
          )}
        >
          {fallbackText}
        </span>
      ) : (
        <Icon
          className={cn(
            "text-muted-foreground/40",
            type === "avatar" ? "w-1/3 h-1/3" : "w-1/4 h-1/4"
          )}
        />
      )}
    </div>
  );
}

/**
 * Utility: Lấy chữ cái đầu từ tên
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Image dimensions config for consistent sizing
 */
export const IMAGE_DIMENSIONS = {
  // Avatars
  avatarSm: { width: 40, height: 40 },
  avatarMd: { width: 64, height: 64 },
  avatarLg: { width: 100, height: 100 },
  avatarXl: { width: 150, height: 150 },

  // Thumbnails
  thumbnailSm: { width: 200, height: 150 },
  thumbnailMd: { width: 400, height: 300 },
  thumbnailLg: { width: 600, height: 450 },

  // Blog
  blogThumb: { width: 800, height: 450 },
  blogFeatured: { width: 1200, height: 675 },

  // Partner logos
  partnerLogo: { width: 200, height: 80 },

  // Hero
  heroDesktop: { width: 1920, height: 1080 },
  heroMobile: { width: 768, height: 1024 },

  // Course
  courseThumb: { width: 400, height: 300 },

  // Team
  teamPhoto: { width: 400, height: 400 },
  teamLarge: { width: 600, height: 800 },
} as const;
