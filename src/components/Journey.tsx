import { motion } from "motion/react";

const steps = [
  {
    title: "Developing a comprehensive data strategy",
    description:
      "We craft a strategic foundation integrating data initiatives with your business goals to maximize outcomes. Our approach includes aligning data strategy with organizational objectives and focusing on enhancing decision-making.",
  },
  {
    title: "Delivering a discovery phase",
    description:
      "We provide an initial discovery to better understand your existing data landscape and needs by defining the proposed target state. Key deliverables include deep dive into business and technical analysis.",
  },
  {
    title: "Building the data implementation roadmap",
    description:
      "Our data analytics services establish a detailed roadmap to support the implementation of your data initiatives, including a comprehensive implementation plan and technology stack analysis.",
  },
  {
    title: "Data architecture design and prototype",
    description:
      "We mitigate risks and ensure effectiveness through careful design and early testing of data models and architectures. We design scalable and flexible data architectures.",
  },
  {
    title: "Seamless data solution implementation",
    description:
      "We ensure a smooth integration of data solutions into your existing infrastructure for immediate operational enhancement. We manage end-to-end deployment of data platforms and tools.",
  },
  {
    title: "Data governance and quality management",
    description:
      "Establishing robust data governance and maintaining high data quality is crucial for the long-term success of your data initiatives. We implement comprehensive data governance frameworks.",
  },
  {
    title: "Advanced analytics and insights generation",
    description:
      "We help you extract maximum value from your data through advanced analytics and actionable insights, implementing business intelligence and data visualization solutions.",
  },
  {
    title: "Ongoing optimization and support",
    description:
      "Continuous support and optimization are essential to keep your data solutions effective and ahead of the curve. We provide ongoing maintenance and updates.",
  },
];

export default function Journey() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Navigating your Data & Analytics journey
          </h2>
          <p className="text-lg text-slate-300">
            At Nonacrypt, we approach data analytics services with a structured,
            client-centric process that focuses on your business objectives and
            operational requirements. We don't just implement data solutions; we
            create tailored data strategies that deliver tangible value.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-900 border-4 border-orange-500 rounded-full transform -translate-x-1/2 mt-1 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}
                >
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <div className="text-orange-500 font-mono text-sm font-bold mb-2">
                      STEP {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
