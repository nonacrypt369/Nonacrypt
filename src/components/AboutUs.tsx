import { motion } from 'motion/react';
import { Users, Globe, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '2,400+', label: 'Tech Experts' },
  { icon: Globe, value: '25+', label: 'Locations Globally' },
  { icon: Award, value: '160+', label: 'Active Clients' },
  { icon: Clock, value: '21+', label: 'Years in Business' },
];

export default function AboutUs() {
  return (
    <section id="about-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-sm font-medium mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              About Nonacrypt
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Nonacrypt is a global software solutions and engineering services company that helps the world's leading organizations turn challenges into lasting business value, operational efficiency, and revenue growth.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              With over two decades of experience, we have built a strong reputation for delivering excellence in data analytics, cloud solutions, and custom software development. Our team of over 2,400 experts works closely with clients to drive digital transformation and innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <stat.icon className="w-8 h-8 text-orange-500 mb-3" />
                  <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-slate-200 rounded-3xl transform -rotate-3 scale-105" />
            <div className="absolute inset-0 bg-orange-100 rounded-3xl transform rotate-2 scale-100" />
            <img
              src="https://picsum.photos/seed/aboutus/800/800.webp"
              alt="About Nonacrypt"
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-square"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width="800"
              height="800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
