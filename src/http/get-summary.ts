import type { SummaryType } from '../types/global'

export async function getSummary(): Promise<SummaryType> {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()

  return data.summary
}
