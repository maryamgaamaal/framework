import { useState } from 'react'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'



function App() {
  const [count, setCount] = useState(0)
const routes = createBrowserRouter([
  {path:"/" , element:<Layout/> , children:[
    {index: true , element : <Home/>},
    {path :"about" , element : <About/>},
    {path :"portfolio" , element : <Portfolio/>},
    {path :"contact" , element : <Contact/>},
    {path :"*" , element : <div className='h-screen  flex justify-center items-center font-bold text-7xl text-[#2c3e50]'>
      <h1>Erorrr 404</h1>
    </div>},
  ]}
])
  return (
    <>
    
     <RouterProvider router={routes}/>
     
    </>
    
  )
}

export default App
