"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon?: LucideIcon;
  content: React.ReactNode;
}

interface ServiceTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function ServiceTabs({ tabs, defaultTab, className }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Navigation */}
      <div className="relative mb-8">
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/50 rounded-2xl">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors duration-200",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-xl shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4" />}
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Vertical tabs variant for sidebar layouts
interface VerticalTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function VerticalServiceTabs({
  tabs,
  defaultTab,
  className,
}: VerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={cn("grid lg:grid-cols-[280px_1fr] gap-8", className)}>
      {/* Sidebar Navigation */}
      <div className="space-y-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
              <span>{tab.label}</span>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeVerticalTab"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-secondary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          {activeContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Icon tabs - horizontal with icons only on mobile
interface IconTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function IconTabs({ tabs, defaultTab, className }: IconTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-1 p-1.5 bg-muted/50 rounded-2xl">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="activeIconTab"
                    className="absolute inset-0 bg-primary rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {Icon && <Icon className="h-5 w-5" />}
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {activeContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
