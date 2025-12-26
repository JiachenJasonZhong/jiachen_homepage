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
              and scalable engineering. I'm particularly interested in LLM agents, ML evaluation
              frameworks, and building robust production systems.
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
                DeepSeek vs ChatGPT vs Claude: Benchmarking Large Language Models for Clinical Diagnosis Using a Novel ICD-10-CM–Based Evaluation Framework
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>BMC Medical Informatics and Decision Making</em> (Under Consideration)
              </div>
            </li>

            <li className="pub">
              <div className="pub__title">
                Comparative Analysis of Machine Learning and Data Mining Techniques for Predicting Heart Disease on Imbalanced Dataset
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>Scientific Reports</em> (Under Review)
              </div>
            </li>

            <li className="pub">
              <div className="pub__title">
                Enhancing Thyroid Disease Prediction Using Machine Learning: A Comparative Study of Ensemble Models and Class Balancing Techniques
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>Journal of Electrical Systems and Information Technology</em> (Under Review)
              </div>
            </li>

            <li className="pub">
              <div className="pub__title">
                A Systematic Review of Machine Learning Applications in Infectious Disease Prediction, Diagnosis, and Outbreak Forecasting
              </div>
              <div className="pub__meta">
                Jiachen Zhong et al. · <em>In Revision</em>
              </div>
            </li>
          </ol>
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
