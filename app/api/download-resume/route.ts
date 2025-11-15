export async function GET() {
  const resumeContent = `
Harsh Jaiswal
Data Analyst
Paris, Ile-de-France | harshjaiswal97@gmail.com | (+33) 7 67 46 35 83 | LinkedIn | GitHub

SUMMARY
Data Analyst with 3+ years of experience improving acquisition, retention, and customer lifecycle performance across product, growth, and sales teams. Skilled in SQL, Python, and BI tools with a strong track record in funnel analysis, churn reduction, KPI design, and automated data pipelines. Adept at translating business questions into analytical insights that drive revenue-impacting decisions and operational efficiency.

SKILLS
• Programming: SQL (PostgreSQL, MySQL, BigQuery), Python (Pandas, NumPy, SciPy, scikit-learn)
• Data Engineering: dbt, ETL pipelines, REST API integration, Data Warehousing (GCP, Azure)
• Analytics: A/B testing, hypothesis testing, funnel analysis, cohort analysis, churn analysis, forecasting, KPI framework design
• BI Tools: Tableau, Power BI (DAX), Looker Studio, Metabase, Excel (advanced)
• Workflow & Collaboration: Git, Jira, Confluence, Agile practices, Data Governance

EXPERIENCE

Ayomi.fr – AI-powered fintech fundraising platform | Paris, France
Data Analyst | Jul 2025 – Present
• Engineered automated Looker pipelines integrating 10+ data sources, improving MQL–to–SQL conversion by 18% and freeing 12 analyst hours per week.
• Partnered with the Growth team to design and analyse A/B testing on email campaigns, optimising subject lines and send timing to lift user activation by 3% and improve click–through rate accuracy by 5%.
• Built a Python script to eliminate bot traffic in email analytics (user–agent/IP heuristics + rate-limit rules), restoring human–only metrics and enabling optimisations that lifted open rate +7% and landing–page conversions +7%.
• Built an end-to-end ETL pipeline for the Account Management team, consolidating scattered data sources and Excel files, automating weekly refreshes with Airflow, and delivering a unified Power BI reporting layer.

Singulart – SaaS Global Online Art Marketplace | Paris, France
Data Analyst (Acquisition and Retention) | Sep 2024 – Mar 2025
• Built cohort–based acquisition dashboards to visualise LTV: CAC ratios, reducing marketing spend inefficiencies by 12% and improving ROI forecasting accuracy by 15%.
• Analysed user funnel metrics across acquisition cohorts, identifying drop–off points that informed product roadmap priorities and reduced churn by 8%.
• Partnered with executive leadership to reduce churn by building retention dashboards that drove quarterly revenue planning.

Sisyphus Training – Boutique fitness studio | Paris, France
Data Analyst and Marketing Consultant (In-Company Project) | Jan 2024 – May 2024
• Cleaned and analysed CRM datasets to uncover user behaviour patterns, increasing retention by 15% via targeted re-engagement flows.
• Built real–time dashboards in Power BI (retention, conversion, pipeline), used in monthly board meetings to accelerate decision–making.

HCL Technologies – Global IT services and consulting firm | Noida, India
Data Analyst (Client: SC Johnson) | Nov 2020 – Feb 2023
• Automated multi-region performance dashboards tracking procurement and logistics KPIs, identifying inefficiencies that generated $0.5M+ annual savings and reduced SLA breaches by 18%.
• Built real–time issue monitoring tools that reduced incident resolution time by 30%, enhancing response efficiency across regional teams.
• Created forecasting models used by brand/category leads to shape market–entry strategies across 3 continents.

EDUCATION

Emlyon Business School | Paris, France
MSc in Digital Marketing & Data Science | Sep 2023 – Jun 2025
Relevant Coursework: Web Analytics, Programmatic Advertising, Data Visualisation, Python, SQL, Market Analysis, MS Excel.

Satyabhama Institute of Science and Technology | Chennai, India
Bachelor's, Computer Science & Engineering | May 2016 – Jul 2020
Relevant Coursework: C, C++, Java, Cloud Computing, Python, SQL, HTML, CSS, JavaScript.

CERTIFICATIONS
• SQL Associate – Data Camp
• Associate Data Analyst – Data Camp
• Visual Analytics with Tableau – Coursera
• dbt Fundamentals – dbt Labs

LANGUAGES
• English (Native/Bilingual)
• Hindi (Native)
• French (A2)
`;

  return new Response(resumeContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'attachment; filename="Harsh_Jaiswal_Resume.txt"',
    },
  });
}
