import { Dialog } from './components/ui/dialog'

import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { CreateGoal } from './components/create-goal'
import type { SummaryType } from './types/global'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery<SummaryType>({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60 * 10, // 10 minutes
  })

  return (
    <Dialog>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
