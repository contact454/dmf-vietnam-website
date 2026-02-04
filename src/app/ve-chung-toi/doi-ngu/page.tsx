import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Users,
  ArrowLeft,
  GraduationCap,
  Award,
  Globe,
  Linkedin,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "Đội ngũ DMF Vietnam | Giáo viên & Tư vấn viên",
  description: "Đội ngũ giáo viên tiếng Đức và tư vấn viên du học giàu kinh nghiệm tại DMF Vietnam.",
};

const leadership = [
  {
    name: "Nguyễn Văn A",
    role: "Giám đốc điều hành",
    bio: "Hơn 15 năm kinh nghiệm trong lĩnh vực giáo dục và tư vấn du học. Từng học tập và làm việc tại Đức 8 năm.",
    education: "Thạc sĩ Quản trị Kinh doanh - ĐH München",
    specialties: ["Chiến lược phát triển", "Quan hệ đối tác"]
  },
  {
    name: "Trần Thị B",
    role: "Giám đốc đào tạo",
    bio: "Chuyên gia đào tạo tiếng Đức với chứng chỉ DaF từ Goethe Institut. Đã đào tạo hơn 1000 học viên.",
    education: "Thạc sĩ Ngôn ngữ Đức - ĐH Heidelberg",
    specialties: ["Phương pháp giảng dạy", "Phát triển chương trình"]
  }
];

const teachers = [
  {
    name: "Lê Văn C",
    role: "Giáo viên tiếng Đức",
    level: "Giảng dạy A1-B2",
    experience: "8 năm kinh nghiệm",
    certifications: ["Goethe C2", "DaF Zertifikat"],
    bio: "Từng sống tại Berlin 5 năm, chuyên đào tạo học viên chuẩn bị du học nghề."
  },
  {
    name: "Phạm Thị D",
    role: "Giáo viên tiếng Đức",
    level: "Giảng dạy A1-B1",
    experience: "6 năm kinh nghiệm",
    certifications: ["Goethe C1", "ÖSD C1"],
    bio: "Phương pháp giảng dạy sinh động, tập trung vào giao tiếp thực tế."
  },
  {
    name: "Hoàng Văn E",
    role: "Giáo viên tiếng Đức",
    level: "Giảng dạy B1-B2",
    experience: "7 năm kinh nghiệm",
    certifications: ["TestDaF 5", "Goethe C2"],
    bio: "Chuyên luyện thi chứng chỉ Goethe và TestDaF, tỷ lệ đậu cao."
  },
  {
    name: "Maria Schmidt",
    role: "Giáo viên bản ngữ",
    level: "Speaking Club & B2",
    experience: "5 năm giảng dạy tại VN",
    certifications: ["DaF Zertifikat", "Bản ngữ"],
    bio: "Người Đức, phụ trách các lớp Speaking Club và luyện phát âm."
  }
];

const consultants = [
  {
    name: "Nguyễn Thị F",
    role: "Tư vấn viên Du học nghề",
    experience: "5 năm kinh nghiệm",
    specialty: "Ausbildung - Y tế, Khách sạn",
    successRate: "200+ hồ sơ thành công",
    bio: "Chuyên tư vấn du học nghề ngành Y tế và Khách sạn nhà hàng."
  },
  {
    name: "Trần Văn G",
    role: "Tư vấn viên Du học ĐH",
    experience: "6 năm kinh nghiệm",
    specialty: "Du học đại học - Kỹ thuật, CNTT",
    successRate: "150+ hồ sơ thành công",
    bio: "Từng du học Đức, am hiểu hệ thống giáo dục đại học Đức."
  },
  {
    name: "Lê Thị H",
    role: "Chuyên viên Visa",
    experience: "7 năm kinh nghiệm",
    specialty: "Hồ sơ visa du học",
    successRate: "Tỷ lệ đậu 98%",
    bio: "Chuyên xử lý hồ sơ visa, am hiểu quy trình và yêu cầu của ĐSQ Đức."
  }
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container-dmf">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-primary">Trang chủ</Link>
              <span>/</span>
              <Link href="/ve-chung-toi" className="hover:text-primary">Về chúng tôi</Link>
              <span>/</span>
              <span className="text-gray-900">Đội ngũ</span>
            </nav>

            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Đội ngũ DMF
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Gặp gỡ đội ngũ
                <span className="text-primary"> tận tâm</span>
              </h1>
              <p className="text-lg text-gray-600">
                Đội ngũ giáo viên và tư vấn viên giàu kinh nghiệm, tận tâm đồng hành
                cùng bạn trên hành trình chinh phục nước Đức.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ban lãnh đạo
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((person, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  {/* Avatar placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Users className="h-20 w-20 text-gray-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                    <p className="text-primary font-medium mb-3">{person.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{person.bio}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <GraduationCap className="h-4 w-4" />
                      {person.education}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {person.specialties.map((specialty, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Giáo viên tiếng Đức
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Đội ngũ giáo viên có chứng chỉ quốc tế, giàu kinh nghiệm giảng dạy
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teachers.map((teacher, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Avatar placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Users className="h-16 w-16 text-gray-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900">{teacher.name}</h3>
                    <p className="text-primary text-sm font-medium">{teacher.role}</p>
                    <p className="text-gray-500 text-sm mb-3">{teacher.level}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Award className="h-3 w-3" />
                        {teacher.experience}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {teacher.certifications.map((cert, i) => (
                        <span key={i} className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded">
                          {cert}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-xs">{teacher.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultants Section */}
        <section className="py-16 lg:py-24">
          <div className="container-dmf">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Đội ngũ tư vấn
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chuyên viên tư vấn du học giàu kinh nghiệm, am hiểu thị trường Đức
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {consultants.map((consultant, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Avatar placeholder */}
                  <div className="aspect-[3/2] bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                    <Users className="h-16 w-16 text-gray-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{consultant.name}</h3>
                    <p className="text-secondary font-medium mb-1">{consultant.role}</p>
                    <p className="text-gray-500 text-sm mb-4">{consultant.specialty}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="h-4 w-4 text-gray-400" />
                        {consultant.experience}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Globe className="h-4 w-4" />
                        {consultant.successRate}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm">{consultant.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container-dmf">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Gia nhập đội ngũ DMF
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Chúng tôi luôn tìm kiếm những người tài năng và đam mê trong lĩnh vực
                giáo dục và tư vấn du học. Nếu bạn muốn đóng góp vào sứ mệnh của DMF,
                hãy liên hệ với chúng tôi!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Gửi CV ứng tuyển
                </Button>
                <Link href="/lien-he">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Liên hệ tuyển dụng
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-gray-200">
          <div className="container-dmf">
            <div className="flex items-center justify-between">
              <Link
                href="/ve-chung-toi"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Về chúng tôi
              </Link>
              <Link
                href="/lien-he"
                className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Liên hệ
                <Users className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
