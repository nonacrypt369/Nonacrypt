import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const otherServices = [
  {
    title: "Data engineering services",
    description:
      "Design, build, and maintain robust data pipelines and infrastructure to support your organization's data-driven initiatives.",
    link: "/services/data-analytics"
  },
  {
    title: "Big data",
    description:
      "Harness the power of large, complex datasets using advanced technologies and methodologies to extract valuable insights and drive decision-making.",
    link: "/services/data-analytics"
  },
  {
    title: "Data lake consulting",
    description:
      "Create and optimize scalable data repositories that can store and process vast amounts of raw data in various formats for flexible analysis.",
    link: "/services/data-analytics"
  },
  {
    title: "Data warehouse consulting",
    description:
      "Develop and refine centralized data storage systems that integrate data from multiple sources for efficient reporting and business intelligence.",
    link: "/services/data-analytics"
  },
  {
    title: "Data modernization services",
    description:
      "Transform legacy data systems into modern, agile architectures that leverage cloud technologies and advanced analytics capabilities.",
    link: "/services/data-analytics"
  },
  {
    title: "Decision intelligence",
    description:
      "Empower your organization with AI-driven decision-making frameworks that combine data science, social science, and managerial science.",
    link: "/services/data-science"
  },
  {
    title: "Predictive intelligence",
    description:
      "Anticipate future trends and behaviors by leveraging advanced predictive modeling and machine learning algorithms.",
    link: "/services/data-science"
  },
];

export default function OtherServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-12">
          Our other Data & Analytics services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-slate-200 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group bg-white flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-orange-600 font-medium mt-auto"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
