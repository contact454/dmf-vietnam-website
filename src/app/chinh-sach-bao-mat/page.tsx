import { PageShell } from "@/components/layout";

const sections = [
  {
    title: "1. Thông tin chúng tôi thu thập",
    content:
      "DMF thu thập các thông tin bạn chủ động cung cấp qua biểu mẫu như họ tên, số điện thoại, email và nhu cầu tư vấn để phục vụ việc hỗ trợ học tập/du học.",
  },
  {
    title: "2. Mục đích sử dụng",
    content:
      "Thông tin được dùng để liên hệ tư vấn, chăm sóc học viên và cải thiện chất lượng dịch vụ. Chúng tôi không bán thông tin cá nhân cho bên thứ ba.",
  },
  {
    title: "3. Lưu trữ và bảo mật",
    content:
      "Dữ liệu được lưu trữ trên hệ thống quản trị nội bộ hoặc nền tảng CRM của DMF với quyền truy cập được giới hạn cho nhân sự có thẩm quyền.",
  },
  {
    title: "4. Chia sẻ thông tin",
    content:
      "DMF chỉ chia sẻ dữ liệu khi cần thiết để xử lý hồ sơ hoặc theo yêu cầu của cơ quan nhà nước có thẩm quyền theo quy định pháp luật.",
  },
  {
    title: "5. Quyền của người dùng",
    content:
      "Bạn có thể yêu cầu cập nhật, chỉnh sửa hoặc xóa thông tin cá nhân bằng cách liên hệ DMF qua hotline hoặc email hỗ trợ.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chính sách bảo mật
              </h1>
              <p className="text-lg text-gray-600">
                Cập nhật lần cuối: 20/02/2026. DMF cam kết bảo vệ dữ liệu cá nhân của bạn.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="max-w-4xl mx-auto space-y-6">
              {sections.map((section) => (
                <article key={section.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
    </PageShell>
  );
}
