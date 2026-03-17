import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OULAD Analytics Engineering | Harsh Jaiswal',
  description: 'Production-grade data engineering pipeline analyzing Open University Learning Analytics Dataset using dbt, DuckDB, and Looker Studio',
  openGraph: {
    title: 'OULAD Analytics Engineering Pipeline',
    description: 'A modern data engineering solution for student performance analytics using dbt, DuckDB, and Looker Studio',
    type: 'website',
  },
}

export default function OuladLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
