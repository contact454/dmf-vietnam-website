import Link from "next/link";
import { PageShell } from "@/components/layout";
import { Home, Bus, Landmark, ArrowRight } from "lucide-react";

const guideCards = [
  {
    title: "Nhà ở và chi phí sinh hoạt",
    description:
      "Tổng quan mức thuê nhà, bảo hiểm, ăn uống và cách tối ưu ngân sách khi mới sang Đức.",
    icon: Home,
  },
  {
    title: "Di chuyển và giao thông",
    description:
      "Hướng dẫn sử dụng phương tiện công cộng, thẻ tháng và các mẹo tiết kiệm chi phí đi lại.",
    icon: Bus,
  },
  {
    title: "Văn hóa và quy định cơ bản",
    description:
      "Những quy tắc quan trọng trong học tập, làm việc và giao tiếp để hòa nhập nhanh tại Đức.",
    icon: Landmark,
  },
];

export default function GermanyLifePage() {
  return (
    <PageShell>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Cuộc sống tại Đức
              </h1>
              <p className="text-lg text-gray-600">
                Hành trang thực tế giúp bạn chuẩn bị tốt hơn trước khi học tập và làm việc tại Đức.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="grid md:grid-cols-3 gap-6">
              {guideCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h2>
                  <p className="text-gray-600">{card.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Bạn cần tư vấn lộ trình cá nhân?</h3>
                <p className="text-gray-600">Đặt lịch với chuyên viên DMF để được hướng dẫn chi tiết theo hồ sơ.</p>
              </div>
              <Link
                href="/dat-lich-tu-van"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-white hover:bg-secondary/90 transition-colors"
              >
                Đặt lịch ngay
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
