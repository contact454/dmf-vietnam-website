"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarDays,
  Clock,
  CheckCircle2,
  MapPin,
  Video,
  Phone,
  User,
  ArrowRight,
  ArrowLeft,
  Shield,
  Star,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { submitForm } from "@/lib/submit-form";

const consultationModes = [
  {
    value: "office",
    label: "Tại văn phòng",
    description: "Gặp trực tiếp tại DMF Vietnam",
    icon: MapPin,
    address: "123 Đường ABC, Quận 1, TP.HCM"
  },
  {
    value: "online",
    label: "Online (Zoom/Google Meet)",
    description: "Tư vấn qua video call",
    icon: Video,
    address: "Link họp sẽ được gửi qua email"
  },
  {
    value: "phone",
    label: "Qua điện thoại",
    description: "Chuyên viên gọi điện tư vấn",
    icon: Phone,
    address: "Tiện lợi và nhanh chóng"
  }
];

const timeSlots = [
  { value: "09:00", label: "09:00" },
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" },
  { value: "17:00", label: "17:00" },
  { value: "18:00", label: "18:00" },
  { value: "19:00", label: "19:00" }
];

const consultants = [
  {
    id: "any",
    name: "Bất kỳ chuyên viên",
    role: "Chuyên viên phù hợp nhất",
    specialty: "Tất cả lĩnh vực"
  },
  {
    id: "nguyen-thi-f",
    name: "Nguyễn Thị F",
    role: "Tư vấn viên Du học nghề",
    specialty: "Ausbildung - Y tế, Khách sạn"
  },
  {
    id: "tran-van-g",
    name: "Trần Văn G",
    role: "Tư vấn viên Du học ĐH",
    specialty: "Du học đại học - Kỹ thuật, CNTT"
  },
  {
    id: "le-thi-h",
    name: "Lê Thị H",
    role: "Chuyên viên Visa",
    specialty: "Hồ sơ visa du học"
  }
];

// Generate next 14 days for date selection
const generateDates = () => {
  const dates = [];
  const today = new Date();

  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Skip Sundays
    if (date.getDay() === 0) continue;

    dates.push({
      value: date.toISOString().split('T')[0],
      day: date.getDate(),
      weekday: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][date.getDay()],
      month: date.getMonth() + 1
    });
  }

  return dates.slice(0, 10);
};

