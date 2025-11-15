"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Database, Server, ArrowRight, Code, BarChart } from "lucide-react"

export default function AWSArchitectureDiagram() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    { id: "s3", name: "S3", icon: <Database size={24} />, color: "#FF9900", description: "Raw data storage" },
    { id: "lambda", name: "Lambda", icon: <Code size={24} />, color: "#FF9900", description: "Data transformation" },
    { id: "glue", name: "Glue", icon: <Server size={24} />, color: "#FF9900", description: "ETL processing" },
    { id: "athena", name: "Athena", icon: <BarChart size={24} />, color: "#FF9900", description: "SQL queries" },
    {
      id: "quicksight",
      name: "QuickSight",
      icon: <BarChart size={24} />,
      color: "#FF9900",
      description: "Visualization",
    },
  ]

  return (
    <div className="w-full py-4">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {services.map((service, index) => (
          <div key={service.id} className="flex items-center">
            <motion.div
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-white shadow-sm border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <div className="text-[#FF9900]">{service.icon}</div>
              <span className="text-xs font-medium mt-1">{service.name}</span>
              {hoveredService === service.id && (
                <motion.div
                  className="absolute -bottom-8 bg-black text-white text-xs py-1 px-2 rounded"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {service.description}
                </motion.div>
              )}
            </motion.div>
            {index < services.length - 1 && <ArrowRight size={16} className="mx-1 text-gray-400" />}
          </div>
        ))}
      </div>
    </div>
  )
}
