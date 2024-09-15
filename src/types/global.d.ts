export type SummaryType = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export type PendingGoalType = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}
