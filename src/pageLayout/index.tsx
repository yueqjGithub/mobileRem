import { Suspense } from 'react
import { Outlet } from "react-router"

const PageLayout = () => {
  return (
    <Suspense fallback={<div className="pageContainer flex-row flex-jst-center flex-ali-center"><DotLoading/></div>}>
      <Outlet></Outlet>
    </Suspense>
  )
}

export default PageLayout
