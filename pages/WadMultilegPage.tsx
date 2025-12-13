import React, { useState } from 'react';
import { Button, SectionTag, Card, FeatureIcon } from '../components/ui/Shared';
import { ArrowRight, Layers, Shuffle, CheckSquare, Server, Clock, GitCommit, FileCheck, FileText, Activity, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

// Types and Data for Interactive Component
type LegType = 'PROMISE' | 'CONTRACT' | 'SETTLEMENT';

interface LegData {
  id: number;
  title: string;
  type: LegType;
  description: string;
  params: { label: string; value: string }[];
  checks: string[];
}

const legFlowData: LegData[] = [
  {
    id: 1,
    title: "Unilateral Wa'd",
    type: 'PROMISE',
    description: "The initiating promise where the customer commits to purchasing the asset if the bank acquires it. This separates the promise from the sale to ensure compliance.",
    params: [
        { label: "Instrument", value: "Binding Promise" },
        { label: "Underlying", value: "LME Copper Grade A" },
        { label: "Strike Date", value: "T+2 Days" }
    ],
    checks: [
        "Unilateral binding verified",
        "No interlocking conditions",
        "Hamish Jiddiyyah (Security Deposit) segregated"
    ]
  },
  {
    id: 2,
    title: "Murabaha Execution",
    type: 'CONTRACT',
    description: "The bank purchases the commodity and sells it to the customer on a cost-plus basis. Risk ownership transfers momentarily to the bank.",
    params: [
        { label: "Cost Price", value: "$50,000,000.00" },
        { label: "Profit Rate", value: "4.50% p.a." },
        { label: "Tenor", value: "6 Months" }
    ],
    checks: [
        "Constructive possession verified (Qabd)",
        "Asset existence check via API",
        "Risk transfer event logged"
    ]
  },
  {
    id: 3,
    title: "Trade Settlement",
    type: 'SETTLEMENT',
    description: "Final exchange of ownership and payment scheduling. The commodity is often sold to a third party to generate liquidity (Tawarruq).",
    params: [
        { label: "Payment", value: "Deferred (Lump Sum)" },
        { label: "Currency", value: "USD" },
        { label: "Broker", value: "Global Commodities Ex." }
    ],
    checks: [
        "Spot delivery confirmed",
        "No debt-for-debt netting",
        "Sequence timestamp validation"
    ]
  }
];

const ScenarioSimulator: React.FC = () => {
    const [rateShift, setRateShift] = useState<number>(0); // -50 to 50 bps
    const [assetShock, setAssetShock] = useState<number>(0); // -20 to 20 %

    // Simple simulation logic
    // Base risk is 12%.
    // Rate shift adds volatility to risk.
    // Asset shock significantly impacts risk and compliance.
    
    const riskScore = Math.min(99, Math.round(12 + (Math.abs(rateShift) * 0.5) + (Math.abs(assetShock) * 2.5)));
    
    let complianceState: 'OPTIMAL' | 'WARNING' | 'CRITICAL' = 'OPTIMAL';
    let complianceMsg = "Structure is fully compliant. Hamish Jiddiyyah covers projected volatility.";
    
    if (Math.abs(assetShock) > 10 || Math.abs(rateShift) > 40) {
        complianceState = 'WARNING';
        complianceMsg = "Volatility approaching Hamish threshold. Re-affirmation of Wa'd recommended.";
    }
    if (Math.abs(assetShock) > 15) {
        complianceState = 'CRITICAL';
        complianceMsg = "CRITICAL: Asset value drop exceeds security deposit. Constructive possession risk detected.";
    }

    const getRiskColor = (score: number) => {
        if (score < 30) return 'text-quantum-500';
        if (score < 60) return 'text-yellow-400';
        return 'text-red-500';
    };

    return (
        <div className="mt-16 pt-16 border-t border-white/5 animate-fadeIn">
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">Hypothetical Scenario Simulator</h3>
                <p className="text-gray-400">Stress-test the Wa'd structure against market volatility.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Inputs */}
                <div className="lg:col-span-5 space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div>
                        <div className="flex justify-between mb-4">
                            <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                <Activity size={16} className="text-quantum-500"/> Benchmark Rate Shift (SOFR)
                            </label>
                            <span className="font-mono text-quantum-500 bg-quantum-500/10 px-2 py-0.5 rounded text-xs">
                                {rateShift > 0 ? '+' : ''}{rateShift} bps
                            </span>
                        </div>
                        <input 
                            type="range" 
                            min="-50" 
                            max="50" 
                            value={rateShift} 
                            onChange={(e) => setRateShift(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-quantum-500"
                        />
                        <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                            <span>-50bps</span>
                            <span>0</span>
                            <span>+50bps</span>
                        </div>
                    </div>

                    <div>
                         <div className="flex justify-between mb-4">
                            <label className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                <TrendingUp size={16} className="text-quantum-500"/> Asset Price Shock (%)
                            </label>
                            <span className={`font-mono bg-white/10 px-2 py-0.5 rounded text-xs ${Math.abs(assetShock) > 10 ? 'text-red-400' : 'text-quantum-500'}`}>
                                {assetShock > 0 ? '+' : ''}{assetShock}%
                            </span>
                        </div>
                        <input 
                            type="range" 
                            min="-20" 
                            max="20" 
                            value={assetShock} 
                            onChange={(e) => setAssetShock(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-quantum-500"
                        />
                         <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                            <span>-20%</span>
                            <span>0%</span>
                            <span>+20%</span>
                        </div>
                    </div>

                    <div className="p-4 bg-black/40 rounded-lg border border-white/5 mt-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Simulation Engine Status</div>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Real-time Quantum Pathing Active
                        </div>
                    </div>
                </div>

                {/* Outputs */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Risk Score Card */}
                    <div className="bg-quantum-800 border border-white/10 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Activity size={100} />
                        </div>
                        <div className="relative z-10">
                            <div className="text-sm text-gray-400 mb-2">Settlement Risk Score</div>
                            <div className={`text-5xl font-bold mb-2 transition-colors duration-300 ${getRiskColor(riskScore)}`}>
                                {riskScore}<span className="text-lg text-gray-500 font-normal">/100</span>
                            </div>
                            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden mt-4">
                                <div 
                                    className={`h-full transition-all duration-500 ease-out ${riskScore > 60 ? 'bg-red-500' : riskScore > 30 ? 'bg-yellow-400' : 'bg-quantum-500'}`}
                                    style={{ width: `${riskScore}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                                Probability of settlement failure based on current Wa'd parameters and simulated volatility.
                            </p>
                        </div>
                    </div>

                    {/* Compliance Status Card */}
                    <div className={`border p-6 rounded-2xl flex flex-col justify-between transition-colors duration-500 ${
                        complianceState === 'CRITICAL' ? 'bg-red-900/10 border-red-500/30' : 
                        complianceState === 'WARNING' ? 'bg-yellow-900/10 border-yellow-500/30' : 
                        'bg-quantum-900/50 border-quantum-500/30'
                    }`}>
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-sm text-gray-400">Shariah Integrity</div>
                                {complianceState === 'OPTIMAL' ? <CheckCircle className="text-quantum-500" /> : <AlertTriangle className={complianceState === 'CRITICAL' ? 'text-red-500' : 'text-yellow-500'} />}
                            </div>
                            <div className={`text-xl font-bold mb-4 ${
                                complianceState === 'CRITICAL' ? 'text-red-400' : 
                                complianceState === 'WARNING' ? 'text-yellow-400' : 
                                'text-quantum-400'
                            }`}>
                                {complianceState === 'OPTIMAL' && 'FULLY COMPLIANT'}
                                {complianceState === 'WARNING' && 'RISK WARNING'}
                                {complianceState === 'CRITICAL' && 'COMPLIANCE BREACH'}
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                {complianceMsg}
                            </p>
                        </div>
                        {complianceState !== 'OPTIMAL' && (
                            <Button size="sm" variant="outline" className="mt-4 border-white/10 hover:bg-white/5">
                                Generate Mitigation Strategy
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const InteractiveWadFlow: React.FC = () => {
    const [selectedLegId, setSelectedLegId] = useState<number>(1);
    const selectedLeg = legFlowData.find(l => l.id === selectedLegId) || legFlowData[0];

    // Calculate progress width for the connecting line
    // Leg 1 (index 0) -> 0% width (line starts from left but fills up to next leg)
    // Actually, let's say width fills up TO the selected leg.
    // Leg 1: 0% filled between 1 and 2.
    // Leg 2: 50% filled (line connects 1 to 2).
    // Leg 3: 100% filled (line connects 2 to 3).
    const progressWidth = selectedLegId === 1 ? '0%' : selectedLegId === 2 ? '50%' : '100%';

    return (
        <div className="bg-quantum-800/30 rounded-3xl border border-white/10 p-6 md:p-12 transition-all duration-500">
            {/* Flow Chart - Nodes */}
            <div className="relative mb-12">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[40px] left-10 right-10 h-0.5 bg-white/10 z-0">
                    <div className="h-full bg-quantum-500 shadow-[0_0_10px_#22c55e] transition-all duration-700 ease-out" style={{ width: progressWidth }}></div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    {legFlowData.map((leg) => {
                         const isActive = selectedLegId === leg.id;
                         const isPast = selectedLegId > leg.id;
                         
                         return (
                             <button 
                                key={leg.id}
                                onClick={() => setSelectedLegId(leg.id)}
                                className={`group relative flex flex-col items-center focus:outline-none transition-all duration-300 w-full md:w-auto`}
                             >
                                 <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 mb-4 bg-quantum-900 z-10 relative
                                     ${isActive ? 'border-quantum-500 shadow-[0_0_30px_rgba(34,197,94,0.3)] text-quantum-500 scale-110' : 'border-white/10 text-gray-500 group-hover:border-white/30 group-hover:text-gray-300'}
                                     ${isPast ? 'border-quantum-500 text-quantum-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]' : ''}
                                 `}>
                                     {leg.type === 'PROMISE' && <GitCommit size={28} />}
                                     {leg.type === 'CONTRACT' && <FileText size={28} />}
                                     {leg.type === 'SETTLEMENT' && <CheckSquare size={28} />}
                                     
                                     {isActive && (
                                         <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-quantum-500"></span>
                                        </span>
                                     )}
                                 </div>
                                 <div className={`text-sm font-bold transition-colors uppercase tracking-wide ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>{leg.title}</div>
                                 <div className="text-[10px] uppercase tracking-widest text-gray-700 mt-1">Step 0{leg.id}</div>
                             </button>
                         )
                    })}
                </div>
            </div>

            {/* Details Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                 {/* Left: Params */}
                 <div className="bg-black/40 rounded-xl p-6 md:p-8 border border-white/5 shadow-inner">
                     <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-quantum-500/10 rounded-lg text-quantum-500"><Activity size={20} /></div>
                         <h4 className="text-lg font-bold text-white">Execution Parameters</h4>
                     </div>
                     <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[48px]">{selectedLeg.description}</p>
                     
                     <div className="space-y-3">
                         {selectedLeg.params.map((p, i) => (
                             <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 group hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                                 <span className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">{p.label}</span>
                                 <span className="text-white font-mono text-sm">{p.value}</span>
                             </div>
                         ))}
                     </div>
                 </div>

                 {/* Right: Shariah Checks */}
                 <div className="bg-quantum-900/50 rounded-xl p-6 md:p-8 border border-quantum-500/20 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                         <ShieldCheck size={120} className="text-quantum-500 transform rotate-12" />
                     </div>
                     
                     <div className="flex items-center gap-3 mb-6 relative z-10">
                         <div className="p-2 bg-quantum-500/10 rounded-lg text-quantum-500"><ShieldCheck size={20} /></div>
                         <h4 className="text-lg font-bold text-white">Shariah Compliance Audit</h4>
                     </div>

                     <div className="space-y-4 relative z-10">
                         {selectedLeg.checks.map((check, i) => (
                             <div key={i} className="flex items-start gap-3 p-2 rounded hover:bg-white/5 transition-colors">
                                 <div className="mt-0.5 w-5 h-5 rounded-full bg-quantum-500/20 flex items-center justify-center flex-shrink-0">
                                     <div className="w-2 h-2 rounded-full bg-quantum-500 shadow-[0_0_5px_#22c55e]"></div>
                                 </div>
                                 <span className="text-gray-300 text-sm">{check}</span>
                             </div>
                         ))}
                     </div>
                     
                     <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                         <span className="text-[10px] text-gray-500 font-mono">HASH: 0x7f...3a2b // {new Date().toLocaleDateString()}</span>
                         <span className="text-xs font-bold text-quantum-500 flex items-center gap-1 bg-quantum-500/10 px-3 py-1 rounded-full">
                             VERIFIED <CheckSquare size={12} />
                         </span>
                     </div>
                 </div>
            </div>
        </div>
    );
};

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

      {/* Visual Workflow (INTERACTIVE COMPONENT) */}
      <section className="bg-white/5 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Visualizing the Quantum Pricing Path</h2>
                <p className="text-gray-400">Click on each leg to view specific parameters and compliance checks.</p>
            </div>
            
            <InteractiveWadFlow />
            <ScenarioSimulator />
            
            <div className="mt-16 text-center text-sm text-gray-500 max-w-2xl mx-auto">
                *The component above illustrates how Wa'dWizard isolates each leg of the derivative to apply specific Shariah parameters before aggregating the total risk profile.
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