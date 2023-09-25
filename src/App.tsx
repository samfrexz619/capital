import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './layout/Dashboard'
import HomePage from './pages'
import {DemoPage, TeamPage, TaskPage, DocPage, NotePage, SharePage, FavoritePage, SettingPage } from './pages/demo'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard  />,
    children: [
      {
        path: '/',
        element: <HomePage  />
      },
      {
        path: '/team',
        element: <TeamPage  />
      },
      {
        path: '/task',
        element: <TaskPage  />
      },
      {
        path: '/doc',
        element: <DocPage  />
      },
      {
        path: '/note',
        element: <NotePage  />
      },
      {
        path: '/share',
        element: <SharePage  />
      },
      {
        path: '/favorite',
        element: <FavoritePage  />
      },
      {
        path: '/setting',
        element: <SettingPage  />
      },
      {
        path: '/demo',
        element: <DemoPage  />
      },
    ]
  }
])


function App() {

  return (
    <RouterProvider router={router}  />
  )
}

export default App
