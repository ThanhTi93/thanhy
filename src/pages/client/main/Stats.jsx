import { FaBuilding, FaHome, FaStar, FaUsers } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaHome />,
      number: "5.000+",
      label: "Bất động sản",
    },
    {
      icon: <FaUsers />,
      number: "12.000+",
      label: "Khách hàng",
    },
    {
      icon: <FaBuilding />,
      number: "300+",
      label: "Dự án",
    },
    {
      icon: <FaStar />,
      number: "98%",
      label: "Khách hàng hài lòng",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4 lg:px-8">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-5 ${
              index !== stats.length - 1 ? "md:border-r md:border-slate-200" : ""
            }`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-2xl text-[#c8922e]">
              {item.icon}
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-slate-900">
                {item.number}
              </h3>
              <p className="text-sm text-slate-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}