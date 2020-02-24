import { useState, useEffect } from 'react'

const usePageOnTop = (offset = 0) => {
  const [isPageOnTop, setIsPageOnTop] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      setIsPageOnTop(window.scrollY <= offset)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [offset])
  return isPageOnTop
}

export { usePageOnTop }
