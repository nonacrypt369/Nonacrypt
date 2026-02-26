import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  openContactModal: () => void;
}

export default function Hero({ openContactModal }: HeroProps) {
  return (
    <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://picsum.photos/seed/data/1920/1080.webp?blur=2"
          alt="Data Background"
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
            Data & Analytics Services
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Data & analytics <span className="text-orange-500">services</span>
          </h1>
          <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mb-10 max-w-2xl">
            Empower your enterprise with future-ready data solutions at Nonacrypt. We
            build modernized data platforms, robust foundations for Generative
            AI, and actionable insights that drive business value. From data
            strategy design to cloud migration and the implementation of
            future-ready platforms, we cover all your data needs.
          </p>
          <div className="mt-8 sm:flex">
            <div className="rounded-md shadow">
              <button
                onClick={openContactModal}
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-colors cursor-pointer"
              >
                Request a consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
