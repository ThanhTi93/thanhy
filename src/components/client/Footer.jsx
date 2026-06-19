import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#071b2f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr_1.2fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#c8922e] text-[#c8922e]">
              <FaHome />
            </div>

            <div>
              <h3 className="text-lg font-extrabold leading-none">HOMELAND</h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#c8922e]">
                Real Estate
              </p>
            </div>
          </div>

          <p className="max-w-xs text-sm leading-7 text-white/70">
            Homeland - Nền tảng bất động sản uy tín hàng đầu, kết nối khách hàng
            với những bất động sản chất lượng nhất thị trường.
          </p>

          <div className="mt-6 flex gap-3">
            <Social icon={<FaFacebookF />} />
            <Social icon={<FaYoutube />} />
            <Social icon={<FaInstagram />} />
            <Social icon={<FaTwitter />} />
          </div>
        </div>

        <FooterCol
          title="Danh mục"
          links={["Nhà đất bán", "Cho thuê", "Dự án", "Tin tức", "Giới thiệu"]}
        />

        <FooterCol
          title="Hỗ trợ"
          links={[
            "Hướng dẫn mua bán",
            "Chính sách bảo mật",
            "Điều khoản sử dụng",
            "Câu hỏi thường gặp",
            "Liên hệ",
          ]}
        />

        <div>
          <h4 className="mb-5 font-extrabold uppercase">Liên hệ</h4>

          <div className="space-y-4 text-sm text-white/70">
            <Contact icon={<FaMapMarkerAlt />} text="123 Nguyễn Văn Linh, Hải Châu, Đà Nẵng" />
            <Contact icon={<FaPhoneAlt />} text="0968 123 456" />
            <Contact icon={<FaEnvelope />} text="contact@homeland.com.vn" />
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-extrabold uppercase">Đăng ký nhận tin</h4>

          <p className="mb-5 text-sm leading-7 text-white/70">
            Nhận thông tin mới nhất về thị trường bất động sản và các ưu đãi hấp
            dẫn.
          </p>

          <div className="flex overflow-hidden rounded-lg bg-white">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-700 outline-none"
            />
            <button className="bg-[#c8922e] px-4 text-white">→</button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © 2024 Homeland. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="mb-5 font-extrabold uppercase">{title}</h4>
      <ul className="space-y-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition hover:text-[#c8922e]">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({ icon }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#c8922e]"
    >
      {icon}
    </a>
  );
}

function Contact({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 text-[#c8922e]">{icon}</span>
      <span>{text}</span>
    </div>
  );
}