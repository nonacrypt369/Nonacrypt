import { motion } from "motion/react";
import { ArrowRight, Server, Infinity, ShieldCheck, CloudLightning } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import SEO from "../components/SEO";

export default function DevOps() {
  const { openContactModal } = useOutletContext<{ openContactModal: () => void }>();

  return (
    <div className="pt-20">
      <SEO 
        title="Cloud & DevOps Services" 
        description="Accelerate your software delivery and ensure high availability. Our DevOps engineers implement CI/CD pipelines, automate infrastructure, and optimize cloud environments."
        path="/services/devops"
      />
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://picsum.photos/seed/devops/1920/1080.webp?blur=2"
            alt="DevOps Services"
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
              Services / DevOps
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
              Cloud & DevOps <span className="text-orange-500">Services</span>
            </h1>
            <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mb-10 max-w-2xl">
              Accelerate your software delivery and ensure high availability. Our DevOps engineers implement CI/CD pipelines, automate infrastructure, and optimize cloud environments for maximum performance and security.
            </p>
            <button 
              onClick={openContactModal}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer"
            >
              Optimize your infrastructure
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
              Our DevOps Expertise
            </h2>
            <p className="text-lg text-slate-600">
              We bridge the gap between development and operations to deliver software faster and more reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Infinity,
                title: "Continuous Integration & Delivery (CI/CD)",
                description: "Automate your build, test, and deployment processes to release software faster and with fewer errors."
              },
              {
                icon: Server,
                title: "Infrastructure as Code (IaC)",
                description: "Manage and provision your infrastructure using code (Terraform, CloudFormation) for consistency and scalability."
              },
              {
                icon: CloudLightning,
                title: "Cloud Migration & Optimization",
                description: "Seamlessly migrate your applications to AWS, Azure, or GCP, and optimize them for cost and performance."
              },
              {
                icon: ShieldCheck,
                title: "DevSecOps & Compliance",
                description: "Integrate security practices into your DevOps pipeline to ensure compliance and protect your infrastructure."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
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
