import "./App.css";
import profileImg from "./assets/profile.jpg";

type LinkItem = { label: string; href: string };

const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/JiachenJasonZhong" },
  { label: "Google Scholar", href: "https://scholar.google.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jiachen-zhong" },
  { label: "Email", href: "mailto:mrjiachenzhong@gmail.com" },
];

export default function App() {
  return (
    <div className="page">
      <a className="skip" href="#content">
        Skip to content
      </a>

      <header className="header">
        <div className="brand">
          <div className="brand__name">Jiachen (Jason) Zhong</div>
          <div className="brand__meta">
            Data Scientist · ML/LLM Systems · Statistical Modeling
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="content" className="content">
        <section className="hero" id="about">
          <div className="hero__left">
            <p className="kicker">Data Scientist @ OxeFit</p>
            <h1 className="title">
              Building production ML/LLM systems for personalized AI experiences.
            </h1>
            <p className="lede">
              I'm a Data Scientist specializing in machine learning, LLM agents,
              and time series forecasting. I focus on deploying reliable AI systems—from
              multi-agent architectures to production pipelines—that deliver real impact
              through rigorous evaluation and scalable engineering.
            </p>

            <div className="linkRow" role="list">
              {links.map((l) => (
                <a key={l.label} className="pill" href={l.href} role="listitem">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="note">
              <strong>Currently:</strong> Data Scientist at OxeFit, Inc. · Dallas, TX
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
                <li>Education: M.S. Computational Finance (UW), M.S. Data Science (UvA)</li>
                <li>Interests: LLM Agents, Time Series Forecasting, ML Evaluation</li>
                <li>Tech Stack: Python, R, SQL, LangGraph, MongoDB, FastAPI</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <h2>Work Experience</h2>

          <div className="projects">
            <article className="project">
              <div className="project__top">
                <h3>Data Scientist</h3>
                <div className="tags">
                  <span className="tag">Sep 2025 - Present</span>
                </div>
              </div>
              <p className="pub__meta" style={{ marginTop: '8px', marginBottom: '12px' }}>
                <strong>OxeFit, Inc.</strong> · Dallas, TX · Data Science and AI Team
              </p>
              <ul className="list" style={{ paddingLeft: '18px', margin: 0 }}>
                <li>Built production LLM multi-agent system with LangGraph + FastAPI for personalized wellness coaching</li>
                <li>Designed hybrid memory architecture (episodic + semantic) with MongoDB Atlas Vector Search for context-aware reasoning</li>
                <li>Contributed to LLM evaluation workflow using LangSmith tracing and automated regression tests</li>
              </ul>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>Data Scientist Intern</h3>
                <div className="tags">
                  <span className="tag">Apr 2023 - Sep 2023</span>
                </div>
              </div>
              <p className="pub__meta" style={{ marginTop: '8px', marginBottom: '12px' }}>
                <strong>Dassault Systèmes</strong> · Den Bosch, Netherlands · R&D Department
              </p>
              <ul className="list" style={{ paddingLeft: '18px', margin: 0 }}>
                <li>Led time series forecasting initiative with ML on 80K+ weekly shipments, improving accuracy by 15%</li>
                <li>Uncovered calendar effects as key drivers, boosting forecast performance by 13%</li>
                <li>Built reproducible end-to-end pipelines with cloud version control for scalability</li>
              </ul>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>Data Analyst Intern</h3>
                <div className="tags">
                  <span className="tag">Oct 2021 - Apr 2022</span>
                </div>
              </div>
              <p className="pub__meta" style={{ marginTop: '8px', marginBottom: '12px' }}>
                <strong>Xiaomi Technology</strong> · Amsterdam, Netherlands · Retail Department
              </p>
              <ul className="list" style={{ paddingLeft: '18px', margin: 0 }}>
                <li>Analyzed West EU sales data and maintained daily reports, boosting regional sales by 21%</li>
                <li>Built Power BI dashboards delivering insights that drove 12% growth with 3× ROI</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="research">
          <h2>Research Interests</h2>

          <div className="grid">
            <div className="panel">
              <h3>LLM Multi-Agent Systems</h3>
              <p>
                Building production-ready agent architectures with LangGraph, hybrid
                memory systems, and vector search for context-aware reasoning and
                personalized AI experiences.
              </p>
            </div>
            <div className="panel">
              <h3>Time Series & Forecasting</h3>
              <p>
                Developing ML-based forecasting models for demand prediction, uncovering
                temporal patterns, and building scalable pipelines that improve business outcomes.
              </p>
            </div>
            <div className="panel">
              <h3>ML Evaluation & Reliability</h3>
              <p>
                Implementing robust evaluation workflows with tracing, automated testing,
                and class balancing techniques to ensure model stability and performance.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="publications">
          <h2>Publications & Research</h2>

          <ol className="pubs">
            <li className="pub">
              <div className="pub__title">
                DeepSeek vs ChatGPT vs Claude: Benchmarking LLMs for Clinical
                Diagnosis with an ICD-10-CM–Based Framework
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>Under Review</em>
              </div>
            </li>

            <li className="pub">
              <div className="pub__title">
                Machine Learning Applications in Infectious Disease Prediction,
                Diagnosis, and Outbreak Forecasting: A Narrative Review
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>Medicine Advances (In Revision)</em>
              </div>
            </li>
          </ol>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>

          <div className="projects">
            <article className="project">
              <div className="project__top">
                <h3>Predicting Heart Disease with ML Methods</h3>
                <div className="tags">
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Healthcare</span>
                  <span className="tag">Class Balancing</span>
                </div>
              </div>
              <p>
                Led ML study on 360,000+ health records comparing 10+ algorithms for early heart disease
                detection. Implemented SMOTE-based class balancing and feature selection, improving recall
                by 141.75% and enabling cost-effective early detection for broader public access.
              </p>
              <div className="project__links">
                <a href="https://github.com/JiachenJasonZhong">GitHub</a>
              </div>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>ML-Based Crypto Fraud Detection</h3>
                <div className="tags">
                  <span className="tag">Fraud Detection</span>
                  <span className="tag">Time Series</span>
                  <span className="tag">PySpark</span>
                </div>
              </div>
              <p>
                Designed rolling-window validation pipeline to capture evolving fraud patterns across 200K+ Bitcoin
                transactions. Improved detection of coordinated crypto fraud by 5% F1 score through aggregated
                transaction features, providing time-sensitive AML solution.
              </p>
              <div className="project__links">
                <a href="https://github.com/JiachenJasonZhong">GitHub</a>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <div className="contact">
            <div className="contact__item">
              <div className="label">Email</div>
              <a href="mailto:mrjiachenzhong@gmail.com">mrjiachenzhong@gmail.com</a>
            </div>
            <div className="contact__item">
              <div className="label">Location</div>
              <div>Dallas, TX</div>
            </div>
            <div className="contact__item">
              <div className="label">CV / Resume</div>
              <a href="/JiachenZhong_CV.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
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
