"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPopupProps {
  videoUrl?: string;
  thumbnailUrl?: string;
  title?: string;
}

export function VideoPopup({
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  thumbnailUrl,
  title = "Video testimonial",
}: VideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Play button trigger */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="group relative w-16 h-16 rounded-full bg-primary/90 hover:bg-primary text-white shadow-lg hover:scale-110 transition-all duration-300"
      >
        <Play className="h-6 w-6 ml-1" fill="currentColor" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/30 pointer-events-none" />
      </Button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-4 md:inset-12 lg:inset-24 z-50 flex items-center justify-center"
            >
              <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="h-5 w-5" />
                </Button>

                {/* Video embed */}
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`${videoUrl}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Standalone video card with thumbnail and play button
interface VideoCardProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  description?: string;
}

export function VideoCard({
  videoUrl,
  thumbnailUrl,
  title,
  description,
}: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-300"
      >
        {/* Thumbnail */}
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
            <Play className="h-6 w-6 text-primary ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-white font-semibold">{title}</h4>
          {description && (
            <p className="text-white/80 text-sm mt-1">{description}</p>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-4 md:inset-12 lg:inset-24 z-50 flex items-center justify-center"
            >
              <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="relative w-full aspect-video">
                  <iframe
                    src={`${videoUrl}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
