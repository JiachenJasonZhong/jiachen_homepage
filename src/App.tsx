import "./App.css";
import profileImg from "./assets/profile.jpg";

type LinkItem = { label: string; href: string };

const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/YOUR_GITHUB_USERNAME" },
  { label: "Google Scholar", href: "https://scholar.google.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR_HANDLE" },
  { label: "Email", href: "mailto:your@email.com" },
];

export default function App() {
  return (
    <div className="page">
      <a className="skip" href="#content">
        Skip to content
      </a>

      <header className="header">
        <div className="brand">
          <div className="brand__name">Jiachen Zhong</div>
          <div className="brand__meta">
            Data Scientist · ML Systems · Human-AI Collaboration
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="content" className="content">
        <section className="hero" id="about">
          <div className="hero__left">
            <p className="kicker">Personal Homepage</p>
            <h1 className="title">
              Building reliable ML + LLM systems that stand up to real-world use.
            </h1>
            <p className="lede">
              I’m a researcher/engineer working on machine learning, evaluation,
              and human-AI collaboration. I care about rigor (data, metrics,
              ablations) and practical engineering (reproducibility,
              debuggability, deployment).
            </p>

            <div className="linkRow" role="list">
              {links.map((l) => (
                <a key={l.label} className="pill" href={l.href} role="listitem">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="note">
              <strong>Currently:</strong> placeholder affiliation / team · Dallas,
              TX (CT). <span className="muted">Replace this later.</span>
            </div>
          </div>

          <div className="hero__right" aria-label="Profile">
            {/* 圆形头像 */}
            <div className="avatar" aria-label="Profile picture">
              <img src={profileImg} alt="Profile" />
            </div>

            <div className="card">
              <div className="card__title">Quick Facts</div>
              <ul className="list">
                <li>Interests: ML evaluation, LLM agents, health/clinical NLP</li>
                <li>Methods: modeling, experiments, causal thinking</li>
                <li>Tooling: Python, TS, FastAPI, MongoDB, GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="research">
          <h2>Research Interests</h2>
          <p className="muted">
            Replace items with your actual interests. Keep it short and specific.
          </p>

          <div className="grid">
            <div className="panel">
              <h3>Evaluation & Benchmarking</h3>
              <p>
                Designing reproducible evaluation pipelines: careful metrics,
                robustness checks, and error taxonomy for model behavior.
              </p>
            </div>
            <div className="panel">
              <h3>LLM Systems & Agents</h3>
              <p>
                Building reliable multi-agent workflows, memory/retrieval, and
                structured outputs with traceability.
              </p>
            </div>
            <div className="panel">
              <h3>Human-AI Collaboration</h3>
              <p>
                Interfaces, explanation, and interactive analytics to help people
                make better decisions with AI.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="publications">
          <h2>Selected Publications</h2>
          <p className="muted">
            Use 3–6 items. Link arXiv/DOI when you have them.
          </p>

          <ol className="pubs">
            <li className="pub">
              <div className="pub__title">
                DeepSeek vs ChatGPT vs Claude: Benchmarking LLMs for Clinical
                Diagnosis with an ICD-10-CM–Based Framework
              </div>
              <div className="pub__meta">
                <span className="pub__authors">Jiachen Zhong, Coauthors…</span> ·{" "}
                <span className="pub__venue">International Journal… (under review)</span>
              </div>
              <div className="pub__links">
                <a href="#contact">PDF</a>
                <a href="#contact">Code</a>
                <a href="#contact">Dataset</a>
              </div>
            </li>

            <li className="pub">
              <div className="pub__title">
                Machine Learning Applications in Infectious Disease Prediction,
                Diagnosis, and Outbreak Forecasting: A Narrative Review
              </div>
              <div className="pub__meta">
                <span className="pub__authors">Jiachen Zhong, Coauthors…</span> ·{" "}
                <span className="pub__venue">Medicine Advances (revision)</span>
              </div>
              <div className="pub__links">
                <a href="#contact">Preprint</a>
                <a href="#contact">BibTeX</a>
              </div>
            </li>
          </ol>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <p className="muted">
            Keep each project to: what it is + what you did + outcome/impact.
          </p>

          <div className="projects">
            <article className="project">
              <div className="project__top">
                <h3>OxeAI: Multi-agent Health Analytics</h3>
                <div className="tags">
                  <span className="tag">LLM Agents</span>
                  <span className="tag">Memory</span>
                  <span className="tag">FastAPI</span>
                </div>
              </div>
              <p>
                Built a multi-agent system with structured health logs, episodic/semantic
                memory, and evaluation hooks for debugging and traceability.
              </p>
              <div className="project__links">
                <a href="#contact">Repo</a>
                <a href="#contact">Demo</a>
              </div>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>Shot Peening ML: CNN Deformation Predictor</h3>
                <div className="tags">
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Aerospace</span>
                  <span className="tag">Pipeline</span>
                </div>
              </div>
              <p>
                Implemented and optimized a CNN pipeline to approximate simulation outputs,
                enabling faster iteration for engineering workflows.
              </p>
              <div className="project__links">
                <a href="#contact">Report</a>
                <a href="#contact">Code</a>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <div className="contact">
            <div className="contact__item">
              <div className="label">Email</div>
              <a href="mailto:your@email.com">your@email.com</a>
            </div>
            <div className="contact__item">
              <div className="label">Location</div>
              <div>Dallas, TX (Central Time)</div>
            </div>
            <div className="contact__item">
              <div className="label">CV</div>
              <a href="#contact">Add a PDF link later</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="muted">
            © {new Date().getFullYear()} Jiachen Zhong · Built with React + TypeScript
          </div>
        </footer>
      </main>
    </div>
  );
}
