im { useState } from "react";
im {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Mail,
  ArrowUpRight,
  Code2,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    name: "Apropriação de Custos",
    description:
      "Projeto desenvolvido durante a TIC55 para a Brisa, um software de rateio e apropriação de custos por projeto",
    tags: [
      "Java",
      "SpringBoot",
      "Docker",
      "Git",
      "GitHub",
      "Type Script",
      "Vue.JS",
    ],
    repo: "https://github.com/brisa-unisinos/apropcustosemprojetos.git",
    year: "09/2025 - 03/2026",
  },
  {
    name: "Consumo API - Gemini",
    description:
      "Aplicação desenvolvida em Java que realiza integração com uma API de Inteligência Artificial por meio de requisições HTTP. O sistema recebe um prompt do usuário, envia os dados em formato JSON.",
    tags: ["Java", "GeminiAPI", "APIs REST"],

    repo: "https://github.com/KayqueLeoterio/GeminiAPI.git",
    year: "2026",
  },
  {
    name: "Gerenciamento de Acervo",
    description:
      "Desenvolvi um sistema de gerenciamento de biblioteca em Java utilizando os princípios de POO. O projeto faz o CRUD completo e gerenciamento de usuários, bibliotecários, livros e empréstimos, aplicando conceitos como herança, encapsulamento e abstração...",
    tags: ["Java", "POO", "Herança", "DAO", "UML"],
    repo: "https://github.com/KayqueLeoterio/Controle-de-Acervo-de-Biblioteca.git",
    year: "2026",
  },
  {
    name: "Analisador de Golpes",
    description:
      "O programa desenvolvido funciona como um detector básico de golpes digitais. Ele analisa o texto informado pelo usuário e procura palavras e expressões frequentemente utilizadas por golpistas, como senha, PIX, clique aqui, urgente e prêmio... Cada ocorrência aumenta a pontuação de risco da mensagem.",
    tags: ["Java"],
    repo: "https://github.com/KayqueLeoterio/Chalenge_back.git",
    year: "2026",
  },
];

const stack = [
  { label: "Java", category: "backend" },
  { label: "Spring Boot", category: "backend" },
  { label: "Type Script", category: "frontend" },
  { label: "PostgreSQL", category: "data" },
  { label: "MySQL", category: "data" },
  { label: "Docker", category: "infra" },
  { label: "Git", category: "infra" },
  { label: "GitHub", category: "infra" },
  { label: "Git Project", category: "infra" },
  { label: "GitHub Actions", category: "infra" },
];

const categoryColor: Record<string, string> = {
  lang: "bg-violet-900/40 text-violet-300 border-violet-700/30",
  frontend:
    "bg-indigo-900/40 text-indigo-300 border-indigo-700/30",
  backend:
    "bg-purple-900/40 text-purple-300 border-purple-700/30",
  data: "bg-fuchsia-900/30 text-fuchsia-300 border-fuchsia-700/30",
  infra: "bg-slate-800/60 text-slate-300 border-slate-600/30",
};

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@KayqueLeoterio",
    url: "https://github.com/KayqueLeoterio",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Kayque Leotério",
    url: "https://linkedin.com/in/kayqueleoterio",
  },

  
  {
  icon: Mail,
  label: "E-mail",
  handle: "kayque.leoterio@gmail.com",
  url: "https://mail.google.com/mail/?view=cm&fs=1&to=kayque.leoterio@gmail.com",
},
];

ex default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Projetos", "Stack", "Contato"];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-md bg-background/80">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-extrabold text-lg tracking-tight text-foreground"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            <span className="text-accent">{"<"}</span>
            Dev
            <span className="text-accent">{"/>"}</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="flex flex-col justify-start pt-24 pb-16 px-6 md:min-h-screen md:justify-center md:pt-16 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <p
              className="text-accent text-sm font-medium tracking-widest uppercase mb-6"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Olá, mundo! Eu sou
            </p>
            <h1
              className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight text-foreground mb-4"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              {" "}
              Kayque
              <br />
              <span className="text-foreground">Leotério</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Desenvolvedor de software com foco em backend...
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-medium hover:bg-accent transition-colors duration-200"
              >
                Ver projetos <ArrowUpRight size={16} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kayque.leoterio@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border text-foreground font-medium hover:border-accent/40 hover:bg-secondary transition-colors duration-200"
              >
                Falar comigo
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-3">
            {[
              "const dev = {",
              "  nome: 'Kayque Leotério',",
              "  foco: 'Backend',",
              "  exp: 2,",
              "  hoobs: Basquete,Musica,Acampar,Filmes...",
              "}",
            ].map((line, i) => (
              <div
                key={i}
                className="text-sm"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span className="text-muted-foreground/40 mr-4 select-none">
                  {i + 1}
                </span>
                <span
                  className={
                    line.includes("'")
                      ? "text-violet-300"
                      : line.includes(":")
                        ? "text-slate-400"
                        : "text-accent"
                  }
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projetos"
        className="py-12 px-6 max-w-6xl mx-auto"
      >
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-accent text-xs tracking-widest uppercase mb-2"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              // projetos
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              O que eu construí
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-all duration-300 hover:bg-secondary flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Code2 size={16} className="text-accent" />
                  </div>
                  <h3
                    className="font-semibold text-foreground text-lg leading-tight group-hover:text-accent transition-colors duration-200"
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                    }}
                  >
                    {p.name}
                  </h3>
                </div>
                <span
                  className="text-xs text-muted-foreground flex-shrink-0"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {p.year}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded border bg-accent/5 text-accent/80 border-accent/20"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <a
                  href={p.repo}
                  className="flex items-center gap-2 text-base font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={18} /> Repositório
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section
        id="stack"
        className="py-12 px-6 max-w-6xl mx-auto"
      >
        <div className="mb-12">
          <p
            className="text-accent text-xs tracking-widest uppercase mb-2"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            // stack
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Tecnologias
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            Ferramentas que uso no dia a dia para entregar
            software confiável e escalável.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item.label}
              className={`px-4 py-2 text-sm font-medium rounded border ${categoryColor[item.category]} transition-all duration-200 hover:scale-105 cursor-default`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT / SOCIAL */}
      <section
        id="contato"
        className="py-12 px-6 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-accent text-xs tracking-widest uppercase mb-2"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              // contato
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Vamos
              <br />
              trabalhar juntos
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Estou aberto a ounidades! Projetos
              colaborativos e posições full-time. Me manda uma
              mensagem.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {socials.map(
              ({ icon: Icon, label, handle, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-accent/30 hover:bg-secondary transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {label}
                      </p>
                      <p
                        className="text-xs text-muted-foreground mt-0.5"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                        }}
                      >
                        {handle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-accent transition-colors"
                  />
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm font-bold text-foreground"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            <span className="text-accent">{"<"}</span>Kayque
            Leotério
            <span className="text-foreground">{"/>"}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com foco, café e vibe — {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
