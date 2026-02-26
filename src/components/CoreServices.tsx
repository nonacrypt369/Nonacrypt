import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  LineChart,
  Database,
  Shield,
  Lightbulb,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Data strategy",
    description:
      "Develop a modern data strategy, conduct technical discovery and design assessments, and realize the full value of your data assets.",
    linkText: "Develop a clear data vision",
    icon: Lightbulb,
    link: "/services/data-analytics"
  },
  {
    title: "Data governance",
    description:
      "Establish a robust data governance strategy, implement data management foundations, and integrate data and AI governance for enhanced control and compliance.",
    linkText: "Establish effective Data governance",
    icon: Shield,
    link: "/services/data-analytics"
  },
  {
    title: "BI & analytics",
    description:
      "Leverage data visualization techniques, deliver use case-specific solutions, and generate valuable business domain insights and analytics.",
    linkText: "Visualize key data trends",
    icon: LineChart,
    link: "/services/data-analytics"
  },
  {
    title: "Data platform modernization",
    description:
      "Build modern data foundations, migrate to cloud data platforms, optimize cloud data solutions, and transform your infrastructure into a data intelligence platform.",
    linkText: "Modernize your data platform",
    icon: Database,
    link: "/services/data-analytics"
  },
  {
    title: "Data & Analytics experts",
    description:
      "Develop custom solutions, manage dedicated teams, extend your existing team, and implement agile methodologies to drive your data initiatives forward.",
    linkText: "Hire data experts",
    icon: Users,
    link: "/services/data-analytics"
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our core Data & Analytics services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-slate-50 p-8 rounded-2xl hover:bg-slate-900 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-800 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-orange-600 group-hover:text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-8 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-400 transition-colors"
              >
                {service.linkText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