export default function BookConsultationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mode: "",
    date: "",
    time: "",
    consultant: "any",
    name: "",
    phone: "",
    email: "",
    topic: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const dates = generateDates();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitForm("booking", formData);
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Không thể gửi lịch hẹn. Vui lòng thử lại."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const canProceedStep1 = formData.mode !== "";
  const canProceedStep2 = formData.date !== "" && formData.time !== "";
  const canProceedStep3 = formData.name !== "" && formData.phone !== "";

  const selectedDate = dates.find(d => d.value === formData.date);
  const selectedMode = consultationModes.find(m => m.value === formData.mode);
  const selectedConsultant = consultants.find(c => c.id === formData.consultant);

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main>
          <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[80vh] flex items-center">
            <div className="container-dmf">
              <div className="max-w-xl mx-auto">
                <div className="bg-green-50 rounded-2xl p-8 lg:p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Đặt lịch thành công!
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Chúng tôi đã nhận được lịch hẹn của bạn và sẽ gửi xác nhận qua email/SMS.
                  </p>

                  {/* Booking Summary */}
                  <div className="bg-white rounded-xl p-6 text-left mb-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Thông tin lịch hẹn</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Hình thức:</span>
                        <span className="font-medium text-gray-900">{selectedMode?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Ngày:</span>
                        <span className="font-medium text-gray-900">
                          {selectedDate?.weekday}, {selectedDate?.day}/{selectedDate?.month}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Giờ:</span>
                        <span className="font-medium text-gray-900">{formData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Chuyên viên:</span>
                        <span className="font-medium text-gray-900">{selectedConsultant?.name}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                      <Button variant="outline">
                        Về trang chủ
                      </Button>
                    </Link>
                    <Link href="/khoa-hoc-tieng-duc">
                      <Button className="bg-primary hover:bg-primary/90">
                        Xem khóa học
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <CalendarDays className="h-4 w-4" />
                Đặt lịch tư vấn
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chọn lịch hẹn
                <span className="text-primary"> phù hợp</span>
              </h1>
              <p className="text-lg text-gray-600">
                Đặt lịch để gặp trực tiếp hoặc tư vấn online với chuyên viên DMF
              </p>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 border-b border-gray-200">
          <div className="container-dmf">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between">
                {[
                  { num: 1, label: "Hình thức" },
                  { num: 2, label: "Thời gian" },
                  { num: 3, label: "Thông tin" }
                ].map((s, index) => (
                  <div key={s.num} className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        step >= s.num
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                      )}>
                        {step > s.num ? <CheckCircle2 className="h-5 w-5" /> : s.num}
                      </div>
                      <span className={cn(
                        "text-sm font-medium hidden sm:block",
                        step >= s.num ? "text-gray-900" : "text-gray-500"
                      )}>
                        {s.label}
                      </span>
                    </div>
                    {index < 2 && (
                      <div className={cn(
                        "w-16 sm:w-24 h-0.5 mx-2 sm:mx-4",
                        step > s.num ? "bg-primary" : "bg-gray-200"
                      )} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 lg:py-16">
          <div className="container-dmf">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Mode Selection */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Chọn hình thức tư vấn
                    </h2>
                    <div className="space-y-4">
                      {consultationModes.map((mode) => (
                        <label
                          key={mode.value}
                          className={cn(
                            "flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all",
                            formData.mode === mode.value
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                        >
                          <input
                            type="radio"
                            name="mode"
                            value={mode.value}
                            checked={formData.mode === mode.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            formData.mode === mode.value
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-gray-500"
                          )}>
                            <mode.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{mode.label}</div>
                            <div className="text-sm text-gray-500 mb-1">{mode.description}</div>
                            <div className="text-xs text-gray-400">{mode.address}</div>
                          </div>
                          <div className={cn(
                            "w-5 h-5 rounded-full border-2 flex-shrink-0",
                            formData.mode === mode.value
                              ? "border-primary bg-primary"
                              : "border-gray-300"
                          )}>
                            {formData.mode === mode.value && (
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            )}
                          </div>
                        </label>
                      ))}
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!canProceedStep1}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Tiếp tục
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time Selection */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Chọn ngày và giờ
                    </h2>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Chọn ngày <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                        {dates.map((date) => (
                          <label
                            key={date.value}
                            className={cn(
                              "flex flex-col items-center p-2 rounded-lg border cursor-pointer transition-all",
                              formData.date === date.value
                                ? "border-primary bg-primary text-white"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            <input
                              type="radio"
                              name="date"
                              value={date.value}
                              checked={formData.date === date.value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className={cn(
                              "text-xs",
                              formData.date === date.value ? "text-white/80" : "text-gray-500"
                            )}>
                              {date.weekday}
                            </span>
                            <span className="text-lg font-bold">{date.day}</span>
                            <span className={cn(
                              "text-xs",
                              formData.date === date.value ? "text-white/80" : "text-gray-400"
                            )}>
                              T{date.month}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Chọn giờ <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.map((slot) => (
                          <label
                            key={slot.value}
                            className={cn(
                              "flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition-all",
                              formData.time === slot.value
                                ? "border-primary bg-primary text-white"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            <input
                              type="radio"
                              name="time"
                              value={slot.value}
                              checked={formData.time === slot.value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">{slot.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Consultant Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Chọn chuyên viên (tùy chọn)
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {consultants.map((consultant) => (
                          <label
                            key={consultant.id}
                            className={cn(
                              "flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all",
                              formData.consultant === consultant.id
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                          >
                            <input
                              type="radio"
                              name="consultant"
                              value={consultant.id}
                              checked={formData.consultant === consultant.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                              formData.consultant === consultant.id
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-500"
                            )}>
                              <User className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">{consultant.name}</div>
                              <div className="text-xs text-gray-500">{consultant.specialty}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Quay lại
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!canProceedStep2}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Tiếp tục
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Info */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Thông tin liên hệ
                    </h2>

                    {/* Summary */}
                    <div className="bg-primary/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          {selectedMode && <selectedMode.icon className="h-4 w-4 text-primary" />}
                          <span>{selectedMode?.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-primary" />
                          <span>{selectedDate?.weekday}, {selectedDate?.day}/{selectedDate?.month}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{formData.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nhập họ và tên"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0123 456 789"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Chủ đề muốn tư vấn
                      </label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="german-course">Khóa học tiếng Đức</option>
                        <option value="ausbildung">Du học nghề (Ausbildung)</option>
                        <option value="university">Du học đại học</option>
                        <option value="settlement">Định cư Đức</option>
                        <option value="visa">Thủ tục Visa</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ghi chú thêm
                      </label>
                      <Textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Câu hỏi hoặc yêu cầu cụ thể của bạn..."
                        rows={3}
                      />
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(2)}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Quay lại
                      </Button>
                      <Button
                        type="submit"
                        disabled={!canProceedStep3 || isSubmitting}
                        className="bg-secondary hover:bg-secondary/90"
                      >
                        {isSubmitting ? (
                          "Đang xác nhận..."
                        ) : (
                          <>
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Xác nhận đặt lịch
                          </>
                        )}
                      </Button>
                    </div>

                    {submitError && (
                      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {submitError}
                      </div>
                    )}

                    <p className="text-xs text-gray-500 text-center">
                      Bằng việc đặt lịch, bạn đồng ý với{" "}
                      <Link href="#" className="text-primary hover:underline">
                        chính sách bảo mật
                      </Link>{" "}
                      của chúng tôi.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Tại sao nên đặt lịch tư vấn?
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hoàn toàn miễn phí</h3>
                  <p className="text-sm text-gray-600">
                    Không phát sinh chi phí cho buổi tư vấn đầu tiên
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Chuyên viên giàu kinh nghiệm</h3>
                  <p className="text-sm text-gray-600">
                    Đội ngũ tư vấn am hiểu thị trường Đức
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tư vấn cá nhân hóa</h3>
                  <p className="text-sm text-gray-600">
                    Lộ trình được thiết kế riêng cho bạn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
