"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Linkedin, Github, Download, Footprints, Briefcase, GraduationCap, Code, Wrench, Sparkles, Star, Award, BarChart3, Database, LineChart, ChevronUp } from 'lucide-react'
import {
  fadeInAnimation,
  slideInAnimation,
  floatAnimation,
  staggerChildren,
  buttonHoverAnimation,
} from "@/utils/animation"
import EnhancedBackground from "@/components/enhanced-background"
import FunDataParticles from "@/components/fun-data-particles"
import SkillBadgeGame from "@/components/skill-badge-game"
import FunProfileAnimation from "@/components/fun-profile-animation"
import SectionTransition from "@/components/section-transition"
import AnimatedSkillBar from "@/components/animated-skill-bar"
import PremiumProjectCard from "@/components/premium-project-card"
import AnimatedText from "@/components/animated-text"
import SectionHeading from "@/components/section-heading"
import MobileOptimizedCard from "@/components/mobile-optimized-card"
import SmoothScroll from "@/components/smooth-scroll"

// Main Portfolio component
export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [funMode, setFunMode] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // First, let's update the sectionRefs to include education
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    education: useRef(null),
  }

  // Add a new state variable to track scroll position
  const [scrolled, setScrolled] = useState(false)

  // Update the useEffect that handles scroll to also track header transparency
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Show scroll to top button when scrolled down
      if (scrollPosition > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Set header transparency based on scroll position
      // Make header transparent when scrolled down
      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine which section is currently in view
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current as HTMLElement
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition + 100 >= offsetTop && scrollPosition + 100 < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // LinkedIn profile URL
  const linkedInUrl = "https://www.linkedin.com/in/harshjaiswal97/"

  // Contact click handler
  const handleContactClick = () => {
    window.open(linkedInUrl, "_blank")
  }

  // Toggle fun mode
  const toggleFunMode = () => {
    setFunMode(!funMode)

    // Add a fun confetti effect when enabling fun mode
    if (!funMode) {
      import("canvas-confetti").then((confetti) => {
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      })
    }
  }

  // List of skills for the skill game
  const skillsList = [
    "SQL",
    "Python",
    "R",
    "Tableau",
    "Power BI",
    "Excel",
    "Google Analytics",
    "Azure",
    "GCP",
    "Big Query",
    "DBT",
    "A/B Testing",
    "Statistical Analytics",
    "Looker Studio",
    "Metabase",
    "Agile",
    "Jira",
    "Google Ads",
    "Google Search Console",
    "E-commerce SEO",
    "Marketing Analytics",
    "Data Visualization",
    "Web Analytics",
    "Data Collection",
    "Data Warehousing",
    "Relational Databases",
    "Data Science",
    "Data Privacy",
    "Business Insights",
  ]

  // Expanded projects data with business objectives and problem statements
  const projects = [
    {
      title: "AWS YouTube Data Engineering",
      description:
        "Built an end-to-end data engineering pipeline on AWS to ingest, process, and analyze YouTube trending videos data at scale using S3, Glue, Lambda, and Athena.",
      businessObjective:
        "Create a scalable data analytics platform to derive actionable insights from YouTube trending videos across different regions and categories.",
      problemStatement:
        "Organizations needed to analyze YouTube trending patterns across regions but lacked a scalable infrastructure to process and analyze large volumes of semi-structured video data efficiently.",
      tags: ["AWS", "S3", "Glue", "Lambda", "Athena", "ETL", "Data Lake", "Python", "QuickSight"],
      link: "https://github.com/harshjaiswal78/AWS-Youtube-Analytics",
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Developed an ETL pipeline with SQL and visualized results in Power BI. Applied Random Forest algorithm in Python to predict customer churn with 85% accuracy.",
      businessObjective:
        "Reduce customer attrition by 15% and increase customer retention through proactive identification of at-risk customers.",
      problemStatement:
        "The telecom company was experiencing a high churn rate of 24%, resulting in significant revenue loss. They needed a way to identify customers likely to churn before they actually did.",
      tags: ["SQL", "Power BI", "ETL", "Python", "Machine Learning"],
      link: "https://github.com/harshjaiswal78/Churner-Prediction-",
    },
    {
      title: "Costa Coffee Sales Analysis",
      description:
        "Conducted comprehensive sales analysis for Costa Coffee using Excel, creating interactive dashboards to visualize sales trends, customer behavior, and product performance.",
      businessObjective:
        "Optimize product offerings and pricing strategy by identifying top-performing products and peak sales periods to increase overall revenue.",
      problemStatement:
        "Costa Coffee needed to understand sales patterns across different locations and products to make data-driven decisions for inventory management and marketing campaigns.",
      tags: ["Excel", "Data Analysis", "Dashboard Design", "Sales Analytics", "Business Intelligence"],
      link: "https://github.com/harshjaiswal78/Costa-Coffee-Sales-Analysis",
    },
    {
      title: "Market Campaign Optimization",
      description:
        "Evaluated ROI of marketing campaigns across different channels. Implemented A/B testing to optimize campaign performance and increase conversion rates.",
      businessObjective:
        "Maximize marketing ROI by identifying the most effective channels and optimizing campaign spend allocation.",
      problemStatement:
        "The marketing team was struggling with inefficient ad spend distribution across channels, resulting in suboptimal conversion rates and high customer acquisition costs.",
      tags: ["Google Analytics", "A/B Testing", "Python", "Statistical Analysis"],
      link: "https://github.com/harshjaiswal78/Market-Campaing-Analysis",
    },
    {
      title: "Stroke Prediction",
      description:
        "Built a machine learning model to predict stroke risk based on patient health data. Implemented feature engineering and model optimization techniques.",
      businessObjective:
        "Enable early intervention for high-risk patients by developing a reliable stroke prediction model for healthcare providers.",
      problemStatement:
        "Healthcare providers needed a way to identify patients at high risk of stroke to implement preventive measures, but lacked a systematic approach to risk assessment.",
      tags: ["Python", "Scikit-learn", "Data Visualization", "Healthcare Analytics"],
      link: "https://github.com/harshjaiswal78/Stroke-Predictions/blob/main/stroke-prediction.ipynb",
    },
    {
      title: "Product Market Analysis (Adidas vs Nike)",
      description:
        "Conducted comparative analysis of Adidas and Nike market performance using exploratory data analysis techniques to identify competitive advantages.",
      businessObjective:
        "Identify competitive advantages and market positioning opportunities by analyzing the performance of two leading sportswear brands.",
      problemStatement:
        "A retail investor needed insights into the competitive dynamics between Adidas and Nike to make informed investment decisions, but lacked structured data analysis.",
      tags: ["Python", "Pandas", "EDA", "Market Analysis", "Visualization"],
      link: "https://github.com/harshjaiswal78/Adidas-Vs-Nike-EDA-/blob/main/detailed_eda_adidas_nike.ipynb",
    },
    {
      title: "PedalPulse: Urban Mobility Dashboard",
      description:
        "Created an interactive Tableau dashboard visualizing London bike sharing data with moving averages and heatmaps to reveal mobility patterns.",
      businessObjective:
        "Optimize bike station placement and fleet management by understanding urban mobility patterns and usage trends.",
      problemStatement:
        "City planners needed to understand bike-sharing usage patterns to improve infrastructure planning, but were overwhelmed by the volume and complexity of the data.",
      tags: ["Tableau", "Data Visualization", "Urban Analytics", "Dashboard Design"],
      link: "https://public.tableau.com/app/profile/harsh.jaiswal/viz/LondonBikeRides-MovingAverageandHeatmap_17378188375130/Dashboard",
    },
  ]

  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen text-slate-900">
      {/* Minimalist Data Background */}
      <EnhancedBackground />
      <SmoothScroll />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-20 right-4 z-50 bg-white rounded-full p-3 shadow-lg text-slate-600 hover:text-slate-700 transition-colors cursor-pointer animate-fadeInUp"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Fun mode toggle button */}
      <button
        className="fixed bottom-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg text-slate-600 hover:text-slate-700 transition-colors cursor-pointer animate-bounce"
        onClick={toggleFunMode}
        title={funMode ? "Disable Fun Mode" : "Enable Fun Mode"}
      >
        <Sparkles size={24} className={funMode ? "text-yellow-400" : ""} />
      </button>

      {/* Fun interactive particles (only visible in fun mode) */}
      {funMode && <FunDataParticles />}

      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-[2px] border-b border-slate-100 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div
            className="font-medium text-xl text-slate-900 animate-fadeInLeft"
          >
            {funMode ? (
              <span
                className="animate-pulse"
              >
                Harsh Jaiswal ✨
              </span>
            ) : (
              <span className="bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
                Harsh Jaiswal
              </span>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex gap-8 animate-fadeInRight"
          >
            <a
              href="#about"
              className={`text-sm font-medium transition-colors duration-200 link-crisp relative overflow-hidden group ${
                activeSection === "about" ? "text-slate-700" : "text-slate-600 hover:text-slate-700"
              }`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-700 transform scale-x-0 transition-transform duration-300 ${activeSection === "about" ? "scale-x-100" : "group-hover:scale-x-100"}`}
              ></span>
            </a>
            <a
              href="#skills"
              className={`text-sm font-medium transition-colors duration-200 link-crisp relative overflow-hidden group ${
                activeSection === "skills" ? "text-slate-700" : "text-slate-600 hover:text-slate-700"
              }`}
            >
              Skills
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-700 transform scale-x-0 transition-transform duration-300 ${activeSection === "skills" ? "scale-x-100" : "group-hover:scale-x-100"}`}
              ></span>
            </a>
            <a
              href="#experience"
              className={`text-sm font-medium transition-colors duration-200 link-crisp relative overflow-hidden group ${
                activeSection === "experience" ? "text-slate-700" : "text-slate-600 hover:text-slate-700"
              }`}
            >
              Experience
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-700 transform scale-x-0 transition-transform duration-300 ${activeSection === "experience" ? "scale-x-100" : "group-hover:scale-x-100"}`}
              ></span>
            </a>
            <a
              href="#projects"
              className={`text-sm font-medium transition-colors duration-200 link-crisp relative overflow-hidden group ${
                activeSection === "projects" ? "text-slate-700" : "text-slate-600 hover:text-slate-700"
              }`}
            >
              Projects
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-700 transform scale-x-0 transition-transform duration-300 ${activeSection === "projects" ? "scale-x-100" : "group-hover:scale-x-100"}`}
              ></span>
            </a>
            <a
              href="#education"
              className={`text-sm font-medium transition-colors duration-200 link-crisp relative overflow-hidden group ${
                activeSection === "education" ? "text-slate-700" : "text-slate-600 hover:text-slate-700"
              }`}
            >
              Education
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-700 transform scale-x-0 transition-transform duration-300 ${activeSection === "education" ? "scale-x-100" : "group-hover:scale-x-100"}`}
              ></span>
            </a>
          </nav>

          <div
            className="animate-fadeInRight"
          >
            <Button
              className="bg-slate-700 hover:bg-slate-600 text-white transition-all duration-300 hover:scale-105 btn-crisp shadow-md"
              size="sm"
              onClick={handleContactClick}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden bg-white border-b border-slate-100 animate-fadeInDown"
          >
            <div className="container py-3 flex flex-col space-y-3">
              <a
                href="#about"
                className={`text-sm font-medium p-2 rounded-md transition-colors duration-200 ${
                  activeSection === "about"
                    ? "bg-slate-600/10 text-slate-700"
                    : "text-slate-600 hover:bg-slate-600/5 hover:text-slate-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className={`text-sm font-medium p-2 rounded-md transition-colors duration-200 ${
                  activeSection === "skills"
                    ? "bg-slate-600/10 text-slate-700"
                    : "text-slate-600 hover:bg-slate-600/5 hover:text-slate-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className={`text-sm font-medium p-2 rounded-md transition-colors duration-200 ${
                  activeSection === "experience"
                    ? "bg-slate-600/10 text-slate-700"
                    : "text-slate-600 hover:bg-slate-600/5 hover:text-slate-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#projects"
                className={`text-sm font-medium p-2 rounded-md transition-colors duration-200 ${
                  activeSection === "projects"
                    ? "bg-slate-600/10 text-slate-700"
                    : "text-slate-600 hover:bg-slate-600/5 hover:text-slate-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#education"
                className={`text-sm font-medium p-2 rounded-md transition-colors duration-200 ${
                  activeSection === "education"
                    ? "bg-slate-600/10 text-slate-700"
                    : "text-slate-600 hover:bg-slate-600/5 hover:text-slate-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="container py-6 space-y-16 md:space-y-24">
        {/* About Section - Enhanced with better animations */}
        <section id="about" ref={sectionRefs.about} className="py-6 md:py-16">
          <SectionTransition>
            <div
              className="grid gap-8 md:gap-12 md:grid-cols-2 items-center will-change-transform animate-zoomIn"
              style={{
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "subpixel-antialiased",
                perspective: 1000,
              }}
            >
              <div className="flex justify-center md:justify-end order-2 md:order-1 animate-fadeInLeft">
                {funMode ? (
                  <FunProfileAnimation imageUrl="/images/profile.png" />
                ) : (
                  <div
                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-300/30 hover-glow img-crisp shadow-lg animate-float"
                  >
                    <img src="/images/profile.png" alt="Harsh Jaiswal" className="w-full h-full object-cover" />
                    {/* Add a subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-700/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )}
              </div>
              <div
                className="space-y-4 text-center md:text-left order-1 md:order-2 w-full overflow-visible animate-fadeInRight"
              >
                <div>
                  <AnimatedText
                    text="Data Professional"
                    as="span"
                    className="text-sm font-medium text-slate-600 tracking-wider uppercase"
                  />
                  <AnimatedText
                    text="Harsh Jaiswal"
                    as="h1"
                    className="text-4xl font-medium tracking-tight text-slate-900 mt-2 bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent"
                  />
                  <AnimatedText text="Data Analyst" as="h2" className="text-2xl text-slate-700 mt-1" delay={0.2} />
                </div>

                <div className="flex flex-col gap-3 text-slate-600">
                  <div
                    className="flex items-center gap-2 justify-center md:justify-start animate-fadeInLeft"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200/50 text-slate-600">
                      <MapPin size={16} />
                    </div>
                    <span>Paris, Ile-de-France</span>
                  </div>
                  <div
                    className="flex items-center gap-2 justify-center md:justify-start animate-fadeInLeft"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200/50 text-slate-600">
                      <Mail size={16} />
                    </div>
                    <a
                      href="mailto:harshjaiswal97@gmail.com"
                      className="hover:text-slate-700 transition-colors link-crisp"
                    >
                      harshjaiswal97@gmail.com
                    </a>
                  </div>
                  <div
                    className="flex items-center gap-2 justify-center md:justify-start animate-fadeInLeft"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200/50 text-slate-600">
                      <Phone size={16} />
                    </div>
                    <a href="tel:+33767463583" className="hover:text-slate-700 transition-colors link-crisp">
                      (+33) 7 67 46 35 83
                    </a>
                  </div>
                  <div
                    className="flex items-center gap-2 justify-center md:justify-start animate-fadeInLeft"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200/50 text-slate-600">
                      <Linkedin size={16} />
                    </div>
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-700 transition-colors link-crisp"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div
                    className="flex items-center gap-2 justify-center md:justify-start animate-fadeInLeft"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200/50 text-slate-600">
                      <Github size={16} />
                    </div>
                    <a
                      href="https://github.com/harshjaiswal78"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-700 transition-colors link-crisp"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div
                  className="text-slate-600 max-w-md pt-2 leading-relaxed mx-auto md:mx-0 animate-fadeInUp"
                >
                  <p className="text-sm md:text-base">
                    Data Analyst with 3+ years of experience uncovering insights across marketing and product domains.
                    Proven ability to leverage SQL, Python, and BI tools to drive data-informed decisions, streamline
                    operations, and deliver measurable business impact.
                  </p>
                </div>
                <div className="flex gap-4 pt-2 justify-center md:justify-start animate-fadeInUp">
                  <div>
                  </div>
                  <div>
                    <Button
                      className="bg-slate-600 hover:bg-slate-500 text-white transition-all duration-300 btn-crisp shadow-md cursor-pointer"
                      onClick={handleContactClick}
                    >
                      <Mail size={16} className="mr-2" />
                      Contact Me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>
        </section>

        {/* Skills Section - Enhanced with animated skill bars */}
        <section
          id="skills"
          ref={sectionRefs.skills}
          className="py-8 md:py-12 bg-white/80 backdrop-blur-md rounded-xl border border-slate-100 shadow-lg section-crisp"
        >
          <SectionTransition>
            <div className="space-y-8 animate-zoomIn" >
              <SectionHeading
                title="Technical Skills"
                description="My technical toolkit for transforming raw data into meaningful insights"
                icon={<Wrench className="h-5 w-5 text-slate-600" />}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <MobileOptimizedCard>
                  <CardHeader className="bg-gradient-to-r from-slate-100/50 to-transparent">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-slate-600" />
                      <CardTitle className="text-slate-900">Programming & Data Processing</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <AnimatedSkillBar
                      name="SQL (SQL Server, MySQL, PostgreSQL)"
                      level="Advanced"
                      value={90}
                      color="bg-slate-600"
                    />
                    <AnimatedSkillBar
                      name="Python (Pandas, NumPy, SciPy, Matplotlib, NLP)"
                      level="Advanced"
                      value={85}
                      color="bg-slate-600"
                    />
                    <AnimatedSkillBar name="R" level="Intermediate" value={70} color="bg-slate-600" />
                  </CardContent>
                </MobileOptimizedCard>

                <MobileOptimizedCard delay={0.1}>
                  <CardHeader className="bg-gradient-to-r from-slate-100/50 to-transparent">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-slate-600" />
                      <CardTitle className="text-slate-900">Data Visualization & BI Tools</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <AnimatedSkillBar name="Tableau" level="Advanced" value={85} color="bg-slate-600" />
                    <AnimatedSkillBar name="Power BI (DAX)" level="Advanced" value={85} color="bg-slate-600" />
                    <AnimatedSkillBar name="Looker Studio" level="Advanced" value={80} color="bg-slate-600" />
                    <AnimatedSkillBar name="Excel & Metabase" level="Expert" value={90} color="bg-slate-600" />
                  </CardContent>
                </MobileOptimizedCard>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <MobileOptimizedCard delay={0.2}>
                  <CardHeader className="bg-gradient-to-r from-slate-100/50 to-transparent">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-slate-600" />
                      <CardTitle className="text-slate-900">Cloud & Database Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <AnimatedSkillBar
                      name="Amazon Web Services (Glue, Lambda, EC2, S3, Athena, Redshift)"
                      level="Intermediate"
                      value={75}
                      color="bg-slate-600"
                    />
                    <AnimatedSkillBar
                      name="Microsoft Azure (Azure Data Fabric)"
                      level="Intermediate"
                      value={75}
                      color="bg-slate-600"
                    />
                    <AnimatedSkillBar
                      name="Google Cloud Platform (Big Query)"
                      level="Intermediate"
                      value={70}
                      color="bg-slate-600"
                    />
                    <AnimatedSkillBar name="DBT" level="Intermediate" value={65} color="bg-slate-600" />
                  </CardContent>
                </MobileOptimizedCard>

                <MobileOptimizedCard delay={0.3}>
                  <CardHeader className="bg-gradient-to-r from-slate-100/50 to-transparent">
                    <div className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-slate-600" />
                      <CardTitle className="text-slate-900">Analytics & Project Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <AnimatedSkillBar name="Google Analytics 4" level="Advanced" value={80} color="bg-slate-600" />
                    <AnimatedSkillBar name="A/B Testing" level="Advanced" value={85} color="bg-slate-600" />
                    <AnimatedSkillBar name="Statistical Analytics" level="Advanced" value={85} color="bg-slate-600" />
                    <AnimatedSkillBar name="HubSpot, Agile, Jira" level="Intermediate" value={75} color="bg-slate-600" />
                  </CardContent>
                </MobileOptimizedCard>
              </div>

              {/* Skills badges with fun game in fun mode */}
              {funMode ? (
                <SkillBadgeGame skills={skillsList} />
              ) : (
                <div
                  className="flex flex-wrap gap-2 justify-center pt-6 animate-fadeIn"
                >
                  {skillsList.map((skill, index) => (
                    <div
                      key={index}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm py-1 px-3 border-slate-300 text-slate-900 hover:bg-slate-100/50 hover:border-slate-400 transition-colors duration-300 badge-crisp"
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </SectionTransition>
        </section>

        {/* Experience Section - Enhanced with better animations */}
        <section
          id="experience"
          ref={sectionRefs.experience}
          className="py-8 md:py-12 bg-white/80 backdrop-blur-md rounded-xl border border-slate-100 shadow-lg section-crisp"
        >
          <SectionTransition>
            <div className="space-y-8 animate-zoomIn" >
              <SectionHeading
                title="Work Experience"
                description="My professional journey in the data field"
                icon={<Briefcase className="h-5 w-5 text-slate-600" />}
              />

              <div className="relative">
                {/* Career progression footprints - only visible on desktop */}
                <div className="absolute left-1/2 md:left-16 top-0 bottom-0 w-8 hidden md:flex flex-col items-center justify-between py-12 z-0">
                  <div className="h-full w-0.5 bg-gradient-to-b from-slate-600/30 via-slate-600/50 to-slate-600/10 relative">
                    {/* Animated footprints */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div
                        key={i}
                        className="absolute text-slate-600/60 animate-fadeInLeft"
                        style={{ top: `${i * 12.5}%` }}
                      >
                        <Footprints size={16} className="transform -rotate-45" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Ayomi.fr Experience */}
                  <div
                    className="bg-white backdrop-blur-sm rounded-xl border border-slate-100 p-4 md:p-6 hover:border-slate-600/30 transition-all duration-500 hover:shadow-xl card-crisp relative md:ml-12 animate-fadeInLeft"
                  >
                    {/* Add a small footprint marker for each experience */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 bg-gradient-to-r from-slate-600 to-slate-500 text-white rounded-full p-1.5 hidden md:flex shadow-md">
                      <Footprints size={16} className="transform rotate-45" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="md:w-1/3 text-center md:text-left">
                        <AnimatedText
                          text="Data Analyst"
                          as="h4"
                          className="font-medium text-lg text-slate-900"
                        />
                        <AnimatedText text="Ayomi.fr" as="p" className="text-slate-600 font-medium" delay={0.1} />
                        <p className="text-sm text-slate-600 italic">AI-powered fintech fundraising platform</p>
                        <p className="text-sm text-slate-600 mt-1">Jul 2025 - Present</p>
                        <p className="text-sm text-slate-600">Paris, France</p>
                        <Badge
                          variant="outline"
                          className="mt-2 badge-crisp bg-green-50 text-green-600 border-green-200"
                        >
                          Current
                        </Badge>
                      </div>

                      <div className="md:w-2/3">
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <Star size={14} className="text-yellow-500" />
                              Key Achievements:
                            </h5>
                            <ul className="list-disc ml-5 space-y-2 text-sm">
                              <li>
                                Engineered automated Looker pipelines integrating 10+ data sources, improving MQL–to–SQL conversion by{" "}
                                <span className="font-medium text-slate-600">18%</span> and freeing{" "}
                                <span className="font-medium text-slate-600">12 analyst hours per week</span>.
                              </li>
                              <li>
                                Partnered with the Growth team to design and analyse A/B testing on email campaigns, optimising subject lines and send timing to lift user activation by{" "}
                                <span className="font-medium text-slate-600">3%</span> and improve click–through rate accuracy by{" "}
                                <span className="font-medium text-slate-600">5%</span>.
                              </li>
                              <li>
                                Built a Python script to eliminate bot traffic in email analytics (user–agent/IP heuristics + rate-limit rules), restoring human–only metrics and enabling optimisations that lifted open rate{" "}
                                <span className="font-medium text-slate-600">+7%</span> and landing–page conversions{" "}
                                <span className="font-medium text-slate-600">+7%</span>.
                              </li>
                              <li>
                                Built an end-to-end ETL pipeline for the Account Management team, consolidating scattered data sources and Excel files, automating weekly refreshes with Airflow, and delivering a unified Power BI reporting layer.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <Wrench size={14} />
                              Skills & Tools:
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                "Looker",
                                "Data Engineering",
                                "ETL Pipelines",
                                "Python",
                                "SQL",
                                "Airflow",
                                "Power BI",
                                "A/B Testing",
                                "Data Analysis",
                              ].map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-xs badge-crisp">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Singulart Experience */}
                  <div
                    className="bg-white backdrop-blur-sm rounded-xl border border-slate-100 p-4 md:p-6 hover:border-slate-600/30 transition-all duration-500 hover:shadow-xl card-crisp relative md:ml-12 animate-fadeInLeft"
                    style={{ animationDelay: '0.05s' }}
                  >
                    {/* Add a small footprint marker for each experience */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 bg-gradient-to-r from-slate-600 to-slate-500 text-white rounded-full p-1.5 hidden md:flex shadow-md">
                      <Footprints size={16} className="transform rotate-45" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="md:w-1/3 text-center md:text-left">
                        <AnimatedText
                          text="Data Analyst"
                          as="h4"
                          className="font-medium text-lg text-slate-900"
                        />
                        <AnimatedText text="Singulart" as="p" className="text-slate-600 font-medium" delay={0.1} />
                        <p className="text-sm text-slate-600 italic">SaaS Global Online Art Marketplace</p>
                        <p className="text-sm text-slate-600 mt-1">Sep 2024 - Mar 2025</p>
                        <p className="text-sm text-slate-600">Paris, France</p>
                      </div>

                      <div className="md:w-2/3">
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <Star size={14} className="text-yellow-500" />
                              Key Achievements:
                            </h5>
                            <ul className="list-disc ml-5 space-y-2 text-sm">
                              <li>
                                Built cohort–based acquisition dashboards to visualise LTV: CAC ratios, reducing marketing spend inefficiencies by{" "}
                                <span className="font-medium text-slate-600">12%</span> and improving ROI forecasting accuracy by{" "}
                                <span className="font-medium text-slate-600">15%</span>.
                              </li>
                              <li>
                                Analysed user funnel metrics across acquisition cohorts, identifying drop–off points that informed product roadmap priorities and reduced churn by{" "}
                                <span className="font-medium text-slate-600">8%</span>.
                              </li>
                              <li>
                                Partnered with executive leadership to reduce churn by building retention dashboards that drove quarterly revenue planning.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <Wrench size={14} />
                              Skills & Tools:
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                "Cohort Analysis",
                                "SQL",
                                "Data Analysis",
                                "Dashboard Design",
                                "LTV CAC Analysis",
                                "Google Analytics",
                                "Business Intelligence",
                              ].map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-xs badge-crisp">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Science Mission Experience (Renamed to Sisyphus Training) */}
                  <div
                    className="bg-white backdrop-blur-sm rounded-xl border border-slate-100 p-4 md:p-6 hover:border-slate-600/30 transition-all duration-500 hover:shadow-xl card-crisp relative md:ml-12 animate-fadeInLeft"
                    style={{ animationDelay: '0.1s' }}
                  >
                    {/* Add a small footprint marker for each experience */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 bg-gradient-to-r from-slate-600 to-slate-500 text-white rounded-full p-1.5 hidden md:flex shadow-md">
                      <Footprints size={16} className="transform rotate-45" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="md:w-1/3 text-center md:text-left">
                        <AnimatedText
                          text="Data Analyst and Marketing Consultant"
                          as="h4"
                          className="font-medium text-lg text-slate-900"
                        />
                        <AnimatedText text="Sisyphus Training" as="p" className="text-slate-600 font-medium" delay={0.1} />
                        <p className="text-sm text-slate-600 italic">Boutique fitness studio</p>
                        <p className="text-sm text-slate-600 mt-1">Jan 2024 – May 2024</p>
                        <p className="text-sm text-slate-600">Paris, France</p>
                        <Badge variant="outline" className="mt-2 badge-crisp bg-blue-50 text-blue-600 border-blue-200">
                          In-Company Project
                        </Badge>
                      </div>

                      <div className="md:w-2/3">
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <Star size={14} className="text-yellow-500" />
                              Key Achievements:
                            </h5>
                            <ul className="list-disc ml-5 space-y-2 text-sm">
                              <li>
                                Cleaned and analysed CRM datasets to uncover user behaviour patterns, increasing retention by{" "}
                                <span className="font-medium text-slate-600">15%</span> via targeted re-engagement flows.
                              </li>
                              <li>
                                Built real–time dashboards in Power BI (retention, conversion, pipeline), used in monthly board meetings to accelerate decision–making.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <Wrench size={14} />
                              Skills & Tools:
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                "CRM Analytics",
                                "SQL",
                                "Power BI",
                                "Data Visualization",
                                "Customer Segmentation",
                              ].map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-xs badge-crisp">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HCL Technologies Experience */}
                  <div
                    className="bg-white backdrop-blur-sm rounded-xl border border-slate-100 p-4 md:p-6 hover:border-slate-600/30 transition-all duration-500 hover:shadow-xl card-crisp relative md:ml-12 animate-fadeInLeft"
                    style={{ animationDelay: '0.15s' }}
                  >
                    {/* Add a small footprint marker for each experience */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 bg-gradient-to-r from-slate-600 to-slate-500 text-white rounded-full p-1.5 hidden md:flex shadow-md">
                      <Footprints size={16} className="transform rotate-45" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="md:w-1/3 text-center md:text-left">
                        <AnimatedText text="Data Analyst" as="h4" className="font-medium text-lg text-slate-900" />
                        <AnimatedText text="HCL Technologies" as="p" className="text-slate-600 font-medium" delay={0.1} />
                        <p className="text-sm text-slate-600 italic">Client: SC Johnson</p>
                        <p className="text-sm text-slate-600 mt-1">Nov 2020 - Feb 2023</p>
                        <p className="text-sm text-slate-600">Noida, India</p>
                      </div>

                      <div className="md:w-2/3">
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <Star size={14} className="text-yellow-500" />
                              Key Achievements:
                            </h5>
                            <ul className="list-disc ml-5 space-y-2 text-sm">
                              <li>
                                Automated multi-region performance dashboards tracking procurement and logistics KPIs, identifying inefficiencies that generated{" "}
                                <span className="font-medium text-slate-600">$0.5M+ annual savings</span> and reduced SLA breaches by{" "}
                                <span className="font-medium text-slate-600">18%</span>.
                              </li>
                              <li>
                                Built real–time issue monitoring tools that reduced incident resolution time by{" "}
                                <span className="font-medium text-slate-600">30%</span>, enhancing response efficiency across regional teams.
                              </li>
                              <li>
                                Created forecasting models used by brand/category leads to shape market–entry strategies across 3 continents.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <Wrench size={14} />
                              Skills & Tools:
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                "SQL",
                                "Power BI",
                                "Dashboard Design",
                                "KPI Analysis",
                                "Forecasting",
                                "Business Intelligence",
                              ].map((skill, i) => (
                                <Badge key={i} variant="secondary" className="text-xs badge-crisp">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>
        </section>

        {/* Projects Section - Enhanced with premium project cards */}
        <section
          id="projects"
          ref={sectionRefs.projects}
          className="py-8 md:py-12 bg-white/80 backdrop-blur-md rounded-xl border border-slate-100 shadow-lg section-crisp"
        >
          <SectionTransition>
            <div className="space-y-8 animate-zoomIn" >
              <SectionHeading
                title="Projects"
                description="A showcase of my data analysis and visualization work"
                icon={<Code className="h-5 w-5 text-slate-600" />}
              />

              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-center overflow-x-auto animate-fadeIn">
                  <TabsList className="bg-secondary/30 max-w-full flex-wrap justify-center">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-700 data-[state=active]:to-slate-500 data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-slate-600/10"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="analysis"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-700 data-[state=active]:to-slate-500 data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-slate-600/10"
                    >
                      Data Analysis
                    </TabsTrigger>
                    <TabsTrigger
                      value="visualization"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-700 data-[state=active]:to-slate-500 data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-slate-600/10"
                    >
                      Visualization
                    </TabsTrigger>
                    <TabsTrigger
                      value="ml"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-700 data-[state=active]:to-slate-500 data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-slate-600/10"
                    >
                      Machine Learning
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <PremiumProjectCard
                          title={project.title}
                          description={project.description}
                          businessObjective={project.businessObjective}
                          problemStatement={project.problemStatement}
                          tags={project.tags}
                          link={project.link}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="analysis" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                      .filter((p) =>
                        p.tags.some((tag) =>
                          ["EDA", "Analysis", "Statistical Analysis", "Market Analysis"].some((t) => tag.includes(t)),
                        ),
                      )
                      .map((project, index) => (
                        <div
                          key={index}
                          className="animate-fadeInUp"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <PremiumProjectCard
                            title={project.title}
                            description={project.description}
                            businessObjective={project.businessObjective}
                            problemStatement={project.problemStatement}
                            tags={project.tags}
                            link={project.link}
                          />
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="visualization" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                      .filter((p) =>
                        p.tags.some((tag) =>
                          ["Visualization", "Tableau", "Dashboard", "Power BI"].some((t) => tag.includes(t)),
                        ),
                      )
                      .map((project, index) => (
                        <div
                          key={index}
                          className="animate-fadeInUp"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <PremiumProjectCard
                            title={project.title}
                            description={project.description}
                            businessObjective={project.businessObjective}
                            problemStatement={project.problemStatement}
                            tags={project.tags}
                            link={project.link}
                          />
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="ml" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                      .filter((p) =>
                        p.tags.some((tag) =>
                          ["Machine Learning", "NLP", "Prediction", "Scikit-learn"].some((t) => tag.includes(t)),
                        ),
                      )
                      .map((project, index) => (
                        <div
                          key={index}
                          className="animate-fadeInUp"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <PremiumProjectCard
                            title={project.title}
                            description={project.description}
                            businessObjective={project.businessObjective}
                            problemStatement={project.problemStatement}
                            tags={project.tags}
                            link={project.link}
                          />
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </SectionTransition>
        </section>

        {/* Education Section - Enhanced with better animations */}
        <section
          id="education"
          ref={sectionRefs.education}
          className="py-8 md:py-12 bg-white/80 backdrop-blur-md rounded-xl border border-slate-100 shadow-lg section-crisp"
        >
          <SectionTransition>
            <div className="space-y-8 animate-zoomIn" >
              <SectionHeading
                title="Education"
                description="My academic background and certifications"
                icon={<GraduationCap className="h-5 w-5 text-slate-600" />}
              />

              <div className="space-y-6">
                {/* Emlyon Business School */}
                <div
                  className="bg-white backdrop-blur-sm rounded-xl border border-slate-100 p-4 md:p-6 hover:border-slate-600/30 transition-all duration-500 hover:shadow-xl card-crisp overflow-hidden animate-fadeInLeft"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600"></div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/3 text-center md:text-left">
                      <AnimatedText
                        text="MSc in Digital Marketing & Data Science"
                        as="h4"
                        className="font-medium text-lg text-slate-900"
                      />
                      <AnimatedText
                        text="Emlyon Business School"
                        as="p"
                        className="text-slate-600 font-medium"
                        delay={0.1}
                      />
                      <p className="text-sm text-slate-600 mt-1">Sep 2023 - Jan 2025</p>
                      <p className="text-sm text-slate-600">Paris, France</p>
                    </div>

                    <div className="md:w-2/3">
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                            <Award size={14} className="text-yellow-500" />
                            Relevant Coursework:
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              "Web Analytics",
                              "Programmatic Advertising",
                              "Data Visualization",
                              "Python",
                              "SQL",
                              "Market Analysis",
                              "MS Excel",
                            ].map((course, i) => (
                              <Badge key={i} variant="secondary" className="text-xs badge-crisp">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Satyabhama Institute */}
                <div
                  className="bg-white backdrop-blur-sm rounded-xl border border-slate-100 p-4 md:p-6 hover:border-slate-600/30 transition-all duration-500 hover:shadow-xl card-crisp overflow-hidden animate-fadeInLeft"
                  style={{ animationDelay: '0.1s' }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600"></div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/3 text-center md:text-left">
                      <AnimatedText
                        text="Bachelors, Computer Science & Engineering"
                        as="h4"
                        className="font-medium text-lg text-slate-900"
                      />
                      <AnimatedText
                        text="Satyabhama Institute of Science and Technology"
                        as="p"
                        className="text-slate-600 font-medium"
                        delay={0.1}
                      />
                      <p className="text-sm text-slate-600 mt-1">May 2016 - Jul 2020</p>
                      <p className="text-sm text-slate-600">Chennai, India</p>
                    </div>

                    <div className="md:w-2/3">
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-1">
                            <Award size={14} className="text-yellow-500" />
                            Relevant Coursework:
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              "C",
                              "C++",
                              "Java",
                              "Cloud Computing",
                              "Python",
                              "SQL",
                              "HTML",
                              "CSS",
                              "JavaScript",
                            ].map((course, i) => (
                              <Badge key={i} variant="secondary" className="text-xs badge-crisp">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div
                  className="bg-white backdrop-blur-sm rounded-xl border border-slate-100 p-4 md:p-6 hover:border-slate-600/30 transition-all duration-500 hover:shadow-xl card-crisp overflow-hidden animate-fadeInLeft"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600"></div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/3 text-center md:text-left">
                      <AnimatedText
                        text="Professional Certifications"
                        as="h4"
                        className="font-medium text-lg text-slate-900"
                      />
                      <AnimatedText
                        text="Industry Credentials"
                        as="p"
                        className="text-slate-600 font-medium"
                        delay={0.1}
                      />
                    </div>

                    <div className="md:w-2/3">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div
                            className="p-4 border border-slate-100 rounded-lg hover:border-slate-600/30 transition-all duration-300 hover:shadow-md"
                          >
                            <h5 className="text-sm font-medium text-slate-600">SQL Associate</h5>
                            <p className="text-xs text-slate-600">Data Camp</p>
                          </div>
                          <div
                            className="p-4 border border-slate-100 rounded-lg hover:border-slate-600/30 transition-all duration-300 hover:shadow-md"
                          >
                            <h5 className="text-sm font-medium text-slate-600">Associate Data Analyst</h5>
                            <p className="text-xs text-slate-600">Data Camp</p>
                          </div>
                          <div
                            className="p-4 border border-slate-100 rounded-lg hover:border-slate-600/30 transition-all duration-300 hover:shadow-md"
                          >
                            <h5 className="text-sm font-medium text-slate-600">Visual Analytics with Tableau</h5>
                            <p className="text-xs text-slate-600">Coursera</p>
                          </div>
                          <div
                            className="p-4 border border-slate-100 rounded-lg hover:border-slate-600/30 transition-all duration-300 hover:shadow-md"
                          >
                            <h5 className="text-sm font-medium text-slate-600">dbt Fundamentals</h5>
                            <p className="text-xs text-slate-600">dbt Labs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div
                  className="bg-white backdrop-blur-sm rounded-xl border border-slate-100 p-4 md:p-6 hover:border-slate-600/30 transition-all duration-500 hover:shadow-xl card-crisp overflow-hidden animate-fadeInLeft"
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600"></div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/3 text-center md:text-left">
                      <AnimatedText text="Languages" as="h4" className="font-medium text-lg text-slate-900" />
                      <AnimatedText
                        text="Communication Skills"
                        as="p"
                        className="text-slate-600 font-medium"
                        delay={0.1}
                      />
                    </div>

                    <div className="md:w-2/3">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div
                            className="p-4 border border-slate-100 rounded-lg hover:border-slate-600/30 transition-all duration-300 hover:shadow-md"
                          >
                            <h5 className="text-sm font-medium text-slate-600">English</h5>
                            <p className="text-xs text-slate-600">Native/Bilingual</p>
                          </div>
                          <div
                            className="p-4 border border-slate-100 rounded-lg hover:border-slate-600/30 transition-all duration-300 hover:shadow-md"
                          >
                            <h5 className="text-sm font-medium text-slate-600">Hindi</h5>
                            <p className="text-xs text-slate-600">Native</p>
                          </div>
                          <div
                            className="p-4 border border-slate-100 rounded-lg hover:border-slate-600/30 transition-all duration-300 hover:shadow-md"
                          >
                            <h5 className="text-sm font-medium text-slate-600">French</h5>
                            <p className="text-xs text-slate-600">A2 - Learning</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-6 md:py-8 footer-crisp bg-white/80 backdrop-blur-md">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-slate-600 md:text-left">
            © 2025 Harsh Jaiswal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-700 transition-colors link-crisp animate-pulse"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/harshjaiswal78"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-700 transition-colors link-crisp animate-pulse"
            >
              GitHub
            </a>
            <a
              href="mailto:harshjaiswal97@gmail.com"
              className="text-slate-600 hover:text-slate-700 transition-colors link-crisp animate-pulse"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
