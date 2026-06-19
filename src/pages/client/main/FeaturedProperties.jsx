import { FaArrowRight } from "react-icons/fa";
import PropertyCard from "./PropertyCard";
import { properties } from "../../../utils/Contants";

export default function FeaturedProperties() {
  return (
    <section className="bg-[#faf7f1] py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase text-[#c8922e]">
              Dự án nổi bật
            </p>
            <h2 className="max-w-md text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Những bất động sản được quan tâm nhất
            </h2>
          </div>

          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-bold text-[#c8922e] md:flex"
          >
            Xem tất cả dự án
            <FaArrowRight size={12} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {properties.map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </div>
      </div>
    </section>
  );
}