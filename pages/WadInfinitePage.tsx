import React from 'react';
import { Button, SectionTag, Card } from '../components/ui/Shared';
import { Move, TrendingUp, Search, Activity, Layers, ArrowRight, Infinity } from 'lucide-react';

const WadInfinitePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-[#020408]">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto text-center mb-24">
         <SectionTag>Quantum-Powered Modeling</SectionTag>
         <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
             Infinite Trajectories: <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Beyond Monte Carlo</span>
         </h1>
         <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
             Harnessing quantum superposition to evaluate effectively infinite market realities simultaneously. Precision where classical computing finds only noise.
         </p>
         <div className="flex justify-center gap-4">
             <Button className="bg-blue-600 hover:bg-blue-500 border-none text-white">Explore the Model</Button>
             <Button variant="secondary">Read Whitepaper</Button>
         </div>
      </section>

      {/* Visual Comparison */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">The Classical Limit vs. Quantum Precision</h2>
              <p className="text-gray-400">Where standard models fragment under volatility, Wa'dWizard thrives.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Classical Card */}
              <Card className="bg-gray-900 border-gray-800">
                  <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <h3 className="font-bold text-white">Classical Monte Carlo</h3>
                      </div>
                      <Activity className="text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-400 mb-6 h-12">
                      Limited by computational power to finite path simulations (10k-100k). Misses tail risks and produces jagged, approximate results in volatile markets.
                  </p>
                  <div className="aspect-video bg-black rounded-lg border border-white/5 relative overflow-hidden p-4">
                      {/* Jagged Line Viz */}
                      <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                          <path d="M0 25 L10 20 L20 30 L30 15 L40 35 L50 25 L60 40 L70 10 L80 30 L90 20 L100 35" stroke="#ef4444" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
                          <path d="M0 25 L10 22 L20 28 L30 18 L40 32 L50 26 L60 38 L70 12 L80 28 L90 22 L100 33" stroke="#ef4444" strokeWidth="0.5" fill="none" opacity="0.5" vectorEffect="non-scaling-stroke" />
                          <path d="M0 25 L10 28 L20 22 L30 25 L40 20 L50 30 L60 25 L70 35 L80 20 L90 30 L100 25" stroke="#ef4444" strokeWidth="0.5" fill="none" opacity="0.3" vectorEffect="non-scaling-stroke" />
                      </svg>
                      <div className="absolute bottom-2 left-2 text-[10px] text-red-500 font-mono">Error Margin: ±2.4%</div>
                  </div>
              </Card>

              {/* Quantum Card */}
              <Card className="bg-blue-900/10 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                  <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
                          <h3 className="font-bold text-white">Quantum Path Integral</h3>
                      </div>
                      <Infinity className="text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-400 mb-6 h-12">
                      Considers effectively infinite paths via superposition. Creates smooth, dense probability gradients revealing the true market value hidden in the noise.
                  </p>
                  <div className="aspect-video bg-black rounded-lg border border-white/5 relative overflow-hidden">
                      {/* Smooth Gradient Viz */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-50"></div>
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 50" preserveAspectRatio="none">
                          <defs>
                              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                              </linearGradient>
                          </defs>
                          <path d="M0 50 Q 50 0 100 50" fill="url(#grad1)" />
                      </svg>
                      <div className="absolute bottom-2 left-2 text-[10px] text-blue-400 font-mono">Error Margin: &lt;0.001%</div>
                  </div>
              </Card>
          </div>
      </section>

      {/* Convergence Bar Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-12">Convergence at Speed</h2>
              
              <div className="bg-black/50 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                   <div className="flex justify-between items-center text-xs text-gray-400 mb-2 font-mono">
                       <span>SIMULATION PATHS</span>
                       <span className="text-blue-400">10^100 (Effective)</span>
                   </div>
                   <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-8">
                       <div className="h-full bg-blue-500 w-[99%] shadow-[0_0_15px_#3b82f6]"></div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/5 rounded p-4">
                           <div className="text-[10px] uppercase text-gray-500 mb-1">Valuation Time</div>
                           <div className="text-2xl font-mono text-white">0.042s</div>
                       </div>
                       <div className="bg-white/5 rounded p-4">
                           <div className="text-[10px] uppercase text-gray-500 mb-1">Confidence</div>
                           <div className="text-2xl font-mono text-quantum-500">99.99%</div>
                       </div>
                   </div>
                   
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-3xl pointer-events-none"></div>
              </div>
          </div>
      </section>

      {/* Applications Grid */}
      <section className="px-6 max-w-7xl mx-auto py-24">
          <h2 className="text-3xl font-bold text-white mb-12">Robust Pricing for Complex Derivatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                  <TrendingUp className="text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Tail Risk Visibility</h3>
                  <p className="text-sm text-gray-400">Identify extreme market events that lie between the simulation paths of standard Monte Carlo models.</p>
              </Card>
              <Card>
                  <Move className="text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Real-time Recalibration</h3>
                  <p className="text-sm text-gray-400">Adjust volatility surfaces instantly. The model re-converges in milliseconds, not minutes.</p>
              </Card>
              <Card>
                  <Layers className="text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Wa'd Structure Validation</h3>
                  <p className="text-sm text-gray-400">Specifically tuned for the non-linear payoffs of complex Wa'd-based hedging instruments.</p>
              </Card>
          </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-blue-600 rounded-3xl p-12 text-center shadow-2xl shadow-blue-900/50">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to see the full picture?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Schedule a demo to see Infinite Trajectories modeling your own asset portfolio in real-time.</p>
            <div className="flex justify-center gap-4">
                <Button className="bg-white text-blue-900 hover:bg-gray-100">Request Demo</Button>
                <Button className="bg-blue-700 text-white border border-blue-500 hover:bg-blue-800">Contact Sales</Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default WadInfinitePage;