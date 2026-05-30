import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Check, 
  ExternalLink, 
  Download, 
  Trash2, 
  ArrowRight,
  TrendingUp,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Star,
  Users,
  Target,
  Activity,
  Sparkles,
  Globe,
  Zap,
  BarChart3,
  Gauge,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';
import { translations, Language } from './translations';
import polianaHeadshot from './assets/images/poliana_real-1.png';

export default function App() {
  const [lang, setLang] = useState<Language>('pt'); // Default to portuguese since user prompts in Portuguese, fully switcher supported
  
  // Lead Capture Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [budgetVal, setBudgetVal] = useState('');
  const [bottleneck, setBottleneck] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Local storage logged leads database (CRM ledger)
  const [leads, setLeads] = useState<any[]>([]);
  const [showLedger, setShowLedger] = useState(false);

  // Accordion indices for FAQ
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  // Selected Campaign Tab Simulator
  const [activeSimTab, setActiveSimTab] = useState<'ecommerce' | 'local' | 'tracking' | 'leads'>('ecommerce');

  // Simulated Google Ads Search text
  const [simQuery, setSimQuery] = useState('');

  // Floating notifications state to simulate dynamic acquisitions
  const [notif, setNotif] = useState<any | null>(null);
  const [notifIndex, setNotifIndex] = useState(0);

  // Testimonial carousel responsive state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const savedLeads = localStorage.getItem('poliana_leads_database');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (err) {
        console.error('Error parsing leads database', err);
      }
    }
  }, []);

  // Floating verified conversion notifications list
  const notifList = [
    { name: "Arthur Salles", text: lang === 'en' ? "just registered a corporate application" : "acaba de se cadastrar para a auditoria", location: "Florianópolis, BR" },
    { name: "Marcus", text: lang === 'en' ? "unlocked the Google Ads Playbook" : "adquiriu o Google Ads Playbook", location: "Lisbon, PT" },
    { name: "Mauricio Geronasso", text: lang === 'en' ? "scheduled a Zoom Strategy diagnostic" : "agendou uma análise estratégica via Zoom", location: "Curitiba, BR" },
    { name: "Ana Maria", text: lang === 'en' ? "requested premium custom retainer proposal" : "solicitou proposta de gestão mensal", location: "Madrid, ES" },
    { name: "Evandro Tosin", text: lang === 'en' ? "submitted technical GTM audit parameters" : "enviou os dados para auditoria GTM", location: "Curitiba, BR" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through notifications
      const targetIndex = (notifIndex + 1) % notifList.length;
      setNotifIndex(targetIndex);
      setNotif(notifList[targetIndex]);
      
      // Auto dismiss after 4 seconds
      setTimeout(() => {
        setNotif(null);
      }, 4000);

    }, 8000);

    return () => clearInterval(interval);
  }, [notifIndex, lang]);

  const t = translations[lang];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert(lang === 'en' ? 'Please complete the Name, Email, and Phone fields.' : 'Por favor preencha os campos de Nome, E-mail e WhatsApp.');
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      const newLead = {
        id: Date.now().toString(),
        name,
        email,
        phone,
        company: company || 'N/A',
        website: website || 'N/A',
        budget: budgetVal || 'N/A',
        bottleneck: bottleneck || 'N/A',
        timestamp: new Date().toISOString(),
        siteLanguage: lang
      };

      const updatedLeads = [newLead, ...leads];
      setLeads(updatedLeads);
      localStorage.setItem('poliana_leads_database', JSON.stringify(updatedLeads));
      
      setIsSubmitting(false);
      setFormSuccess(true);
      
      // Clear fields
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setWebsite('');
      setBudgetVal('');
      setBottleneck('');
    }, 1200);
  };

  const deleteLead = (id: string) => {
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem('poliana_leads_database', JSON.stringify(updated));
  };

  const clearLeads = () => {
    if (window.confirm(lang === 'en' ? 'Clear local database?' : 'Limpar banco de dados local?')) {
      setLeads([]);
      localStorage.removeItem('poliana_leads_database');
    }
  };

  const downloadCsv = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Website', 'Ad Budget', 'Strategic Bottleneck', 'Timestamp'];
    const rows = leads.map(l => [
      l.name,
      l.email,
      l.phone,
      l.company,
      l.website,
      l.budget,
      l.bottleneck,
      l.timestamp
    ]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(item => `"${String(item).replace(/"/g, '""')}"`).join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `poliana_leads_${lang}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Preset search options for interactive simulator
  const simQueries = {
    ecommerce: lang === 'en' ? 'hire scaling google ads agency' : 'contratar gestor google ads e-commerce',
    local: lang === 'en' ? 'best corporate tax consultant near me' : 'consultoria tributaria em florianopolis',
    tracking: lang === 'en' ? 'fix meta capi and google trackings' : 'especialista em pixel ga4 meta capi',
    leads: lang === 'en' ? 'enterprise b2b customer acquisition' : 'como gerar leads b2b qualificados'
  };

  const handleSimOptionClick = (type: 'ecommerce' | 'local' | 'tracking' | 'leads') => {
    setActiveSimTab(type);
    setSimQuery(simQueries[type]);
  };

  return (
    <div className="min-h-screen bg-[#030612] font-sans antialiased text-slate-100 selection:bg-[#00FF66] selection:text-neutral-950">
      
      {/* 1. TOP DYNAMIC BANNER - Vibrant green like Satya's top ribbon */}
      <div className="bg-[#00FF55] text-neutral-950 py-3 px-4 font-bold text-center relative overflow-hidden z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 justify-center w-full md:w-auto">
            <span className="font-mono text-[9px] font-black bg-neutral-950 text-white px-2 py-0.5 rounded uppercase tracking-widest animate-pulse shrink-0">
              {lang === 'en' ? "SPECIAL OFFER" : "OFERTA ESPECIAL"}
            </span>
            <span className="text-[11px] font-black md:tracking-wide">
              {lang === 'en' 
                ? "🎁 Get a FREE 30-Minute Google Ads Strategy Diagnostics (Worth $250) + Action Blueprint at checkout! 🎁" 
                : "🎁 Ganhe uma Sessão de Diagnóstico de Google Ads (30 Min - Valor de R$ 750) + Plano Estratégico!"
              }
            </span>
          </div>
          
          {/* Language Selector built cleanly */}
          <div className="flex items-center text-xs text-neutral-950 gap-2.5 bg-neutral-950/10 px-3 py-1 rounded">
            <span className="text-[10px] uppercase font-mono text-neutral-800 font-extrabold">{lang === 'en' ? "LANGUAGE" : "IDIOMA"}:</span>
            <button 
              onClick={() => setLang('en')}
              className={`transition-colors uppercase font-mono text-[10px] font-bold ${lang === 'en' ? 'text-black underline underline-offset-4 font-black' : 'text-neutral-700 hover:text-black'}`}
            >
              EN
            </button>
            <span className="text-neutral-300">|</span>
            <button 
              onClick={() => setLang('pt')}
              className={`transition-colors uppercase font-mono text-[10px] font-bold ${lang === 'pt' ? 'text-black underline underline-offset-4 font-black' : 'text-neutral-700 hover:text-black'}`}
            >
              PT
            </button>
            <span className="text-neutral-300">|</span>
            <button 
              onClick={() => setLang('es')}
              className={`transition-colors uppercase font-mono text-[10px] font-bold ${lang === 'es' ? 'text-black underline underline-offset-4 font-black' : 'text-neutral-700 hover:text-black'}`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* HEADER / NAVIGATION (Ultra premium glassmorphic dark design) */}
      <header className="sticky top-0 z-40 bg-[#030612]/90 backdrop-blur-md border-b border-white/[0.08] py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="font-sans font-black tracking-tighter text-lg md:text-xl text-white block">
                POLIANA ALMEIDA
              </span>
              <div className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-[#00FF66]" />
            </div>
            <span className="text-[9px] font-mono border border-[#00FF66]/30 text-[#00FF66] bg-[#00FF66]/5 px-2 py-0.5 uppercase font-bold tracking-widest hidden sm:inline-block rounded">
              {lang === 'en' ? "GOOGLE ADS PRO" : "ESTRATEGISTA GOOGLE ADS"}
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono">
            {/* Minimal Nav links */}
            <nav className="hidden lg:flex items-center gap-6 text-[11px] text-slate-300 uppercase tracking-wider font-bold">
              <a href="#comparison" className="hover:text-[#00FF55] transition-colors">{t.navbar.problem}</a>
              <a href="#pain-gain" className="hover:text-[#00FF55] transition-colors">{t.navbar.painGain}</a>
              <a href="#how-it-works" className="hover:text-[#00FF55] transition-colors">{t.navbar.howWorks || t.navbar.howItWorks}</a>
              <a href="#offers" className="hover:text-[#00FF55] transition-colors">{t.navbar.offers}</a>
              <a href="#results" className="hover:text-[#00FF55] transition-colors">{t.navbar.results}</a>
              <a href="#faq" className="hover:text-[#00FF55] transition-colors">{t.navbar.faq}</a>
            </nav>

            <a 
              href="#form-section" 
              className="bg-[#00FF66] hover:bg-[#00D957] text-[#02050E] text-[11px] font-extrabold px-4 md:px-5 py-2 uppercase transition-all duration-150 rounded tracking-wider shadow-[0_0_15px_rgba(0,255,102,0.15)] flex items-center gap-1.5"
            >
              <span>{lang === 'en' ? "Get Free Audit ⚡" : "Agendar Chamada ⚡"}</span>
            </a>
          </div>

        </div>
      </header>

      {/* [SECTION 1: HERO] - Premium Dark with Radial Gradient and underline designs */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 px-6 overflow-hidden">
        {/* Absolute glow effects just like high-vibrancy tech funnels */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00FF66]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gradient-to-tr from-[#00D2FF]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 text-left">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 border border-[#00E5FF]/30 bg-[#00E5FF]/5 rounded-full px-4 py-1 text-[10px] md:text-xs font-mono uppercase tracking-wide text-[#00E5FF] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-bounce" />
              <span>{t.hero.badge}</span>
            </div>
            
            {/* Massive Heading with exact letter-spacing and beautiful keyword emphasis */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08]" style={{ letterSpacing: '-0.02em' }}>
              {lang === 'en' ? (
                <>
                  Stop waiting for clients to drop from the sky. <br className="hidden md:inline" />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-[#00E5FF]">
                    Google Ads
                    <span className="absolute left-0 bottom-1 w-full h-1 bg-[#00FF66]/30 rounded-full" />
                  </span> that generate <span className="text-[#00FF66]">leads on demand</span> every day.
                </>
              ) : lang === 'pt' ? (
                <>
                  Pare de esperar clientes caírem do céu. <br className="hidden md:inline" />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-[#00E5FF]">
                    Google Ads
                    <span className="absolute left-0 bottom-1 w-full h-1 bg-[#00FF66]/30 rounded-full" />
                  </span> estruturado para trazer <span className="text-[#00FF66]">leads qualificados</span> todos os dias.
                </>
              ) : (
                <>
                  Deja de esperar que los clientes caigan del cielo. <br className="hidden md:inline" />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-[#00E5FF]">
                    Google Ads
                    <span className="absolute left-0 bottom-1 w-full h-1 bg-[#00FF66]/30 rounded-full" />
                  </span> que genera <span className="text-[#00FF66]">clientes calificados</span> diario.
                </>
              )}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {t.hero.subheadline}
            </p>

            {/* Price Tag Indicator with high aesthetic luxury colors */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 border-l-2 border-[#00FF66] pl-4 py-1.5 font-mono">
              <span className="text-xs text-slate-400 line-through">
                {t.oldPrice || t.hero.oldPrice}
              </span>
              <span className="text-xs sm:text-sm font-black text-[#00FF66] uppercase tracking-wider bg-[#00FF66]/10 px-3 py-1 rounded border border-[#00FF66]/20">
                🚀 {t.newPrice || t.hero.newPrice}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#form-section" 
                className="bg-[#00FF66] hover:bg-[#00D957] text-[#02050E] font-black text-xs md:text-sm px-8 py-4 uppercase text-center transition-all duration-150 rounded tracking-wider shadow-[0_5px_25px_rgba(0,255,102,0.25)] hover:scale-[1.02] flex items-center justify-center gap-2.5"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-4 h-4 text-neutral-950" />
              </a>
              <a 
                href="#results" 
                className="bg-neutral-900/60 hover:bg-neutral-800/80 text-white border border-white/10 font-bold text-xs md:text-sm px-6 py-4 uppercase text-center transition-all duration-150 rounded"
              >
                {lang === 'en' ? "View Operational Metrics 📊" : "Ver Cobertura & Resultados 📊"}
              </a>
            </div>
            
            {/* Safe indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg text-[10px] sm:text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00FF66]" />
                <span>{lang === 'en' ? "Vetted Senior Specialist" : "Estrategista Sênior"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                <span>{lang === 'en' ? "Server-side GTM Tracking" : "Tracking Avançado"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-[#00FF66]" />
                <span>{lang === 'en' ? "Optimized ROI Focus" : "Foco em ROI Real"}</span>
              </div>
            </div>
          </div>

          {/* LATEST INTERACTIVE CAMPAIGN DASHBOARD SIMULATOR - This provides great LIFE and color just like Satya's dashboard deck mockup */}
          <div className="lg:col-span-5 bg-[#0b1228]/95 border border-white/10 rounded-xl p-6 shadow-2xl relative">
            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded animate-pulse">
              LIVE ACCURACY
            </div>
            
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                <span className="w-3 h-3 rounded-full bg-[#00FF66] absolute" />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-300">
                  {lang === 'en' ? "Simulation Panel" : "Simulador de Resultados"}
                </span>
              </div>
              <span className="text-[9px] font-mono bg-white/5 py-0.5 px-2 rounded text-slate-400">
                ACTIVE PIPELINE
              </span>
            </div>

            {/* Tab Swapping buttons for simulation */}
            <div className="grid grid-cols-4 gap-1 mb-5">
              <button 
                onClick={() => handleSimOptionClick('ecommerce')}
                className={`py-1 text-[9px] font-mono uppercase font-bold rounded text-center transition-colors ${activeSimTab === 'ecommerce' ? 'bg-[#00FF66] text-neutral-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                Ecom
              </button>
              <button 
                onClick={() => handleSimOptionClick('local')}
                className={`py-1 text-[9px] font-mono uppercase font-bold rounded text-center transition-colors ${activeSimTab === 'local' ? 'bg-[#00FF66] text-neutral-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                {lang === 'en' ? "Local" : "Local"}
              </button>
              <button 
                onClick={() => handleSimOptionClick('tracking')}
                className={`py-1 text-[9px] font-mono uppercase font-bold rounded text-center transition-colors ${activeSimTab === 'tracking' ? 'bg-[#00FF66] text-neutral-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                CAPI
              </button>
              <button 
                onClick={() => handleSimOptionClick('leads')}
                className={`py-1 text-[9px] font-mono uppercase font-bold rounded text-center transition-colors ${activeSimTab === 'leads' ? 'bg-[#00FF66] text-neutral-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                Leads
              </button>
            </div>

            {/* Ad Simulator preview box */}
            <div className="bg-[#050917] rounded-lg p-4 border border-white/[0.05] mb-5">
              <div className="flex items-center gap-1 mb-2.5">
                <span className="text-[9px] uppercase font-mono text-[#00E5FF] tracking-wide font-extrabold">GOOGLE SEARCH SIMULATION</span>
              </div>
              <div className="bg-[#0a1128] rounded py-1 px-3.5 text-xs text-slate-200 border border-white/10 flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] truncate text-[#00FF66]">
                  {simQuery || simQueries[activeSimTab]}
                </span>
                <span className="text-[9px] text-[#00E5FF] font-mono tracking-wider blink">🔍</span>
              </div>

              {/* Mock ad rendering */}
              <div className="bg-[#060D26]/80 rounded p-3 border-l-2 border-[#00FF66] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-slate-400 border border-slate-500/20 px-1 rounded">AD</span>
                  <span className="text-[10px] font-sans font-bold text-[#00FF66] hover:underline cursor-pointer truncate">
                    Poliana Almeida | Specialized Google Ads Strategy
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 leading-snug">
                  {lang === 'en' 
                    ? "Scaling campaigns with deep attribution, advanced GTM server-side tracking, and strict ROI benchmarks. Stop burning ad budgets on dead clicks!"
                    : "Pare de queimar orçamento com cliques frios. Gestão de alta performance com inteligência geográfica, copies persuasivos e conversão máxima."
                  }
                </p>
                <div className="text-[8px] text-[#00E5FF] font-mono uppercase tracking-widest pt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                  <span>polianaalmeida.com/strategic-leads</span>
                </div>
              </div>
            </div>

            {/* simulated metric displays */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              <div className="bg-white/5 rounded-lg p-3 border border-white/[0.05] text-left">
                <span className="text-[9px] uppercase text-slate-400 block tracking-wider">// KEY OUTCOME</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSimTab}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-lg md:text-xl font-black text-[#00FF66] mt-1"
                  >
                    {activeSimTab === 'ecommerce' && "10x ROAS"}
                    {activeSimTab === 'local' && "-60% CPL"}
                    {activeSimTab === 'tracking' && "100% Secure"}
                    {activeSimTab === 'leads' && "47 Leads/mo"}
                  </motion.div>
                </AnimatePresence>
                <p className="text-[9px] text-slate-400 mt-1">
                  {activeSimTab === 'ecommerce' && "Google Shopping Scaling"}
                  {activeSimTab === 'local' && "Hypertarget Audience"}
                  {activeSimTab === 'tracking' && "GTM + Meta CAPI Restored"}
                  {activeSimTab === 'leads' && "Premium Client Pipeline"}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-3 border border-white/[0.05] text-left">
                <span className="text-[9px] uppercase text-slate-400 block tracking-wider">// REAL TIME ROAS</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSimTab}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-lg md:text-xl font-black text-[#00E5FF] mt-1"
                  >
                    {activeSimTab === 'ecommerce' && "1,240 Sales"}
                    {activeSimTab === 'local' && "22% Conv. Rate"}
                    {activeSimTab === 'tracking' && "API Active"}
                    {activeSimTab === 'leads' && "High-Ticket Funnel"}
                  </motion.div>
                </AnimatePresence>
                <p className="text-[9px] text-slate-400 mt-1">
                  {activeSimTab === 'ecommerce' && "Average checkout volume"}
                  {activeSimTab === 'local' && "Active lead callbacks"}
                  {activeSimTab === 'tracking' && "Data loss prevented"}
                  {activeSimTab === 'leads' && "Zero cold outbound"}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* [SECTION 2: COMPARATIVE CARD DISPLAY] (Mary is highly highlighted in neon checkmarks like Satya's template) */}
      <section id="comparison" className="py-20 md:py-28 px-6 bg-[#040817] border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-16 text-left space-y-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#00E5FF] uppercase tracking-widest font-extrabold bg-[#00E5FF]/10 px-2.5 py-0.5 rounded border border-[#00E5FF]/20">// THE GAP ANALYSIS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
              {t.problem.headline}
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal max-w-2xl">
              {t.problem.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Column A: Without Google Ads (John) - Dark flat minimalist card */}
            <div className="p-8 md:p-12 flex flex-col justify-between bg-white/[0.02] border border-white/[0.08] rounded-xl text-left">
              <div>
                <span className="text-red-400 font-mono text-[11px] font-extrabold block mb-4 tracking-wider uppercase">// {t.problem.colAName}</span>
                <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight mb-2">
                  {lang === 'en' ? "Character Profile: John" : `Perfil: ${t.problem.colAChar}`}
                </h3>
                <div className="mt-8 space-y-4">
                  {t.problem.colABullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-rose-400 shrink-0 mt-0.5 text-xs">❌</span>
                      <span className="text-xs sm:text-sm leading-relaxed text-slate-300 font-sans font-medium">{bullet.replace("❌", "").trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column B: With Google Ads - Highlighted in bright neon line card */}
            <div className="p-8 md:p-12 flex flex-col justify-between bg-[#0b1228] border-2 border-[#00FF66] rounded-xl text-left relative overflow-hidden shadow-[0_0_35px_rgba(0,255,102,0.12)]">
              <div className="absolute top-0 right-0 bg-[#00FF66] text-neutral-950 font-mono text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-4 py-1 rounded-bl">
                {lang === 'en' ? "ACTIVE REVENUE FOCUS" : "RECOMENDADO"}
              </div>
              <div>
                <span className="text-[#00FF66] font-mono text-[11px] font-extrabold block mb-4 tracking-wider uppercase">// {t.problem.colBName}</span>
                <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight mb-2">
                  {lang === 'en' ? "Character Profile: Mary" : `Perfil: ${t.problem.colBChar}`}
                </h3>
                <div className="mt-8 space-y-4">
                  {t.problem.colBBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#00FF66]" />
                      </div>
                      <span className="text-xs sm:text-sm leading-relaxed text-slate-100 font-sans font-semibold">{bullet.replace("✅", "").trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* [SECTION 3: PAINS & GAINS SHIELD AND MATRIX] */}
      <section id="pain-gain" className="py-20 md:py-28 px-6 bg-[#030612] border-b border-white/[0.04] relative">
        <div className="absolute bottom-1/3 left-10 w-[250px] h-[250px] bg-gradient-to-tr from-[#00FF66]/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-16 text-left space-y-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#00E5FF] uppercase tracking-widest font-extrabold bg-[#00E5FF]/10 px-2.5 py-0.5 rounded border border-[#00E5FF]/20">// STRATEGIC DIAGNOSIS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
              {t.painGain.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* The Pains Column */}
            <div className="border border-red-500/20 bg-red-500/[0.02] p-6 sm:p-8 rounded-xl flex flex-col justify-between text-left">
              <div>
                <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-6">// {lang === 'en' ? "THE RECURRENT BOTTLENECKS" : "GARGALOS OPERACIONAIS"}</span>
                <div className="space-y-4">
                  {t.painGain.pains.map((pain, idx) => (
                    <div key={idx} className="flex gap-3 items-start border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                      <span className="text-rose-400 shrink-0 text-sm">😩</span>
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">{pain.replace("😩", "").trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Gains Column */}
            <div className="border border-[#00FF66]/20 bg-[#00FF66]/[0.02] p-6 sm:p-8 rounded-xl flex flex-col justify-between text-left">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#00FF66] uppercase tracking-widest block mb-6">// {lang === 'en' ? "SCALED GROWTH LANDSCAPE" : "EXPANSÃO DE RESULTADOS"}</span>
                <div className="space-y-4">
                  {t.painGain.gains.map((gain, idx) => (
                    <div key={idx} className="flex gap-4 items-start border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                      <div className="w-5 h-5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#00FF66]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-100 leading-relaxed font-sans font-semibold">{gain.replace("🎯", "").replace("📈", "").replace("💰", "").replace("🕐", "").trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Strong Center Transition text */}
          <div className="mt-12 text-center p-6 border border-white/[0.08] bg-white/[0.02] rounded-xl">
            <p className="font-mono text-xs sm:text-sm font-bold text-[#00FF66] uppercase tracking-wider">
              📌 {t.painGain.transition}
            </p>
          </div>

        </div>
      </section>

      {/* [SECTION 4: PIPELINE WORKFLOW / HOW IT WORKS STEP-BY-STEP] */}
      <section id="how-it-works" className="py-20 md:py-28 px-6 bg-[#040817] border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#00E5FF] uppercase tracking-widest font-extrabold bg-[#00E5FF]/10 px-2.5 py-0.5 rounded border border-[#00E5FF]/20">// THE BLUEPRINT DEPLOYMENT</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none mt-2">
              {t.howItWorks.headline}
            </h2>
            <p className="text-slate-400 font-mono text-[11px] uppercase tracking-widest mt-2">// {t.howItWorks.subtext}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="p-8 border border-white/[0.08] bg-white/[0.01] hover:border-[#00FF66]/30 transition-all rounded-xl relative overflow-hidden group text-left">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#00FF66]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-4xl font-extrabold text-[#00FF66]/20 group-hover:text-[#00FF66]/40 transition-colors block mb-6">0{step.number}</span>
                <h4 className="font-sans font-black text-sm sm:text-base text-white uppercase tracking-wider mb-3">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* [SECTION 5: PRODUCT ECOSYSTEM & RETAINER] */}
      <section id="offers" className="py-20 md:py-28 px-6 bg-[#030612] border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-left mb-16 space-y-2">
            <span className="inline-block border border-[#00E5FF]/30 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] font-bold bg-[#00E5FF]/5">
              ENGAGEMENT CHANNELS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
              {t.offers.headline}
            </h2>
            <p className="text-slate-400 mt-4 text-xs sm:text-sm font-sans max-w-2xl">{t.offers.lead}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Product 1: Strategy Call */}
            <div className="border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between bg-white/[0.01] hover:border-[#00FF66]/20 transition-all rounded-xl min-h-[300px] text-left">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#00E5FF] block font-black">// {t.offers.p1.tag}</span>
                <h4 className="font-sans font-black text-xl text-white uppercase mt-2 mb-3 leading-tight">{t.offers.p1.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{t.offers.p1.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-between items-baseline flex-wrap gap-4">
                <span className="font-mono text-xs font-black text-[#00FF66] uppercase">{t.offers.p1.price}</span>
                <a href="#form-section" className="text-[10px] sm:text-xs font-mono font-extrabold uppercase text-[#00FF66] underline underline-offset-4 hover:text-[#00FF66]/80">{t.offers.p1.link}</a>
              </div>
            </div>

            {/* Product 2: Power Hour (Featured Neon Glow card) */}
            <div className="border-2 border-[#00FF66] p-6 sm:p-8 flex flex-col justify-between bg-[#0b1228] shadow-[0_0_25px_rgba(0,255,102,0.1)] rounded-xl min-h-[300px] relative text-left">
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl">
                {t.offers.p2.badge}
              </span>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#00FF66] block font-extrabold">// {t.offers.p2.tag}</span>
                <h4 className="font-sans font-black text-xl text-white uppercase mt-2 mb-3 leading-tight">{t.offers.p2.title}</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">{t.offers.p2.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-between items-baseline flex-wrap gap-4">
                <span className="font-mono text-xs sm:text-sm font-black text-[#00FF66] uppercase">{t.offers.p2.price}</span>
                <a href="#form-section" className="text-[10px] sm:text-xs font-mono font-black uppercase text-white hover:text-slate-300 underline underline-offset-4">{t.offers.p2.link}</a>
              </div>
            </div>

            {/* Product 3: Playbook */}
            <div className="border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between bg-white/[0.01] hover:border-[#00FF66]/20 transition-all rounded-xl min-h-[300px] text-left">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#00E5FF] block font-black">// {t.offers.p3.tag}</span>
                <h4 className="font-sans font-black text-xl text-white uppercase mt-2 mb-3 leading-tight">{t.offers.p3.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{t.offers.p3.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-between items-baseline flex-wrap gap-4">
                <span className="font-mono text-xs font-black text-[#00FF66] uppercase">{t.offers.p3.price}</span>
                <a href="#form-section" className="text-[10px] sm:text-xs font-mono font-extrabold uppercase text-[#00FF66] underline underline-offset-4 hover:text-[#00FF66]/80">{t.offers.p3.link}</a>
              </div>
            </div>

            {/* Product 4: Newsletter */}
            <div className="border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between bg-white/[0.01] hover:border-[#00FF66]/20 transition-all rounded-xl min-h-[300px] text-left">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#00E5FF] block font-black">// {t.offers.p4.tag}</span>
                <h4 className="font-sans font-black text-xl text-white uppercase mt-2 mb-3 leading-tight">{t.offers.p4.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{t.offers.p4.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-between items-baseline flex-wrap gap-4">
                <span className="font-mono text-xs font-black text-[#00FF66] uppercase">{t.offers.p4.price}</span>
                <a href="#form-section" className="text-[10px] sm:text-xs font-mono font-extrabold uppercase text-[#00FF66] underline underline-offset-4 hover:text-[#00FF66]/80">{t.offers.p4.link}</a>
              </div>
            </div>

          </div>

          {/* Premium Enterprise Retention */}
          <div className="border border-[#00FF66]/30 p-8 md:p-12 bg-gradient-to-r from-[#070e24] to-[#040817] text-white rounded-xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FF66]/5 rounded-full blur-2xl" />
            <span className="inline-block bg-[#00FF66] text-black font-mono text-[9px] font-black px-2.5 py-0.5 uppercase tracking-widest mb-4 rounded">
              {lang === 'en' ? "PREMIUM RETAIENER PARTNERSHIP" : "ASSESSORIA DIRECTA EXCLUSIVA"}
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-[#00FF66]">{t.offers.retainer.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8 max-w-4xl font-normal">
              {t.offers.retainer.desc}
            </p>
            <a 
              href="#form-section"
              className="inline-flex bg-white hover:bg-slate-200 text-neutral-950 font-black text-xs px-8 py-4 uppercase transition-all duration-150 rounded tracking-wider shadow-lg"
            >
              {t.offers.retainer.cta}
            </a>
          </div>

        </div>
      </section>

      {/* [SECTION 6: IMPROVED RESULTS & KEY EXAMPLES SECTION] */}
      <section id="results" className="py-20 md:py-28 bg-[#040817] border-b border-white/[0.04] px-6 relative">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-gradient-to-tr from-[#00FF66]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-14 border-b border-white/[0.08] pb-8 text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#00E5FF] uppercase tracking-widest font-extrabold bg-[#00E5FF]/10 px-2.5 py-0.5 rounded border border-[#00E5FF]/20">// PROVEN PERFORMANCE METRICS</span>
            <h2 className="font-sans text-3xl md:text-5xl font-black text-white uppercase tracking-tight">{t.proof.headline}</h2>
          </div>

          {/* SPECIFIC RESULTS BULLET EXAMPLES REQUESTED - Rendered beautifully as glowing milestone charts with hover states */}
          <div className="mb-16">
            <h3 className="font-mono text-center text-xs sm:text-sm text-[#00FF66] uppercase tracking-widest mb-8 font-extrabold block">
              📊 {t.proof.caseStudiesTitle || "Key Strategic Milestones & Performance Breakdowns"}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              {t.proof.caseStudies?.map((cs, idx) => (
                <div key={idx} className="p-6 border border-[#00E5FF]/20 bg-gradient-to-b from-[#08122c] to-[#040816] rounded-xl hover:border-[#00FF66]/50 transition-all flex flex-col justify-between relative group">
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#00FF66]/20 border border-[#00FF66]/50 rounded-full animate-ping" />
                  <div>
                    <div className="inline-block px-2.5 py-1 text-xs font-black font-mono text-neutral-950 bg-[#00FF66] rounded mb-4">
                      {cs.metric}
                    </div>
                    <h4 className="text-xs uppercase font-mono tracking-widest font-extrabold text-slate-350 block mb-2 text-slate-400">
                      // {cs.title}
                    </h4>
                    <p className="text-slate-100 font-sans text-xs sm:text-sm font-semibold leading-relaxed">
                      {cs.desc}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: idx === 0 ? "95%" : idx === 1 ? "88%" : idx === 2 ? "100%" : "90%" }}
                        transition={{ duration: 1.2, delay: idx * 0.15 }}
                        className="bg-gradient-to-r from-[#00FF66] to-[#00E5FF] h-full rounded-full" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {t.proof.testimonials.map((tr, idx) => (
              <div key={idx} className="flex flex-col justify-between border border-white/[0.08] bg-white/[0.01] p-6 sm:p-8 rounded-xl text-left hover:border-white/20 transition-all">
                <div>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#00FF66] block mb-4 border-b border-white/[0.08] pb-3">
                    {tr.metric}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic">
                    "{tr.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <h4 className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-widest">{tr.author}</h4>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-mono max-w-4xl mx-auto leading-relaxed border-t border-white/[0.04] pt-8">
            * {t.proof.disclaimer}
          </p>

        </div>
      </section>

      {/* [NEW TESTIMONIALS SECTION - ⭐⭐⭐⭐⭐ Client Testimonials] - Requested by the user below results */}
      <section className="py-20 md:py-28 bg-[#030612] border-b border-white/[0.04] px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00FF66]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="mb-14 text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] font-mono text-[10px] font-black uppercase tracking-widest">
              <span>{lang === 'en' ? "VERIFIED ENDORSEMENTS" : "AVALIAÇÃO DE PARCEIROS"}</span>
            </div>
            
            {/* Beautiful star headline banner */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-none mt-2">
              {t.clientTestimonials?.headline || "⭐⭐⭐⭐⭐ Client Testimonials"}
            </h2>
            <p className="text-slate-400 font-sans text-xs sm:text-sm max-w-xl mx-auto font-normal">
              {lang === 'en' 
                ? "Read personal logs of high-ticket professionals, content creators, and corporate colleagues who worked directly with Poliana."
                : "Veja o depoimento de profissionais especializados, produtores acadêmicos e jornalistas que conhecem e endossam a excelência da entrega da Poliana."
              }
            </p>
          </div>

          {/* Premium Testimonials Carousel */}
          <div className="relative w-full">
            
            {/* Outer Slide Window wrapper */}
            <div className="overflow-visible md:mx-[-16px] px-1 py-4">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentTestimonialIndex * (100 / visibleCount)}%)` }}
                >
                  {t.clientTestimonials?.reviews?.map((rev, idx) => (
                    <div 
                      key={idx} 
                      className="w-full shrink-0 px-2 md:px-4"
                      style={{ width: `${100 / visibleCount}%` }}
                    >
                      <div className="h-full flex flex-col justify-between bg-gradient-to-b from-[#0c132a] to-[#040816] border border-white/10 hover:border-[#00FF66]/40 transition-all rounded-xl p-6 sm:p-8 relative shadow-xl hover:translate-y-[-4px] duration-200">
                        
                        {/* Decorative Quote mark */}
                        <div className="absolute top-4 right-4 opacity-[0.03] text-white hover:text-[#00FF66] hover:opacity-[0.08] transition-all pointer-events-none">
                          <Quote className="w-12 h-12 transform -scale-x-100" />
                        </div>

                        {/* Star feedback rating block */}
                        <div className="flex gap-1 mb-5 relative z-10">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#00FF66] text-[#00FF66]" />
                          ))}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-100 font-sans leading-relaxed italic mb-8 relative z-10 font-medium">
                          "{rev.text}"
                        </p>

                        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08] mt-auto">
                          <div className="w-12 h-12 rounded-full bg-[#00FF66]/15 border border-[#00FF66]/40 flex items-center justify-center font-mono text-xs sm:text-sm font-black text-[#00FF66] shrink-0">
                            {rev.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">{rev.name}</h4>
                            <p className="text-[10px] text-slate-400 font-mono tracking-wide">{rev.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination Navigator Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 px-1">
              
              {/* Bullets tracker for absolute slide indicators */}
              <div className="flex gap-2.5">
                {[...Array(Math.max(1, (t.clientTestimonials?.reviews?.length || 0) - visibleCount + 1))].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonialIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentTestimonialIndex === idx 
                        ? 'w-8 bg-[#00FF66] shadow-[0_0_12px_rgba(0,255,102,0.6)]' 
                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation manual controls (Left / Right Chevron triggers) */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    const total = t.clientTestimonials?.reviews?.length || 0;
                    const maxIdx = Math.max(0, total - visibleCount);
                    setCurrentTestimonialIndex(prev => prev === 0 ? maxIdx : prev - 1);
                  }}
                  className="w-11 h-11 rounded-full border border-white/10 bg-[#0c132a]/80 hover:bg-[#00FF66]/10 hover:border-[#00FF66]/50 transition-all flex items-center justify-center text-white hover:text-[#00FF66] active:scale-95 cursor-pointer shadow-lg active:duration-100"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    const total = t.clientTestimonials?.reviews?.length || 0;
                    const maxIdx = Math.max(0, total - visibleCount);
                    setCurrentTestimonialIndex(prev => prev === maxIdx ? 0 : prev + 1);
                  }}
                  className="w-11 h-11 rounded-full border border-white/10 bg-[#0c132a]/80 hover:bg-[#00FF66]/10 hover:border-[#00FF66]/50 transition-all flex items-center justify-center text-white hover:text-[#00FF66] active:scale-95 cursor-pointer shadow-lg active:duration-100"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* [SECTION 7: ABOUT THE EXPERT] Custom dark frame */}
      <section className="py-20 md:py-28 px-6 border-b border-white/[0.04] bg-[#040817]">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28 text-left space-y-6">
              <span className="inline-block border border-[#00FF66]/30 rounded px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-widest text-[#00FF66] bg-[#00FF66]/10 font-bold">
                {lang === 'en' ? "CHIEF ADVISOR" : "ESTRATEGISTA TÉCNICA"}
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-none">
                {t.about.headline}
              </h2>
              
              <div className="relative group max-w-sm rounded-xl overflow-hidden">
                {/* Glowing border glow effect behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF66] to-[#0ea5e9] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c132a] shadow-2xl">
                  <img 
                    src={polianaHeadshot} 
                    alt="Poliana Almeida" 
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">Poliana Almeida</h4>
                      <p className="text-[10px] text-slate-400 font-mono">Senior Google Ads Strategist</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] font-mono text-[9px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                      <span>Vetted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 border-l-2 border-[#00FF66]/30 pl-6 lg:pl-10 space-y-6 text-sm md:text-base leading-relaxed text-slate-300 text-left">
              {t.about.paragraphs.map((para, idx) => (
                <p key={idx} className={idx === 0 ? "font-extrabold text-white text-base sm:text-lg leading-snug" : "font-normal text-xs sm:text-sm"}>
                  {para}
                </p>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* [SECTION 8: RISK-FREE GUARANTEE BAR WITH NEON PULSE] */}
      <section className="bg-gradient-to-r from-emerald-900 to-indigo-950 text-white py-14 px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF66]/10 rounded-full blur-[80px]" />
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-3xl text-left space-y-2.5">
            <h3 className="font-sans font-black text-xl md:text-2xl uppercase tracking-tight text-[#00FF66] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-pulse" />
              <span>{t.guarantee.headline}</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-200 font-normal leading-relaxed">
              {t.guarantee.summary}
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="#form-section"
              className="inline-block bg-[#00FF66] hover:bg-[#00D957] text-[#02050E] font-mono font-black text-xs px-8 py-4 uppercase tracking-wider rounded transition-all duration-150 hover:scale-[1.03] shadow-[0_5px_15px_rgba(0,255,102,0.2)]"
            >
              {lang === 'en' ? "CLAIM FREE STRATEGY CALL" : "RESERVAR SESSÃO GRATUITA"}
            </a>
          </div>
        </div>
      </section>

      {/* [SECTION 9: FREQUENTLY ASKED QUESTIONS (FAQ)] */}
      <section id="faq" className="py-20 md:py-28 px-6 bg-[#040817] border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-left mb-14 space-y-1">
            <span className="font-mono text-[10px] text-[#00E5FF] uppercase tracking-widest block font-bold">// OPERATIONS KNOWLEDGE</span>
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase leading-none">{t.faq.headline}</h2>
          </div>

          <div className="border border-white/[0.08] bg-white/[0.01] divide-y divide-white/[0.08] rounded-xl overflow-hidden">
            {t.faq.items.map((item, idx) => {
              const isOpen = expandedFaqIndex === idx;
              return (
                <div key={idx} className="transition-all">
                  <button 
                    onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 hover:bg-white/[0.02]"
                  >
                    <span className="font-sans font-bold text-xs sm:text-sm text-white uppercase tracking-wider">{item.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform text-slate-450 ${isOpen ? 'rotate-180 text-[#00FF66]' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden bg-white/[0.02]"
                      >
                        <p className="p-5 md:p-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.08] text-left">
                          {item.a}
                         </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* [SECTION 10: LEAD CAPTURE FORM] */}
      <section id="form-section" className="py-20 md:py-28 px-6 bg-[#030612] scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="inline-block bg-[#00FF66]/10 border border-[#00FF55]/30 rounded text-[#00FF66] font-mono text-[9px] font-black px-2.5 py-0.5 uppercase tracking-widest">
                {lang === 'en' ? "FINAL ENGAGEMENT" : "DADOS DE CADASTRO"}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
                {t.closing.headline}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                {t.closing.subtext}
              </p>
              
              <div className="border border-white/10 p-5 bg-white/[0.01] rounded-xl font-mono text-[10px] text-slate-400 leading-relaxed text-left">
                ⚡ {lang === 'en' ? "Please fill out the form securely. Your dynamic information will be processed immediately inside local memory configurations to guarantee client-side previews run effortlessly." : "Os dados fornecidos são armazenados apenas localmente para fins de demonstração realista em seu navegador, de maneira 100% segura."}
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#0b1228] border-2 border-[#00FF66]/40 p-6 md:p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,102,0.06)]">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="space-y-1 text-left">
                  <label className="block text-[9px] font-mono uppercase text-slate-400 font-bold">// {t.form.labelName}</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-[#030612] border border-white/10 px-3 py-2 text-xs rounded focus:outline-none focus:border-[#00FF66] font-medium text-white"
                    required
                  />
                </div>

                {/* Email + Phone side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="block text-[9px] font-mono uppercase text-slate-400 font-bold">// {t.form.labelEmail}</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@company.com"
                      className="w-full bg-[#030612] border border-white/10 px-3 py-2 text-xs rounded focus:outline-none focus:border-[#00FF66] font-medium text-white"
                      required
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="block text-[9px] font-mono uppercase text-slate-400 font-bold">// {t.form.labelPhone}</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+55 (00) 00000-0000"
                      className="w-full bg-[#030612] border border-white/10 px-3 py-2 text-xs rounded focus:outline-none focus:border-[#00FF66] font-medium text-white"
                      required
                    />
                  </div>
                </div>

                {/* Company + Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="block text-[9px] font-mono uppercase text-slate-400 font-bold">// {t.form.labelCompany}</label>
                    <input 
                      type="text" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="My Enterprise"
                      className="w-full bg-[#030612] border border-white/10 px-3 py-2 text-xs rounded focus:outline-none focus:border-[#00FF66] font-medium text-white"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="block text-[9px] font-mono uppercase text-slate-400 font-bold">// {t.form.labelWebsite}</label>
                    <input 
                      type="text" 
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="www.mybusiness.com"
                      className="w-full bg-[#030612] border border-white/10 px-3 py-2 text-xs rounded focus:outline-none focus:border-[#00FF66] font-medium text-white"
                    />
                  </div>
                </div>

                {/* Ad Budget Selection Dropdown */}
                <div className="space-y-1 text-left">
                  <label className="block text-[9px] font-mono uppercase text-slate-400 font-bold">// {t.form.labelBudget}</label>
                  <select 
                    value={budgetVal}
                    onChange={(e) => setBudgetVal(e.target.value)}
                    className="w-full bg-[#030612] border border-white/10 px-3 py-2 text-xs rounded focus:outline-none focus:border-[#00FF66] font-mono text-white"
                    required
                  >
                    <option value="">{t.form.placeholderBudget}</option>
                    <option value="Starting Level">$200 - $500 / month</option>
                    <option value="Middle Level">$500 - $2,000 / month</option>
                    <option value="Scale Level">$2,000 - $10,000 / month</option>
                    <option value="Enterprise Level">Above $10,000 / month</option>
                  </select>
                </div>

                {/* Prime Strategic Bottleneck */}
                <div className="space-y-1 text-left">
                  <label className="block text-[9px] font-mono uppercase text-slate-400 font-bold">// {t.form.labelSource}</label>
                  <select 
                    value={bottleneck}
                    onChange={(e) => setBottleneck(e.target.value)}
                    className="w-full bg-[#030612] border border-white/10 px-3 py-2 text-xs rounded focus:outline-none focus:border-[#00FF66] font-sans text-white font-medium"
                    required
                  >
                    <option value="">{lang === 'en' ? '-- Select primordial bottleneck --' : '-- Selecione o obstáculo primordial --'}</option>
                    {t.form.sourceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#00FF66] hover:bg-[#00D957] text-neutral-950 font-black text-xs py-4 uppercase rounded transition-all duration-150 cursor-pointer shadow-[0_5px_20px_rgba(0,255,102,0.2)]"
                  >
                    {isSubmitting ? t.form.submitting : t.form.btnSubmit}
                  </button>
                </div>

              </form>

              {/* Form Success Log Toast */}
              <AnimatePresence>
                {formSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 border border-[#00FF66]/30 bg-white/[0.02] p-5 rounded-lg text-left"
                  >
                    <div className="flex items-center gap-2 mb-2 text-white font-bold font-mono">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#00FF66]" />
                      <span className="text-xs uppercase text-[#00FF66]">{t.form.successTitle}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-350 leading-relaxed font-normal">
                      {t.form.successDesc}
                    </p>
                    <button 
                      onClick={() => setFormSuccess(false)}
                      className="mt-4 text-[9px] font-mono uppercase tracking-wider text-slate-400 underline hover:text-white"
                    >
                      // Fill another strategic audit / Preencher outra aplicação
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* FLOATING CONVERSION NOTIFICATION PROOF ALERTS (Represent Satya's dynamic popups to maximize conversion vibes) */}
      <AnimatePresence>
        {notif && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-6 z-50 bg-[#0c132a] border border-white/10 rounded-xl p-4 shadow-2xl flex items-center gap-3.5 max-w-xs text-left"
          >
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 items-center justify-center font-mono text-xs font-black text-[#00FF66] shrink-0">
              {notif.name.split(" ").map((n: string) => n[0]).join("")}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black text-white">{notif.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                <span className="text-[8px] font-mono uppercase text-[#00FF66] bg-[#00FF66]/10 px-1 py-0.2 rounded">VERIFIED</span>
              </div>
              <p className="text-[10px] text-slate-300 leading-snug font-sans mt-0.5">
                {notif.text}
              </p>
              <div className="flex items-center gap-1 text-[8px] font-mono text-slate-500 mt-1 uppercase">
                <span>📍 {notif.location}</span>
                <span>•</span>
                <span>{lang === 'en' ? "Just now" : "Agora mesmo"}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* [FOOTER] */}
      <footer className="bg-[#030612] border-t border-white/[0.08] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs">
          <div className="text-left">
            <p className="font-sans font-black tracking-tight text-white text-base mb-2">
              POLIANA ALMEIDA
            </p>
            <p className="text-[11px] leading-relaxed">
              {t.footer.copy}
            </p>
          </div>
          <div className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
            // Specialized Google Ads Strategy • 6/8 Accounts Managed
          </div>
        </div>
      </footer>

    </div>
  );
}
