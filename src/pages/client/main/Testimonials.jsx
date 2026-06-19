import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../../../utils/Contants";

export default function Testimonials() {
  return (
    <section className="bg-[#faf7f1] py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-7 text-center text-sm font-extrabold uppercase text-[#c8922e]">
          Khách hàng nói về chúng tôi
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-xl bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <FaQuoteLeft className="text-3xl text-[#c8922e]" />

                <div className="flex gap-1 text-[#c8922e]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} size={14} />
                  ))}
                </div>
              </div>

              <p className="min-h-[80px] text-sm leading-7 text-slate-600">
                {item.content}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-extrabold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-800" />
          <span className="h-2 w-2 rounded-full bg-[#c8922e]" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}