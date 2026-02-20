import Link from "next/link";
import { PageShell } from "@/components/layout";
import { Award, Users, Globe, ArrowRight } from "lucide-react";

const achievements = [
  {
    metric: "10,000+",
    label: "Lượt tư vấn",
    icon: Users,
    description: "Đồng hành cùng học viên trên toàn quốc trong hành trình học tập và du học Đức.",
  },
  {
    metric: "98%",
    label: "Mức hài lòng",
    icon: Award,
    description: "Phản hồi tích cực về chất lượng tư vấn, lộ trình và hỗ trợ hồ sơ.",
  },
  {
    metric: "50+",
    label: "Đối tác tại Đức",
    icon: Globe,
    description: "Mạng lưới trường học và đối tác nghề nghiệp hỗ trợ cơ hội học tập thực tế.",
  },
];

export default function AchievementPage() {
  return (
    <PageShell>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Thành tích học viên
              </h1>
              <p className="text-lg text-gray-600">
                Kết quả thực tế từ hành trình đào tạo tiếng Đức và tư vấn du học của DMF Vietnam.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((item) => (
                <article key={item.label} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{item.metric}</div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.label}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Bắt đầu lộ trình của bạn cùng DMF</h3>
                <p className="text-gray-600">Đăng ký tư vấn miễn phí để nhận kế hoạch phù hợp với mục tiêu của bạn.</p>
              </div>
              <Link
                href="/tu-van-mien-phi"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90 transition-colors"
              >
                Tư vấn miễn phí
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
