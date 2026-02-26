import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    client: "Fluke Corporation",
    title: "Long-term software development partnership with Fluke Corporation",
    category: "Architecture Design",
    image: "https://picsum.photos/seed/case1/600/400.webp",
  },
  {
    client: "Gogo",
    title:
      "Big Data analytics for improved maintenance and flawless operation of the in-flight internet",
    category: "Digital Transformation",
    image: "https://picsum.photos/seed/case2/600/400.webp",
  },
  {
    client: "Cleverbridge",
    title:
      "Driving growth in e-commerce with a comprehensive data analytics solution",
    category: "Data Analytics Strategy",
    image: "https://picsum.photos/seed/case3/600/400.webp",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl max-w-2xl">
            Our Data & Analytics success stories Case studies
          </h2>
          <a
            href="#"
            className="hidden md:inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
          >
            Show all cases
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">
                {item.category}
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href="#"
            className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
          >
            Show all cases
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
