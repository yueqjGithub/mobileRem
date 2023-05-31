import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './router'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
function App() {
  const setHtmlFontSize = (designWidth: number) => {
    const html = document.getElementsByTagName('html')[0]
    html.style.fontSize = `${(document.body.clientWidth / designWidth) * 625}%`
  }
  useEffect(() => {
    setHtmlFontSize(750)
    window.addEventListener('resize', () => setHtmlFontSize(750))
    return () => {
      window.removeEventListener('resize', () => setHtmlFontSize(750))
    }
  },[])
  return (
    <RecoilRoot>
      <Router>
        <Routes></Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
