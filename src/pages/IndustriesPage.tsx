import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Globe2, Map, Compass } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import SEO from "../components/SEO";

const industries = [
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
  },
  {
    title: 'Energy & Utilities',
    tags: ['Smart Grid Analytics', 'Consumption Forecasting', 'Renewable Optimization'],
    description: 'Optimize energy distribution and consumption using smart grid data, predictive maintenance, and advanced forecasting models.',
  },
  {
    title: 'Automotive & Connected Vehicles',
    tags: ['Connected Car Data', 'Autonomous Driving AI', 'Warranty Analytics'],
    description: 'Process telemetry data from connected vehicles to improve safety, enhance driver experiences, and optimize manufacturing supply chains.',
  },
  {
    title: 'Media & Entertainment',
    tags: ['Recommendation Engines', 'Audience Sentiment', 'Ad Targeting'],
    description: 'Engage audiences better with AI-driven content recommendations, deep sentiment analysis, and hyper-targeted advertising strategies.',
  },
  {
    title: 'Agritech & Precision Farming',
    tags: ['Yield Prediction', 'Weather Modeling', 'Resource Optimization'],
    description: 'Empower modern farming with data. Analyze soil, weather, and crop data to maximize yields and minimize environmental impact.',
  },
  {
    title: 'Aviation & Aerospace',
    tags: ['Flight Optimization', 'Aircraft Maintenance', 'Passenger Analytics'],
    description: 'Enhance flight safety and efficiency through predictive maintenance models, route optimization, and passenger behavior analytics.',
  },
  {
    title: 'Education & EdTech',
    tags: ['Student Analytics', 'Personalized Learning', 'Enrollment Forecasting'],
    description: 'Drive educational success by analyzing student performance data to create personalized learning pathways and optimize resource allocation.',
  }
];

const pricingPlans = [
  {
    name: "Advanced Analytics Starter",
    description: "Perfect for businesses initiating their advanced data journey.",
    monthlyPrice: "$3,500",
    yearlyPrice: "$35,000",
    benefits: [
      "Data Strategy & Architecture Assessment",
      "Automated Data Pipeline Setup",
      "Standard BI & Interactive Dashboards",
      "Basic Predictive Modeling",
      "Cloud Data Warehouse Integration",
      "8/5 Support & Monthly Health Checks"
    ]
  },
  {
    name: "Predictive & AI Professional",
    description: "Comprehensive AI and predictive analytics for growing enterprises.",
    monthlyPrice: "$8,000",
    yearlyPrice: "$80,000",
    isPopular: true,
    benefits: [
      "Advanced Machine Learning Models",
      "Real-time Data Streaming & Processing",
      "Custom BI Portals & Embedded Analytics",
      "Data Lake Integration & Governance",
      "Dedicated Data Scientist (Part-time)",
      "Priority 24/7 Support & SLA"
    ]
  },
  {
    name: "Enterprise Decision Intelligence",
    description: "Full-scale AI transformation and automated decision intelligence.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    benefits: [
      "Generative AI & LLM Integration",
      "Computer Vision & NLP Solutions",
      "Automated Decision Intelligence Frameworks",
      "Global Multi-region Data Deployment",
      "Full-time Dedicated AI/Data Team",
      "Executive Strategy & Custom SLA"
    ]
  }
];

const regions = [
  {
    name: "USA & Canada",
    description: "Providing nearshore and onshore data excellence across North America with compliant, scalable solutions.",
    icon: Globe2
  },
  {
    name: "Europe",
    description: "Serving the European market with GDPR-compliant analytics, AI development, and localized support.",
    icon: Map
  },
  {
    name: "Australia & New Zealand",
    description: "Delivering cutting-edge data science and cloud modernization for the APAC region.",
    icon: Compass
  }
];

export default function IndustriesPage() {
  const { openContactModal } = useOutletContext<{ openContactModal: () => void }>();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-20">
      <SEO 
        title="Industries We Serve" 
        description="We deliver specialized data intelligence and advanced analytics solutions across a wide range of industries."
        path="/#/industries"
      />
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://picsum.photos/seed/industries/1920/1080.webp?blur=2"
            alt="Industries"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
              Industries We Serve
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
              Data Analytics for <span className="text-orange-500">Every Sector</span>
            </h1>
            <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mb-10 max-w-2xl">
              We deliver specialized data intelligence and advanced analytics solutions across a wide range of industries, helping businesses uncover hidden patterns, optimize operations, and achieve sustainable growth.
            </p>
            <button 
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer"
            >
              Discuss your industry needs
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Global Service Scope Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Our Global Service Scope
            </h2>
            <p className="text-lg text-slate-600">
              We deliver world-class data and analytics services to leading enterprises across major global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <region.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{region.name}</h3>
                <p className="text-slate-600 leading-relaxed">{region.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Advanced Analytics Services Pricing
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Transparent pricing for our industry-leading advanced analytics and AI intelligence services. Choose the plan that fits your business scale.
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
                Yearly <span className="text-orange-600 ml-1">(Save 16%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.isPopular ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} flex flex-col`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
                <div className="mb-8 h-12 flex items-baseline">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-baseline"
                    >
                      <span className="text-4xl font-extrabold text-slate-900">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      {plan.monthlyPrice !== "Custom" && (
                        <span className="text-slate-500 ml-1">/{isYearly ? 'year' : 'month'}</span>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={openContactModal}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer ${
                    plan.isPopular 
                      ? 'bg-orange-600 text-white hover:bg-orange-700' 
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.monthlyPrice === "Custom" ? "Contact Us" : "Get Started"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              All Industries
            </h2>
            <p className="text-lg text-slate-600">
              Explore our comprehensive domain expertise across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {industry.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {industry.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-slate-800 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-slate-600 mb-8 flex-grow">
                  {industry.description}
                </p>
                
                <button onClick={openContactModal} className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700 mt-auto cursor-pointer">
                  Discuss your project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
