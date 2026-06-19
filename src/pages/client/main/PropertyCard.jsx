import {
  FaArrowRight,
  FaBath,
  FaBed,
  FaHeart,
  FaMapMarkerAlt,
  FaRulerCombined,
} from "react-icons/fa";

export default function PropertyCard({ property }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span
          className={`absolute left-4 top-4 rounded-full ${property.tagColor} px-4 py-1.5 text-xs font-bold text-white`}
        >
          {property.tag}
        </span>

        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-500 transition hover:text-rose-500">
          <FaHeart />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-extrabold text-slate-900">
          {property.title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <FaMapMarkerAlt className="text-slate-400" />
          <span>{property.location}</span>
        </div>

        <div className="mt-5 flex items-center gap-5 text-sm text-slate-500">
          <Info icon={<FaBed />} text={property.beds} />
          <Info icon={<FaBath />} text={property.baths} />
          <Info icon={<FaRulerCombined />} text={property.area} />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xl font-extrabold text-[#c8922e]">
            {property.price}
          </p>

          <button className="text-[#c8922e] transition group-hover:translate-x-1">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}