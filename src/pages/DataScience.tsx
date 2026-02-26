import { motion } from "motion/react";
import { ArrowRight, BrainCircuit, Network, Cpu, Lightbulb } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import SEO from "../components/SEO";

export default function DataScience() {
  const { openContactModal } = useOutletContext<{ openContactModal: () => void }>();

  return (
    <div className="pt-20">
      <SEO 
        title="Data Science Consulting" 
        description="Unlock the hidden value in your data. Our data science experts build advanced machine learning models and algorithms to solve complex business problems."
        path="/#/services/data-science"
      />
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://picsum.photos/seed/datascience/1920/1080.webp?blur=2"
            alt="Data Science"
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
              Services / Data Science
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
              Data Science <span className="text-orange-500">Consulting</span>
            </h1>
            <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mb-10 max-w-2xl">
              Unlock the hidden value in your data. Our data science experts build advanced machine learning models and algorithms to solve complex business problems and automate decision-making.
            </p>
            <button 
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer"
            >
              Discuss your project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Our Data Science Expertise
            </h2>
            <p className="text-lg text-slate-600">
              From exploratory data analysis to deploying models in production, we cover the entire data science lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BrainCircuit,
                title: "Machine Learning Models",
                description: "Custom ML models for classification, regression, and clustering to automate processes and improve accuracy."
              },
              {
                icon: Network,
                title: "Deep Learning & Neural Networks",
                description: "Advanced neural networks for complex tasks like image recognition, natural language processing, and sequence prediction."
              },
              {
                icon: Cpu,
                title: "MLOps & Model Deployment",
                description: "Robust pipelines for training, testing, deploying, and monitoring machine learning models in production environments."
              },
              {
                icon: Lightbulb,
                title: "Optimization Algorithms",
                description: "Mathematical optimization to solve complex resource allocation, routing, and scheduling problems."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                  <item.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
