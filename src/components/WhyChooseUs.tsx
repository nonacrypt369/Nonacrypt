import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  "Nonacrypt has a proven track record of delivering over 60 successful data projects, leveraging the expertise of more than 200 data professionals",
  "Our Data & Analytics services cover a wide range of expertise, from data platform modernization and data strategy to governance and data modernization",
  "Industry-leading companies like Gogo, Fluke, Redflex, Cleverbridge, and Lebara have partnered with us for Data-related projects",
  "Nonacrypt ensures data protection compliance by adhering to GDPR, HIPAA, PCI DSS, ISO 9001:2015, and ISO 27001:2013",
  'Nonacrypt has been acknowledged as a "Rising Star in Data Engineering" by ISG',
  "2,400 experts on board and access to a large talent pool allows us to fill a position for your data project within just 4-6 weeks",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-8">
              Why choose Nonacrypt for Data & Analytics services?
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1 mr-4" />
                  <p className="text-lg text-slate-700">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-orange-100 rounded-3xl transform rotate-3 scale-105" />
            <img
              src="https://picsum.photos/seed/team/800/600"
              alt="Nonacrypt Team"
              className="relative rounded-3xl shadow-xl w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
