import { Phone, Wrench, CheckCircle, Shield } from "lucide-react";

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ProcessSteps() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      icon: <Phone className="w-6 h-6" />,
      title: "Bizi Arayın",
      description:
        "İhtiyacınızı bildirin, acil durumlar için 7/24 destek hattımız aktif",
    },
    {
      number: "02",
      icon: <Wrench className="w-6 h-6" />,
      title: "Arıza Tespiti",
      description:
        "Uzman teknisyenimiz ekipmanınızı yerinde inceler",
    },
    {
      number: "03",
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Onarım & Bakım",
      description:
        "Orijinal parçalarla profesyonel onarım gerçekleştirilir",
    },
    {
      number: "04",
      icon: <Shield className="w-6 h-6" />,
      title: "Teslim & Garanti",
      description:
        "İşlem sonrası 6 ay garanti ile teslim edilir",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-700 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-400 text-sm font-semibold uppercase tracking-wider">
              SERVİS SÜRECİ
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Nasıl Çalışıyoruz?
          </h2>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            4 adımda ekipmanınız tamamen onarılıp, test edilerek teslim edilir
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-24 left-12 right-12 h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500/30 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col">
                {/* Desktop: Center align first two rows, bottom two rows */}
                <div className={`flex flex-col h-full ${index < 2 ? "lg:items-center" : "lg:items-center"}`}>
                  {/* Step Number - Large and prominent */}
                  <div className="mb-6 relative">
                    <div className="relative z-20">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/20">
                        <span className="text-4xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Icon indicator - positioned in step number area */}
                  <div className="absolute -top-3 -right-3 z-30 bg-slate-900 p-2 rounded-lg border border-orange-500/50">
                    <div className="text-orange-400">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <div className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-6 md:p-7 hover:border-orange-500/50 transition-all duration-300 group flex-1 flex flex-col">
                    {/* Step Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors text-center lg:text-center">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed text-center lg:text-center">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile vertical connector */}
                {index < steps.length - 1 && (
                  <div className="flex lg:hidden justify-center my-6">
                    <div className="w-1.5 h-12 bg-gradient-to-b from-orange-500 to-orange-400/20 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators - Optional Enhancement */}
        <div className="mt-20 md:mt-24 grid grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all">
            <p className="text-orange-400 text-2xl md:text-3xl font-bold mb-2">7/24</p>
            <p className="text-slate-300 text-sm md:text-base">Acil Destek</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all">
            <p className="text-orange-400 text-2xl md:text-3xl font-bold mb-2">6 Ay</p>
            <p className="text-slate-300 text-sm md:text-base">Garantili Hizmet</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all">
            <p className="text-orange-400 text-2xl md:text-3xl font-bold mb-2">Yerinde</p>
            <p className="text-slate-300 text-sm md:text-base">Bakım & Onarım</p>
          </div>
        </div>
      </div>
    </section>
  );
}
