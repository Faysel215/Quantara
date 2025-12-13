import React from 'react';
import { Button, SectionTag, Card, FeatureIcon } from '../components/ui/Shared';
import { ArrowRight, Layers, Shuffle, CheckSquare, Server, Clock, GitCommit, FileCheck } from 'lucide-react';

const WadMultilegPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-quantum-900">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto flex flex-col items-center text-center mb-24">
        <SectionTag>Quantum Engine V2.0</SectionTag>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
           Pricing the Unpriceable: <br />
           <span className="text-quantum-500">Multi-leg Derivatives</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
           Traditional linear models break down when facing multi-stage Wa'd structures. Our quantum engine calculates risk simultaneously across every isolated leg of a Shariah-compliant contract.
        </p>
        <div className="flex gap-4">
            <Button className="flex items-center gap-2">Request Live Demo <ArrowRight className="w-4 h-4" /></Button>
            <Button variant="outline">Read Whitepaper</Button>
        </div>
      </section>

      {/* Interactive Visualization Placeholder - Anatomy */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="border-l-4 border-quantum-500 pl-6 mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">The Anatomy of a Wa'd Structure</h2>
            <p className="text-gray-400">Why multi-leg instruments require a non-linear approach.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 hover:border-quantum-500">
                <div className="flex justify-between items-start mb-6">
                    <FeatureIcon><Layers /></FeatureIcon>
                    <span className="text-xs font-mono text-gray-500">Leg 01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The Promise (Wa'd)</h3>
                <p className="text-sm text-gray-400">A unilateral promise binding one party to a future transaction. This creates a contingent option that traditional models often misprice as a simple forward.</p>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:border-quantum-500">
                <div className="flex justify-between items-start mb-6">
                    <FeatureIcon><Shuffle /></FeatureIcon>
                    <span className="text-xs font-mono text-gray-500">Leg 02</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The Execution</h3>
                <p className="text-sm text-gray-400">The actual entering into the contract (e.g., Murabaha or Ijara) upon the triggering condition. This stage introduces operational risk separate from market risk.</p>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:border-quantum-500">
                <div className="flex justify-between items-start mb-6">
                    <FeatureIcon><CheckSquare /></FeatureIcon>
                    <span className="text-xs font-mono text-gray-500">Leg 03</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The Settlement</h3>
                <p className="text-sm text-gray-400">Final exchange of assets. In multi-leg pricing, the probability of reaching settlement depends on the sequential success of prior Shariah conditions.</p>
            </Card>
        </div>
      </section>

      {/* Visual Workflow */}
      <section className="bg-white/5 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-16">Visualizing the Quantum Pricing Path</h2>
            
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -z-10 transform -translate-y-1/2"></div>
                
                {[
                    { title: "Input Structure", icon: <GitCommit />, sub: "Define Terms" },
                    { title: "Leg Isolation", icon: <Layers />, sub: "Shariah Check" },
                    { title: "Q-Engine Compute", icon: <Server />, sub: "Multi-Path Calc", active: true },
                    { title: "Audit Output", icon: <FileCheck />, sub: "Fatwa Ready" }
                ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-quantum-900 p-4 rounded-xl border border-white/10 w-48 relative z-10">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${step.active ? 'bg-quantum-500 text-quantum-900 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'bg-white/10 text-gray-400'}`}>
                            {step.icon}
                        </div>
                        <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                        <div className="text-xs text-gray-500">{step.sub}</div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center text-sm text-gray-500 max-w-2xl mx-auto">
                *The diagram above illustrates how Wa'dWizard isolates each leg of the derivative to apply specific Shariah parameters before aggregating the total risk profile.
            </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 max-w-7xl mx-auto py-24">
         <div className="mb-12 flex justify-between items-end">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Traditional vs. Quantum Pricing</h2>
                <p className="text-gray-400">The gap between estimation and precision.</p>
            </div>
            <a href="#" className="text-quantum-500 text-sm font-bold flex items-center gap-2">View Full Technical Specs <ArrowRight className="w-4 h-4" /></a>
         </div>

         <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
             <div className="grid grid-cols-3 bg-white/5 p-6 border-b border-white/10 font-bold text-gray-300 text-sm uppercase tracking-wider">
                 <div>Metric</div>
                 <div>Traditional Linear Models</div>
                 <div className="text-quantum-500">Wa'dWizard Quantum Engine</div>
             </div>
             
             {[
                 { metric: "Calculation Speed", trad: "Hours (Monte Carlo)", quant: "Milliseconds", icon: <Clock className="w-4 h-4" /> },
                 { metric: "Structure Handling", trad: "Single-leg Approximation", quant: "Multi-leg Exact Pathing", icon: <Layers className="w-4 h-4" /> },
                 { metric: "Shariah Compliance", trad: "Manual Post-Trade Check", quant: "Real-time Constraints", icon: <FileCheck className="w-4 h-4" /> },
                 { metric: "Volatility Surface", trad: "Static / Interpolated", quant: "Dynamic Quantum Surface", icon: <Shuffle className="w-4 h-4" /> },
             ].map((row, i) => (
                 <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors text-sm items-center">
                     <div className="flex items-center gap-3 text-white font-medium">
                         <div className="p-2 rounded bg-white/10 text-gray-400">{row.icon}</div>
                         {row.metric}
                     </div>
                     <div className="text-gray-400">{row.trad}</div>
                     <div className="text-white font-bold flex items-center gap-2">
                         {i === 0 && <span className="w-2 h-2 rounded-full bg-quantum-500 animate-pulse"></span>}
                         {row.quant}
                     </div>
                 </div>
             ))}
         </div>
      </section>

      {/* Code/Integration Snippet */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
          <Card className="bg-black border border-white/10 p-0 overflow-hidden">
              <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-gray-500 font-mono">terminal — -zsh — 80x24</div>
              </div>
              <div className="p-8 font-mono text-sm">
                  <div className="text-gray-500 mb-4"># Seamless Integration Workflow</div>
                  <div className="mb-4">
                      <span className="text-purple-400">const</span> <span className="text-yellow-400">pricingRequest</span> = {'{'}
                  </div>
                  <div className="pl-6 text-gray-300">
                      structure: <span className="text-green-400">'Murabaha_Wa_d'</span>,<br/>
                      legs: [<br/>
                      &nbsp;&nbsp;{'{'} type: <span className="text-green-400">'PROMISE'</span>, value: <span className="text-blue-400">1000000</span>, trigger: <span className="text-green-400">'LIBOR_SWAP'</span> {'}'},<br/>
                      &nbsp;&nbsp;{'{'} type: <span className="text-green-400">'EXECUTION'</span>, asset: <span className="text-green-400">'COMMODITY_A'</span> {'}'}<br/>
                      ],<br/>
                      engine: <span className="text-green-400">'QUANTARA_QPU_V2'</span>
                  </div>
                  <div className="mb-4">{'}'};</div>
                  
                  <div className="mb-2"><span className="text-gray-500">// Executing Quantum Path...</span></div>
                  <div className="text-green-500">
                      &gt; Processing Leg 1... Complete<br/>
                      &gt; Processing Leg 2... Complete<br/>
                      &gt; Aggregating Risk... Done (12ms)
                  </div>
              </div>
          </Card>
      </section>

       {/* Footer CTA */}
      <section className="py-20 text-center bg-gradient-to-t from-quantum-900 to-transparent">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to price with precision?</h2>
          <div className="flex justify-center gap-4">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="secondary">Contact Sales</Button>
          </div>
      </section>
    </div>
  );
};

export default WadMultilegPage;