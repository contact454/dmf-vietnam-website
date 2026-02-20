import { PageShell } from "@/components/layout";

const terms = [
  {
    title: "1. Phạm vi áp dụng",
    content:
      "Điều khoản này áp dụng cho toàn bộ người dùng truy cập website DMF và sử dụng các biểu mẫu đăng ký tư vấn, đặt lịch, liên hệ.",
  },
  {
    title: "2. Trách nhiệm người dùng",
    content:
      "Bạn cần cung cấp thông tin trung thực, chính xác và chịu trách nhiệm với dữ liệu đã gửi qua hệ thống.",
  },
  {
    title: "3. Nội dung website",
    content:
      "Thông tin trên website phục vụ mục đích tham khảo và định hướng. Tùy từng hồ sơ cụ thể, tư vấn chính thức sẽ được xác nhận bởi chuyên viên DMF.",
  },
  {
    title: "4. Sở hữu trí tuệ",
    content:
      "Toàn bộ nội dung, thiết kế, thương hiệu và tài nguyên số trên website thuộc quyền sở hữu của DMF hoặc đối tác cấp phép hợp pháp.",
  },
  {
    title: "5. Thay đổi điều khoản",
    content:
      "DMF có quyền cập nhật điều khoản sử dụng để phù hợp với vận hành thực tế và quy định pháp luật hiện hành.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Điều khoản sử dụng
              </h1>
              <p className="text-lg text-gray-600">
                Cập nhật lần cuối: 20/02/2026. Vui lòng đọc kỹ trước khi sử dụng dịch vụ trên website DMF.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="max-w-4xl mx-auto space-y-6">
              {terms.map((term) => (
                <article key={term.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{term.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{term.content}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
    </PageShell>
  );
}
