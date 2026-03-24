import React from 'react';
import { Shield, Award } from 'lucide-react';
import { config } from '../data/config';

const TrustSignals = () => {
  return (
    <section className="py-12 bg-slate-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center mb-10 opacity-70">
          <span className="text-xs font-semibold text-white tracking-wider uppercase">Certificados e Parceiros Oficiais</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
            <Shield className="w-8 h-8 text-primary" />
            {config.trustSignals.certificate}
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
            <Award className="w-8 h-8 text-yellow-500" />
            {config.trustSignals.yearsInMarket}
          </div>
          {config.trustSignals.partners.map((partner, index) => (
            <div key={index} className="text-3xl font-black tracking-tighter text-white">{partner}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
