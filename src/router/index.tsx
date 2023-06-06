import { lazy, useEffect } from "react";
import { RouteObject, useRoutes, useNavigate } from "react-router";
import PageLayout from "../pageLayout";
// import LazyImportComponent from "../components/LazyImportComponent";
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
        path: 'index',
        Component: lazy(() => import('../pages/HomePage'))
      },
      {
        index: true,
        element: <RedirectComponent to="/index"></RedirectComponent>
      }
    ]
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
