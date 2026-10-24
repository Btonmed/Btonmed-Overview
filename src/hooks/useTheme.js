import { useCallback, useEffect, useState } from 'react'

export default function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const toggle = useCallback(() => {
    setDark((d) => {
      localStorage.setItem('theme', d ? 'light' : 'dark')
      return !d
    })
  }, [])

  return { dark, toggle }
}
