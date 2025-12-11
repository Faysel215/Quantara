import React from 'react';
import { Button, SectionTag, Card } from '../components/ui/Shared';
import { Play, Eye, Activity, ShieldAlert, Network, Layers } from 'lucide-react';

const ReguSimPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-quantum-900">
      {/* Hero */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-20">
         <SectionTag>Systemic Risk Monitor Active</SectionTag>
         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Predict the <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-500 to-green-300">Ripple Effect</span>
         </h1>
         <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Quantum Agent-Based Modeling for Systemic Risk Management. Simulate 10,000 macroeconomic scenarios in seconds to foresee contagion in Islamic banking networks.
         </p>
         <div className="flex justify-center gap-4">
             <Button className="flex items-center gap-2"><Play className="w-4 h-4 fill-current" /> Run Simulation</Button>
             <Button variant="secondary">View Demo</Button>
         </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-white/5 py-4 mb-24 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-6 flex justify-between gap-12 min-w-max">
             <div className="flex items-center gap-3">
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Liquidity Crunch Prob.</span>
                 <span className="text-white font-mono font-bold">12%</span>
                 <span className="text-red-500 text-xs">-2%</span>
             </div>
             <div className="flex items-center gap-3">
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Systemic Risk Index</span>
                 <span className="text-white font-mono font-bold">Low</span>
                 <span className="text-gray-500 text-xs">stable</span>
             </div>
             <div className="flex items-center gap-3">
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Simulation Speed</span>
                 <span className="text-white font-mono font-bold">10k/sec</span>
                 <span className="text-quantum-500 text-xs">+50x</span>
             </div>
             <div className="flex items-center gap-3">
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Active Nodes</span>
                 <span className="text-white font-mono font-bold">4,520</span>
                 <span className="text-quantum-500 text-xs">Live</span>
             </div>
          </div>
      </section>

      {/* Mission Control Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Mission Control for <br/><span className="text-gray-400">Macroprudential Policy</span></h2>
            <p className="text-gray-400 max-w-xl">A glassmorphic interface designed for advanced stress testing and regulatory foresight.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-white text-lg">Quantum Agent-Based Models</h3>
                    <Network className="text-quantum-500" />
                </div>
                <p className="text-sm text-gray-400 mb-8">Handles complexity of Islamic finance contracts (Sukuk, Murabaha) with higher fidelity than classical linear models.</p>
                <div className="h-24 bg-black/40 rounded-lg border border-white/5 flex items-end p-2 gap-1">
                    {/* Placeholder bars */}
                    {[20,40,30,50,40,60,70,50,80].map((h,i) => (
                        <div key={i} className="flex-1 bg-gray-700 rounded-t-sm" style={{height: `${h}%`}}></div>
                    ))}
                </div>
            </Card>

            <Card className="group hover:bg-white/10 transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-white text-lg">Stress Test Scenarios</h3>
                    <Activity className="text-quantum-500" />
                </div>
                <p className="text-sm text-gray-400 mb-8">Simulate cascades of default and liquidity drying up across the network. Test against oil price shocks.</p>
                <div className="h-24 bg-black/40 rounded-lg border border-white/5 flex items-center justify-center p-2 gap-3">
                     <div className="w-1 h-12 bg-quantum-500/30 rounded-full"></div>
                     <div className="w-1 h-16 bg-quantum-500/50 rounded-full"></div>
                     <div className="w-1 h-8 bg-quantum-500 rounded-full animate-pulse"></div>
                     <div className="w-1 h-14 bg-quantum-500/50 rounded-full"></div>
                     <div className="w-1 h-10 bg-quantum-500/30 rounded-full"></div>
                </div>
            </Card>

            <Card className="group hover:bg-white/10 transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-white text-lg">Regulatory Foresight</h3>
                    <Eye className="text-quantum-500" />
                </div>
                <p className="text-sm text-gray-400 mb-8">Predict systemic risks before the crisis hits using predictive analytics powered by Q-Val integration.</p>
                <div className="h-24 bg-black/40 rounded-lg border border-white/5 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-quantum-500/30 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-quantum-500 animate-ping"></div>
                    </div>
                </div>
            </Card>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
          <Card className="!p-10 flex flex-col md:flex-row gap-12 bg-white/5 border-white/10">
             <div className="flex-1">
                 <SectionTag>Deep Dive</SectionTag>
                 <h2 className="text-3xl font-bold text-white mb-6">The Anatomy of <span className="text-quantum-500">Contagion</span></h2>
                 <p className="text-gray-400 mb-8">A breakdown of how a default in one institution impacts the liquidity of the entire network. Visualize the hidden dependencies between Sukuk holders and issuing banks.</p>
                 <ul className="space-y-4">
                     {['Map interbank exposure in real-time', 'Identify "Too Connected to Fail" nodes', 'Simulate liquidity hoarding behaviors'].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-white text-sm">
                             <div className="w-5 h-5 rounded-full bg-quantum-500 flex items-center justify-center flex-shrink-0">
                                 <div className="w-2 h-2 bg-quantum-900 rounded-full"></div>
                             </div>
                             {item}
                         </li>
                     ))}
                 </ul>
                 <Button variant="outline" className="mt-8">Explore Visualizer &rarr;</Button>
             </div>
             <div className="flex-1 bg-black rounded-xl border border-white/10 relative overflow-hidden h-[300px] md:h-auto">
                 {/* Contagion Network Visualization Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-full h-full opacity-60" viewBox="0 0 400 300">
                          {[...Array(20)].map((_, i) => (
                              <circle key={i} cx={Math.random() * 400} cy={Math.random() * 300} r={Math.random() * 3 + 2} fill={Math.random() > 0.8 ? '#ef4444' : '#22c55e'} />
                          ))}
                           <line x1="100" y1="150" x2="300" y2="150" stroke="#374151" strokeWidth="0.5" />
                           <line x1="100" y1="150" x2="200" y2="50" stroke="#374151" strokeWidth="0.5" />
                           <line x1="300" y1="150" x2="200" y2="250" stroke="#374151" strokeWidth="0.5" />
                           {/* Central Node */}
                           <circle cx="200" cy="150" r="10" fill="#ef4444" className="animate-pulse" />
                           <circle cx="200" cy="150" r="40" stroke="#ef4444" strokeOpacity="0.3" fill="none" className="animate-ping" />
                      </svg>
                 </div>
                 <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur rounded p-3 text-xs flex justify-between items-center border border-white/10">
                     <span className="text-gray-300">SCENARIO #492<br/><strong className="text-white text-sm">Oil Price Shock (-20%)</strong></span>
                     <div className="flex gap-1">
                         <div className="w-2 h-2 rounded-full bg-red-500"></div>
                         <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                     </div>
                 </div>
             </div>
          </Card>
      </section>

      {/* Ecosystem Link */}
      <section className="px-6 max-w-7xl mx-auto py-20 text-center">
           <h2 className="text-3xl font-bold text-white mb-12">Integrated Quantum Ecosystem</h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8">
               <div className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <Card className="w-64 h-40 flex flex-col items-center justify-center">
                        <ShieldAlert className="w-8 h-8 mb-2 text-gray-400" />
                        <div className="text-white font-bold">SukukGuard</div>
                        <div className="text-xs text-gray-500">Smart Contract Auditing</div>
                    </Card>
               </div>
               <div className="relative">
                    <div className="absolute -inset-1 bg-quantum-500/50 blur rounded-2xl"></div>
                    <Card className="w-72 h-48 flex flex-col items-center justify-center bg-quantum-900 border-quantum-500 relative z-10">
                        <Layers className="w-10 h-10 mb-2 text-quantum-500" />
                        <div className="text-white font-bold text-xl">ReguSim</div>
                        <div className="text-xs text-quantum-500">Systemic Contagion Sandbox</div>
                    </Card>
               </div>
               <div className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <Card className="w-64 h-40 flex flex-col items-center justify-center">
                        <Activity className="w-8 h-8 mb-2 text-gray-400" />
                        <div className="text-white font-bold">Q-Val</div>
                        <div className="text-xs text-gray-500">Valuation Engine</div>
                    </Card>
               </div>
           </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-t from-black to-quantum-900 py-32 px-6">
           <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-12 text-center border border-white/10">
               <h2 className="text-4xl font-bold text-white mb-6">Ready to see the <span className="text-quantum-500">whole picture?</span></h2>
               <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join central banks and major Islamic financial institutions using ReguSim to build a more resilient future.</p>
               <div className="flex justify-center gap-4">
                   <Button size="lg">Request Access</Button>
                   <Button variant="secondary" size="lg">Read Documentation</Button>
               </div>
           </div>
      </section>
    </div>
  );
};

export default ReguSimPage;
