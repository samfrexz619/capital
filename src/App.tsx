import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Dashboard from './layout/Dashboard'
import HomePage from './pages'
import {DemoPage, TeamPage, TaskPage, DocPage, NotePage, SharePage, FavoritePage, SettingPage } from './pages/demo'
import './App.css'
import Mobile from './components/Mobile';

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

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(()=> {
    const handleResize =()=> {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


  return (
    <div>
      {
        windowSize < 900 
        ? <Mobile  /> 
        : <RouterProvider router={router}  />
      }
    </div>
  )
}

export default App
