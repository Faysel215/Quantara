import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import QValPage from './pages/QValPage';
import SukukGuardPage from './pages/SukukGuardPage';
import ReguSimPage from './pages/ReguSimPage';
import WadWizardPage from './pages/WadWizardPage';
import { Page } from './types';
import { Button } from './components/ui/Shared';
import { Hexagon, Twitter, Github, Linkedin, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('HOME');
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Hash Routing (Deep Linking for Static Hosts)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#'
      if (['QVAL', 'REGUSIM', 'SUKUK', 'WAD'].includes(hash)) {
        setActivePage(hash as Page);
      } else {
        setActivePage('HOME');
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for browser forward/back buttons
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    setActivePage(page);
    window.location.hash = page === 'HOME' ? '' : page;
    window.scrollTo(0, 0);
  };

  const navItems: { label: string; id: Page }[] = [
    { label: 'Products', id: 'QVAL' }, 
    { label: 'Solutions', id: 'WAD' },
    { label: 'Ecosystem', id: 'REGUSIM' },
    { label: 'Resources', id: 'SUKUK' },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'HOME': return <LandingPage onNavigate={navigate} />;
      case 'QVAL': return <QValPage />;
      case 'SUKUK': return <SukukGuardPage />;
      case 'REGUSIM': return <ReguSimPage />;
      case 'WAD': return <WadWizardPage />;
      default: return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="bg-quantum-900 text-gray-200 font-sans selection:bg-quantum-500 selection:text-quantum-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-quantum-900/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate('HOME')}>
                <div className="relative">
                    <Hexagon className="text-quantum-500 fill-quantum-500/20 w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-quantum-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-white font-bold text-lg tracking-tight">
                    {activePage === 'HOME' ? 'Quantara' : activePage === 'QVAL' ? 'Q-Val' : activePage === 'SUKUK' ? 'SukukGuard' : activePage === 'REGUSIM' ? 'ReguSim' : "Wa'dWizard"}
                </span>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
                {activePage === 'HOME' ? (
                   navItems.map(item => (
                       <button key={item.id} onClick={() => navigate(item.id)} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{item.label}</button>
                   ))
                ) : (
                    <>
                        <button onClick={() => navigate('HOME')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</button>
                        <button onClick={() => navigate('QVAL')} className={`text-sm font-medium hover:text-white transition-colors ${activePage === 'QVAL' ? 'text-white' : 'text-gray-400'}`}>Q-Val</button>
                        <button onClick={() => navigate('SUKUK')} className={`text-sm font-medium hover:text-white transition-colors ${activePage === 'SUKUK' ? 'text-white' : 'text-gray-400'}`}>SukukGuard</button>
                        <button onClick={() => navigate('REGUSIM')} className={`text-sm font-medium hover:text-white transition-colors ${activePage === 'REGUSIM' ? 'text-white' : 'text-gray-400'}`}>ReguSim</button>
                        <button onClick={() => navigate('WAD')} className={`text-sm font-medium hover:text-white transition-colors ${activePage === 'WAD' ? 'text-white' : 'text-gray-400'}`}>Wa'dWizard</button>
                    </>
                )}
            </div>

            {/* CTA */}
            <div>
                <Button size="sm" onClick={() => alert("Demo Requested!")}>Get Demo</Button>
            </div>
        </div>
      </nav>

      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigate('HOME')}>
                    <Hexagon className="text-quantum-500 w-6 h-6" />
                    <span className="text-white font-bold">Quantara</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">Part of the Quantara Ecosystem. Bringing transparency to opaque markets.</p>
                <div className="flex gap-4">
                    <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                    <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                    <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                </div>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-6">Products</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li className="hover:text-quantum-500 cursor-pointer" onClick={() => navigate('SUKUK')}>SukukGuard</li>
                    <li className="hover:text-quantum-500 cursor-pointer" onClick={() => navigate('WAD')}>Wa'dWizard</li>
                    <li className="hover:text-quantum-500 cursor-pointer" onClick={() => navigate('QVAL')}>Q-Val</li>
                    <li className="hover:text-quantum-500 cursor-pointer" onClick={() => navigate('REGUSIM')}>ReguSim</li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Company</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li className="hover:text-white cursor-pointer">About Us</li>
                    <li className="hover:text-white cursor-pointer">Research</li>
                    <li className="hover:text-white cursor-pointer">Careers</li>
                    <li className="hover:text-white cursor-pointer">Contact</li>
                </ul>
            </div>
             
             <div>
                <h4 className="text-white font-bold mb-6">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    <li className="hover:text-white cursor-pointer">Terms of Service</li>
                    <li className="hover:text-white cursor-pointer">Whitepapers</li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <div>&copy; 2024 Quantara Technologies. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;