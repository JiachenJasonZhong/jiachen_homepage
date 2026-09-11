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
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#awards">Awards</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="content" className="content">
        <section className="hero" id="about">
          <div className="hero__left">
            <p className="lede">
              I'm currently a Data Scientist at OxeFit, Inc., where I build production
              LLM multi-agent systems for personalized wellness coaching. Before that,
              I obtained an M.S. degree in Computational Finance and Risk Management
              from the University of Washington (2024), and dual M.S. and B.S. degrees
              in Data Science from the University of Amsterdam (2023, 2023).
            </p>
            <p className="lede">
              My work focuses on deploying reliable AI systems—from multi-agent architectures
              to machine learning solutions—that deliver real impact through rigorous evaluation
              and scalable engineering. I'm particularly interested in applied AI systems,
              human-AI collaboration, decision intelligence, and reinforcement learning
              for real-world decision-making.
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
                <li>
                  Education: M.S. Computational Finance (UW){" "}
                  <span className="muted" style={{ fontSize: "0.85em" }}>
                    (Applied Mathematics)
                  </span>
                  , M.S. Data Science (UvA), B.S. Econometrics &amp; Data Science (UvA)
                </li>
                <li>
                  Awards: 1st Place, DFWIT 2026 AI &amp; Startup Competition
                </li>
                <li>Interests: Applied AI Systems, Agentic AI, Decision Intelligence, ML Evaluation, RL for application</li>
                <li>
                  Tech Stack: Python, R, SQL, PyTorch, LangGraph, FastAPI, MongoDB,
                  Azure
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="research">
          <h2>Research Interests</h2>

          <div className="grid">
            <div className="panel">
              <h3>Applied AI Systems & Agentic AI</h3>
              <p>
                Designing and deploying production-grade agentic AI systems—multi-agent
                architectures, autonomous workflows, and intelligent orchestration—that
                operate reliably at scale in real-world environments.
              </p>
            </div>
            <div className="panel">
              <h3>Human-AI Collaboration & Decision Intelligence</h3>
              <p>
                Exploring how humans and AI systems collaborate effectively to enhance
                decision-making, combining data-driven insights with human expertise
                to improve outcomes across complex domains.
              </p>
            </div>
            <div className="panel">
              <h3>Reinforcement Learning & Human-Centered AI</h3>
              <p>
                Applying reinforcement learning to real-world decision-making problems
                and building AI products that are human-centered—intuitive, transparent,
                and aligned with user needs throughout the productization lifecycle.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="publications">
          <h2>Publications & Research</h2>

          <ol className="pubs">
            <li className="pub">
              <div className="pub__title">
                <a href="https://link.springer.com/article/10.1186/s12911-026-03511-3" target="_blank" rel="noopener noreferrer">
                  DeepSeek vs ChatGPT vs Claude: Benchmarking Large Language Models for Clinical Diagnosis Using a Novel ICD-10-CM–Based Evaluation Framework
                </a>
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>BMC Medical Informatics and Decision Making</em> (Published)
              </div>
            </li>

            <li className="pub">
              <div className="pub__title">
                Comparative Analysis of Machine Learning and Data Mining Techniques for Predicting Heart Disease on Imbalanced Dataset
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>Scientific Reports</em> (In Revision)
              </div>
            </li>

            <li className="pub">
              <div className="pub__title">
                <a href="https://link.springer.com/article/10.1186/s43067-026-00315-3" target="_blank" rel="noopener noreferrer">
                  Enhancing Thyroid Disease Prediction Using Machine Learning: A Comparative Study of Ensemble Models and Class Balancing Techniques
                </a>
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>Journal of Electrical Systems and Information Technology</em> (Published)
              </div>
            </li>

            <li className="pub">
              <div className="pub__title">
                A Review of Machine Learning Applications in Infectious Disease Prediction, Diagnosis, and Outbreak Forecasting
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>Medicine Advances</em> (Published)
              </div>
            </li>
          </ol>
        </section>

        <section className="section" id="awards">
          <h2>Awards &amp; Honors</h2>
          <p className="section__note">
            Two teams in the same competition: AI Lead on dasGPT, Team Lead on MiraNote.
          </p>

          <div className="awards">
            <article className="award award--top">
              <div className="award__rank">
                1st Place &middot; Li &amp; Yang Gold Award
              </div>
              <h3>dasGPT &mdash; AI Lead</h3>
              <div className="award__event">
                DFWIT 2026 AI &amp; Startup Competition &middot; August 2026
              </div>
              <p>
                Built the AI layer for a bridge-monitoring system based on distributed
                acoustic sensing. Developed anomaly detection across fiber channels and a
                conversational interface for structural-health queries, validated on
                measurements from an in-service bridge.
              </p>
              <div className="tags">
                <span className="tag">LLM Agents</span>
                <span className="tag">Sensor Time Series</span>
                <span className="tag">Anomaly Detection</span>
              </div>
            </article>

            <article className="award">
              <div className="award__rank">
                4th Place &middot; DreamCollege Bronze Award
              </div>
              <h3>MiraNote &mdash; Team Lead</h3>
              <div className="award__event">
                DFWIT 2026 AI &amp; Startup Competition &middot; August 2026
              </div>
              <p>
                Led a cross-functional team across design, AI and data science, and built
                the backend and iOS client. MiraNote composes voice, photos and text into
                editable journal pages, with an agent that adapts to the user&apos;s style.
              </p>
              <div className="tags">
                <span className="tag">Multimodal AI</span>
                <span className="tag">Agent Systems</span>
                <span className="tag">iOS</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>

          <div className="projects">
            <article className="project">
              <div className="project__top">
                <h3>PeenML: Machine Learning for Shot Peening Optimization</h3>
                <div className="tags">
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Manufacturing</span>
                  <span className="tag">Software Development</span>
                </div>
              </div>
              <p>
                Developed ML-based deformation prediction software for shot peening optimization.
                Built end-to-end pipeline from data preprocessing to model deployment, enabling
                engineers to optimize manufacturing processes through machine learning predictions.
              </p>
              <div className="project__links">
                <a href="https://github.com/onestr1/peen-ml" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>Optimizing ML Models for Cryptocurrency Fraud Detection</h3>
                <div className="tags">
                  <span className="tag">Big Data</span>
                  <span className="tag">Fraud Detection</span>
                  <span className="tag">PySpark</span>
                </div>
              </div>
              <p>
                Designed cutting-edge machine learning models to detect cryptocurrency fraud patterns.
                Implemented scalable data pipeline with PySpark for processing large-scale blockchain
                transactions and identifying fraudulent behavior.
              </p>
              <div className="project__links">
                <a href="https://github.com/JiachenJasonZhong/JAWZ_Big_Data" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>Deep Learning-Enhanced Pairs Trading</h3>
                <div className="tags">
                  <span className="tag">Deep Learning</span>
                  <span className="tag">Finance</span>
                  <span className="tag">Time Series</span>
                </div>
              </div>
              <p>
                Comparative study of deep learning approaches versus traditional methods (ARIMA, Kalman Filter)
                for pairs trading strategies. Developed and evaluated neural network models for financial
                time series prediction and trading signal generation.
              </p>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>Insurance Valuation: Two-Step Generalized Regression with Neural Network</h3>
                <div className="tags">
                  <span className="tag">Neural Networks</span>
                  <span className="tag">Insurance</span>
                  <span className="tag">Regression</span>
                </div>
              </div>
              <p>
                Developed a two-step generalized regression approach using neural networks for insurance
                valuation. Combined traditional actuarial methods with modern deep learning techniques to
                improve prediction accuracy and model interpretability.
              </p>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>Comparing ML Methods with Traditional Methods in Demand Sensing</h3>
                <div className="tags">
                  <span className="tag">Time Series</span>
                  <span className="tag">Forecasting</span>
                  <span className="tag">Master's Thesis</span>
                </div>
              </div>
              <p>
                Master's thesis investigating machine learning approaches for demand forecasting in
                the European postal industry. Compared ML models with traditional methods on 80K+ weekly
                shipments, achieving 15% improvement in forecasting accuracy and uncovering key calendar
                effects driving shipment patterns.
              </p>
            </article>

            <article className="project">
              <div className="project__top">
                <h3>Optimal Portfolio Policies: Deviating From the Markowitz Paradigm</h3>
                <div className="tags">
                  <span className="tag">Portfolio Optimization</span>
                  <span className="tag">Finance</span>
                  <span className="tag">Bachelor's Thesis</span>
                </div>
              </div>
              <p>
                Bachelor's thesis exploring alternative portfolio optimization strategies beyond the
                traditional Markowitz mean-variance framework. Investigated modern approaches to portfolio
                construction and risk management in financial markets.
              </p>
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
              <a href={`${process.env.PUBLIC_URL}/JiachenZhong_CV.pdf`} target="_blank" rel="noopener noreferrer">Download PDF</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="muted">
            © {new Date().getFullYear()} Jiachen Zhong
          </div>
        </footer>
      </main>
    </div>
  );
}
