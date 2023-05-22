import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './router'
// import { toAuth } from './utils/getAuth'
import { useEffect } from 'react'
function App() {
  // const checkCode = () => {
  //   // 检测url中是否有code字段
  //   const search = window.location.search
  //   console.log(search)
  //   if (search.indexOf('code=') === -1) { // 没有code，需要引导授权
  //     toAuth()
  //   } else { // 有code，直接获取token
  //     const code = search.split('code=')[1].split('&')[0]
  //   }
  // }
  // useEffect(() => {
  //   checkCode()
  // }, [])
  // html font-size 根据设备宽度动态设置
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
    <>
      <Router>
        <Routes></Routes>
      </Router>
    </>
  )
}

export default App
