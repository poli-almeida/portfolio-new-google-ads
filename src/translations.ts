export type Language = 'pt' | 'en' | 'es';

export interface TranslationDictionary {
  navbar: {
    about: string;
    problem: string;
    painGain: string;
    howItWorks: string;
    offers: string;
    results: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    oldPrice: string;
    newPrice: string;
    cta: string;
  };
  problem: {
    headline: string;
    lead: string;
    colAName: string;
    colAChar: string;
    colABullets: string[];
    colBName: string;
    colBChar: string;
    colBBullets: string[];
  };
  painGain: {
    headline: string;
    pains: string[];
    transition: string;
    gains: string[];
  };
  howItWorks: {
    headline: string;
    subtext: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  offers: {
    headline: string;
    lead: string;
    p1: { tag: string; title: string; desc: string; price: string; link: string; };
    p2: { tag: string; title: string; desc: string; price: string; link: string; badge: string; };
    p3: { tag: string; title: string; desc: string; price: string; link: string; };
    p4: { tag: string; title: string; desc: string; price: string; link: string; };
    retainer: { title: string; desc: string; cta: string; };
  };
  proof: {
    headline: string;
    testimonials: { metric: string; quote: string; author: string; }[];
    disclaimer: string;
    caseStudiesTitle: string;
    caseStudies: { metric: string; title: string; desc: string; }[];
  };
  clientTestimonials: {
    headline: string;
    reviews: { name: string; role: string; text: string; }[];
  };
  about: {
    headline: string;
    avatarInitials: string;
    paragraphs: string[];
  };
  guarantee: {
    headline: string;
    summary: string;
  };
  faq: {
    headline: string;
    items: { q: string; a: string; }[];
  };
  closing: {
    headline: string;
    subtext: string;
    cta: string;
  };
  form: {
    labelName: string;
    labelEmail: string;
    labelPhone: string;
    labelCompany: string;
    labelWebsite: string;
    labelBudget: string;
    placeholderBudget: string;
    labelSource: string;
    sourceOptions: string[];
    btnSubmit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    portalTitle: string;
    portalEmpty: string;
  };
  footer: {
    copy: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    navbar: {
      about: "About",
      problem: "Comparison",
      painGain: "Pains & Gains",
      howItWorks: "How it Works",
      offers: "Offers",
      results: "Results",
      faq: "FAQ",
      cta: "Schedule Strategy Call"
    },
    hero: {
      badge: "For freelancers, B2B, B2C, and e-commerces",
      headline: "Stop waiting for clients to drop from the sky. 🚀 Google Ads that generate qualified leads every single day.",
      subheadline: "While you do what you do best, I take care of your paid traffic — with strategy, data, and managed Google Ads to bring real clients, not empty clicks.",
      oldPrice: "Old Price: ~~$400/month~~",
      newPrice: "Starting at $180/month",
      cta: "I want more clients →"
    },
    problem: {
      headline: "You are great at what you do. But nobody is finding you.",
      lead: "The difference between a stagnant business and one flooded with qualified leads isn't talent. It’s strategic visibility.",
      colAName: "WITHOUT GOOGLE ADS",
      colAChar: "John",
      colABullets: [
        "❌ Relies 100% on word-of-mouth and sheer luck",
        "❌ Wastes hours posting on Instagram with zero return",
        "❌ Accepts any low-paying client just to pay the bills",
        "❌ Spends months waiting for the next project to magically appear",
        "❌ Remains completely invisible to those who are actively looking to hire"
      ],
      colBName: "WITH GOOGLE ADS — BY ME (POLIANA)",
      colBChar: "Mary",
      colBBullets: [
        "✅ Appears at the exact moment the client is searching for her service",
        "✅ Receives high-quality leads every single day — 24/7",
        "✅ Chooses who to work with and commands a waiting list",
        "✅ Enjoys a predictable pipeline and consistent business growth",
        "✅ Invests in ads and tracks exactly what the return on investment is"
      ]
    },
    painGain: {
      headline: "Do you recognize yourself here?",
      pains: [
        "😩 Spent months relying solely on referrals — and they suddenly dried up",
        "😩 Boosted posts on Instagram and just threw money out the window with no results",
        "😩 Tried running ads on your own, couldn't make sense of the data, and gave up",
        "😩 Feel like smaller competitors are growing much faster than you",
        "😩 Want to scale, but have no idea where your next clients are coming from"
      ],
      transition: "With me managing your Google Ads, you will:",
      gains: [
        "🎯 Appear directly to people who are already searching for what you offer with high buying intent",
        "📈 Have a constant stream of leads without depending on unpredictable social media algorithms",
        "💰 Know exactly how much each lead costs and your exact return on ad spend (ROAS)",
        "🕐 Focus entirely on your business operations while your traffic strategy runs smoothly on autopilot"
      ]
    },
    howItWorks: {
      headline: "How it works — from scratch to high-converting lead",
      subtext: "Simple. Direct. No fluff.",
      steps: [
        {
          number: "1",
          title: "Free Discovery Audit",
          description: "In a 30-minute session, I will audit your account, analyze your business model, pinpoint where you are wasting ad spend, and present a realistic roadmap to generate leads with Google Ads."
        },
        {
          number: "2",
          title: "Campaign Structure & Launch",
          description: "Complete setup of your campaigns including high-intent keywords, high-converting copy, advanced audience targeting, and bulletproof pixel tracking. Tailored entirely to your niche and budget — zero waste."
        },
        {
          number: "3",
          title: "Continuous Optimization & Results",
          description: "Active monitoring, rigorous A/B testing, and weekly optimizations to slash your cost-per-lead and boost performance. You receive clean, jargon-free reports focused entirely on revenue."
        }
      ]
    },
    offers: {
      headline: "Choose how you want to work with me",
      lead: "From a quick diagnostic audit to full end-to-end management. Find the perfect format for your current business stage.",
      p1: {
        tag: "FREE · 1-ON-1",
        title: "Strategy Call",
        desc: "Share your current ad account. In 30 minutes, you'll uncover what’s costing you money, what to prioritize, and what a real optimized setup looks like. No strings attached.",
        price: "Free · 30 minutes",
        link: "Book my free call →"
      },
      p2: {
        tag: "PAID · FOCUSED SESSION",
        badge: "MOST POPULAR 🔥",
        title: "Power Hour",
        desc: "An intensive, deep-dive session where I review your live account, audit active campaigns, or solve complex tracking and strategic bottlenecks in real-time. You set the agenda.",
        price: "€125 (30 min) / €250 (60 min)",
        link: "Book my Power Hour →"
      },
      p3: {
        tag: "SELF-SERVE",
        title: "Google Ads Playbook",
        desc: "The exact battle-tested frameworks I use to build, optimize, and scale highly profitable client accounts. No vague theories — just the practical step-by-step blueprints behind real success.",
        price: "€200 · One-time payment",
        link: "Get the Playbook →"
      },
      p4: {
        tag: "NEWSLETTER",
        title: "Weekly Google Ads Insights",
        desc: "One practical email per week. No recycled news or boring corporate updates — just raw Google Ads strategies, test results, and deep insights from someone spending real money on live accounts.",
        price: "€14.25 / month",
        link: "Subscribe now →"
      },
      retainer: {
        title: "Monthly Google Ads Management",
        desc: "For established businesses that want me to manage everything — keyword research, ad copy creation, daily budget optimizations, scaling, and strategy — while you focus on running your business. High-touch, transparent service with no surprises.",
        cta: "Request a custom management proposal →"
      }
    },
    proof: {
      headline: "Real results from real business owners",
      testimonials: [
        {
          metric: "3× ROAS",
          quote: "I had never achieved such a predictable return on ad spend before. Poliana organizes everything flawlessly and delivers reports that actually make sense to a business owner.",
          author: "— Marcus, Fashion E-commerce Owner"
        },
        {
          metric: "47 leads/mo",
          quote: "Before working with Poliana, I depended 100% on word-of-mouth. Now I have a non-stop queue of potential clients. This management completely transformed the baseline of my business.",
          author: "— Ana, B2B Consultant"
        },
        {
          metric: "-60% CPC",
          quote: "I tried doing it myself and burned through a massive budget. Poliana completely restructured my account structure and slashed my cost-per-click by more than half within 45 days.",
          author: "— Rafael, Digital Agency Founder"
        }
      ],
      disclaimer: "Individual results may vary depending on industry niche, monthly ad budget, core offer strength, and brand consistency.",
      caseStudiesTitle: "Key Strategic Milestones & Performance Breakdowns",
      caseStudies: [
        {
          metric: "10x ROAS",
          title: "E-commerce Scaling",
          desc: "A boutique retail brand came to me with a 1.8x ROAS, draining cash on high-intent keywords but failing to convert dynamic checkout visits. I conducted a complete account overhaul, separating low-converting generic queries and feeding the smart-bidding algorithm with laser-targeted Search and Google Shopping assets. Within 60 days, purchase velocity spiked, culminating in a sustained 10x ROAS that allowed the founder to scale monthly inventory safely."
        },
        {
          metric: "-60% CPL",
          title: "Local Services Expansion",
          desc: "A local high-end medical clinic was paying an unsustainable $85 per lead, losing search auctions to major regional hospitals. By implementing hyper-segmented zip-code geofencing, custom bidding schedules, and deploying local callout extensions that emphasized quick response, I sliced the cost-per-lead (CPL) by 60%. The clinic filled its schedule with premium patients needing high-ticket treatments, maximizing their operational revenue."
        },
        {
          metric: "100% Recovered",
          title: "Complete Tracking Recovery",
          desc: "A high-ticket international consulting firm was flying blind due to iOS 14+ cookie degradation, causing their live web conversions and Google Ads bids to desynchronize. I successfully mapped and deployed a custom Server-Side tracking solution using Google Tag Manager (GTM) connected to custom cloud servers. With 100% of purchase event sequences accurately recovered, the machine-learning engine stabilized bids and restored predictability."
        },
        {
          metric: "Max Volume",
          title: "Strategic Lead Generation",
          desc: "A premium corporate SaaS B2B platform struggled with empty website clicks that never booked live product demos. I redesigned their Google Ads targeting by filtering traffic strictly for business decision-makers, adding strict negative keyterms, and upgrading the core landing page. By treating demo bookings as primary conversion targets alongside custom lead-scoring, lead quality surged, yielding an active sales pipeline."
        }
      ]
    },
    clientTestimonials: {
      headline: "⭐⭐⭐⭐⭐ Client Testimonials",
      reviews: [
        {
          name: "Arthur Salles",
          role: "Journalist & Media Creator",
          text: "Poliana was an excellent partner in high-performance digital projects. Her technical qualifications in paid media, flawless organization, and agility ensure that every dollar invested in ads is maximized. She masters communication and marketing funnels, making her a spectacular traffic expert."
        },
        {
          name: "Vitória Cruz",
          role: "Social Media & Marketing Creator",
          text: "Poliana is a huge inspiration in digital marketing, bringing endless creativity to ad strategies every day! Our strategic partnership has been sensational, combining high-impact creatives with audience intelligence in Google Ads. A performance professional far above average! 💜"
        },
        {
          name: "Kethlyn Saibert",
          role: "Copywriter & Content Specialist",
          text: "Poliana has an outstanding dedication to metrics and results. We worked together developing engagement strategies and lead capture funnels. The conversion results were highly significant because she plans every ad and keyword centering on the customer journey. A proactive, highly analytical professional!"
        },
        {
          name: "Mauricio Geronasso",
          role: "Content Producer & Partner",
          text: "Poliana is a PROTAGONIST traffic strategist. A natural leader, highly focused, with an outstanding sense of responsibility for client budgets. She is fearless when testing new funnels and always dominates high-level attribution tracking (GTM, Meta CAPI). Working alongside her on customer acquisition is highly gratifying!"
        },
        {
          name: "Daniela dos Santos",
          role: "Digital Publisher & Brand Owner",
          text: "An excellent professional in campaign structuring and audience testing. Always agile, organized, and extremely competent with technical funnel analytics. She spots bottlenecks on landing pages easily, which directly boosts ad performance. A huge inspiration!"
        },
        {
          name: "Liliane Garcia",
          role: "Social Projects Coordinator",
          text: "Possesses incredible creativity and excellence in campaign execution. Poliana dedicates herself entirely to analyzing traffic data, identifying bids waste, and optimizing creatives to lower cost-per-lead. Her high level of execution lifts any store or business of any scale."
        },
        {
          name: "Evandro Tosin",
          role: "Audiovisual Director & Academic",
          text: "Dynamic, quick-minded, creative, and with an excellent capacity for high-converting persuasive copys. This mastery of communication gives her Google Search ads CTR rates far above the market default. She does deep audience research before launching campaigns. Brilliant!"
        }
      ]
    },
    about: {
      headline: "Who am I?",
      avatarInitials: "PA",
      paragraphs: [
        "Hi, my name is Poliana Almeida.",
        "When I first started out - I believed what most service providers and business owners believe:\n\n“If I’m great at my craft… the clients will come.”\n\nSpoiler: they didn’t.",
        "I spent years riding the feast-and-famine rollercoaster - chasing referrals, guessing what would work, and wondering why less-skilled businesses were fully booked.",
        "That’s what led me here. When I started running ads for my clients - I could see that this could be a fantastic tool for other business owners, too.",
        "So I took my time building this high-performance ad system - based on:",
        "- Years of hands-on experience in paid traffic, transitioning from core traffic management to building a dedicated media-buying operation.",
        "- Managing and optimizing complex ad campaigns across diverse markets, from hyper-local lead generation to high-ticket international spaces.",
        "- Mastering global platforms like Upwork to secure premium international contracts, proving how targeted positioning wins high-intent clients.",
        "- Bridging technical accuracy with clear strategy, making sure every single dollar spent on Google Ads is tracked, optimized, and tied directly to true return on investment.",
        "- Building a highly efficient, independent business that allows me to manage global campaigns and stay fully connected with international clients from anywhere.",
        "But more importantly?",
        "I get what it’s like to be the hidden gem - the one who delivers real results, understands the mechanics of a great offer, but still feels invisible online.",
        "That’s why I built this.",
        "Not as a traditional agency pushing vanity metrics and empty clicks, but as a fellow strategist who figured out how to get seen - and get paid - without selling my soul.",
        "And now? It’s your turn."
      ]
    },
    guarantee: {
      headline: "✓ Zero Risk. Start with a completely free strategy session.",
      summary: "The Strategy Call is 100% free and requires no commitment. In 30 minutes, you will gain absolute clarity on your high-priority action items — whether you choose to work with me moving forward or not."
    },
    faq: {
      headline: "Frequently Asked Questions",
      items: [
        {
          q: "Do I need previous experience with ads to get started?",
          a: "Not at all. I manage the entire workflow — from initial architecture setup to ongoing scaling and data optimizations. You just need a validated business offer and the capacity to handle new clients."
        },
        {
          q: "What is the minimum recommended ad budget?",
          a: "It varies based on your niche and market competition, but consistent results usually start to show with a minimum of $200–$500/month allocated directly to the ad platform, in addition to the management fee."
        },
        {
          q: "Does this work for both service-based businesses and e-commerce?",
          a: "Yes. I have extensive experience structuring both models — whether your goal is high-quality lead generation for B2B/B2C services or driving direct purchase conversions for digital and physical storefronts."
        },
        {
          q: "How long does it take to see tangible results?",
          a: "Well-structured search and performance campaigns typically start gathering conversion velocity and delivering initial leads within 2 to 4 weeks. Continuous manual optimization compounds these numbers over time."
        },
        {
          q: "Can I start with the free call without any obligation?",
          a: "Yes, absolutely — and it’s highly recommended. The free Strategy Call is the perfect initial step to audit your current performance and determine if there is a mutual fit."
        }
      ]
    },
    closing: {
      headline: "Stop being the best-kept secret on Google.",
      subtext: "Your ideal customers are actively searching for exactly what you sell right now. The only real question is: are they finding you or your competitor?",
      cta: "Book my free Strategy Call now →"
    },
    form: {
      labelName: "Your Full Name",
      labelEmail: "Corporate Contact Email",
      labelPhone: "Direct WhatsApp Line",
      labelCompany: "Name of Your Company",
      labelWebsite: "Company Website (URL for diagnostics)",
      labelBudget: "Desired Monthly Google Ads Budget",
      placeholderBudget: "Select approximate investment range",
      labelSource: "What is your main strategic or technical bottleneck today?",
      sourceOptions: [
        "I am burning money on low-quality search clicks with zero conversion",
        "The cost-per-lead (CPL) is completely unsustainable in my niche",
        "I don't have Server-Side conversion tracking or a solid GTM setup",
        "I want to launch high-intent ad campaigns from absolute scratch safely",
        "I need to fire my legacy agency and their contextless vanity metrics"
      ],
      btnSubmit: "Book my free Strategy Call now →",
      submitting: "Analyzing data assets...",
      successTitle: "🎉 Application Logged Successfully!",
      successDesc: "We received your parameters. I will personally audit your website and reach out via WhatsApp signature within 3 hours to book our Zoom Strategy session.",
      portalTitle: "Secured Lead Registries (CRM Ledger Preview)",
      portalEmpty: "No leads submitted in this browser session yet. Use the form above to log data to localStorage!"
    },
    footer: {
      copy: "© 2026 Poliana Almeida · Specialized Google Ads Strategy · All rights reserved"
    }
  },
  pt: {
    navbar: {
      about: "Sobre",
      problem: "Comparativo",
      painGain: "Dores e Ganhos",
      howItWorks: "Como Funciona",
      offers: "Modelos",
      results: "Resultados",
      faq: "Perguntas",
      cta: "Agendar Reunião Estratégica"
    },
    hero: {
      badge: "Para freelancers, B2B, B2C e e-commerces",
      headline: "Pare de esperar que os clientes caiam do céu. 🚀 Google Ads que gera leads qualificados todos os dias.",
      subheadline: "Enquanto você faz o que faz de melhor, eu cuido do seu tráfego pago — com estratégia, dados e anúncios gerenciados para trazer clientes reais, não cliques vazios.",
      oldPrice: "Preço Antigo: ~~R$2.000/mês~~",
      newPrice: "A partir de R$900/mês",
      cta: "Eu quero mais clientes →"
    },
    problem: {
      headline: "Você é excelente no que faz. Mas ninguém te encontra.",
      lead: "A diferença entre um negócio estagnado e um inundado de leads qualificados não é talento. É visibilidade estratégica.",
      colAName: "SEM GOOGLE ADS",
      colAChar: "John",
      colABullets: [
        "❌ Depende 100% de indicações boca a boca e pura sorte",
        "❌ Desperdiça horas postando no Instagram com retorno zero",
        "❌ Aceita qualquer cliente que pague pouco apenas para pagar as contas",
        "❌ Passa meses esperando que o próximo projeto apareça magicamente",
        "❌ Permanece completamente invisível para quem busca ativamente contratar"
      ],
      colBName: "COM GOOGLE ADS — COMIGO (POLIANA)",
      colBChar: "Mary",
      colBBullets: [
        "✅ Aparece no exato momento em que o cliente pesquisa pelo serviço dela",
        "✅ Recebe leads de alta qualidade todos os dias — 24 horas por dia, 7 dias por semana",
        "✅ Decide com quem quer trabalhar e gerencia uma fila de espera",
        "✅ Desfruta de um fluxo previsível e crescimento consistente dos negócios",
        "✅ Investe em anúncios e acompanha exatamente qual é o retorno do investimento"
      ]
    },
    painGain: {
      headline: "Você se reconhece aqui?",
      pains: [
        "😩 Passou meses dependendo unicamente de indicações — e elas secaram de repente",
        "😩 Impulsionou publicações no Instagram e simplesmente jogou dinheiro fora sem resultados",
        "😩 Tentou rodar anúncios por conta própria, não entendeu os dados e desistiu",
        "😩 Sente que concorrentes menores estão crescendo muito mais rápido que você",
        "😩 Quer escalar, mas não tem ideia de onde virão seus próximos clientes"
      ],
      transition: "Comigo gerenciando seu Google Ads, você vai:",
      gains: [
        "🎯 Aparecer diretamente para pessoas que já pesquisam pelo que você oferece com alta intenção de compra",
        "📈 Ter um fluxo constante de leads sem depender de algoritmos imprevisíveis das redes sociais",
        "💰 Saber exatamente quanto custa cada lead e seu retorno real sobre investimento em anúncios (ROAS)",
        "🕐 Focar inteiramente na operação do seu negócio enquanto sua estratégia de tráfego opera no piloto automático"
      ]
    },
    howItWorks: {
      headline: "Como funciona — do absoluto zero ao lead de alta conversão",
      subtext: "Simples. Direto. Sem enrolação.",
      steps: [
        {
          number: "1",
          title: "Auditoria de Descoberta Gratuita",
          description: "Em uma sessão de 30 minutos, eu vou auditar pessoalmente sua conta, analisar o modelo do seu negócio, identificar onde você está desperdiçando orçamento e apresentar um roteiro prático para gerar leads com Google Ads."
        },
        {
          number: "2",
          title: "Estruturação e Lançamento de Campanha",
          description: "Configuração completa de suas campanhas incluindo palavras-chave de alta intenção, copies de alto impacto, segmentação avançada de público e instalação blindada de rastreamentos. Criado sob medida para seu nicho e orçamento — desperdício zero."
        },
        {
          number: "3",
          title: "Otimização Contínua e Resultados",
          description: "Monitoramento ativo, testes A/B rigorosos e otimizações semanais para reduzir seu custo por lead e impulsionar a performance. Você recebe relatórios claros, diretos e focados em receitas reais."
        }
      ]
    },
    offers: {
      headline: "Escolha como deseja trabalhar comigo",
      lead: "Desde uma auditoria de diagnóstico rápida até a gestão completa de ponta a ponta. Encontre o formato perfeito para o momento atual da sua empresa.",
      p1: {
        tag: "GRATUITO · 1-PARA-1",
        title: "Chamada de Estratégia",
        desc: "Compartilhe sua conta atual de anúncios. Em 30 minutos, você descobrirá o que está te custando dinheiro desnecessário, o que priorizar e como deve ser uma estrutura de anúncios otimizada.",
        price: "Gratuito · 30 minutos",
        link: "Reservar minha chamada gratuita →"
      },
      p2: {
        tag: "PAGO · SESSÃO FOCADA",
        badge: "MAIS POPULAR 🔥",
        title: "Power Hour",
        desc: "Uma sessão intensiva focada onde eu analiso pessoalmente sua conta ativa, audito campanhas ou resolvo pontos de gargalo técnicos e de rastreio complexos em tempo real sob sua agenda.",
        price: "R$ 750 / sessão",
        link: "Agendar minha Power Hour →"
      },
      p3: {
        tag: "AUTO-SERVIÇO",
        title: "Google Ads Playbook",
        desc: "Os frameworks exatos validados que eu utilizo para construir, otimizar e escalar contas lucrativas de clientes. Sem teorias vagas — passos práticos e blueprints de sucesso.",
        price: "R$ 197 · Pagamento único",
        link: "Adquirir o Playbook →"
      },
      p4: {
        tag: "NEWSLETTER",
        title: "Weekly Google Ads Insights",
        desc: "Um e-mail prático por semana. Sem notícias recicladas ou updates corporativos chatos — apenas estratégias cruas de Google Ads, de quem gerencia orçamentos reais.",
        price: "R$ 49 / mês",
        link: "Assinar agora →"
      },
      retainer: {
        title: "Gestão Mensal de Google Ads",
        desc: "Para empresas consolidadas que desejam que eu gerencie tudo como sua parceira sênior — pesquisa de termos, criação de copies, otimização de orçamentos diários e escala — enquanto você foca na operação. Serviço dedicado sem surpresas.",
        cta: "Solicitar proposta de gestão mensal personalizada →"
      }
    },
    proof: {
      headline: "Resultados reais de parceiros de negócios reais",
      testimonials: [
        {
          metric: "3× ROAS",
          quote: "Eu nunca havia alcançado um retorno sobre o investimento em anúncios tão previsível antes. Poliana organiza tudo perfeitamente e entrega relatórios que realmente fazem sentido.",
          author: "— Marcus, Dono de E-commerce de Moda"
        },
        {
          metric: "47 leads/mês",
          quote: "Antes de trabalhar com a Poliana, eu dependia 100% de indicações. Hoje possuo uma fila de clientes interessados. Essa gestão transformou a base operacional da minha empresa.",
          author: "— Ana, Consultora B2B"
        },
        {
          metric: "-60% CPC",
          quote: "Eu mesmo tentei gerenciar e acabei gastando muita verba. Poliana reestruturou toda a segmentação de leilões e cortou meu custo por clique para menos da metade em 45 dias.",
          author: "— Rafael, Fundador de Agência Digital"
        }
      ],
      disclaimer: "Resultados individuais podem variar dependendo do nicho de mercado, orçamento mensal, força da oferta estrutural e consistência da marca.",
      caseStudiesTitle: "Principais Marcos Estratégicos e Métricas de Desempenho",
      caseStudies: [
        {
          metric: "10x ROAS",
          title: "Escala de E-commerce",
          desc: "Uma marca premium de varejo chegou até mim com um ROAS de apenas 1.8x, drenando orçamento com termos genéricos e caras pesquisas vazias de conversão. Eu realizei uma reestruturação cirúrgica completa na conta de anúncios, separando termos de alta intenção e alimentando o algoritmo de lances inteligentes com criativos e palavras-chave cirúrgicas no Search + Shopping. Em 60 dias, as compras dispararam, garantindo um ROAS sustentável de 10x e viabilizando a escala."
        },
        {
          metric: "-60% CPL",
          title: "Serviços Locais",
          desc: "Uma clínica médica de alto padrão estava pagando insustentáveis R$ 120 por lead, perdendo leilões para grandes redes de saúde regionais. Com a implementação de geolocalização hiper-localizada por raio de CEP, programações estratégicas de lances e extensões de chamadas focadas em atendimento rápido, eu cortei o custo por lead (CPL) em 60%, preenchendo a agenda operacional da clínica com procedimentos de alto valor."
        },
        {
          metric: "100% Recuperado",
          title: "Rastreamento Blindado",
          desc: "Um funil de consultoria internacional de alto tíquete operava às cegas devido aos bloqueios de cookies de navegadores modernos (iOS 14+), desregulando o cruzamento de dados com seu CRM de CRM vendas. Eu desenhei do zero uma nova arquitetura robusta Server-Side com Google Tag Manager (GTM) hospedado em container cloud dedicada. Recuperando 100% dos eventos de conversão, estabilizei lances automáticos e gerou previsibilidade."
        },
        {
          metric: "Máximo Volume",
          title: "Geração Estratégica de Leads",
          desc: "Uma plataforma de soluções de software B2B corporativa sofria com alto volume de tráfego que consumia orçamento mas nunca preenchia formulários de demonstração demonstrativos. Eu reconfigurei o funil de anúncios excluindo buscas curiosas, filtrando tráfego exclusivamente para cargos de liderança institucional e refazendo o design da landing page institucional. A qualidade disparou, resultando em conversões qualificadas recorrentes."
        }
      ]
    },
    clientTestimonials: {
      headline: "⭐⭐⭐⭐⭐ Depoimentos de Clientes",
      reviews: [
        {
          name: "Arthur Salles",
          role: "Jornalista & Produtor Digital",
          text: "A Poliana foi uma grande parceira em projetos de alta performance. Sua qualificação técnica em mídia paga, organização impecável e agilidade garantem que todo real investido em anúncios seja otimizado ao máximo. Ela domina a comunicação e o funil de vendas, sendo uma gestora de tráfego de elite."
        },
        {
          name: "Vitória Cruz",
          role: "Social Media & Criação de Conteúdo",
          text: "A Poliana é uma grande inspiração no marketing digital, exercitando a criatividade em estratégias de anúncios todos os dias! Nossa parceria estratégica tem sido sensacional, unindo criativos de alto impacto com inteligência de público no Google Ads. Uma profissional de performance acima da média! 💜"
        },
        {
          name: "Kethlyn Saibert",
          role: "Copywriter & Analista de Conteúdo",
          text: "Poliana tem uma dedicação e foco em resultados fora do comum. Trabalhamos juntas no desenvolvimento de estratégias de engajamento e funis de captação de leads. O resultado em conversões foi altamente expressivo porque ela planeja cada anúncio e palavra-chave pensando na jornada do cliente. Proativa e altamente analítica!"
        },
        {
          name: "Mauricio Geronasso",
          role: "Criador de Conteúdo & Jornalista",
          text: "A Poliana é uma estrategista de tráfego PROTAGONISTA. Líder nata, focada e possui um senso de responsabilidade fora do comum com o orçamento dos parceiros. Ela não tem medo de testar novos funis e domina as melhores tecnologias de rastreamento (GTM e Meta CAPI). Parceria fantástica de performance!"
        },
        {
          name: "Daniela dos Santos",
          role: "Produtora Editorial & Diretora de Marca",
          text: "Excelente profissional na estruturação de campanhas e testes de público. Sempre ágil, organizada e absurdamente competente com a análise técnica de funis. Consegue enxergar gargalos em páginas de vendas de forma simples e direta, o que otimiza diretamente a performance dos anúncios. Uma inspiração!"
        },
        {
          name: "Liliane Garcia",
          role: "Coordenadora de Projetos Sociais",
          text: "Dona de uma criatividade fantástica e excelência na execução de campanhas. A Poliana se dedica de corpo e alma a analisar dados de tráfego, identificar onde está ocorrendo desperdício de leilão e otimizar anúncios para reduzir o CPL. Seu profissionalismo agrega valor incrível a qualquer negócio."
        },
        {
          name: "Evandro Tosin",
          role: "Diretor de Audiovisual & Acadêmico",
          text: "Dinâmica, ágil, criativa e com uma capacidade excelente de copy persuasivo de alta conversão. Esse domínio da comunicação faz com que seus anúncios no Google Search tenham um CTR muito acima do mercado. Desenvolve pesquisas profundas antes de subir qualquer campanha. Uma profissional de alta performance!"
        }
      ]
    },
    about: {
      headline: "Quem sou eu?",
      avatarInitials: "PA",
      paragraphs: [
        "Olá, meu nome é Poliana Almeida.",
        "Quando comecei, eu acreditava no que a maioria dos prestadores de serviços e empresários acredita:\n\n“Se eu for de elite no que faço... os clientes virão.”\n\nSpoiler: eles não vieram.",
        "Passei anos na montanha-russa de altos e baixos de faturamento — correndo atrás de indicações, tentando adivinhar o que funcionaria e me perguntando por que negócios com menos qualificação técnica estavam com a agenda cheia.",
        "Foi isso que me trouxe até aqui. Quando comecei a rodar anúncios para os meus clientes, percebi que essa poderia ser uma ferramenta fantástica para outros empresários também.",
        "Por isso, dediquei meu tempo para estruturar este sistema de anúncios de alta performance, baseado em:",
        "- Anos de experiência prática em tráfego pago, transitando do gerenciamento básico de tráfego para a criação de uma operação dedicada de compra de mídia.",
        "- Gerenciar e otimizar campanhas de anúncios complexas em diversos mercados, desde geração de leads hiper-localizada até espaços internacionais de alto tíquete (high-ticket).",
        "- Dominar plataformas globais como o Upwork para conquistar contratos internacionais premium, provando como o posicionamento segmentado atrai clientes de alta intenção.",
        "- Unir precisão técnica com estratégia clara, garantindo que cada centavo investido no Google Ads seja rastreado, otimizado e conectado diretamente ao retorno real sobre o investimento.",
        "- Construir um negócio altamente eficiente e independente que me permita gerenciar campanhas globais e manter conexão total com clientes internacionais de qualquer lugar.",
        "Mas o mais importante?",
        "Eu entendo perfeitamente o que é ser aquela joia oculta — quem entrega resultados de verdade, domina a mecânica de uma excelente oferta, mas ainda se sente invisível online.",
        "É por isso que construí este sistema.",
        "Não como uma agência tradicional focada em métricas de vaidade e cliques vazios, mas como uma estrategista parceira que descobriu como ser vista — e ser paga — sem perder a integridade.",
        "E agora? É a sua vez."
      ]
    },
    guarantee: {
      headline: "✓ Risco Zero. Comece com uma sessão estratégica totalmente gratuita.",
      summary: "A Chamada Estratégica é 100% gratuita de verdade e não tem qualquer contraprestação de compromisso. Em 30 minutos de conversação, você sairá com plano claro de ações táticas com prioridade em caixa rápida — quer decida ter suporte de gestão técnica ou não."
    },
    faq: {
      headline: "Perguntas Frequentes",
      items: [
        {
          q: "Preciso ter experiência prévia com anúncios para começar?",
          a: "De forma alguma. Eu cuido de todo o fluxo operacional técnico — desde o desenho da arquitetura inicial das campanhas até as otimizações contínuas de escala. Você só precisa ter um portfólio de serviços ou produtos validados e operacional pronto para receber leads."
        },
        {
          q: "Qual o orçamento mínimo recomendado para os anúncios?",
          a: "Isso varia de acordo com seu mercado de concorrência, mas geralmente sugerimos reservar pelo menos R$500 a R$1.500 mensais destinados exclusivamente à plataforma de anúncios para que o algoritmo obtenha tração adequada, além dos custos de gestão correspondentes."
        },
        {
          q: "Dá resultados para prestadores de serviços e e-commerce?",
          a: "Sim. A metodologia de estrutura se aplica eficientemente para ambos — quer sua meta seja aquisição direcionada de leads premium para negócios B2B ou vendas diretas com conversão imediata para canais de compras."
        },
        {
          q: "Em quanto tempo começo a notar resultados reais?",
          a: "As campanhas bem estruturadas normalmente começam a gerar leads e pedidos em leilões nas primeiras 2 a 4 semanas. A calibragem manual de negativas e lances ajuda a amadurecer e otimizar as métricas de conversão continuamente."
        },
        {
          q: "Posso fazer a primeira chamada gratuita sem compromisso?",
          a: "Sim, absolutamente. É a via recomendada por nós para mapear riscos táticos prévios da sua conta corrente e verificar se há sinergia transparente de trabalho mútuo."
        }
      ]
    },
    closing: {
      headline: "Pare de ser o segredo mais bem guardado do Google.",
      subtext: "Seus clientes ideais estão buscando exatamente o que você vende agora mesmo. A única dúvida é: eles estão encontrando você ou seu concorrente?",
      cta: "Reservar minha Chamada de Estratégia Gratuita agora →"
    },
    form: {
      labelName: "Seu Nome Completo",
      labelEmail: "E-mail Corporativo de Contato",
      labelPhone: "WhatsApp Direto de Contato",
      labelCompany: "Nome do seu Empreendimento",
      labelWebsite: "Website do Negócio (URL)",
      labelBudget: "Orçamento de Tráfego Mensal Previsto",
      placeholderBudget: "Selecione a faixa aproximada",
      labelSource: "Qual o seu principal obstáculo de escala de anúncios hoje?",
      sourceOptions: [
        "Estou gastando orçamento de cliques com visitas irrelevantes de pouco retorno",
        "O custo de captura de lead (CPL) está alto demais no meu mercado",
        "Minhas tags de pixels e Google Tag Manager não estão parametrizadas",
        "Gostaria de iniciar minhas primeiras campanhas do zero com segurança",
        "Quero trocar de agência de publicidade padrão com relatórios sem transparência"
      ],
      btnSubmit: "Reservar minha Chamada de Estratégia Gratuita agora →",
      submitting: "Analisando ativos táticos de divulgação...",
      successTitle: "🎉 Aplicação Registrada com Êxito!",
      successDesc: "Capturamos suas coordenadas de negócios. Eu analisarei pessoalmente seu domínio e entrarei em contato direto no WhatsApp dentro do período de 3 horas úteis para coordenarmos nosso horário pelo Zoom.",
      portalTitle: "Leads Cadastrados Recém-Recebidos (Histórico Local)",
      portalEmpty: "Sem submissões arquivadas neste navegador ainda. Complete o formulário para testar o armazenamento em localStorage!"
    },
    footer: {
      copy: "© 2026 Poliana Almeida · Specialized Google Ads Strategy · All rights reserved"
    }
  },
  es: {
    navbar: {
      about: "Sobre Mí",
      problem: "Comparación",
      painGain: "Puntos Clave",
      howItWorks: "Metodología",
      offers: "Modelos",
      results: "Resultados",
      faq: "Preguntas",
      cta: "Agendar Reunión"
    },
    hero: {
      badge: "Para freelancers, B2B, B2C y e-commerces",
      headline: "Deja de esperar que los clientes caigan del cielo. 🚀 Google Ads que genera leads calificados todos los días.",
      subheadline: "Mientras haces lo que mejor sabes hacer, yo me encargo de tu tráfico pagado — con estrategia, datos y anuncios gestionados para atraer clientes reales, no clics vacíos.",
      oldPrice: "Precio Anterior: ~~€400/mes~~",
      newPrice: "Desde €180/mes",
      cta: "Quiero más clientes →"
    },
    problem: {
      headline: "Eres excelente en lo que haces. Pero nadie te encuentra.",
      lead: "La diferencia entre un negocio estancado y uno inundado de leads calificados no es el talento. Es la visibilidad estratégica.",
      colAName: "SIN GOOGLE ADS",
      colAChar: "John",
      colABullets: [
        "❌ Depende al 100% del boca a boca y de la simple suerte",
        "❌ Desperdicia horas publicando en Instagram con retorno cero",
        "❌ Acepta cualquier cliente de bajo presupuesto solo para cubrir costos",
        "❌ Pasa meses esperando que surja un nuevo proyecto de forma mágica",
        "❌ Sigue siendo invisible para quienes buscan activamente contratar"
      ],
      colBName: "CON GOOGLE ADS — CONMIGO (POLIANA)",
      colBChar: "Mary",
      colBBullets: [
        "✅ Aparece en el momento exacto en que el cliente busca su servicio",
        "✅ Recibe clientes potenciales calificados todos los días, 24 horas al día, 7 días a la semana",
        "✅ Decide con quién trabajar y maneja una lista de espera de clientes",
        "✅ Disfruta de un flujo predecible y crecimiento sostenible empresarial",
        "✅ Invierte en publicidad y sabe con precisión el retorno de cada euro"
      ]
    },
    painGain: {
      headline: "¿Te identificas con estas situaciones?",
      pains: [
        "😩 Llevas meses dependiendo solo de referidos — y de pronto se detuvieron",
        "😩 Promocionaste posts en Instagram y solo tiraste dinero sin ver un lead",
        "😩 Intentaste activar campañas por tu cuenta pero la complejidad te superó",
        "😩 Ves que competidores más pequeños crecen mucho más rápido que tu marca",
        "😩 Deseas escalar operaciones pero desconoces el origen de tu próxima venta"
      ],
      transition: "Conmigo gestionando tus campañas de Google Ads, lograrás:",
      gains: [
        "🎯 Aparecer enfrente de usuarios que ya buscan lo tuyo con clara intención de compra",
        "📈 Asegurar un canal predecible de contactos sin depender de reestructuraciones de algoritmos",
        "💰 Controlar el costo exacto por prospecto y evaluar con transparencia tu métrica de ROAS",
        "🕐 Dedicarte al desarrollo de tu negocio mientras el tráfico trabaja con eficiencia"
      ]
    },
    howItWorks: {
      headline: "Cómo funciona — desde cero hasta el lead de alta conversión",
      subtext: "Simple. Directo. Sin rodeos.",
      steps: [
        {
          number: "1",
          title: "Auditoría de Descubrimiento Gratuita",
          description: "En una sesión enfocada de 30 minutos, yo personalmente auditaré tu cuenta de anuncios, investigaré tu oferta comercial, señalaré fugas de dinero y definirá un plan práctico."
        },
        {
          number: "2",
          title: "Setup de Campañas & Lanzamiento",
          description: "Configuración total de tus campañas con estructura de concordancia fina, copies persuasivos de alto CTR y píxeles optimizados. Todo al presupuesto idóneo sin pérdidas."
        },
        {
          number: "3",
          title: "Mejora Continua y Resultados",
          description: "Supervisión activa de lances diarios y testing constante para asegurar el menor costo por contacto posible en tu geolocalización. Reportes directos de rendimiento comercial financiero."
        }
      ]
    },
    offers: {
      headline: "Elige cómo deseas trabajar conmigo",
      lead: "Desde una auditoría de diagnóstico rápida hasta la gestión completa de extremo a extremo. Encuentra el formato perfecto para la etapa actual de tu negocio.",
      p1: {
        tag: "GRATUITO · 1-A-1",
        title: "Sesión de Estrategia",
        desc: "Comparte tu cuenta publicitaria. En 30 minutos descubrirás dónde estás perdiendo dinero y cómo estructurar un embudo óptimo de captación en Google gratis.",
        price: "Gratuito · 30 minutos",
        link: "Reservar mi sesión gratuita →"
      },
      p2: {
        tag: "PAGO · CONSULTORÍA EXCLUSIVA",
        badge: "MÁS POPULAR 🔥",
        title: "Power Hour",
        desc: "Una hora de consultoría intensiva grabada al grano donde resolvemos bloqueos técnicos, rastreos rotos o diseño de copies en vivo directamente bajo tu agenda prioritaria.",
        price: "$150 / sesión",
        link: "Reservar mi Power Hour →"
      },
      p3: {
        tag: "AUTO-SERVICIO",
        title: "Google Ads Playbook",
        desc: "Las estructuras metodológicas exactas que yo implemento en mis clientes boutique para optimizar lances y conseguir el menor CPA. Sin teorías ambiguas, 100% práctico.",
        price: "$197 · Pago único",
        link: "Comprar el Playbook →"
      },
      p4: {
        tag: "NEWSLETTER",
        title: "Insights Semanales de Google Ads",
        desc: "Un boletín directo cada semana. Sin noticias recicladas ni comunicados monótonos; solo estrategias puras fundamentadas en auditorías y presupuestos reales.",
        price: "$49 / mes",
        link: "Suscribirse ahora →"
      },
      retainer: {
        title: "Gestión Mensual Done-for-You",
        desc: "La propuesta premium para negocios establecidos de alto nivel. Gestión integral y diaria de palabras-chave, copies, presupuestos de Shopping e informes ejecutivos de retorno estratégico.",
        cta: "Solicitar propuesta de gestión mensual →"
      }
    },
    proof: {
      headline: "Resultados reales de dueños de negocios reales",
      testimonials: [
        {
          metric: "3× ROAS",
          quote: "Nunca antes había alcanzado un retorno en publicidad tan predecible y estables. Poliana lo organiza todo de forma impecable y con reportes comerciales entendibles.",
          author: "— Marcus, Propietario de E-commerce de Moda"
        },
        {
          metric: "47 leads/mes",
          quote: "Previó a colaborar con Poliana dependíamos al 100% del boca a boca. Ahora contamos con flujo sin pausas de prospectos listos. Esta consultoría cambió mis ingresos.",
          author: "— Ana, Estratega Corporativa B2B"
        },
        {
          metric: "-60% CPC",
          quote: "Activé anuncios yo mismo y quemé presupuesto inútil de prueba. Poliana reestructuró la concordancia de términos reduciendo mi CPL de inmediato y a menos de la mitad.",
          author: "— Rafael, Cofundador de Agencia Digital"
        }
      ],
      disclaimer: "Los retornos individuales varían proporcionalmente según el sector del nicho, geolocalización, oferta interna de valor y capacidad comercial de marca.",
      caseStudiesTitle: "Hitos Estratégicos Clave y Desglose de Rendimiento",
      caseStudies: [
        {
          metric: "10x ROAS",
          title: "Escala de E-commerce",
          desc: "Una marca premium de moda llegó a mí con un ROAS de 1.8x, perdiendo dinero en palabras clave de baja calidad que no conducían a pagos finales. Yo realicé una auditoría y reestructuración total de la cuenta, depurando términos inservibles e impulsando el algoritmo de Google con campañas optimizadas de Search + Shopping. En 60 dias, el volumen de pedidos se disparó, alcanzando un ROAS de 10x sostenible de forma segura."
        },
        {
          metric: "-60% CPL",
          title: "Servicios Locales",
          desc: "Una clínica médica de alta gama pagaba más de $85 por contacto, perdiendo competitividad frente a hospitales corporativos regionales. Mediante la aplicación de una lógica de geolocalización ultraprecisa por códigos postales, ofertas horarias personalizadas y extensiones de llamada directa, yo reduje el costo por lead (CPL) en un 60%, logrando llenar la agenda de la clínica con consultas especializadas premium de alta rentabilidad."
        },
        {
          metric: "100% Recovered",
          title: "Rastreo Asegurado",
          desc: "Una consultora internacional de alta gama operaba a ciegas debido a las limitaciones de cookies de iOS 14+, lo que impedía que sus conversiones reales se cruzaran con el algoritmo de Google Ads. Yo desplegué una robusta solución Server-Side a través de Google Tag Manager (GTM) en servidores dedicados en la nube. Al sincronizar el 100% de los eventos, el algoritmo recuperó la precisión, estabilizando los costes por contacto."
        },
        {
          metric: "Máximo Volume",
          title: "Generación Estratégica de Leads",
          desc: "Una compañía SaaS B2B de nivel corporativo captaba clics informativos pero rara vez registraba solicitudes de demos guiadas de su producto principal. Yo blindé todo el embudo añadiendo concordancias negativas de búsqueda, filtrando el tráfico específicamente para directores ejecutivos y modernizando la landing page. La calidad de los leads ascendió significativamente, nutriendo un pipeline de ventas predecible."
        }
      ]
    },
    clientTestimonials: {
      headline: "⭐⭐⭐⭐⭐ Testimonios de Clientes",
      reviews: [
        {
          name: "Arthur Salles",
          role: "Periodista y Creador Digital",
          text: "Poliana fue una excelente aliada en proyectos de alta performance. Sus habilidades técnicas en medios pagos, organización impecable y agilidad garantizan que cada dólar invertido en anuncios se optimice al máximo. Domina las conversiones y embudos de venta de manera espectacular."
        },
        {
          name: "Vitória Cruz",
          role: "Social Media & Diseño de Copy",
          text: "¡Poliana es una gran inspiración en marketing digital, aportando creatividad constante a las estrategias de anuncios! Nuestra alianza estratégica ha sido sensacional, uniendo creadivos de alto impacto con segmentación premium de Google Ads. ¡Una profesional de performance muy por encima del promedio! 💜"
        },
        {
          name: "Kethlyn Saibert",
          role: "Copywriter y Especialista de Contenido",
          text: "Poliana tiene una dedicación increíble enfocada en resultados. Colaboramos desarrollando embudos de captación de leads y anuncios de alto impacto. El retorno en conversiones fue sumamente alto gracias a su precisión de keywords y análisis de datos. ¡Sumamente proactiva y orientada a la performance!"
        },
        {
          name: "Mauricio Geronasso",
          role: "Periodista y Productor de Contenido",
          text: "Poliana es una estratega de tráfico PROTAGONISTA. Una líder nata, sumamente enfocada y con una responsabilidad admirable manejando presupuestos de anuncios. No teme testear nuevos embudos y domina a la perfección el rastreo avanzado de conversiones (GTM, CAPI). ¡Es un honor trabajar con ella!"
        },
        {
          name: "Daniela dos Santos",
          role: "Directora Editorial y de Medios",
          text: "Excelente profesional en la estructuración de campañas y testeo de audiencias. Siempre ágil, organizada y competente en la analítica técnica de embudos. Detecta fugas en páginas de venta con facilidad, lo que eleva de inmediato el rendimiento de los anuncios. ¡Una inspiración total!"
        },
        {
          name: "Liliane Garcia",
          role: "Coordinadora de Proyectos Sociales",
          text: "Dueña de una creatividad brillante y excelencia en la ejecución de campañas de anuncios. Poliana analiza a profundidad los datos de tráfico, eliminando fugas de presupuesto y optimizando creativos para bajar el costo de adquisición. ¡Lleva cualquier marca al siguiente nivel!"
        },
        {
          name: "Evandro Tosin",
          role: "Director Audiovisual y Académico",
          text: "Dinámica, ágil, creativa y con una capacidad de copy persuasivo excepcional. Su dominio de la comunicación permite que sus anuncios de Google Search tengan un CTR muy superior a la media de la industria. Investiga a fondo el mercado antes de estructurar campañas. ¡Brillante!"
        }
      ]
    },
    about: {
      headline: "¿Quién soy yo?",
      avatarInitials: "PA",
      paragraphs: [
        "Hola, mi nombre es Poliana Almeida.",
        "Cuando recién comencé, creía en lo que la mayoría de los proveedores de servicios y dueños de negocios creen:\n\n“Si soy excelente en lo que hago... los clientes vendrán.”\n\nSpoiler: no vinieron.",
        "Pasé años en una montaña rusa de abundancia y escasez: buscando recomendaciones, adivinando qué funcionaría y preguntándome por qué negocios menos calificados técnicamente tenían la agenda llena.",
        "Eso es lo que me trajo aquí. Cuando empecé a publicar campañas de anuncios para mis clientes, vi que esto también podía ser una herramienta fantástica para otros dueños de negocios.",
        "Así que dediqué mi tiempo a construir este sistema de publicidad de alto rendimiento, basado en:",
        "- Años de experiencia práctica en tráfico de pago, transitando del core de la gestión de tráfico a la creación de una operación de compra de medios dedicada.",
        "- Gestionar y optimizar campañas publicitarias complejas en diversos mercados, desde la captación de prospectos hiperlocales hasta espacios internacionales de alto valor (high-ticket).",
        "- Dominar plataformas globales como Upwork para captar contratos internacionales premium, demostrando cómo el posicionamiento enfocado atrae clientes de alta intención.",
        "- Vincular la precisión técnica con una estrategia clara, asegurando que cada centavo invertido en Google Ads sea rastreado, optimizado y conectado directamente con el retorno real de la inversión.",
        "- Construir un negocio altamente eficiente e independiente que me permite coordinar campañas globales y mantenerme completamente comunicada con clientes internacionales desde cualquier lugar.",
        "¿Pero lo más importante?",
        "Entiendo perfectamente lo que se siente ser esa gema oculta: la profesional que ofrece resultados reales, comprende la mecánica de una gran oferta, pero sigue sintiéndose invisible en internet.",
        "Por eso construí esta estructura.",
        "No como una agencia tradicional que promueve informes automáticos y clics vacíos, sino como una estratega aliada que descubrió cómo hacerse notar — y cobrar lo que vale — bajo mis propios términos.",
        "Y ahora, ¿es tu turno?"
      ]
    },
    guarantee: {
      headline: "✓ Riesgo Cero. Comienza con una sesión estratégica totalmente gratuita.",
      summary: "La Sesión Estratégica es 100% gratuita y no contrae obligaciones ni contratos futuros de ningún tipo. Obtendrás una hoja de ruta con ideas prioritarias para tu escala, decidas o no trabajar adelante conmigo."
    },
    faq: {
      headline: "Preguntas Frecuentes",
      items: [
        {
          q: "¿Se requiere experiencia previa de anuncios para iniciar?",
          a: "No, en lo absoluto. Yo asumo todo el peso técnico y estratégico del setup, creatividades de copies y optimización estadística continua. Solo necesitas un negocio operativo y capacidad de venta."
        },
        {
          q: "¿Cuál es el presupuesto publicitario mínimo sugerido?",
          a: "Esto depende de tu competencia, pero recomendamos disponer de entre $200 y $500 mensuales dirigidos transparentemente a la plataforma de Google para que la IA disponga de datos idóneos de optimización inicial."
        },
        {
          q: "¿Sirve tanto si vendo servicios corporativos como si tengo e-commerce?",
          a: "Sí, la mecánica de búsqueda intercepta intención de consumidores de alto valor directo en Google en cualquier nicho, ya sea generación de leads B2B o carritos de compras transaccionales de venta fluida."
        },
        {
          q: "¿En cuánto tiempo se obtienen los primeros contactos comerciales?",
          a: "Nuestras estructuras técnicas suelen captar tráfico con intención en las primeras 24 a 72 horas útiles post publicación. Una rentabilidad sostenida usualmente madura consistentemente entre la semana 2 y 4."
        },
        {
          q: "¿La primera llamada es realmente libre de cargo?",
          a: "Sí, es el primer paso recomendado para diagnosticar posibles problemas previos en tus campañas vigentes y verificar un encaje ético y transparente de escala de negocios."
        }
      ]
    },
    closing: {
      headline: "Deja de ser el secreto mejor guardado de Google.",
      subtext: "Tus clientes ideales están buscando exactamente lo que vendes en este momento. La única pregunta real es: ¿te están encontrando a ti o a tu competidor?",
      cta: "Agendar mi Sesión Estratégica Gratuita ahora →"
    },
    form: {
      labelName: "Tu Nombre Completo",
      labelEmail: "Email Corporativo de Contacto",
      labelPhone: "WhatsApp Directo",
      labelCompany: "Nombre de tu Empresa",
      labelWebsite: "Sitio Web (URL de diagnóstico)",
      labelBudget: "Presupuesto Publicitario Mensual Requerido",
      placeholderBudget: "Selecciona el rango de inversión aproximado",
      labelSource: "¿Cuál es el principal cuello de botella de tu marca hoy?",
      sourceOptions: [
        "Estoy quemando margen pagando clics costosos con nula conversión real",
        "El costo por lead (CPL) o adquisición comercial es demasiado alto en mi sector",
        "No tengo píxeles configurados o mi Tag Manager presenta problemas",
        "Quiero crear mi primera cuenta publicitaria de forma segura desde cero",
        "Busco prescindir de mi antigua agencia de publicidad y sus reportes vagos"
      ],
      btnSubmit: "Agendar mi Sesión Estratégica Gratuita ahora →",
      submitting: "Analizando infraestructura comercial...",
      successTitle: "🎉 ¡Aplicación Registrada con Éxito!",
      successDesc: "Recibimos tus datos. Yo personalmente auditará tu URL y te contactaré directamente vía WhatsApp dentro de las siguientes 3 horas para definir el horario de la sesión de Zoom.",
      portalTitle: "Leads Captados Recientemente (Log del Sistema local)",
      portalEmpty: "No se han captado registros en este navegador aún de pruebas. ¡Envía el formulario arriba!"
    },
    footer: {
      copy: "© 2026 Poliana Almeida · Specialized Google Ads Strategy · All rights reserved"
    }
  }
};
