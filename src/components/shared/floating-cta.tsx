"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 mb-2 w-64 bg-white rounded-2xl shadow-soft-lg border border-border/50 overflow-hidden"
              >
                <div className="p-4 bg-primary text-white">
                  <h3 className="font-semibold">Bạn cần hỗ trợ?</h3>
                  <p className="text-sm text-white/80">Chúng tôi sẵn sàng tư vấn</p>
                </div>
                <div className="p-3 space-y-2">
                  <Link
                    href="/tu-van-mien-phi"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Tư vấn miễn phí</div>
                      <div className="text-xs text-muted-foreground">Gửi yêu cầu tư vấn</div>
                    </div>
                  </Link>
                  <Link
                    href="/dat-lich-tu-van"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Đặt lịch tư vấn</div>
                      <div className="text-xs text-muted-foreground">Chọn thời gian phù hợp</div>
                    </div>
                  </Link>
                  <a
                    href="tel:0123456789"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Gọi hotline</div>
                      <div className="text-xs text-muted-foreground">0123 456 789</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            size="lg"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
              isExpanded
                ? "bg-muted-foreground hover:bg-muted-foreground/90"
                : "bg-secondary hover:bg-secondary/90"
            }`}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          {/* Pulse animation when not expanded */}
          {!isExpanded && (
            <span className="absolute inset-0 rounded-full animate-ping bg-secondary/30 pointer-events-none" />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
