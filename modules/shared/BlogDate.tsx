import { parseISO, format } from 'date-fns'

interface BlogDateProps {
  dateString?: string
}

export default function BlogDate({ dateString }: BlogDateProps) {
  if (!dateString) return <div />

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLL	d, yyyy')}</time>
}
