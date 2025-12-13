import React from 'react';
import { Button, SectionTag, Card } from '../components/ui/Shared';
import { Zap, Gauge, GitBranch, RefreshCcw, TrendingUp, Link, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface WadWizardPageProps {
  onNavigate: (page: Page) => void;
}

const WadWizardPage: React.FC<WadWizardPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
         <div>
             <SectionTag>Quantum Precision V2.0</SectionTag>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                 Precision Pricing <br />
                 at <span className="text-quantum-500">Quantum Speeds</span>
             </h1>
             <p className="text-lg text-gray-400 mb-8 max-w-lg">
                 Harness Quantum Path Integrals to structure and price complex multi-leg derivatives with unparalleled accuracy in real-time.
             </p>
             <div className="flex gap-4">
                 <Button>Start Pricing</Button>
                 <Button variant="outline">View Documentation</Button>
             </div>
         </div>
         <div className="relative h-[400px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
             {/* Abstract wave viz */}
             <div className="absolute inset-0 bg-[url('https://picsum.photos/id/111/800/600')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-quantum-900 via-transparent to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8">
                 <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Calculation Confidence</div>
                 <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-mono text-white font-bold">99.999%</span>
                     <Zap className="w-5 h-5 text-quantum-500 fill-current" />
                 </div>
                 <div className="h-1 w-full bg-gray-700 mt-4 rounded-full overflow-hidden">
                     <div className="h-full w-[99%] bg-quantum-500 shadow-[0_0_10px_#22c55e]"></div>
                 </div>
                 <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-mono">
                     <span>Integral_Path_v4.exe</span>
                     <span>Processing infinite trajectories...</span>
                 </div>
             </div>
         </div>
      </section>

      {/* Metrics */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
          <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold text-white">Performance Metrics</h2>
              <span className="text-xs text-gray-500">Compared to classical Monte Carlo methods</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-t-4 border-t-quantum-500">
                  <div className="flex justify-between mb-4">
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-quantum-500"><Gauge size={16} /></div>
                  </div>
                  <div className="text-sm text-gray-400 mb-1">Calculation Speedup</div>
                  <div className="text-3xl font-bold text-white flex items-end gap-2">
                      1000x <span className="text-xs bg-quantum-500/20 text-quantum-500 px-2 py-1 rounded">+500%</span>
                  </div>
              </Card>
              <Card className="border-t-4 border-t-quantum-500">
                  <div className="flex justify-between mb-4">
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-quantum-500"><TrendingUp size={16} /></div>
                  </div>
                  <div className="text-sm text-gray-400 mb-1">Model Accuracy</div>
                  <div className="text-3xl font-bold text-white flex items-end gap-2">
                      99.99% <span className="text-xs bg-quantum-500/20 text-quantum-500 px-2 py-1 rounded">+0.5%</span>
                  </div>
              </Card>
              <Card className="border-t-4 border-t-quantum-500">
                  <div className="flex justify-between mb-4">
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-quantum-500"><GitBranch size={16} /></div>
                  </div>
                  <div className="text-sm text-gray-400 mb-1">Paths Simulated</div>
                  <div className="text-3xl font-bold text-white flex items-end gap-2">
                      Infinite <span className="text-xs bg-quantum-500/20 text-quantum-500 px-2 py-1 rounded">Continuous</span>
                  </div>
              </Card>
          </div>
      </section>

      {/* Features Swipe */}
      <section className="bg-white/5 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-white mb-2">Engineered for Complexity</h2>
              <p className="text-gray-400 mb-12">Swipe to explore our quantum structuring capabilities</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 - Multi-leg */}
                  <div className="group cursor-pointer" onClick={() => onNavigate('WAD_MULTILEG')}>
                      <div className="aspect-video bg-black rounded-xl border border-white/10 mb-6 overflow-hidden relative">
                          <img src="https://picsum.photos/id/132/600/400" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="Multi-leg" />
                          <div className="absolute bottom-4 left-4">
                              <Zap className="text-quantum-500 w-6 h-6" />
                          </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Multi-leg Pricing</h3>
                      <p className="text-sm text-gray-400 mb-4">Seamlessly price complex instruments with multiple dependencies. Our algorithm untangles correlations instantly.</p>
                      <button className="text-quantum-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-4 h-4" />
                      </button>
                  </div>
                  
                  {/* Card 2 - Path Integral */}
                  <div className="group cursor-pointer" onClick={() => onNavigate('WAD_PATH')}>
                      <div className="aspect-video bg-black rounded-xl border border-white/10 mb-6 overflow-hidden relative">
                           <img src="https://picsum.photos/id/14/600/400" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="Path Integral" />
                           <div className="absolute bottom-4 left-4">
                              <TrendingUp className="text-quantum-500 w-6 h-6" />
                          </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Path Integral Calculation</h3>
                      <p className="text-sm text-gray-400 mb-4">Analyze infinite market trajectories simultaneously. Move beyond discrete steps to continuous flow analysis.</p>
                      <button className="text-quantum-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-4 h-4" />
                      </button>
                  </div>
                  
                   {/* Card 3 - Infinite */}
                   <div className="group cursor-pointer" onClick={() => onNavigate('WAD_INFINITE')}>
                      <div className="aspect-video bg-black rounded-xl border border-white/10 mb-6 overflow-hidden relative">
                           <img src="https://picsum.photos/id/45/600/400" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" alt="Infinite Trajectories" />
                           <div className="absolute bottom-4 left-4">
                              <GitBranch className="text-quantum-500 w-6 h-6" />
                          </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Infinite Trajectories</h3>
                      <p className="text-sm text-gray-400 mb-4">Simulate outcomes with quantum precision. Capture tail risks that standard Monte Carlo simulations miss.</p>
                      <button className="text-quantum-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-4 h-4" />
                      </button>
                  </div>
              </div>
          </div>
      </section>

      {/* Why Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
              <div className="text-quantum-500 font-bold uppercase tracking-widest text-xs mb-2">Why Wa'dWizard?</div>
              <h2 className="text-4xl font-bold text-white">Financial Engineering Reimagined</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-quantum-500 shrink-0"><RefreshCcw /></div>
                  <div>
                      <h3 className="text-xl font-bold text-white mb-2">Structuring Islamic Derivatives</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Ensure Shariah compliance while navigating complex derivative structures. Our engine validates Wa'd contracts against predefined parameters automatically.</p>
                  </div>
              </div>
              <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-quantum-500 shrink-0"><TrendingUp /></div>
                  <div>
                      <h3 className="text-xl font-bold text-white mb-2">Hedging Currency Risk</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Deploy advanced hedging strategies with confidence. Wa'dWizard simulates currency fluctuations across thousands of scenarios instantly.</p>
                  </div>
              </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-quantum-500 shrink-0"><Zap /></div>
                  <div>
                      <h3 className="text-xl font-bold text-white mb-2">Arbitrage Detection</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Spot pricing inefficiencies before the market corrects. Our quantum algorithms scan cross-market data to highlight profitable gaps.</p>
                  </div>
              </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-quantum-500 shrink-0"><Link /></div>
                  <div>
                      <h3 className="text-xl font-bold text-white mb-2">Seamless API Integration</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Plug Wa'dWizard directly into your existing trading infrastructure. Low-latency endpoints designed for high-frequency environments.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 border-t border-white/10 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to upgrade your pricing model?</h2>
            <div className="flex justify-center gap-4">
                <Button size="lg">Request Demo</Button>
                <Button variant="outline" size="lg">Contact Sales</Button>
            </div>
          </div>
      </section>
    </div>
  );
};

export default WadWizardPage;