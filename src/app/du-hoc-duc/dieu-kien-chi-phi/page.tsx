import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Briefcase,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Điều kiện & Chi phí Du học Đức | DMF Vietnam",
  description: "Thông tin chi tiết về điều kiện và chi phí du học Đức. So sánh du học nghề và du học đại học. Tư vấn miễn phí.",
};

const ausbildungRequirements = [
  { item: "Độ tuổi", value: "18 - 35 tuổi" },
  { item: "Học vấn", value: "Tốt nghiệp THPT hoặc tương đương" },
  { item: "Tiếng Đức", value: "B1 (một số ngành B2)" },
  { item: "Sức khỏe", value: "Đủ sức khỏe để làm việc" },
  { item: "Hồ sơ", value: "Không tiền án, tiền sự" }
];

const universityRequirements = [
  { item: "Độ tuổi", value: "Không giới hạn" },
  { item: "Học vấn", value: "THPT (GPA 7.0+) hoặc ĐH năm 1" },
  { item: "Tiếng Đức", value: "B2/C1 hoặc IELTS 6.0+ (tiếng Anh)" },
  { item: "Tài chính", value: "Chứng minh 11.208€/năm" },
  { item: "Studienkolleg", value: "Có thể cần học dự bị 1 năm" }
];

const ausbildungCosts = [
  { category: "Tại Việt Nam", items: [
    { item: "Học tiếng Đức (A1-B1)", amount: "30-50 triệu", note: "6-9 tháng" },
    { item: "Phí dịch vụ tư vấn", amount: "30-50 triệu", note: "Tùy gói dịch vụ" },
    { item: "Hồ sơ, dịch thuật, công chứng", amount: "5-10 triệu", note: "" },
    { item: "Lệ phí visa", amount: "~2 triệu", note: "75€" },
    { item: "Vé máy bay", amount: "15-25 triệu", note: "Một chiều" },
    { item: "Bảo hiểm du lịch", amount: "1-2 triệu", note: "3 tháng đầu" }
  ]},
  { category: "Tại Đức", items: [
    { item: "Chi phí ban đầu", amount: "1.500-2.500€", note: "Thuê nhà, đặt cọc, đi lại" },
    { item: "Lương Ausbildung", amount: "+800 đến +1.200€/tháng", note: "Thu nhập hàng tháng", positive: true }
  ]}
];

const universityCosts = [
  { category: "Tại Việt Nam", items: [
    { item: "Học tiếng Đức (A1-B2)", amount: "50-80 triệu", note: "9-12 tháng" },
    { item: "Phí dịch vụ tư vấn", amount: "20-40 triệu", note: "Tùy gói dịch vụ" },
    { item: "Hồ sơ, dịch thuật, công chứng", amount: "5-10 triệu", note: "" },
    { item: "Lệ phí visa", amount: "~2 triệu", note: "75€" },
    { item: "Vé máy bay", amount: "15-25 triệu", note: "Một chiều" }
  ]},
  { category: "Tại Đức", items: [
    { item: "Tài khoản phong tỏa", amount: "11.208€/năm", note: "Yêu cầu visa" },
    { item: "Học phí (ĐH công)", amount: "150-300€/kỳ", note: "Chỉ phí hành chính" },
    { item: "Bảo hiểm y tế", amount: "110€/tháng", note: "Bắt buộc" },
    { item: "Nhà ở", amount: "300-600€/tháng", note: "Tùy thành phố" },
    { item: "Sinh hoạt", amount: "200-400€/tháng", note: "Ăn, đi lại, cá nhân" },
    { item: "Làm thêm", amount: "+450 đến +600€/tháng", note: "20h/tuần", positive: true }
  ]}
];

const documents = {
  common: [
    "Hộ chiếu còn hạn ít nhất 6 tháng",
    "Bằng tốt nghiệp THPT (bản gốc + công chứng)",
    "Học bạ THPT (bản gốc + công chứng)",
    "Chứng chỉ tiếng Đức (Goethe/ÖSD/TestDaF)",
    "Sơ yếu lý lịch (CV tiếng Đức)",
    "Thư động lực (Motivationsschreiben)",
    "Ảnh hộ chiếu 3.5x4.5cm",
    "Giấy khám sức khỏe"
  ],
  ausbildung: [
    "Hợp đồng Ausbildung từ doanh nghiệp Đức",
    "Giấy xác nhận vị trí từ Berufsschule"
  ],
  university: [
    "Thư mời nhập học (Zulassung)",
    "Chứng minh tài chính (tài khoản phong tỏa)",
    "Bảo hiểm y tế"
  ]
};

