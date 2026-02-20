export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  date: string; // ISO date
  readTime: string;
  image: string | null;
  tags: string[];
  content: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "du-hoc-nghe-duc-2024-co-hoi-va-thach-thuc",
    title: "Du học nghề Đức 2024: Cơ hội và thách thức cho học viên Việt Nam",
    excerpt:
      "Tổng quan về thị trường du học nghề Đức năm 2024, những ngành nghề đang có nhu cầu cao và lời khuyên cho các bạn trẻ Việt Nam muốn theo đuổi con đường Ausbildung.",
    category: "Du học Đức",
    author: {
      name: "DMF Vietnam",
      role: "Ban biên tập",
    },
    date: "2024-01-15",
    readTime: "8 phút đọc",
    image: null,
    tags: ["Ausbildung", "Du học Đức", "Visa", "Nghề nghiệp"],
    featured: true,
    content: `
## Tổng quan về Ausbildung tại Đức năm 2024

Năm 2024 đánh dấu những thay đổi quan trọng trong chính sách du học nghề của Đức. Với việc thiếu hụt lao động ngày càng trầm trọng, Đức đang mở rộng cửa đón nhận nhiều học viên quốc tế hơn, đặc biệt là từ các nước châu Á như Việt Nam.

### Những thay đổi chính sách mới

Từ tháng 3/2024, Đức áp dụng Luật Nhập cư Lao động Chuyên môn mới, tạo điều kiện thuận lợi hơn cho người lao động và học viên nước ngoài:

- Giảm yêu cầu về trình độ tiếng Đức cho một số ngành nghề
- Đơn giản hóa quy trình xin visa
- Công nhận rộng rãi hơn các bằng cấp nước ngoài

## Các ngành nghề có nhu cầu cao nhất

### 1. Y tế và Điều dưỡng
Đây là ngành có nhu cầu cao nhất tại Đức với cơ hội việc làm ổn định.

### 2. Khách sạn và Nhà hàng
Ngành du lịch phục hồi mạnh, nhu cầu tuyển dụng liên tục tăng.

### 3. Kỹ thuật và Cơ khí
Đức là cường quốc công nghiệp, luôn cần nhân lực kỹ thuật chất lượng.

## Lời khuyên thực tế

1. **Bắt đầu sớm:** Quá trình chuẩn bị thường kéo dài 12-18 tháng.
2. **Học tiếng Đức nghiêm túc:** Đây là yếu tố then chốt.
3. **Chuẩn bị tài chính:** Cần dự trù chi phí chuẩn bị ban đầu.

## Kết luận

Với sự chuẩn bị kỹ và định hướng đúng, Ausbildung là con đường tiềm năng cho học viên Việt Nam.
    `,
  },
  {
    id: 2,
    slug: "hoc-tieng-duc-tu-a1-den-b1-mat-bao-lau",
    title: "Học tiếng Đức từ A1 đến B1 mất bao lâu?",
    excerpt:
      "Thời gian học tiếng Đức phụ thuộc vào nền tảng, mục tiêu và phương pháp học. Bài viết này gợi ý lộ trình bền vững.",
    category: "Học tiếng Đức",
    author: {
      name: "Nguyễn Văn A",
      role: "Giảng viên tiếng Đức",
    },
    date: "2024-01-12",
    readTime: "5 phút đọc",
    image: null,
    tags: ["Tiếng Đức", "A1", "B1", "Lộ trình"],
    content: `
## Mốc thời gian tham khảo

Với lịch học đều đặn, người học thường cần:

- A1: 2-3 tháng
- A2: 2-3 tháng
- B1: 3-4 tháng

## Yếu tố quyết định tiến độ

### Cường độ học
Học đều mỗi ngày hiệu quả hơn học dồn theo đợt.

### Môi trường luyện tập
Speaking club, phản xạ nghe nói và feedback từ giáo viên giúp rút ngắn thời gian.

## Gợi ý

Xây mục tiêu theo tuần và đánh giá định kỳ để tránh bị chệch nhịp.
    `,
  },
  {
    id: 3,
    slug: "top-10-nganh-ausbildung-luong-cao-nhat",
    title: "Top 10 ngành Ausbildung có lương cao nhất tại Đức",
    excerpt:
      "Danh sách nhóm ngành nghề có mức trợ cấp và cơ hội phát triển tốt trong hệ thống đào tạo nghề tại Đức.",
    category: "Du học Đức",
    author: {
      name: "DMF Vietnam",
      role: "Ban tư vấn nghề nghiệp",
    },
    date: "2024-01-10",
    readTime: "6 phút đọc",
    image: null,
    tags: ["Ausbildung", "Lương", "Ngành nghề"],
    content: `
## Nhóm ngành nổi bật

- Điều dưỡng
- Cơ điện tử
- Kỹ thuật ô tô
- Logistics

## Cách chọn ngành

### Dựa trên năng lực
Ưu tiên ngành phù hợp thế mạnh của bạn để tăng tỷ lệ bền vững.

### Dựa trên nhu cầu dài hạn
Theo dõi xu hướng tuyển dụng và chính sách nhập cư theo ngành.
    `,
  },
  {
    id: 4,
    slug: "kinh-nghiem-xin-visa-du-hoc-duc-2024",
    title: "Kinh nghiệm xin visa du học Đức 2024 thành công",
    excerpt:
      "Checklist hồ sơ, lịch trình nộp và các lỗi thường gặp khi phỏng vấn visa du học Đức.",
    category: "Kinh nghiệm",
    author: {
      name: "Trần Thị B",
      role: "Chuyên viên hồ sơ",
    },
    date: "2024-01-08",
    readTime: "7 phút đọc",
    image: null,
    tags: ["Visa", "Du học Đức", "Checklist"],
    content: `
## Hồ sơ cơ bản

- Hộ chiếu còn hạn
- Chứng chỉ tiếng Đức theo yêu cầu
- Thư mời học/hợp đồng nghề
- Chứng minh tài chính

## Lưu ý phỏng vấn

1. Trả lời đúng trọng tâm.
2. Thống nhất thông tin với hồ sơ đã nộp.
3. Chuẩn bị trước các câu hỏi về kế hoạch học tập.
    `,
  },
  {
    id: 5,
    slug: "so-sanh-ausbildung-va-du-hoc-dai-hoc-duc",
    title: "So sánh Ausbildung và Du học đại học Đức: Nên chọn con đường nào?",
    excerpt:
      "Phân tích ngắn gọn ưu nhược điểm giữa học nghề và học đại học để chọn lộ trình phù hợp mục tiêu.",
    category: "Du học Đức",
    author: {
      name: "DMF Vietnam",
      role: "Ban chiến lược học tập",
    },
    date: "2024-01-05",
    readTime: "8 phút đọc",
    image: null,
    tags: ["Ausbildung", "Đại học", "Định hướng"],
    content: `
## Ausbildung phù hợp khi

- Muốn đi nhanh vào thị trường lao động
- Ưu tiên học đi đôi với thực hành

## Đại học phù hợp khi

- Theo đuổi định hướng chuyên môn sâu
- Có kế hoạch học thuật dài hạn

## Kết luận

Mỗi lộ trình đều có lợi thế riêng, cần dựa trên hồ sơ cá nhân và mục tiêu nghề nghiệp.
    `,
  },
  {
    id: 6,
    slug: "5-sai-lam-khi-hoc-tieng-duc",
    title: "5 sai lầm phổ biến khi học tiếng Đức và cách khắc phục",
    excerpt:
      "Những lỗi phổ biến của người Việt khi học tiếng Đức và cách chỉnh để tiến bộ nhanh hơn.",
    category: "Học tiếng Đức",
    author: {
      name: "Lê Văn C",
      role: "Giáo viên luyện thi",
    },
    date: "2024-01-02",
    readTime: "5 phút đọc",
    image: null,
    tags: ["Tiếng Đức", "Phương pháp học"],
    content: `
## Các lỗi thường gặp

- Học từ vựng rời rạc không có ngữ cảnh
- Bỏ qua luyện phát âm từ đầu
- Học ngữ pháp nhưng không thực hành nói

## Cách khắc phục

Kết hợp học theo chủ đề, luyện nghe nói hằng ngày và nhận phản hồi định kỳ.
    `,
  },
  {
    id: 7,
    slug: "cuoc-song-hoc-vien-viet-nam-tai-duc",
    title: "Cuộc sống của học viên Việt Nam tại Đức như thế nào?",
    excerpt:
      "Góc nhìn thực tế về học tập, công việc bán thời gian và hòa nhập văn hóa tại Đức.",
    category: "Học viên chia sẻ",
    author: {
      name: "Phạm Thị D",
      role: "Cựu học viên DMF",
    },
    date: "2023-12-28",
    readTime: "6 phút đọc",
    image: null,
    tags: ["Học viên", "Đời sống tại Đức"],
    content: `
## Những thay đổi lớn

Giai đoạn đầu cần thích nghi nhịp học, quy tắc đúng giờ và môi trường tự lập.

## Mẹo hòa nhập nhanh

1. Chủ động kết nối cộng đồng địa phương.
2. Duy trì tiếng Đức trong sinh hoạt hằng ngày.
3. Quản lý thời gian học - làm thêm cân bằng.
    `,
  },
  {
    id: 8,
    slug: "chi-phi-sinh-hoat-tai-duc-2024",
    title: "Chi phí sinh hoạt tại Đức 2024: Cần chuẩn bị bao nhiêu tiền?",
    excerpt:
      "Tổng hợp chi phí cơ bản khi sống tại Đức và các gợi ý quản lý tài chính cho du học sinh.",
    category: "Kinh nghiệm",
    author: {
      name: "DMF Vietnam",
      role: "Ban tư vấn tài chính học viên",
    },
    date: "2023-12-25",
    readTime: "7 phút đọc",
    image: null,
    tags: ["Chi phí", "Du học Đức", "Sinh hoạt"],
    content: `
## Nhóm chi phí chính

- Nhà ở
- Ăn uống
- Bảo hiểm
- Di chuyển

## Gợi ý

Lập ngân sách theo tháng và dự phòng khoản chi khẩn cấp ngay từ đầu.
    `,
  },
  {
    id: 9,
    slug: "hoc-bong-du-hoc-duc-danh-cho-sinh-vien-viet-nam",
    title: "Các học bổng du học Đức dành cho sinh viên Việt Nam",
    excerpt:
      "Danh sách một số chương trình học bổng tiêu biểu và lưu ý khi chuẩn bị hồ sơ học bổng.",
    category: "Du học Đức",
    author: {
      name: "DMF Vietnam",
      role: "Ban học bổng",
    },
    date: "2023-12-20",
    readTime: "8 phút đọc",
    image: null,
    tags: ["Học bổng", "Du học Đức"],
    content: `
## Các nguồn học bổng phổ biến

- Tổ chức hỗ trợ học thuật
- Quỹ trường đại học
- Học bổng theo ngành

## Lưu ý hồ sơ

Hồ sơ cần thống nhất mục tiêu học tập, thành tích và kế hoạch phát triển dài hạn.
    `,
  },
  {
    id: 10,
    slug: "lam-them-khi-du-hoc-duc-can-biet-gi",
    title: "Làm thêm khi du học Đức: Những điều cần biết",
    excerpt:
      "Quy định cơ bản về việc làm thêm, quyền lợi và lưu ý pháp lý cho du học sinh tại Đức.",
    category: "Kinh nghiệm",
    author: {
      name: "Hoàng Văn E",
      role: "Cố vấn học viên quốc tế",
    },
    date: "2023-12-18",
    readTime: "6 phút đọc",
    image: null,
    tags: ["Làm thêm", "Du học Đức", "Pháp lý"],
    content: `
## Quy định chung

Du học sinh được phép làm thêm theo khung giờ/quy định hiện hành của Đức.

## Lời khuyên

Ưu tiên công việc không ảnh hưởng lịch học và đảm bảo tuân thủ hợp đồng lao động.
    `,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export function getRelatedBlogPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPost[] {
  const sameCategory = getAllBlogPosts().filter(
    (post) => post.slug !== currentSlug && post.category === category
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const fallback = getAllBlogPosts().filter((post) => post.slug !== currentSlug);
  return [...sameCategory, ...fallback].slice(0, limit);
}

export function formatBlogDate(date: string): string {
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString("vi-VN");
}

function toCategorySlug(category: string): string {
  return category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export function getBlogCategories() {
  const counts = new Map<string, number>();
  for (const post of blogPosts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  const items = [...counts.entries()].map(([label, count]) => ({
    slug: toCategorySlug(label),
    label,
    count,
  }));

  return [
    {
      slug: "all",
      label: "Tất cả",
      count: blogPosts.length,
    },
    ...items,
  ];
}
