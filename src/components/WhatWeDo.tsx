import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, LineChart, Brain, Cloud, Shield, Lightbulb, Target, Zap } from 'lucide-react';

const capabilities = [
  {
    icon: Lightbulb,
    title: 'Data Strategy & Consulting',
    description: 'Align your data initiatives with business objectives to maximize ROI and drive digital transformation.',
    link: '/services/data-analytics'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust, scalable data pipelines and modern architectures to process and store your data efficiently.',
    link: '/services/data-analytics'
  },
  {
    icon: LineChart,
    title: 'BI & Data Visualization',
    description: 'Transform raw data into intuitive, interactive dashboards that empower decision-makers at all levels.',
    link: '/services/data-analytics'
  },
  {
    icon: Brain,
    title: 'Advanced Analytics & AI',
    description: 'Leverage machine learning and predictive modeling to uncover hidden patterns and forecast future trends.',
    link: '/services/ai-development'
  },
  {
    icon: Cloud,
    title: 'Cloud Data Platforms',
    description: 'Migrate and modernize your data infrastructure using leading cloud platforms like AWS, Azure, and GCP.',
    link: '/services/devops'
  },
  {
    icon: Shield,
    title: 'Data Governance',
    description: 'Ensure data quality, security, and compliance with comprehensive governance frameworks and best practices.',
    link: '/services/data-analytics'
  },
  {
    icon: Target,
    title: 'Decision Intelligence',
    description: 'Empower your organization with AI-driven decision-making frameworks that combine data science and managerial science.',
    link: '/services/data-science'
  },
  {
    icon: Zap,
    title: 'Predictive Intelligence',
    description: 'Anticipate future trends and behaviors by leveraging advanced predictive modeling and machine learning algorithms.',
    link: '/services/data-science'
  }
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">What we do</h2>
          <p className="text-lg text-slate-400">
            We provide end-to-end data and analytics services to help you build a data-driven enterprise. From strategy to implementation, we've got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link 
                to={cap.link}
                className="block h-full bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition-colors group"
              >
                <cap.icon className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{cap.title}</h3>
                <p className="text-slate-400 leading-relaxed">{cap.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
