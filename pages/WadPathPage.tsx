import React from 'react';
import { Button, SectionTag, Card } from '../components/ui/Shared';
import { Infinity, Play, BarChart2, Zap, ArrowRight, MousePointer2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const benchmarkData = [
  { name: 'Monte Carlo (CPU)', speed: 10, fill: '#374151' },
  { name: 'Monte Carlo (GPU)', speed: 45, fill: '#4ade80' },
  { name: 'Quantara QPU', speed: 100, fill: '#3b82f6' },
];

const WadPathPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-[#080c14]"> {/* Slightly darker/bluer background for "Quantum" vibe */}
       {/* Hero */}
       <section className="relative px-6 max-w-7xl mx-auto flex flex-col items-center text-center mb-32 z-10">
          <div className="absolute top-0 inset-x-0 h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
          
          <SectionTag>Path Integral Core</SectionTag>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
             Quantum Advantage in <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Derivative Pricing</span>
          </h1>
          <p className="text-lg text-blue-200/60 max-w-3xl mx-auto mb-10 leading-relaxed">
             Harness the power of Feynman path integrals to value complex derivatives. Wa'dWizard evaluates the entire continuum of asset trajectories simultaneously.
          </p>
          <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white border-none">Request Whitepaper</Button>
              <Button variant="secondary" className="flex items-center gap-2"><Play className="w-4 h-4 fill-current"/> View Demo</Button>
          </div>
       </section>

       {/* Core Concept */}
       <section className="px-6 max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Core Concept: <span className="text-blue-500">Sum Over Histories</span></h2>
              <div className="prose prose-invert text-gray-400">
                  <p className="mb-4">
                      Traditional methods like Monte Carlo rely on random sampling of discrete paths. As the complexity of the derivative increases, the number of required samples explodes computationally.
                  </p>
                  <p className="mb-6">
                      Wa'dWizard takes a different approach. By encoding asset prices into quantum wavefunctions, we calculate the integral over <strong>all possible price paths</strong> simultaneously. This is the financial application of Richard Feynman's "Sum Over Histories" formulation of quantum mechanics.
                  </p>
              </div>
              <div className="flex gap-6 mt-8">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 w-40">
                      <div className="text-blue-400 mb-2"><Infinity /></div>
                      <div className="text-2xl font-bold text-white mb-1">~∞</div>
                      <div className="text-xs text-gray-500">Paths Evaluated</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 w-40">
                      <div className="text-blue-400 mb-2"><Zap /></div>
                      <div className="text-2xl font-bold text-white mb-1">O(√N)</div>
                      <div className="text-xs text-gray-500">Convergence Speedup</div>
                  </div>
              </div>
          </div>
          
          <div className="relative">
              <Card className="!p-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30">
                  <div className="bg-[#050B09] rounded-xl overflow-hidden relative h-[400px]">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2016/12/15/20/07/abstract-1909992_1280.jpg')] opacity-20 bg-cover bg-center"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-64 h-64 rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                              <div className="w-48 h-48 rounded-full border border-purple-500/40 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                                  <div className="w-32 h-32 rounded-full bg-blue-500/10 blur-xl"></div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="absolute top-4 left-4">
                          <div className="text-[10px] text-blue-400 font-mono border border-blue-500/30 px-2 py-1 rounded">QUANTUM MODE</div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono text-gray-500">
                          <span>CURRENT CALCULATION</span>
                          <span>CONFIDENCE: <span className="text-blue-400">99.998%</span></span>
                      </div>
                      <div className="absolute bottom-10 left-4 text-white font-bold text-lg">
                          Asian Call Option (Arithmetic)
                      </div>
                  </div>
              </Card>
          </div>
       </section>

       {/* Math Section */}
       <section className="bg-white/5 py-24 mb-24 border-y border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
               <h2 className="text-2xl font-bold text-white mb-12">The Mathematics of Valuation</h2>
               
               <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 mb-8 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   
                   {/* Simplified Feynman Path Integral Representation */}
                   <div className="text-3xl md:text-5xl font-serif text-white tracking-wider flex flex-wrap justify-center items-center gap-4">
                       <span className="opacity-50">C(S,t)</span>
                       <span>=</span>
                       <span>e<sup className="text-lg">-rT</sup></span>
                       <span className="text-5xl">∫</span>
                       <span className="italic text-blue-400">𝒟x(t)</span>
                       <span>e<sup className="text-lg">-S[x]</sup></span>
                       <span>Φ[x(T)]</span>
                   </div>
                   
                   <div className="mt-8 text-sm text-gray-500">
                       Hover over the terms to see their financial interpretation. Our quantum engine maps the action <em className="text-gray-400">S[x]</em> directly to market volatility surfaces.
                   </div>
               </div>
           </div>
       </section>

       {/* Benchmark Chart */}
       <section className="px-6 max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="bg-blue-900/10 border-blue-500/20">
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={benchmarkData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                             <XAxis type="number" hide />
                             <YAxis dataKey="name" type="category" width={120} tick={{fill: '#9ca3af', fontSize: 12}} tickLine={false} axisLine={false} />
                             <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#000', borderColor: '#333', color: '#fff'}} />
                             <Bar dataKey="speed" barSize={24} radius={[0, 4, 4, 0]}>
                                {benchmarkData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                             </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 px-4">
                    <div className="inline-block bg-blue-500 text-xs font-bold px-2 py-1 rounded text-white mb-2">BENCHMARK</div>
                    <h3 className="text-xl font-bold text-white">Asian Options Pricing</h3>
                </div>
            </Card>

            <div className="flex flex-col justify-center">
                 <h2 className="text-3xl font-bold text-white mb-6">10,000x Speed Improvement</h2>
                 <p className="text-gray-400 mb-8 leading-relaxed">
                     In a recent benchmark testing complex Asian options with daily averaging over 5 years, Wa'dWizard achieved convergence in 0.4 seconds, compared to 85 minutes for a standard Monte Carlo simulation on a high-performance cluster.
                 </p>
                 <div className="space-y-4">
                     <div>
                         <div className="flex justify-between text-xs text-gray-500 mb-1">
                             <span>Quantum</span>
                             <span>0.4s</span>
                         </div>
                         <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                             <div className="h-full bg-blue-500 w-full animate-pulse"></div>
                         </div>
                     </div>
                     <div>
                         <div className="flex justify-between text-xs text-gray-500 mb-1">
                             <span>Classical</span>
                             <span>5100s</span>
                         </div>
                         <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                             <div className="h-full bg-gray-600 w-[1%]"></div>
                         </div>
                     </div>
                 </div>
                 <a href="#" className="mt-8 text-blue-500 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">View Full Benchmark Report <ArrowRight className="w-4 h-4" /></a>
            </div>
       </section>

       {/* Footer */}
       <section className="py-24 bg-[#05080c] text-center border-t border-white/5">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to upgrade your pricing engine?</h2>
            <div className="flex justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white border-none">Start Free Trial</Button>
                <Button variant="outline">Contact Sales</Button>
            </div>
       </section>
    </div>
  );
};

export default WadPathPage;