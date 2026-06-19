import {
  FaAward,
  FaChevronDown,
  FaHome,
  FaSearch,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative">
      <div
        className="relative min-h-[520px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,8,23,0.78), rgba(2,8,23,0.35)), url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1900&q=90')",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 pt-20 lg:px-8">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide backdrop-blur">
              Tìm nhà dễ dàng
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Không gian sống lý tưởng cho tương lai của bạn
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/90 md:text-lg">
              Hàng ngàn bất động sản chất lượng, pháp lý rõ ràng, giá tốt nhất
              thị trường.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <Feature icon={<FaHome />} text="Nguồn nhà đa dạng" />
              <Feature icon={<FaShieldAlt />} text="Pháp lý minh bạch" />
              <Feature icon={<FaUsers />} text="Hỗ trợ tận tâm" />
            </div>
          </div>
        </div>
      </div>

      <SearchBox />
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm font-semibold">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c8922e] text-white">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

function SearchBox() {
  return (
    <div className="mx-auto -mt-16 max-w-7xl px-4 lg:px-8">
      <div className="relative z-10 rounded-2xl bg-white p-5 shadow-2xl">
        <div className="mb-5 flex border-b border-slate-100">
          {["Mua bán", "Cho thuê", "Dự án"].map((tab, index) => (
            <button
              key={tab}
              className={`px-8 py-3 text-sm font-semibold ${
                index === 0
                  ? "border-b-2 border-[#c8922e] text-[#c8922e]"
                  : "text-slate-500 hover:text-[#c8922e]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
          <SearchField label="Từ khóa" value="Nhập tên dự án, khu vực..." />
          <SearchField label="Loại bất động sản" value="Chọn loại" select />
          <SearchField label="Khu vực" value="Chọn khu vực" select />
          <SearchField label="Khoảng giá" value="Chọn khoảng giá" select />

          <button className="flex items-center justify-center gap-3 rounded-lg bg-[#c8922e] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#a9761f]">
            <FaSearch />
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}

function SearchField({ label, value, select }) {
  return (
    <div className="rounded-xl border border-transparent px-3 py-2 transition hover:border-slate-200">
      <label className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>{value}</span>
        {select && <FaChevronDown size={12} />}
      </div>
    </div>
  );
}