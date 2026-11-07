import { useEffect, useState } from 'react';
import { LiquidMetalButton } from '../components/ui/liquid-metal-button';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('orbite-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('orbite-theme', theme);
  }, [theme]);

  return (
    <div className="page-shell">
      <nav className="primary-nav" aria-label="Navegação principal">
        <div className="nav-brand">
          <div className="nav-mark">
            <svg viewBox="0 0 200 200" className="logo-ring" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e0e0e0" />
                  <stop offset="60%" stopColor="#4a4a4a" />
                  <stop offset="100%" stopColor="#1a1a1a" />
                </linearGradient>
                <filter id="f1">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>
              <circle cx="100" cy="100" r="70" fill="rgba(200,140,50,0.22)" filter="url(#f1)" />
              <g transform="translate(100,100) rotate(-35) translate(-100,-100)">
                <ellipse cx="100" cy="100" rx="55" ry="35" fill="url(#g1)" />
                <ellipse cx="100" cy="100" rx="25" ry="15" fill="#060507" />
                <ellipse cx="100" cy="100" rx="55" ry="35" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".22" transform="translate(-1,-1)" />
              </g>
            </svg>
          </div>
          <span className="nav-name">
            Orb<span className="brand-highlight">ite</span>
          </span>
        </div>

        <div className="nav-links" id="primary-navigation">
          <a href="#features">Funcionalidades</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#planos">Planos</a>
        </div>

        <div className="nav-actions">
          <a href="https://orbite-assistente-c15dj4y28-samuels-projects-b63dc5c1.vercel.app/" className="nav-in">Entrar</a>
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          >
            <span className="theme-toggle-icon" aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
          </button>
          <a href="https://orbite-assistente-c15dj4y28-samuels-projects-b63dc5c1.vercel.app/" className="nav-btn">Comecar agora</a>
          <button className="nav-menu-toggle" type="button" aria-label="Abrir menu de navegacao" aria-controls="primary-navigation" aria-expanded="false">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <main id="conteudo">
        <section className="hero">
          <div className="hero-radial" />
          <div className="hero-noise" />

          <div className="hero-tag">Assistente fiscal com IA para a Reforma Tributaria</div>

          <h1 className="hero-h1">
            <span className="dim">Chega de</span>
            <br />
            adivinhar
            <br />
            <span className="hot">a legislacao.</span>
          </h1>

          <p className="hero-sub">
            O Orbite responde com base na lei, cita o artigo, e nunca inventa. Para contadores que nao podem errar.
          </p>

          <div className="hero-actions">
            <LiquidMetalButton label="Começar agora" onClick={() => window.open('https://orbite-assistente-c15dj4y28-samuels-projects-b63dc5c1.vercel.app/', '_blank', 'noopener,noreferrer')} />
            <a href="#features" className="btn-ghost">Ver funcionalidades</a>
          </div>

          <div className="hero-window">
            <div className="hw-bar">
              <div className="hw-dot" />
              <div className="hw-dot" />
              <div className="hw-dot" />
              <div className="hw-url">orbite.app Assistente Fiscal</div>
            </div>
            <div className="hw-body">
              <div className="hw-msg right">
                <div className="hw-av u">VC</div>
                <div className="hw-bubble user">Empresa do Simples com 60% de vendas B2B compensa fazer a opcao pelo regime hibrido em 2027...</div>
              </div>
              <div className="hw-msg">
                <div className="hw-av o">O</div>
                <div className="hw-bubble ai">
                  Para uma empresa com <strong>60% de vendas B2B</strong>, o regime hibrido tende a ser mais vantajoso. No hibrido, o cliente do Simples pode destacar o IBS na nota e gerar credito para o tomador, tornando a operacao mais competitiva na cadeia produtiva.
                  <div className="hw-law">Base legal: LC 214/2025, Art. 28, paragrafo 4 e Art. 161</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            <div className="ticker-item"><span className="ticker-dot">+</span>IBS Imposto sobre Bens e Servicos</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>CBS Contribuicao sobre Bens e Servicos</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>NFS-e Nacional Set 2026</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>Simples Nacional 2027</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>EC 132/2023 e LC 214/2025</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>Transicao tributaria ate 2033</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>IBS Imposto sobre Bens e Servicos</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>CBS Contribuicao sobre Bens e Servicos</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>NFS-e Nacional Set 2026</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>Simples Nacional 2027</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>EC 132/2023 e LC 214/2025</div>
            <div className="ticker-item"><span className="ticker-dot">+</span>Transicao tributaria ate 2033</div>
          </div>
        </div>

        <div className="s">
          <div className="s-label">O problema</div>
          <div className="problem-intro">
            <h2 className="s-h2">O ChatGPT responde.<br />O Orbite <em>prova.</em></h2>
            <p className="s-body">
              Qualquer IA generica fala sobre a Reforma Tributaria. O problema e que <strong>ela nao cita a lei</strong>, pode estar desatualizada e, quando erra, parece que acertou. Contador nao pode se dar ao luxo de confiar nisso.
            </p>
          </div>

          <div className="compare-wrap">
            <div className="c-card bad fx-glow">
              <div className="c-head b">IA generica</div>
              <div className="c-row"><span className="c-ico" style={{ color: '#3A3A4A' }}>x</span><span className="c-txt">Responde com confianca mesmo sem base legal</span></div>
              <div className="c-row"><span className="c-ico" style={{ color: '#3A3A4A' }}>x</span><span className="c-txt">Nao cita artigo nem instrucao normativa</span></div>
              <div className="c-row"><span className="c-ico" style={{ color: '#3A3A4A' }}>x</span><span className="c-txt">Pode estar desatualizado sobre a reforma de 2025</span></div>
              <div className="c-row"><span className="c-ico" style={{ color: '#3A3A4A' }}>x</span><span className="c-txt">Nao avisa quando a legislacao ainda nao foi publicada</span></div>
              <div className="c-row"><span className="c-ico" style={{ color: '#3A3A4A' }}>x</span><span className="c-txt">Generico demais para tomada de decisao fiscal</span></div>
            </div>

            <div className="c-card good fx-glow">
              <div className="c-head g">Orbite</div>
              <div className="c-row"><span className="c-ico" style={{ color: 'var(--amber)' }}>+</span><span className="c-txt g">Responde somente com base na legislacao vigente</span></div>
              <div className="c-row"><span className="c-ico" style={{ color: 'var(--amber)' }}>+</span><span className="c-txt g">Cita lei, artigo ou instrucao normativa em toda resposta</span></div>
              <div className="c-row"><span className="c-ico" style={{ color: 'var(--amber)' }}>+</span><span className="c-txt g">Atualizado com EC 132/2023 e LC 214/2025</span></div>
              <div className="c-row"><span className="c-ico" style={{ color: 'var(--amber)' }}>+</span><span className="c-txt g">Diz claramente quando a norma ainda nao saiu</span></div>
              <div className="c-row"><span className="c-ico" style={{ color: 'var(--amber)' }}>+</span><span className="c-txt g">Especialista: so fala de tributacao brasileira</span></div>
            </div>
          </div>
        </div>

        <div className="s" id="features" style={{ paddingTop: 0 }}>
          <div className="s-label">Funcionalidades</div>
          <h2 className="s-h2">Tres ferramentas.<br /><span style={{ color: 'var(--text-dim)' }}>Uma plataforma.</span></h2>
          <div className="feat-list">
            <div className="feat-row fx-glow">
              <div className="feat-n">01</div>
              <div className="feat-title">Assistente Fiscal<div className="feat-pill live">Disponivel</div></div>
              <div className="feat-info">Pergunte sobre IBS, CBS, NFS-e ou Simples Nacional. Receba respostas com citacao da lei, nao opinioes. Importe planilhas e deixe a IA analisar os dados fiscais dos seus clientes.</div>
            </div>
            <div className="feat-row fx-glow">
              <div className="feat-n">02</div>
              <div className="feat-title">Radar de Mudancas<div className="feat-pill live">Disponivel</div></div>
              <div className="feat-info">Acompanhe alteracoes na legislacao fiscal em tempo real. Sem garimpar no Diario Oficial. Sem depender de grupo de WhatsApp.</div>
            </div>
            <div className="feat-row fx-glow">
              <div className="feat-n">03</div>
              <div className="feat-title">Simulador de Regime 2027<div className="feat-pill soon">Em breve</div></div>
              <div className="feat-info">Calcule qual regime do Simples Nacional e mais vantajoso para cada cliente: hibrido ou puro. Com base no faturamento, setor e perfil de vendas B2B.</div>
            </div>
          </div>
        </div>

        <div className="s" id="depoimentos" style={{ paddingTop: 0 }}>
          <div className="s-label">Depoimentos</div>
          <h2 className="s-h2">Contadores que ja usam</h2>
          <div className="t-grid">
            <div className="t-card fx-glow">
              <p className="t-text">O Orbite me ajuda a entender a Reforma de forma <strong>rapida e segura</strong>. Nunca vi uma ferramenta citar a lei tao claramente. Virou parte da minha rotina diaria.</p>
              <div className="t-auth">
                <div className="t-av">RM</div>
                <div>
                  <div className="t-name">Rafael Mendes</div>
                  <div className="t-role">Contador, Sao Paulo SP</div>
                </div>
              </div>
            </div>
            <div className="t-card fx-glow">
              <p className="t-text">Atendo mais de 150 clientes do Simples. Com o Orbite, consigo orientar cada um com <strong>seguranca juridica</strong> sobre a decisao de 2027.</p>
              <div className="t-auth">
                <div className="t-av">JO</div>
                <div>
                  <div className="t-name">Juliana Oliveira</div>
                  <div className="t-role">Contadora, Belo Horizonte MG</div>
                </div>
              </div>
            </div>
            <div className="t-card fx-glow">
              <p className="t-text">No Orbite, encontro respostas fiscais e <strong>referencias legais reunidas em uma ferramenta voltada a rotina contabil</strong>. Isso facilita a consulta no dia a dia.</p>
              <div className="t-auth">
                <div className="t-av">CS</div>
                <div>
                  <div className="t-name">Carlos Silva</div>
                  <div className="t-role">Contador, Rio de Janeiro RJ</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="s" id="planos" style={{ paddingTop: 0 }}>
          <div className="s-label">Planos</div>
          <h2 className="s-h2" style={{ marginBottom: 12 }}>Sem surpresas.</h2>
          <p className="s-body">Sem taxa de setup. Cancele quando quiser.</p>
          <div className="p-grid">
            <div className="p-card fx-glow">
              <div className="p-tier">Essencial</div>
              <div className="p-price">R$79<sub>/mes</sub></div>
              <div className="p-desc">Para escritorios que querem se manter atualizados.</div>
              <div className="p-sep" />
              <div className="p-feats">
                <div className="p-feat"><span className="p-chk">+</span>Assistente Fiscal ilimitado</div>
                <div className="p-feat"><span className="p-chk">+</span>Radar de Mudancas</div>
                <div className="p-feat"><span className="p-chk">+</span>Leitura de planilhas</div>
                <div className="p-feat"><span className="p-chk">+</span>1 usuario</div>
                <div className="p-feat"><span className="p-chk">+</span>Suporte por e-mail</div>
              </div>
              <a href="https://wa.me/5511912470733?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20mudar%20para%20o%20plano%20Essencial%20do%20Orbite.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" className="p-btn def" target="_blank" rel="noreferrer noopener">Comecar agora</a>
            </div>

            <div className="p-card hot fx-glow">
              <div className="p-badge">Mais popular</div>
              <div className="p-tier">Profissional</div>
              <div className="p-price">R$129<sub>/mes</sub></div>
              <div className="p-desc">Para escritorios que querem vantagem real.</div>
              <div className="p-sep" />
              <div className="p-feats">
                <div className="p-feat"><span className="p-chk">+</span>Tudo do Essencial</div>
                <div className="p-feat"><span className="p-chk">+</span>Simulador de Regime 2027 (em breve)</div>
                <div className="p-feat"><span className="p-chk">+</span>Historico completo de consultas</div>
                <div className="p-feat"><span className="p-chk">+</span>3 usuarios</div>
                <div className="p-feat"><span className="p-chk">+</span>Suporte prioritario</div>
              </div>
              <a href="https://wa.me/5511912470733?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20mudar%20para%20o%20plano%20Profissional%20do%20Orbite.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" className="p-btn hot" target="_blank" rel="noreferrer noopener">Assinar plano</a>
            </div>

            <div className="p-card fx-glow">
              <div className="p-tier">Corporativo</div>
              <div className="p-price">R$199<sub>/mes</sub></div>
              <div className="p-desc">Para grandes escritorios com muitos clientes.</div>
              <div className="p-sep" />
              <div className="p-feats">
                <div className="p-feat"><span className="p-chk">+</span>Tudo do Profissional</div>
                <div className="p-feat"><span className="p-chk">+</span>Usuarios ilimitados</div>
                <div className="p-feat"><span className="p-chk">+</span>Atendimento dedicado</div>
                <div className="p-feat"><span className="p-chk">+</span>Onboarding personalizado</div>
              </div>
              <a href="https://wa.me/5511912470733?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20mudar%20para%20o%20plano%20Corporativo%20do%20Orbite.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" className="p-btn def" target="_blank" rel="noreferrer noopener">Falar com especialista</a>
            </div>
          </div>
        </div>

        <section className="cta-wrap">
          <div className="cta-glow" />
          <div className="cta-inner">
            <div className="cta-label">Comece hoje</div>
            <h2 className="cta-h2">A reforma<br />nao vai<br /><em>esperar.</em></h2>
            <p className="cta-sub">Mais de 60 mil escritorios contabeis precisam decidir o regime dos clientes ate 2027. O Orbite existe para que voce chegue la com seguranca.</p>
            <a href="https://orbite-assistente-c15dj4y28-samuels-projects-b63dc5c1.vercel.app/" className="btn-main" style={{ fontSize: 15, padding: '14px 32px' }}>Comecar agora</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="f-brand">
          <div className="f-mark">
            <svg viewBox="0 0 200 200" className="logo-ring" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
              <defs>
                <linearGradient id="gf" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e0e0e0" />
                  <stop offset="100%" stopColor="#333" />
                </linearGradient>
                <filter id="ff">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
              </defs>
              <circle cx="100" cy="100" r="70" fill="rgba(200,140,50,0.2)" filter="url(#ff)" />
              <g transform="translate(100,100) rotate(-35) translate(-100,-100)">
                <ellipse cx="100" cy="100" rx="55" ry="35" fill="url(#gf)" />
                <ellipse cx="100" cy="100" rx="25" ry="15" fill="#060507" />
              </g>
            </svg>
          </div>
          <span className="f-name">Orb<span className="brand-highlight">ite</span></span>
        </div>
        <nav className="f-links" aria-label="Links institucionais">
          <a href="#features">Funcionalidades</a>
          <a href="#planos">Planos</a>
          <a href="#">Privacidade</a>
          <a href="#">Contato</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
