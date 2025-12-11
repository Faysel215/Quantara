import React from 'react';
import { Button, SectionTag, Card, FeatureIcon, GridBackground } from '../components/ui/Shared';
import { ShieldCheck, Cpu, Activity, Scale, Zap, Lock, Globe } from 'lucide-react';
import { Page } from '../types';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center z-10">
        <GridBackground />
        <SectionTag>Quantum-Native Architecture</SectionTag>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          The Quantum Edge <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-500 to-teal-400">
            in Financial Security
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Harness the power of superposition for Sukuk management, valuations, and regulatory compliance with unmatched precision.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => onNavigate('QVAL')}>Explore Solutions</Button>
          <Button variant="secondary" size="lg">Watch Demo</Button>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="relative px-6 max-w-7xl mx-auto mb-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="!bg-white/5 !border-white/10">
            <div className="flex items-center gap-4 mb-2">
                <Cpu className="w-5 h-5 text-quantum-500" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Processing Power</span>
            </div>
            <div className="text-4xl font-bold text-white">10M+ <span className="text-lg font-normal text-gray-500">Qubits</span></div>
          </Card>
          <Card className="!bg-white/5 !border-white/10">
            <div className="flex items-center gap-4 mb-2">
                <ShieldCheck className="w-5 h-5 text-quantum-500" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Risk Mitigation</span>
            </div>
            <div className="text-4xl font-bold text-white">99.9% <span className="text-lg font-normal text-gray-500">Accuracy</span></div>
          </Card>
          <Card className="!bg-white/5 !border-white/10">
            <div className="flex items-center gap-4 mb-2">
                <Globe className="w-5 h-5 text-quantum-500" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Adoption</span>
            </div>
            <div className="text-4xl font-bold text-white">50+ <span className="text-lg font-normal text-gray-500">Global Banks</span></div>
          </Card>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative px-6 max-w-7xl mx-auto py-20 border-t border-white/5">
        <div className="mb-16">
            <SectionTag>Our Quantum Suite</SectionTag>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <h2 className="text-4xl font-bold text-white max-w-lg">Advanced Tools for Modern Finance</h2>
                <p className="text-gray-400 max-w-md">Deploying proprietary quantum algorithms to solve the most complex financial challenges in seconds, not days.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SukukGuard */}
            <Card className="flex flex-col justify-between h-full">
                <div>
                    <FeatureIcon><ShieldCheck className="w-6 h-6" /></FeatureIcon>
                    <h3 className="text-xl font-bold text-white mb-2">SukukGuard</h3>
                    <p className="text-sm text-gray-400 mb-6">Smart contract security tailored specifically for Islamic finance structures and asset provenance.</p>
                </div>
                <button onClick={() => onNavigate('SUKUK')} className="flex items-center text-quantum-500 text-sm font-bold hover:gap-2 transition-all">Learn more &rarr;</button>
            </Card>

             {/* Wa'dWizard */}
             <Card className="flex flex-col justify-between h-full">
                <div>
                    <FeatureIcon><Zap className="w-6 h-6" /></FeatureIcon>
                    <h3 className="text-xl font-bold text-white mb-2">Wa'dWizard</h3>
                    <p className="text-sm text-gray-400 mb-6">Advanced promise-based derivative modeling and simulation using quantum annealing.</p>
                </div>
                <button onClick={() => onNavigate('WAD')} className="flex items-center text-quantum-500 text-sm font-bold hover:gap-2 transition-all">Learn more &rarr;</button>
            </Card>

             {/* Q-Val */}
             <Card className="flex flex-col justify-between h-full">
                <div>
                    <FeatureIcon><Activity className="w-6 h-6" /></FeatureIcon>
                    <h3 className="text-xl font-bold text-white mb-2">Q-Val</h3>
                    <p className="text-sm text-gray-400 mb-6">Quantum-accelerated valuation for high-frequency assets and complex portfolio optimization.</p>
                </div>
                <button onClick={() => onNavigate('QVAL')} className="flex items-center text-quantum-500 text-sm font-bold hover:gap-2 transition-all">Learn more &rarr;</button>
            </Card>

             {/* ReguSim */}
             <Card className="flex flex-col justify-between h-full">
                <div>
                    <FeatureIcon><Scale className="w-6 h-6" /></FeatureIcon>
                    <h3 className="text-xl font-bold text-white mb-2">ReguSim</h3>
                    <p className="text-sm text-gray-400 mb-6">Real-time regulatory simulation and stress testing environments for global compliance.</p>
                </div>
                <button onClick={() => onNavigate('REGUSIM')} className="flex items-center text-quantum-500 text-sm font-bold hover:gap-2 transition-all">Learn more &rarr;</button>
            </Card>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-quantum-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-16">The Quantum Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-quantum-500/50 to-transparent"></div>
                
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10">
                        <div className="text-white"><Globe className="w-8 h-8" /></div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Data Ingestion</h3>
                    <p className="text-sm text-gray-400 max-w-xs">Market data is encoded into quantum states.</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-quantum-500/20 border border-quantum-500 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                        <div className="text-quantum-500"><Cpu className="w-8 h-8" /></div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Quantum Processing</h3>
                    <p className="text-sm text-gray-400 max-w-xs">Superposition algorithms analyze risk vectors.</p>
                </div>

                <div className="flex flex-col items-center">
                     <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10">
                        <div className="text-white"><Lock className="w-8 h-8" /></div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Actionable Output</h3>
                    <p className="text-sm text-gray-400 max-w-xs">Decrypted, compliant financial strategies.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-b from-white/5 to-transparent rounded-3xl p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://picsum.photos/id/108/1920/1080')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for the Quantum Leap?</h2>
                <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">Join the leading financial institutions securing their future with Quantara.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="Enter your work email" className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-quantum-500 flex-1" />
                    <Button>Get Started</Button>
                </div>
             </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;