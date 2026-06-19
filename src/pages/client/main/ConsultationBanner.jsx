import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function ConsultationBanner() {
  return (
    <section className="bg-[#faf7f1] py-4">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(2,8,23,0.92), rgba(2,8,23,0.6), rgba(2,8,23,0.15)), url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90')",
          }}
        >
          <div className="grid gap-8 p-8 md:grid-cols-[1.4fr_0.8fr] lg:p-12">
            <div className="text-white">
              <p className="mb-3 text-sm font-extrabold uppercase text-[#d9a13c]">
                Tư vấn miễn phí 24/7
              </p>

              <h2 className="text-3xl font-extrabold md:text-4xl">
                Bạn cần tư vấn mua nhà?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn tìm
                được bất động sản phù hợp nhất!
              </p>

              <div className="mt-6 flex flex-wrap gap-5 text-sm">
                <Benefit text="Tư vấn chuyên nghiệp" />
                <Benefit text="Pháp lý minh bạch" />
                <Benefit text="Hỗ trợ tận tâm" />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:0968123456"
                  className="flex items-center gap-3 rounded-lg bg-slate-900/70 px-5 py-4 font-bold text-white ring-1 ring-white/10"
                >
                  <FaPhoneAlt />
                  0968 123 456
                </a>

                <button className="rounded-lg bg-[#c8922e] px-7 py-4 font-bold text-white transition hover:bg-[#a9761f]">
                  Nhận tư vấn ngay
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-2xl">
              <h3 className="mb-5 text-xl font-extrabold text-slate-900">
                Để lại thông tin, chúng tôi sẽ liên hệ ngay!
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#c8922e]"
                />

                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#c8922e]"
                />

                <select className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-400 outline-none focus:border-[#c8922e]">
                  <option>Nhu cầu của bạn</option>
                  <option>Mua nhà</option>
                  <option>Thuê nhà</option>
                  <option>Đầu tư</option>
                </select>

                <button className="w-full rounded-lg bg-[#c8922e] px-5 py-3 font-bold text-white transition hover:bg-[#a9761f]">
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-2">
      <FaCheckCircle className="text-[#d9a13c]" />
      <span>{text}</span>
    </div>
  );
}