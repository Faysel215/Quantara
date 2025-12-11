import React from 'react';
import { Button, SectionTag, Card, FeatureIcon } from '../components/ui/Shared';
import { Database, Cpu, CheckCircle, Grid, BarChart3, Lock } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

const data = [
  { time: 'Q1 Start', value: 4000, projected: 4100 },
  { time: 'Q1 Mid', value: 4500, projected: 4600 },
  { time: 'Q1 End', value: 5800, projected: 5000 },
  { time: 'Q2 Start', value: 6200, projected: 6500 },
  { time: 'Q2 Mid', value: 7800, projected: 8000 },
  { time: 'Today', value: 8500, projected: 9200 },
  { time: 'Forecast', value: 9800, projected: 10500 },
];

const QValPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
       {/* Hero */}
       <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <SectionTag>Mark-To-Model Engine</SectionTag>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Precision Pricing <br/>
                for the <span className="text-quantum-500">Illiquid World</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Harness Quantum Machine Learning to generate synthetic price paths for real estate, infrastructure, and private assets. Move beyond lagging indicators and value the invaluable.
            </p>
            <div className="flex gap-4">
                <Button>Request Demo</Button>
                <Button variant="outline">Explore Methodology &rarr;</Button>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-6 relative overflow-hidden backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-br from-quantum-500/10 to-transparent"></div>
                 {/* Abstract network viz placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" stroke="#22c55e" strokeWidth="0.5" fill="none" />
                        <path d="M50 20 L80 50 L50 80 L20 50 Z" stroke="#22c55e" strokeWidth="0.5" fill="none" />
                        <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="#22c55e" strokeWidth="0.2" fill="none" />
                    </svg>
                 </div>
                 
                 <div className="absolute bottom-6 left-6 right-6 bg-quantum-900/90 backdrop-blur border border-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Real-Time Valuation</span>
                        <span className="text-quantum-400 text-xs font-bold bg-quantum-500/10 px-2 py-0.5 rounded">+2.4% (Synth)</span>
                    </div>
                    <div className="text-3xl font-mono text-white">$42,850,000</div>
                    <div className="h-1 bg-gray-700 mt-2 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-quantum-500 rounded-full"></div>
                    </div>
                 </div>
             </div>
          </div>
       </section>

       {/* Process */}
       <section className="bg-quantum-800/50 py-24 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">The Mark-to-Model Process</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">From raw sparse data ingestion to quantum-powered valuation, see how Q-Val transforms uncertainty into precision.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="relative overflow-hidden">
                    <FeatureIcon><Database className="w-6 h-6" /></FeatureIcon>
                    <h3 className="text-xl font-bold text-white mb-2">Data Ingestion</h3>
                    <p className="text-sm text-gray-400">Aggregating sparse data points from illiquid market sources, satellite imagery, and municipal records.</p>
                </Card>
                <Card className="relative overflow-hidden border-quantum-500/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                    <div className="absolute top-0 right-0 bg-quantum-500 text-quantum-900 text-xs font-bold px-3 py-1 rounded-bl-lg">CORE ENGINE</div>
                    <FeatureIcon><Cpu className="w-6 h-6" /></FeatureIcon>
                    <h3 className="text-xl font-bold text-white mb-2">Quantum Processing</h3>
                    <p className="text-sm text-gray-400">Using Q-ML algorithms to map non-linear correlations and generate thousands of synthetic price paths.</p>
                </Card>
                <Card className="relative overflow-hidden">
                    <FeatureIcon><CheckCircle className="w-6 h-6" /></FeatureIcon>
                    <h3 className="text-xl font-bold text-white mb-2">Synthetic Valuation</h3>
                    <p className="text-sm text-gray-400">Delivering real-time, auditable Mark-to-Model valuations with confidence intervals and risk scoring.</p>
                </Card>
            </div>
         </div>
       </section>

       {/* Capabilities */}
       <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
                <Grid className="w-8 h-8 text-quantum-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Synthetic Data</h3>
                <p className="text-xs text-gray-400">Create robust datasets from limited inputs to fill market gaps.</p>
            </Card>
            <Card>
                <BarChart3 className="w-8 h-8 text-quantum-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Q-ML Forecasting</h3>
                <p className="text-xs text-gray-400">Predict future asset performance with high-fidelity quantum models.</p>
            </Card>
             <Card>
                <Cpu className="w-8 h-8 text-quantum-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Risk Modeling</h3>
                <p className="text-xs text-gray-400">Stress-test portfolios against complex volatility scenarios.</p>
            </Card>
            <Card>
                <Lock className="w-8 h-8 text-quantum-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Auditable Trails</h3>
                <p className="text-xs text-gray-400">Full transparency on model assumptions and data lineage.</p>
            </Card>
         </div>
         <div>
             <h2 className="text-4xl font-bold text-white mb-6">Core Capabilities for the <br/><span className="text-gray-400">Sophisticated Analyst</span></h2>
             <p className="text-gray-400 mb-8">Q-Val isn't just a calculator; it's a quantum engine designed to simulate market conditions that haven't happened yet. By bridging the gap between sparse private data and public market correlations, we provide a lens into the true value of your portfolio.</p>
             <ul className="space-y-4">
                 {['Real Estate & Commercial Property', 'Infrastructure Projects & Utilities', 'Private Equity & Venture Capital'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-white">
                         <div className="w-5 h-5 rounded-full bg-quantum-500 flex items-center justify-center">
                             <CheckCircle className="w-3 h-3 text-quantum-900" />
                         </div>
                         {item}
                     </li>
                 ))}
             </ul>
         </div>
       </section>

       {/* Live Comparison Chart */}
       <section className="py-24 px-6 max-w-7xl mx-auto">
            <Card className="!p-0 overflow-hidden bg-quantum-900">
                <div className="p-8 pb-0 flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
                    <div className="max-w-md">
                        <SectionTag>Live Comparison</SectionTag>
                        <h2 className="text-3xl font-bold text-white mb-4">Valuation Precision</h2>
                        <p className="text-gray-400 text-sm">Comparing traditional appraisal lagging indicators vs. Q-Val's real-time synthetic pricing model.</p>
                        
                        <div className="mt-6 space-y-3">
                             <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                                <span className="text-gray-400 text-sm">Traditional Lag</span>
                                <span className="text-red-400 font-mono text-sm">T-90 Days</span>
                             </div>
                             <div className="flex justify-between items-center bg-quantum-500/10 p-3 rounded-lg border border-quantum-500/20">
                                <span className="text-white text-sm">Q-Val Accuracy</span>
                                <span className="text-quantum-500 font-mono font-bold text-sm">Real-time</span>
                             </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="h-[400px] w-full bg-gradient-to-b from-transparent to-quantum-900/50 relative">
                     <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorVal" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#22c55e" />
                                    <stop offset="100%" stopColor="#4ade80" />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="time" stroke="#374151" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0B1412', borderColor: '#374151', borderRadius: '8px' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="value" 
                                stroke="url(#colorVal)" 
                                strokeWidth={4} 
                                dot={false} 
                                activeDot={{ r: 8, fill: '#22c55e' }}
                            />
                            <Line 
                                type="stepAfter" 
                                dataKey="projected" 
                                stroke="#4b5563" 
                                strokeWidth={2} 
                                strokeDasharray="5 5" 
                                dot={false} 
                            />
                        </LineChart>
                     </ResponsiveContainer>
                     <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2">
                         <div className="bg-quantum-900/80 backdrop-blur border border-quantum-500 text-quantum-500 text-xs px-3 py-1 rounded-full animate-pulse">
                             Market Shift Detected
                         </div>
                     </div>
                </div>
            </Card>
       </section>

       {/* Footer CTA */}
       <section className="relative py-32 text-center overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://picsum.photos/id/193/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
           <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to price the future?</h2>
                <p className="text-gray-400 mb-8">Join the leading financial institutions using Q-Val to navigate the illiquid asset landscape with quantum certainty.</p>
                <div className="flex justify-center gap-4">
                    <Button size="lg">Start Free Trial</Button>
                    <Button variant="outline" size="lg">Contact Sales</Button>
                </div>
           </div>
       </section>
    </div>
  );
};

export default QValPage;