const timeline = [
  {
    phase: "Chuẩn bị",
    duration: "1-2 tháng",
    tasks: [
      "Tư vấn và đánh giá hồ sơ",
      "Xác định chương trình phù hợp",
      "Lên kế hoạch học tiếng Đức"
    ]
  },
  {
    phase: "Học tiếng Đức",
    duration: "6-12 tháng",
    tasks: [
      "Học A1 → B1/B2",
      "Thi lấy chứng chỉ",
      "Chuẩn bị hồ sơ song song"
    ]
  },
  {
    phase: "Nộp hồ sơ",
    duration: "2-4 tháng",
    tasks: [
      "Tìm vị trí Ausbildung / ĐH",
      "Phỏng vấn (nếu có)",
      "Nhận thư mời"
    ]
  },
  {
    phase: "Xin visa",
    duration: "1-3 tháng",
    tasks: [
      "Hoàn thiện hồ sơ visa",
      "Đặt lịch hẹn tại ĐSQ",
      "Phỏng vấn visa"
    ]
  },
  {
    phase: "Sang Đức",
    duration: "Sau khi có visa",
    tasks: [
      "Đặt vé máy bay",
      "Chuẩn bị hành lý",
      "Ổn định cuộc sống"
    ]
  }
];

export default function RequirementsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/du-hoc-duc" className="hover:text-primary">Du học Đức</Link>
              <span>/</span>
              <span className="text-gray-900">Điều kiện & Chi phí</span>
            </nav>

            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <FileText className="h-4 w-4" />
                Thông tin chi tiết
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Điều kiện & Chi phí
                <span className="text-primary"> Du học Đức</span>
              </h1>
              <p className="text-lg text-gray-600">
                Tổng hợp đầy đủ thông tin về điều kiện, chi phí và hồ sơ cần thiết
                cho chương trình du học nghề (Ausbildung) và du học đại học tại Đức.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements Comparison */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                So sánh điều kiện
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ausbildung */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-secondary p-6">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Du học nghề (Ausbildung)</h3>
                      <p className="text-white/80">Vừa học vừa làm, được trả lương</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {ausbildungRequirements.map((req, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600">{req.item}</span>
                        <span className="font-semibold text-gray-900">{req.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/du-hoc-duc/du-hoc-nghe"
                    className="mt-6 inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                  >
                    Tìm hiểu thêm <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* University */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-primary p-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Du học đại học</h3>
                      <p className="text-white/80">Học phí thấp, bằng cấp quốc tế</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {universityRequirements.map((req, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600">{req.item}</span>
                        <span className="font-semibold text-gray-900">{req.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/du-hoc-duc/du-hoc-dai-hoc"
                    className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Tìm hiểu thêm <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Costs Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Chi phí chi tiết
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dự toán chi phí cho từng chương trình du học
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ausbildung Costs */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Chi phí Ausbildung</h3>
                </div>

                {ausbildungCosts.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      {section.category}
                    </h4>
                    <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-4">
                          <div>
                            <div className="font-medium text-gray-900">{item.item}</div>
                            {item.note && <div className="text-sm text-gray-500">{item.note}</div>}
                          </div>
                          <div className={`font-semibold ${item.positive ? 'text-green-600' : 'text-gray-900'}`}>
                            {item.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="bg-secondary/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <strong>Tổng chi phí trước khi đi:</strong> 80 - 140 triệu VNĐ
                      <br />
                      Sau khi sang Đức, bạn tự túc từ lương Ausbildung.
                    </div>
                  </div>
                </div>
              </div>

              {/* University Costs */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Chi phí Du học ĐH</h3>
                </div>

                {universityCosts.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      {section.category}
                    </h4>
                    <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-4">
                          <div>
                            <div className="font-medium text-gray-900">{item.item}</div>
                            {item.note && <div className="text-sm text-gray-500">{item.note}</div>}
                          </div>
                          <div className={`font-semibold ${item.positive ? 'text-green-600' : 'text-gray-900'}`}>
                            {item.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="bg-primary/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <strong>Tổng chi phí năm đầu:</strong> ~400 - 500 triệu VNĐ
                      <br />
                      (Bao gồm tài khoản phong tỏa, được rút dần hàng tháng)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Hồ sơ cần chuẩn bị
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Common Documents */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Hồ sơ chung (cả 2 chương trình)
                </h3>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {documents.common.map((doc, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Ausbildung Documents */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-secondary" />
                    Thêm cho Ausbildung
                  </h3>
                  <div className="bg-secondary/5 rounded-xl border border-secondary/20 p-6">
                    {documents.ausbildung.map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 mb-3 last:mb-0">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* University Documents */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Thêm cho Du học ĐH
                  </h3>
                  <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
                    {documents.university.map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 mb-3 last:mb-0">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lộ trình thời gian
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Từ khi bắt đầu đến khi sang Đức (trung bình 12-18 tháng)
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {timeline.map((phase, index) => (
                  <div key={index} className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-4" />
                      )}
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-gray-200">
          <div className="container-dmf">
            <div className="flex items-center justify-between">
              <Link
                href="/du-hoc-duc/du-hoc-dai-hoc"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Du học đại học
              </Link>
              <Link
                href="/du-hoc-duc"
                className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Tổng quan du học Đức
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Cần tư vấn chi tiết hơn?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Đội ngũ tư vấn DMF sẵn sàng hỗ trợ bạn đánh giá hồ sơ và lên kế hoạch cụ thể
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Đăng ký tư vấn miễn phí
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Gọi hotline: 0123 456 789
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
