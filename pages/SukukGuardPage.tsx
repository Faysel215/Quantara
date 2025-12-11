import React from 'react';
import { Button, SectionTag, Card, FeatureIcon } from '../components/ui/Shared';
import { ShieldCheck, PlayCircle, Eye, RefreshCw, Box, FileCheck } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const areaData = [
  { time: '09:00', value: 30 },
  { time: '10:00', value: 35 },
  { time: '11:00', value: 45 },
  { time: '12:00', value: 48 },
  { time: '13:00', value: 42 },
  { time: '14:00', value: 50 },
  { time: '15:00', value: 58 },
  { time: 'Now', value: 65 },
];

const SukukGuardPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
         <div>
            <SectionTag>Quantum-Enhanced</SectionTag>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Precision in <br/>
                <span className="text-quantum-500">Perpetual Tangibility</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Eliminate the Tangibility Cliff. Monitor your physical asset vs. debt receivable ratios with real-time predictive modeling.
            </p>
            <div className="flex gap-4">
                <Button>Start Monitoring</Button>
                <Button variant="outline">View Documentation</Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs text-gray-500">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 border border-black"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-600 border border-black"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 border border-black"></div>
                </div>
                Trusted by leading Islamic Financial Institutions
            </div>
         </div>

         {/* Hero Widget */}
         <div className="relative">
            <Card className="bg-quantum-900 border-quantum-500/20 shadow-[0_0_50px_rgba(34,197,94,0.1)] p-10 flex flex-col items-center justify-center aspect-square md:aspect-auto md:h-[500px]">
                <div className="relative w-64 h-32 overflow-hidden mb-6">
                    {/* Semi circle gauge using CSS/SVG for simplicity or recharts pie */}
                    <div className="absolute inset-0 flex items-end justify-center">
                        <svg viewBox="0 0 100 50" className="w-full h-full">
                            <path d="M10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#374151" strokeWidth="10" strokeLinecap="round" />
                            <path d="M10 50 A 40 40 0 0 1 60 10" fill="none" stroke="#22c55e" strokeWidth="10" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 text-center">
                        <div className="text-5xl font-bold text-white">55%</div>
                        <div className="text-xs text-quantum-500 uppercase tracking-widest font-bold mt-1">Tangibility Ratio</div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full mt-8">
                     <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-xs text-gray-400 uppercase mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-quantum-500"></div>Liquidity</div>
                        <div className="text-xl font-mono text-white">Stable</div>
                     </div>
                     <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-xs text-gray-400 uppercase mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div>Risk Limit</div>
                        <div className="text-xl font-mono text-white">33% Floor</div>
                     </div>
                </div>
            </Card>
         </div>
      </section>

      {/* Stats Row */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="!py-6 flex justify-between items-center">
                <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Current Ratio</div>
                    <div className="text-3xl font-bold text-white">55%</div>
                    <div className="text-xs text-quantum-500 mt-1">+5% (Safe Zone)</div>
                </div>
                <div className="text-quantum-500"><ShieldCheck /></div>
            </Card>
            <Card className="!py-6 flex justify-between items-center">
                <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Projected Drift</div>
                    <div className="text-3xl font-bold text-white">+2.4%</div>
                    <div className="text-xs text-red-400 mt-1">-0.1% (Stabilized)</div>
                </div>
                <div className="text-gray-500"><RefreshCw /></div>
            </Card>
            <Card className="!py-6 flex justify-between items-center">
                <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Compliance Status</div>
                    <div className="text-3xl font-bold text-white">AAOIFI</div>
                    <div className="text-xs text-gray-400 mt-1">Standard Verified</div>
                </div>
                <div className="text-quantum-500"><FileCheck /></div>
            </Card>
         </div>
      </section>

      {/* Main Chart Section */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-Time <span className="text-quantum-500 border-b-4 border-quantum-500">Ratio Monitoring</span> & Cliff Prevention</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our quantum-enhanced algorithms detect micro-movements in asset valuation before they impact your compliance standing.</p>
          </div>

          <Card className="bg-quantum-800/50 backdrop-blur !p-0 overflow-hidden">
             <div className="p-8 border-b border-white/5 flex justify-between items-end">
                <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Asset vs. Debt Ratio Trend</div>
                    <div className="text-4xl font-bold text-white flex items-center gap-4">
                        55% <span className="text-lg font-normal text-gray-400">Tangibility</span>
                        <span className="text-sm bg-quantum-500/10 text-quantum-500 px-2 py-1 rounded font-bold">+1.2%</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    {['1H', '1D', '1W'].map(t => (
                        <button key={t} className={`px-3 py-1 text-xs rounded-full ${t === '1H' ? 'bg-quantum-500 text-quantum-900 font-bold' : 'bg-white/5 text-gray-400'}`}>{t}</button>
                    ))}
                </div>
             </div>
             
             <div className="h-[300px] w-full p-6 relative">
                 <div className="absolute top-[70%] left-0 right-0 border-t border-red-500/30 border-dashed z-0 flex items-center">
                    <span className="text-[10px] text-red-500 ml-4 bg-quantum-900 px-1">Min Threshold (33%)</span>
                 </div>
                 <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={areaData}>
                         <defs>
                             <linearGradient id="colorRatio" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                                 <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                             </linearGradient>
                         </defs>
                         <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorRatio)" />
                     </AreaChart>
                 </ResponsiveContainer>
             </div>
             <div className="grid grid-cols-7 border-t border-white/5 text-xs text-gray-500 p-4 text-center">
                {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 'Now'].map(t => <div key={t}>{t}</div>)}
             </div>
          </Card>
      </section>

      {/* Feature Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
         <Card>
            <FeatureIcon><RefreshCw /></FeatureIcon>
            <h3 className="text-lg font-bold text-white mb-2">Auto-Rebalancing</h3>
            <p className="text-sm text-gray-400">Smart contract triggers automatically execute asset purchases when ratios approach the 33% cliff.</p>
         </Card>
         <Card>
            <FeatureIcon><Box /></FeatureIcon>
            <h3 className="text-lg font-bold text-white mb-2">Asset Verification</h3>
            <p className="text-sm text-gray-400">Digital twin integration ensures every debt receivable is backed by verifiable physical assets.</p>
         </Card>
         <Card>
            <FeatureIcon><Eye /></FeatureIcon>
            <h3 className="text-lg font-bold text-white mb-2">Regulatory Check</h3>
            <p className="text-sm text-gray-400">Continuous AAOIFI standard adherence checks with instant audit log generation for regulators.</p>
         </Card>
      </section>

       {/* Video/Viz Section */}
       <section className="px-6 max-w-7xl mx-auto mb-32">
            <div className="bg-quantum-800 rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-4">Visualizing the "Cliff"</h2>
                    <p className="text-gray-400 mb-6">Traditional monitoring creates a blind spot where asset depreciation outpaces debt collection. SukukGuard bridges this gap.</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                             <span className="text-red-500 font-bold">✕</span> Traditional: 24h Reporting Cycle Latency
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white font-medium">
                             <span className="text-quantum-500 font-bold">✓</span> SukukGuard: Sub-second Quantum Updates
                        </li>
                    </ul>
                </div>
                <div className="flex-1 w-full relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all">
                        <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                    </div>
                    <img src="https://picsum.photos/id/20/800/450" alt="Visualization" className="w-full h-full object-cover" />
                </div>
            </div>
       </section>

       {/* Footer CTA */}
       <div className="bg-quantum-900 border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <div className="text-white font-bold text-lg">Ready to secure your assets?</div>
                    <div className="text-quantum-500 text-sm">Get a free risk assessment report</div>
                </div>
                <Button>Request Demo</Button>
            </div>
       </div>
    </div>
  );
};

export default SukukGuardPage;
