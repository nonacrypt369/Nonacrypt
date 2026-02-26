import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const topIndustries = [
  {
    title: 'Financial Services Analytics',
    tags: ['Risk Management', 'Fraud Detection', 'Algorithmic Trading', 'Customer Insights'],
    description: 'Leverage predictive modeling and real-time analytics to detect fraud, optimize investment strategies, and personalize banking experiences.',
  },
  {
    title: 'Retail & E-commerce Intelligence',
    tags: ['Demand Forecasting', 'Customer Segmentation', 'Inventory Optimization', 'Price Optimization'],
    description: 'Transform retail operations with data-driven insights. Predict consumer trends, optimize supply chains, and deliver hyper-personalized shopping experiences.',
  },
  {
    title: 'Healthcare Predictive Analytics',
    tags: ['Patient Care Optimization', 'Genomics Data', 'Clinical Trials', 'Operational Efficiency'],
    description: 'Improve patient outcomes and operational efficiency through advanced health data analytics, predictive modeling, and AI-driven diagnostics.',
  },
  {
    title: 'Manufacturing & Industry 4.0',
    tags: ['Predictive Maintenance', 'IoT Analytics', 'Quality Control', 'Supply Chain Visibility'],
    description: 'Harness IoT sensor data and machine learning to predict equipment failures, optimize production lines, and ensure product quality.',
  },
  {
    title: 'Logistics & Supply Chain Data',
    tags: ['Route Optimization', 'Fleet Analytics', 'Demand Planning', 'Real-time Tracking'],
    description: 'Streamline global supply chains with real-time data analytics. Optimize routing, forecast demand accurately, and reduce operational costs.',
  },
  {
    title: 'Telecommunications Analytics',
    tags: ['Churn Prediction', 'Network Optimization', '5G Monetization', 'Customer Experience'],
    description: 'Analyze massive volumes of network data to predict customer churn, optimize network performance, and create new data-driven revenue streams.',
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
            Data Analytics Across Industries
          </h2>
          <p className="text-lg text-slate-600">
            We deliver tailored data and analytics solutions across a wide range of sectors, helping businesses uncover insights, optimize operations, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topIndustries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {industry.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {industry.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 flex-grow">
                {industry.description}
              </p>
              
              <Link to="/industries" className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700 mt-auto">
                View More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/industries"
            className="inline-flex items-center justify-center px-8 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-600 bg-transparent hover:bg-orange-50 transition-colors"
          >
            View All Industries
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
