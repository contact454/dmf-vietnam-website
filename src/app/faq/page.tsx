import Link from "next/link";
import { PageShell } from "@/components/layout";
import { ChevronRight, HelpCircle, MessageCircle } from "lucide-react";

const faqItems = [
  {
    question: "DMF có hỗ trợ tư vấn miễn phí không?",
    answer:
      "Có. Bạn có thể đăng ký tại trang tư vấn miễn phí hoặc đặt lịch 1-1 với chuyên viên.",
  },
  {
    question: "Mất bao lâu để nhận phản hồi sau khi gửi form?",
    answer:
      "Đội ngũ DMF phản hồi trong vòng 24 giờ làm việc qua điện thoại hoặc email.",
  },
  {
    question: "Mình chưa biết tiếng Đức có thể tham gia lộ trình du học nghề không?",
    answer:
      "Có thể. DMF sẽ tư vấn lộ trình học tiếng Đức từ đầu (A1 đến B1/B2) trước khi nộp hồ sơ.",
  },
  {
    question: "DMF có hỗ trợ hồ sơ visa và chuẩn bị phỏng vấn không?",
    answer:
      "Có. Chúng tôi đồng hành từ bước chuẩn bị hồ sơ, luyện phỏng vấn đến khi bạn nhập học/nhập nghề.",
  },
];

export default function FAQPage() {
  return (
    <PageShell>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <HelpCircle className="h-4 w-4" />
                Hỗ trợ
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Câu hỏi thường gặp
              </h1>
              <p className="text-lg text-gray-600">
                Các thắc mắc phổ biến về khóa học tiếng Đức, du học nghề và du học đại học tại Đức.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h2>
                  <p className="text-gray-600">{item.answer}</p>
                </article>
              ))}
            </div>
            <div className="max-w-4xl mx-auto mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Không thấy câu trả lời phù hợp?</h3>
                <p className="text-gray-600">Gửi câu hỏi cho đội ngũ DMF để được tư vấn trực tiếp.</p>
              </div>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Liên hệ ngay
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
