import { motion } from "motion/react";
import { Target, RefreshCw, ShieldCheck, Zap } from "lucide-react";

const challenges = [
  {
    title: "Setting the right data strategy and implementation",
    description:
      "Developing and effectively implementing a data strategy that aligns with business goals is a significant challenge. Integrating this data strategy with your AI strategy is crucial for maximizing value. Nonacrypt helps you create and implement a comprehensive data strategy, ensuring alignment with business objectives and smooth integration with your AI strategy to drive growth.",
    icon: Target,
  },
  {
    title: "Ensuring data reusability and addressing redundancy",
    description:
      "Data often gets siloed and tied to specific use cases, limiting its potential for new applications or analytics. Nonacrypt leverages modern data architectures and paradigms, such as Data as a Product, to promote reusability and address redundancy. This approach breaks down silos and enables data to be repurposed for multiple applications.",
    icon: RefreshCw,
  },
  {
    title: "Ensuring regulatory compliance and robust data governance",
    description:
      "With stringent regulations around data and AI, organizations must ensure compliance to mitigate risks. Establishing and maintaining robust data governance frameworks is critical yet complex. Our data analytics engineering services ensure regulatory compliance and deliver integrated data and AI governance frameworks.",
    icon: ShieldCheck,
  },
  {
    title: "Keeping up-to-date with rapidly evolving data platforms",
    description:
      "Staying current with the fast-paced evolution of data platforms is crucial. Companies must meet modern demands within tight budgets, making it challenging to allocate resources effectively. Nonacrypt provides expertise in modernizing your data platforms and optimizing costs, ensuring your infrastructure evolves in line with industry advancements.",
    icon: Zap,
  },
];

export default function Challenges() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
            Maximize your Data & AI potential with robust data foundations
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Many companies struggle with outdated data platforms, leading to
            ineffective data management, high costs, and subpar performance. To
            fully harness the potential of Generative AI and drive business
            value, it’s crucial to have the right data strategy, robust data
            governance, and a modern data platform.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Turning business challenges into Data-powered opportunities
          </h3>
          <p className="text-lg text-slate-600">
            At Nonacrypt, we deeply understand that organizations are becoming more
            dependent on their data to realize value and remain competitive in
            an increasingly data-driven world. However, it's not just about
            having data; it's about having data that can be effectively consumed
            and leveraged to drive business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <challenge.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {challenge.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
