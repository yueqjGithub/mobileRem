import { lazy, useEffect } from "react";
import { RouteObject, useRoutes, useNavigate } from "react-router";
import PageLayout from "../pageLayout";
import LazyImportComponent from "../components/LazyImportComponent";
import WxCheckPage from "../pages/wxCheck";
const RedirectComponent = (props: { to: string }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(props.to, {
      replace: true
    })
  })
  return null
}

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <PageLayout></PageLayout>,
    children: [
      {
        path: 'list',
        element: <LazyImportComponent lazyChildren={lazy(() => import('../pages/230501/ListPage'))}></LazyImportComponent>
      },
      {
        path: 'detail',
        element: <LazyImportComponent lazyChildren={lazy(() => import('../pages/230501/DetailPage'))}></LazyImportComponent>
      },
      {
        index: true,
        element: <RedirectComponent to="/list"></RedirectComponent>
      }
    ]
  },
  {
    path: '/notwx',
    element: <WxCheckPage></WxCheckPage>,
  },
  {
    path: '*',
    element: <>THIS IS 404 PAGE</>
  }
]

const RouteWarpper = () => {
  const Wrapper = useRoutes(routeList)
  return Wrapper
}

export default RouteWarpper