import React, { useState } from 'react';
import { Button, SectionTag, Card } from '../components/ui/Shared';
import { Move, TrendingUp, Search, Activity, Layers, ArrowRight, Infinity, Cpu, AlertTriangle, Crosshair, Scale, ShieldCheck, FileCheck } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceDot } from 'recharts';

const SimulationDemo: React.FC = () => {
    const [pathPower, setPathPower] = useState<number>(80); // 10^x
    const [confidence, setConfidence] = useState<number>(99);

    // Derived Simulation Values
    const precisionFactor = Math.pow(pathPower, 2) / 80; 
    const errorMarginRaw = (15 / (precisionFactor + 1)) * (confidence / 100);
    const errorMargin = errorMarginRaw.toFixed(5);
    
    const valuationBase = 42500.00;
    const noise = (Math.random() - 0.5) * (errorMarginRaw * 50); 
    const currentValuation = (valuationBase + noise).toFixed(2);
    
    const lowerBound = (valuationBase * (1 - errorMarginRaw/100)).toFixed(2);
    const upperBound = (valuationBase * (1 + errorMarginRaw/100)).toFixed(2);

    const isQuantum = pathPower > 40;

    // Visual width calculation
    const vizWidth = Math.max(1, Math.min(80, errorMarginRaw * 6));

    const convergenceData = Array.from({ length: 49 }, (_, i) => {
        const power = 4 + (i * 2);
        const pf = Math.pow(power, 2) / 80;
        const err = (15 / (pf + 1)) * 0.99;
        return { power, error: err };
    });

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="text-center mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Cpu size={14} /> Interactive Lab
                </div>
                <h3 className="text-2xl font-bold text-white">Quantum Parameter Simulation</h3>
                <p className="text-gray-400 text-sm mt-2">Adjust confidence and path complexity to observe valuation convergence.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Controls */}
                <div className="lg:col-span-4 space-y-10">
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-sm font-bold text-gray-300">Effective Paths (N)</label>
                            <div className="text-right">
                                <span className="text-2xl font-mono font-bold text-blue-500">10<sup>{pathPower}</sup></span>
                            </div>
                        </div>
                        <input 
                            type="range" 
                            min="4" 
                            max="100" 
                            step="1"
                            value={pathPower} 
                            onChange={(e) => setPathPower(Number(e.target.value))}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                        <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono uppercase">
                            <span>Monte Carlo (10⁴)</span>
                            <span>Quantum Limit (10¹⁰⁰)</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-sm font-bold text-gray-300">Confidence Margin</label>
                            <div className="text-right">
                                <span className="text-2xl font-mono font-bold text-cyan-400">{confidence}%</span>
                            </div>
                        </div>
                        <input 
                            type="range" 
                            min="90" 
                            max="99" 
                            step="1"
                            value={confidence} 
                            onChange={(e) => setConfidence(Number(e.target.value))}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                        />
                         <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono uppercase">
                            <span>Standard (90%)</span>
                            <span>Critical (99%)</span>
                        </div>
                    </div>

                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                        <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                            <TrendingUp size={16} className="text-blue-500" /> Convergence Theory
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            As effective paths increase towards 10<sup>100</sup>, the Feynman path integral stabilizes. Error margin decays exponentially, isolating the true asset value from noise.
                        </p>
                    </div>
                </div>

                {/* Visualizer Panel */}
                <div className="lg:col-span-8">
                    <div className="bg-black rounded-2xl border border-white/10 p-6 h-full relative overflow-hidden flex flex-col justify-between">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        {/* Metrics Row */}
                        <div className="relative z-10 grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-gray-900/80 backdrop-blur rounded-lg p-3 border border-white/10">
                                <div className="text-[10px] text-gray-500 uppercase">Valuation</div>
                                <div className="text-lg md:text-xl font-mono text-white font-bold">${currentValuation}</div>
                            </div>
                            <div className="bg-gray-900/80 backdrop-blur rounded-lg p-3 border border-white/10">
                                <div className="text-[10px] text-gray-500 uppercase">Error Margin</div>
                                <div className={`text-lg md:text-xl font-mono font-bold ${Number(errorMargin) < 0.01 ? 'text-green-400' : 'text-yellow-400'}`}>
                                    ±{errorMargin}%
                                </div>
                            </div>
                             <div className="bg-gray-900/80 backdrop-blur rounded-lg p-3 border border-white/10 flex items-center justify-between">
                                <div>
                                    <div className="text-[10px] text-gray-500 uppercase">State</div>
                                    <div className={`text-xs md:text-sm font-bold ${isQuantum ? 'text-blue-400' : 'text-red-400'}`}>
                                        {isQuantum ? 'QUANTUM' : 'CLASSICAL'}
                                    </div>
                                </div>
                                {isQuantum ? <Infinity className="text-blue-500" size={20} /> : <Activity className="text-red-500" size={20} />}
                            </div>
                        </div>

                        {/* Probability Density Viz */}
                        <div className="relative z-10 flex-1 flex flex-col justify-center items-center min-h-[180px] bg-gray-900/50 rounded-xl border border-white/5 mb-6 overflow-hidden transition-colors duration-500">
                            <div className="absolute top-3 left-3 text-[10px] text-gray-500 font-mono tracking-widest">PROBABILITY DENSITY</div>
                            
                            {/* Classical Limit Ghost Region - Visual Reference */}
                            <div 
                                className={`absolute inset-y-4 bg-white/5 border-x border-white/10 transition-opacity duration-700 flex items-start justify-end ${isQuantum ? 'opacity-100' : 'opacity-0'}`}
                                style={{ width: '60%', left: '20%' }}
                            >
                                <span className="text-[9px] text-gray-600 font-mono uppercase tracking-widest -rotate-90 origin-bottom-right absolute bottom-8 -right-3">Classical Limit</span>
                            </div>

                            {/* Center Line */}
                            <div className="absolute top-0 bottom-0 w-px bg-white/20 left-1/2 z-0"></div>

                            {/* The Probability Cloud - Dynamic Width & Color */}
                            <div 
                                className={`h-full transition-all duration-500 ease-out z-10 blur-md ${
                                    isQuantum 
                                        ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent' 
                                        : 'bg-gradient-to-r from-transparent via-red-500/50 to-transparent'
                                }`}
                                style={{
                                    width: `${vizWidth}%`, 
                                    opacity: 0.4 + (pathPower/200)
                                }}
                            ></div>
                            
                            {/* Dynamic Bounds Brackets */}
                             <div 
                                className={`absolute h-1/2 border-l transition-all duration-300 z-20 flex flex-col justify-between py-1 ${isQuantum ? 'border-blue-500/50' : 'border-red-500/50'}`}
                                style={{ left: `calc(50% - ${Math.max(4, errorMarginRaw * 80)}px)` }} 
                             >
                                <div className={`text-[9px] absolute -top-5 -left-2 whitespace-nowrap ${isQuantum ? 'text-blue-400' : 'text-red-400'}`}>${lowerBound}</div>
                             </div>
                             <div 
                                className={`absolute h-1/2 border-r transition-all duration-300 z-20 ${isQuantum ? 'border-blue-500/50' : 'border-red-500/50'}`}
                                style={{ right: `calc(50% - ${Math.max(4, errorMarginRaw * 80)}px)` }}
                             >
                                <div className={`text-[9px] absolute -top-5 -right-2 whitespace-nowrap ${isQuantum ? 'text-blue-400' : 'text-red-400'}`}>${upperBound}</div>
                             </div>

                             <div className={`absolute bottom-3 text-xs font-mono bg-black/60 px-2 py-1 rounded border transition-colors duration-300 ${isQuantum ? 'text-blue-300 border-blue-500/20' : 'text-red-300 border-red-500/20'}`}>
                                 Spread: ${(Number(upperBound) - Number(lowerBound)).toFixed(2)}
                             </div>
                        </div>

                        {/* Convergence Graph */}
                        <div className="h-32 w-full relative z-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={convergenceData}>
                                    <XAxis dataKey="power" type="number" domain={[4, 100]} hide />
                                    <YAxis hide />
                                    <Tooltip 
                                        cursor={{ stroke: '#333', strokeWidth: 1 }}
                                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px' }}
                                        labelStyle={{ color: '#666', fontSize: '12px' }}
                                        itemStyle={{ color: '#3b82f6', fontSize: '12px' }}
                                        formatter={(value: number) => [`${value.toFixed(4)}%`, 'Error']}
                                        labelFormatter={(label) => `10^${label} Paths`}
                                    />
                                    <Line 
                                        type="monotone" 
                                        dataKey="error" 
                                        stroke="#3b82f6" 
                                        strokeWidth={2} 
                                        dot={false}
                                        isAnimationActive={false}
                                    />
                                    <ReferenceDot 
                                        x={pathPower} 
                                        y={Number(errorMarginRaw)} 
                                        r={5} 
                                        fill="#fff" 
                                        stroke={isQuantum ? "#3b82f6" : "#ef4444"} 
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                            <div className="flex justify-between text-[10px] text-gray-600 mt-1 px-1">
                                <span>Low Fidelity (10⁴)</span>
                                <span>Convergence Curve</span>
                                <span>High Fidelity (10¹⁰⁰)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
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
          
          <div className="flex justify-center">
              <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors group">
                  View Detailed Benchmark Report <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
          </div>
      </section>

      {/* Interactive Simulation Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
              <SimulationDemo />
          </div>
      </section>

      {/* Shariah Compliance Checks Section */}
      <section className="px-6 max-w-7xl mx-auto py-24 border-b border-white/5">
         <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="md:w-1/3">
                 <SectionTag>Shariah Governance</SectionTag>
                 <h2 className="text-3xl font-bold text-white mb-6">Quantum Compliance Checks</h2>
                 <p className="text-gray-400 mb-6">
                     Unlike classical models which check compliance post-trade, our engine embeds Shariah logic into the wavefunction itself. Every valid path in the integral must satisfy these constraints.
                 </p>
                 <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">Download Fatwa</Button>
             </div>
             
             <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                     { title: "Gharar (Uncertainty) Limit", desc: "Quantifies contractual ambiguity. Any path exceeding the 5% threshold is collapsed and excluded from valuation." },
                     { title: "Riba (Interest) Screen", desc: "Deconstructs forward pricing to ensure returns stem from asset volatility and utility, not pure time-value of money." },
                     { title: "Maysir (Speculation) Filter", desc: "Identifies and prunes trajectories where payoff profiles resemble pure gambling (zero-sum) without underlying asset movement." },
                     { title: "Sequence Validation", desc: "Ensures the 'Promise' always precedes 'Possession' and 'Sale' in 100% of simulated histories, preserving contract validity." }
                 ].map((item, i) => (
                     <Card key={i} className="bg-white/5 hover:bg-white/10 transition-colors border-white/5">
                         <div className="flex items-center gap-3 mb-3">
                             <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                             <h3 className="font-bold text-white text-lg">{item.title}</h3>
                         </div>
                         <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                     </Card>
                 ))}
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