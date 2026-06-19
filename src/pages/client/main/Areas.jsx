import { FaArrowRight } from "react-icons/fa";
import { areas } from "../../../utils/Contants";


export default function Areas() {
  return (
    <section className="bg-[#faf7f1] py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase text-[#c8922e]">
              Khu vực nổi bật
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Tìm nhà theo khu vực
            </h2>
          </div>

          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-bold text-[#c8922e] md:flex"
          >
            Xem tất cả khu vực
            <FaArrowRight size={12} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.id}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-extrabold text-slate-900">{area.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{area.count}</p>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#c8922e] hover:bg-[#c8922e] hover:text-white">
                  <FaArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}