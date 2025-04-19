import { useContext, useState } from 'react'
import { Routes,Route } from 'react-router'
import Layout from './pages/Layout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { UserContext } from './context/UserContext'
import { Edit } from './pages/Edit'

function App() {
  const [count, setCount] = useState(0)
  const {user} = useContext(UserContext)

  return (

    <>
      {user?
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/edit'} element={<Edit/>}/>
        <Route path={'*'} element={<h2>404 not found</h2>}/>
      </Routes>
    :
    <Routes>
        <Route path={'/'} element={<Layout/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'*'} element={<Login/>}/>
      </Routes>
    }

    </>
  )
}

export default App
