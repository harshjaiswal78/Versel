"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Database,
  BarChart3,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Layers,
  GitBranch,
  FileCode,
  BookOpen,
  LineChart,
  PieChart,
  Target,
  Zap,
  Server,
  Box,
} from "lucide-react"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function OuladProjectPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const techStack = [
    { name: "Python", category: "Language" },
    { name: "dbt", category: "Transform" },
    { name: "DuckDB", category: "Database" },
    { name: "Looker Studio", category: "Visualization" },
    { name: "SQL", category: "Query" },
    { name: "Git", category: "Version Control" },
  ]

  const keyMetrics = [
    { label: "Total Students", value: "32,593", icon: Users, trend: "Analyzed" },
    { label: "Courses", value: "22", icon: BookOpen, trend: "Modules" },
    { label: "Assessment Types", value: "4", icon: Target, trend: "Categories" },
    { label: "VLE Interactions", value: "10M+", icon: BarChart3, trend: "Records" },
  ]

  const modelLayers = [
    {
      name: "Staging Layer",
      description: "Raw data ingestion with basic cleaning",
      models: ["stg_assessments", "stg_courses", "stg_student_info", "stg_student_registration", "stg_student_vle", "stg_vle"],
      color: "from-emerald-500/20 to-emerald-600/20",
      borderColor: "border-emerald-500/30",
    },
    {
      name: "Intermediate Layer",
      description: "Business logic transformations",
      models: ["int_student_assessment_agg", "int_student_vle_engagement"],
      color: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "border-cyan-500/30",
    },
    {
      name: "Marts Layer",
      description: "Analytics-ready dimensional models",
      models: ["dim_courses", "dim_students", "fact_student_performance"],
      color: "from-violet-500/20 to-violet-600/20",
      borderColor: "border-violet-500/30",
    },
  ]

  const insights = [
    {
      title: "Student Attrition Risk",
      description: "Early identification of at-risk students based on engagement patterns and assessment scores",
      icon: AlertTriangle,
      color: "text-amber-400",
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive analysis of student performance across courses, assessments, and time periods",
      icon: TrendingUp,
      color: "text-emerald-400",
    },
    {
      title: "VLE Engagement",
      description: "Deep dive into Virtual Learning Environment interactions and their correlation with success",
      icon: LineChart,
      color: "text-cyan-400",
    },
    {
      title: "Course Effectiveness",
      description: "Evaluation of course modules and their impact on student outcomes",
      icon: CheckCircle,
      color: "text-violet-400",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30" />
      
      {/* Gradient orbs */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800/50 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/harshjaiswal78/oulad-analytics-engineering-dbt-duckdb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm font-medium"
              >
                <Github size={18} />
                <span className="hidden sm:inline">View Source</span>
              </a>
              <a
                href="https://lookerstudio.google.com/reporting/3679a0e7-4b00-4d36-ae54-08ae58d7f5c9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors text-sm font-medium text-white"
              >
                <ExternalLink size={18} />
                <span className="hidden sm:inline">Live Dashboard</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="py-12 md:py-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
              <Database size={28} className="text-emerald-400" />
            </div>
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20">
              Data Engineering Project
            </Badge>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 text-balance"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              OULAD Analytics
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Engineering Pipeline
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8 leading-relaxed"
          >
            A production-grade data engineering solution analyzing the Open University Learning Analytics Dataset 
            using modern data stack: <span className="text-emerald-400 font-medium">dbt</span> for transformations, 
            <span className="text-cyan-400 font-medium"> DuckDB</span> for analytics, and 
            <span className="text-violet-400 font-medium"> Looker Studio</span> for visualization.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="px-4 py-2 bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50 transition-colors"
              >
                {tech.name}
              </Badge>
            ))}
          </motion.div>
        </motion.section>

        {/* Key Metrics */}
        <motion.section 
          className="py-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyMetrics.map((metric, index) => (
              <motion.div key={metric.label} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10">
                        <metric.icon size={20} className="text-emerald-400" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                    <p className="text-sm text-gray-400">{metric.label}</p>
                    <p className="text-xs text-emerald-400 mt-1">{metric.trend}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Architecture Diagram */}
        <motion.section 
          className="py-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Data Architecture
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                {/* Pipeline Flow */}
                <div className="flex flex-col md:flex-row items-stretch gap-4 mb-8">
                  {/* Source */}
                  <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Box size={24} className="text-amber-400" />
                      <h3 className="font-semibold text-white">Source</h3>
                    </div>
                    <p className="text-sm text-gray-400">OULAD CSV Files</p>
                    <p className="text-xs text-amber-400 mt-2">7 Raw Tables</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500" />
                    <Zap size={20} className="text-emerald-400 mx-2" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                  </div>

                  {/* Transform */}
                  <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <GitBranch size={24} className="text-emerald-400" />
                      <h3 className="font-semibold text-white">Transform</h3>
                    </div>
                    <p className="text-sm text-gray-400">dbt Models</p>
                    <p className="text-xs text-emerald-400 mt-2">11 Models</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500" />
                    <Zap size={20} className="text-cyan-400 mx-2" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500" />
                  </div>

                  {/* Storage */}
                  <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Server size={24} className="text-cyan-400" />
                      <h3 className="font-semibold text-white">Storage</h3>
                    </div>
                    <p className="text-sm text-gray-400">DuckDB</p>
                    <p className="text-xs text-cyan-400 mt-2">Analytics DB</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500" />
                    <Zap size={20} className="text-violet-400 mx-2" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                  </div>

                  {/* Visualization */}
                  <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <PieChart size={24} className="text-violet-400" />
                      <h3 className="font-semibold text-white">Visualize</h3>
                    </div>
                    <p className="text-sm text-gray-400">Looker Studio</p>
                    <p className="text-xs text-violet-400 mt-2">Interactive Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* dbt Model Layers */}
        <motion.section 
          className="py-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-8 text-white">
            dbt Model Layers
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {modelLayers.map((layer, index) => (
              <motion.div key={layer.name} variants={fadeInUp}>
                <Card className={`h-full bg-gradient-to-br ${layer.color} border ${layer.borderColor} hover:scale-[1.02] transition-transform`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Layers size={20} className="text-white/80" />
                      <span className="text-xs text-white/60 uppercase tracking-wider">Layer {index + 1}</span>
                    </div>
                    <CardTitle className="text-xl text-white">{layer.name}</CardTitle>
                    <CardDescription className="text-gray-300">{layer.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {layer.models.map((model) => (
                        <div
                          key={model}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/20 border border-white/5"
                        >
                          <FileCode size={14} className="text-white/60" />
                          <code className="text-sm text-white/90 font-mono">{model}</code>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Insights */}
        <motion.section 
          className="py-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Key Analytics Insights
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((insight) => (
              <motion.div key={insight.title} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-emerald-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gray-800/50">
                        <insight.icon size={24} className={insight.color} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{insight.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Dashboard Preview */}
        <motion.section 
          className="py-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Live Dashboard
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                  <div className="text-center relative z-10">
                    <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 inline-block mb-6">
                      <BarChart3 size={48} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">OULAD Analytics Dashboard</h3>
                    <p className="text-gray-400 mb-6 max-w-md mx-auto">
                      Interactive Looker Studio dashboard with student performance metrics, attrition analysis, and engagement insights.
                    </p>
                    <a
                      href="https://lookerstudio.google.com/reporting/3679a0e7-4b00-4d36-ae54-08ae58d7f5c9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-medium"
                    >
                      <ExternalLink size={20} />
                      Open Interactive Dashboard
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Project Links */}
        <motion.section 
          className="py-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/harshjaiswal78/oulad-analytics-engineering-dbt-duckdb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors text-white font-medium w-full sm:w-auto justify-center"
            >
              <Github size={24} />
              View on GitHub
            </a>
            <a
              href="https://lookerstudio.google.com/reporting/3679a0e7-4b00-4d36-ae54-08ae58d7f5c9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 transition-colors text-white font-medium w-full sm:w-auto justify-center"
            >
              <ExternalLink size={24} />
              Explore Live Dashboard
            </a>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Built by <span className="text-emerald-400">Harsh Jaiswal</span> using dbt, DuckDB, and Looker Studio
          </p>
        </div>
      </footer>
    </div>
  )
}
