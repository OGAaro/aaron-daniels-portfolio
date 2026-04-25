// All page content lives here. Update this file to update the portfolio —
// no JSX changes needed. The components just .map() over these arrays.

export const experience = [
  {
    company: 'University of Texas Medical Branch',
    role: 'Sr. Application System Analyst',
    location: 'League City, Texas',
    period: 'Mar 2023 — Present',
    bullets: [
      'Architected automated data integrations between HCM and financial reporting platforms using Azure Data Factory, Snowflake SQL, and Python — eliminating manual data handling and large-scale variance in financial reporting.',
      'Built a human-in-the-loop AI agent using Microsoft Copilot Studio that scores research documentation (IRB packets, protocols, consent forms, SOPs) against trained acceptability benchmarks, auto-clearing high-confidence submissions and flagging edge cases for reviewer escalation to accelerate research intake.',
      "Developed a Microsoft Copilot Studio chatbot grounded on a secure SharePoint knowledge base to serve UTMB's research community, handling policy, how-to, and resource inquiries and reducing help desk tickets, emails, and Teams messages by 40%.",
      'Built internal web tools and portals using JavaScript and jQuery, enabling stakeholders to interact with real-time operational data and streamlining cross-departmental workflows.',
      'Developed and maintained RESTful API integrations connecting disparate enterprise systems, ensuring seamless data flow between HCM, financial, and analytics platforms.',
      'Designed and implemented ETL pipelines using Azure Data Factory, T-SQL stored procedures, and Python scripts to automate data transformation across Snowflake data warehouse environments.',
      'Engineered executive dashboards in Power BI, Sigma, and Snowflake, writing complex SQL queries and data models to deliver actionable analytics for senior leadership.',
      'Led front-end development of interactive dashboard components using JavaScript, translating complex datasets into intuitive visual interfaces across multiple business units.',
      'Managed 4–5 concurrent projects with cross-functional teams through iterative, agile-based workflows, accelerating deployment cycles.',
      'Created comprehensive process documentation, SOPs, and escalation paths — reducing onboarding time for new analysts by over 80%.',
    ],
  },
  {
    company: 'Rice University',
    role: 'Database Administrator',
    location: 'Houston, Texas',
    period: 'Jul 2021 — Feb 2023',
    bullets: [
      'Led the end-to-end replacement of a legacy Technology Transfer platform with Salesforce, managing requirements gathering, data migration, stakeholder adoption, and post-launch administration for a department-wide production deployment.',
      'Administered and built out a Salesforce org supporting 18 internal staff and 500+ Rice community users post-migration from Wellspring Sophia, configuring custom objects, record types, page layouts, approval workflows, and reports to manage invention, patent, and licensing operations end-to-end.',
      'Designed and implemented Salesforce integrations with HCM system, USPTO, EPO, and other third-party systems, automating data enrichment across IP records and enabling invoice reconciliation workflows that ensured fees and milestone payments were captured per executed agreements.',
      'Developed custom web applications using React and Vue.js to modernize internal workflows for technology transfer operations, improving data accessibility for staff and external stakeholders.',
      'Built custom Drupal modules and themes using PHP and JavaScript, extending CMS functionality with complex data displays, custom forms, and dynamic content.',
      'Integrated third-party APIs — including patent/IP databases and university systems — to automate data retrieval and enrich internal reporting capabilities.',
      'Automated data processing and report generation workflows using Python and PowerShell scripting, reducing manual effort and improving turnaround times.',
      'Administered an enterprise SSAS database supporting critical invention, patent, and licensing data; designed complex SQL queries for leadership insights.',
      'Partnered with Rice IT to design and configure departmental infrastructure, increasing team efficiency and collaboration.',
      "Created SOPs to standardize workflows and streamline onboarding, transforming the team's reputation from siloed to collaborative.",
    ],
  },
  {
    company: 'Texas A&M University',
    role: 'Software Applications Developer',
    location: 'College Station, Texas',
    period: 'Dec 2020 — Jun 2021',
    bullets: [
      'Developed and maintained back-end systems for internal administrative tools using T-SQL, writing stored procedures and complex queries to support critical university operations.',
      'Collaborated with stakeholders to assess application requirements, translating business needs into technical specifications and resolving system issues.',
      'Leveraged software documentation and modern programming approaches to troubleshoot complex problems and deliver maintainable solutions.',
    ],
  },
  {
    company: 'Infosys Ltd.',
    role: 'Database Administrator',
    location: 'Houston, Texas',
    period: 'Feb 2018 — Dec 2020',
    bullets: [
      'Served as staff DBA in an Azure cloud environment, leveraging automated monitoring to proactively manage database backups, server health, compute, and storage resources.',
      'Collaborated with cross-functional teams across Asia-Pacific, UK, and US, ensuring seamless database continuity and 24/7 global system availability.',
      'Streamlined configuration, maintenance, and performance optimization of SQL Server databases, earning multiple accolades and contributing to an employee onboarding handbook.',
      'Executed database migrations including on-premise to cloud transitions, legacy SQL Server upgrades, and data warehouse migrations across hybrid infrastructure environments.',
      'Designed and implemented automated ad hoc reporting systems for senior management, enabling trend analysis and driving recommendations for modernizing outdated procedures.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science — Management Information Systems',
    school: 'Texas A&M University, Mays Business School',
    location: 'College Station, Texas',
    chips: [
      { label: '⏳ Expected May 2027', gold: true },
      { label: 'GPA: 4.0 / 4.0', gold: true },
    ],
    watermark: 'MS',
  },
  {
    degree: 'Bachelor of Business Administration — Computer Information Systems',
    school: 'Texas State University, McCoy College of Business',
    location: 'San Marcos, Texas',
    chips: [
      { label: '🎓 December 2016' },
      { label: 'GPA: 3.2 / 4.0' },
    ],
    watermark: 'BBA',
  },
];

export const skillCategories = [
  {
    label: 'Languages',
    type: 'lang',
    items: ['JavaScript / TypeScript', 'Python', 'T-SQL / PL-SQL', 'Java', 'PHP', 'HTML / CSS', 'C# / C++', 'R', 'Swift', 'XML'],
  },
  {
    label: 'Frameworks & Libraries',
    type: 'fw',
    items: ['React', 'Vue.js', 'Node.js / Express', 'Spring', 'jQuery'],
  },
  {
    label: 'Cloud & Data Platforms',
    type: 'cloud',
    items: ['Azure Data Factory', 'Azure SQL', 'AWS', 'Snowflake', 'Salesforce', 'Oracle', 'MS SQL Server', 'MariaDB / MySQL'],
  },
  {
    label: 'Tools & Practices',
    type: 'tool',
    items: ['Microsoft Copilot Studio', 'AI Agents', 'Project Management', 'CI/CD', 'Power BI', 'Tableau', 'Sigma', 'dbt', 'SSIS', 'Git', 'REST APIs', 'Agile / Scrum', 'ETL Development', 'Wordpress', 'Drupal'],
  },
];

export const radarData = [
  { skill: 'Data Eng',        value: 95 },
  { skill: 'Cloud & Infra',   value: 88 },
  { skill: 'Front-End',       value: 82 },
  { skill: 'Project Mgmt',    value: 85 },
  { skill: 'Analytics & BI',  value: 92 },
  { skill: 'API Integration', value: 87 },
  { skill: 'AI Agents',       value: 85 },
  { skill: 'DB Admin',        value: 96 },
];

export const proficiencies = [
  { name: 'SQL / Databases',           pct: 97, gradient: 'linear-gradient(90deg,#A03333,#B86B6B)' },
  { name: 'Python / Data Engineering', pct: 90, gradient: 'linear-gradient(90deg,#B86B6B,#A03333)' },
  { name: 'Azure/AWS Cloud Platforms', pct: 88, gradient: 'linear-gradient(90deg,#A03333,#C9B896)' },
  { name: 'JavaScript / Front-End',    pct: 85, gradient: 'linear-gradient(90deg,#C9B896,#A03333)' },
  { name: 'Power BI / Data Viz',       pct: 92, gradient: 'linear-gradient(90deg,#C9B896,#B86B6B)' },
  { name: 'ETL / Data Pipelines',      pct: 93, gradient: 'linear-gradient(90deg,#A03333,#C9B896)' },
  { name: 'AI Agents / Copilot Studio',pct: 85, gradient: 'linear-gradient(90deg,#B86B6B,#C9B896)' },
  { name: 'React / Vue.js',            pct: 80, gradient: 'linear-gradient(90deg,#B86B6B,#A03333)' },
];

export const certifications = [
  { name: 'Microsoft Certified Solutions Associate', issuer: 'MICROSOFT',      icon: '🪟', color: 'rgba(160,51,51,.12)',  border: 'rgba(160,51,51,.35)'  },
  { name: 'Certified Scrum Master',                  issuer: 'SCRUM ALLIANCE', icon: '🔄', color: 'rgba(201,184,150,.1)', border: 'rgba(201,184,150,.3)' },
  { name: 'Certified Scrum Product Owner',           issuer: 'SCRUM ALLIANCE', icon: '📋', color: 'rgba(184,107,107,.12)',border: 'rgba(184,107,107,.3)' },
  { name: 'Epic Cosmos Data Architect',              issuer: 'EPIC SYSTEMS',   icon: '🏥', color: 'rgba(201,184,150,.12)',border: 'rgba(201,184,150,.35)' },
];

export const interests = [
  { icon: '🤖', label: 'Large Language Models' },
  { icon: '🌐', label: 'Full-Stack Development' },
  { icon: '⛓️', label: 'Blockchain Technology' },
  { icon: '🔓', label: 'Open-Source Software' },
  { icon: '📊', label: 'Data Engineering' },
];

export const heroBadges = [
  'AI Agents', 'Microsoft Copilot Studio', 'Azure Data Factory', 'Snowflake',
  'Salesforce', 'React / Vue.js', 'Power BI', 'Business Intelligence', 'ETL Pipelines', 'RESTful APIs',
];

/* ═══════════════════════════════════════════════════════════════════════════
   PROJECTS — featured work shown in the tabbed showcase above Experience.
   Empty optional fields (image, links, impact, highlights) render gracefully
   thanks to conditional rendering in ProjectPanel.jsx.
   ═══════════════════════════════════════════════════════════════════════════ */

export const projects = [
  {
    id: 'ai-research-triage',
    title: 'AI Research Document Triage Agent',
    shortLabel: 'AI Triage Agent',
    category: 'AI Agents',
    categoryIcon: '🤖',
    status: 'live',
    org: 'University of Texas Medical Branch',
    role: 'Architect & Builder',
    year: '2024 — Present',
    summary: 'A human-in-the-loop AI agent that scores research documentation — IRB packets, protocols, consent forms, and SOPs — against trained acceptability benchmarks to accelerate research intake.',
    highlights: [
      'Auto-clears high-confidence submissions to fast-track routine research approvals.',
      'Flags edge cases for human reviewer escalation, preserving safety and compliance.',
      'Trained on acceptability benchmarks across multiple research document types.',
      'Built with governance-first principles — humans stay in control of final decisions.',
    ],
    tech: ['Microsoft Copilot Studio', 'SharePoint', 'RAG', 'AI Agents', 'LLM Orchestration'],
    image: null,
    links: [],
    impact: null,
  },
  {
    id: 'ai-research-chatbot',
    title: 'Research Community AI Chatbot',
    shortLabel: 'AI Chatbot',
    category: 'AI Agents',
    categoryIcon: '💬',
    status: 'live',
    org: 'University of Texas Medical Branch',
    role: 'Designer & Developer',
    year: '2024 — Present',
    summary: "A conversational AI assistant grounded on a secure SharePoint knowledge base, serving UTMB's research community with policy guidance, how-to help, and resource discovery.",
    highlights: [
      'Grounded on a curated SharePoint knowledge base for accurate, source-backed responses.',
      'Handles policy questions, how-to inquiries, and resource lookups across research operations.',
      'Deflects routine inquiries that previously consumed help desk, email, and Teams capacity.',
      'Designed with secure access controls aligned to the institution\'s data governance.',
    ],
    tech: ['Microsoft Copilot Studio', 'SharePoint', 'RAG / Knowledge Grounding', 'AI Agents'],
    image: null,
    links: [],
    impact: '40% reduction in help desk tickets, emails, and Teams messages',
  },
  {
    id: 'salesforce-migration-rice',
    title: 'Salesforce Migration & Platform Build-Out',
    shortLabel: 'Salesforce Migration',
    category: 'Enterprise Platforms',
    categoryIcon: '☁️',
    status: 'shipped',
    org: 'Rice University, Office of Technology Transfer',
    role: 'Project Lead & Salesforce Architect',
    year: '2021 — 2023',
    summary: 'End-to-end replacement of a legacy Technology Transfer platform with a custom-built Salesforce org. This unified system manages the full intellectual property lifecycle, including sponsored research, material transfer (MTA), and non-disclosure agreements (NDA), alongside core invention, patent, and licensing operations for the Rice research community.',
    highlights: [
      'Owned the full lifecycle: requirements gathering, data migration, deployment, and post-launch admin.',
      'Built out custom objects, record types, page layouts, approval workflows, and reports for IP operations.',
      'Integrated Salesforce with USPTO, EPO, and ERP systems for automated data enrichment across IP records.',
      'Enabled invoice reconciliation workflows, ensuring fees and milestone payments matched executed agreements.',
    ],
    tech: ['Salesforce', 'USPTO API', 'EPO API', 'HCM Integration', 'Apex / SOQL'],
    image: '/projects/salesforce_integration_topology.svg',
    links: [],
    impact: '20 internal staff + 500+ Rice community users on a unified platform',
  },
  {
    id: 'executive-analytics-utmb',
    title: 'Executive Analytics & Data Pipeline Platform',
    shortLabel: 'Analytics Platform',
    category: 'Data Engineering',
    categoryIcon: '📊',
    status: 'live',
    org: 'University of Texas Medical Branch',
    role: 'Architect & Lead Developer',
    year: '2023 — Present',
    summary: 'End-to-end data platform connecting HCM and financial systems through automated ETL pipelines into Snowflake, surfacing actionable analytics through executive dashboards used by senior leadership.',
    highlights: [
      'Architected automated data integrations between HCM and financial reporting platforms.',
      'Built ETL pipelines using Azure Data Factory, T-SQL stored procedures, and Python.',
      'Engineered executive dashboards in Power BI, Sigma, and Snowflake with complex SQL data models.',
      'Eliminated manual data handling and large-scale variance in financial reporting.',
    ],
    tech: ['Azure Data Factory', 'Snowflake', 'Python', 'T-SQL', 'Power BI', 'Sigma'],
    image: '/projects/utmb_analytics_platform.svg',
    links: [],
    impact: null,
  },
  {
    id: 'financial-forecasting-app',
    title: 'Financial Forecasting Platform',
    shortLabel: 'Financial Forecasting',
    category: 'Personal Project',
    categoryIcon: '💰',
    status: 'in-development',
    org: 'Personal Build',
    role: 'Solo Architect & Full-Stack Developer',
    year: '2025 — Present',
    summary: 'A secure, full-stack financial forecasting application architected for personal and small-business financial planning — designed end-to-end from database schema to deployment topology.',
    highlights: [
      'Designed multi-tier architecture: React SPA, FastAPI backend, PostgreSQL, all on AWS.',
      'Implemented enterprise-grade auth with Auth0 (MFA, RBAC, SSO) and JWT validation at the API layer.',
      'Encrypted PostgreSQL with row-level security to enforce per-user data isolation.',
      'Containerized FastAPI deployed on ECS Fargate with CloudFront + S3 for global SPA delivery.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Recharts', 'FastAPI', 'PostgreSQL', 'AWS (ECS, RDS, S3, CloudFront)', 'Auth0'],
    image:'/projects/financial_portal_architecture.svg',
    links: [],
    impact: null,
  },
  {
    id: 'portfolio-platform',
    title: 'Interactive Portfolio Platform',
    shortLabel: 'This Portfolio',
    category: 'Personal Project',
    categoryIcon: '🎨',
    status: 'live',
    org: 'Personal Build',
    role: 'Designer, Developer, Maintainer',
    year: '2025',
    summary: 'A custom-built React portfolio designed to feel more like a product than a resume — interactive, data-driven, and continuously deployed via modern CI/CD. Yes, this is the site you are on right now.',
    highlights: [
      'Component-driven architecture with custom React hooks (useInView, useCounter).',
      'Interactive timeline, radar chart, and animated proficiency bars driven by a single data source.',
      'Scroll-triggered fade-ins, hover micro-interactions, and a fully mobile-responsive layout.',
      'Continuous deployment from GitHub via AWS Amplify with custom domain and SSL.',
    ],
    tech: ['React', 'Vite', 'Recharts', 'Custom CSS', 'AWS Amplify', 'GitHub'],
    image: '/projects/portfolio_cicd_pipeline.svg',
    links: [],
    impact: null,
  },
];
