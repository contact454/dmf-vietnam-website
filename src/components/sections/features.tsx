"use client";

import { motion } from "framer-motion";
import { Shield, Users, Trophy, Headphones, Clock, Target } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Cam kết đầu ra",
    description: "100% học viên đạt chứng chỉ sau khóa học hoặc được học lại miễn phí",
  },
  {
    icon: Users,
    title: "Giảng viên bản ngữ",
    description: "Đội ngũ giảng viên người Đức và Việt Nam có chứng chỉ sư phạm quốc tế",
  },
  {
    icon: Trophy,
    title: "Tỷ lệ visa cao",
    description: "98% học viên đậu visa du học và làm việc tại Đức trong lần đầu tiên",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ tư vấn sẵn sàng giải đáp mọi thắc mắc của bạn bất cứ lúc nào",
  },
  {
    icon: Clock,
    title: "Lịch học linh hoạt",
    description: "Nhiều ca học phù hợp với học sinh, sinh viên và người đi làm",
  },
  {
    icon: Target,
    title: "Định hướng nghề nghiệp",
    description: "Tư vấn chọn ngành nghề phù hợp với năng lực và sở thích của từng học viên",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding">
      <div className="container-dmf">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Tại sao chọn DMF?
            </span>
            <h2 className="mt-2 mb-6">
              Đối tác <span className="text-gradient">đáng tin cậy</span> trên
              con đường du học Đức
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Với hơn 10 năm kinh nghiệm, DMF Vietnam tự hào là đơn vị tư vấn du học Đức
              và đào tạo tiếng Đức uy tín hàng đầu tại Việt Nam. Chúng tôi không chỉ dạy
              tiếng Đức, mà còn đồng hành cùng bạn từ những bước đầu tiên cho đến khi
              bạn đặt chân đến nước Đức.
            </p>

            {/* Stats highlight */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-primary/5 rounded-2xl shadow-soft">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Năm kinh nghiệm</div>
              </div>
              <div className="text-center border-x border-primary/10">
                <div className="text-3xl md:text-4xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground mt-1">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Đậu visa</div>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-background shadow-soft-sm hover:shadow-soft transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
