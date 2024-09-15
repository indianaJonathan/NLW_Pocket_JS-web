import type { PendingGoalType } from '../types/global'

export async function getPendingGoals(): Promise<PendingGoalType[]> {
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()

  return data.pendingGoals
}
