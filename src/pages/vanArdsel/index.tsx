import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/Home'
import AssignedToMe from './pages/assignToMe'
import TimeLine from './pages/TimeLine'
import Chat from './pages/Chat'

const VanArdslePage = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/assigned-to-me' element={<AssignedToMe />} />
        <Route path='/timeline' element={<TimeLine />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Layout>
  )
}

export default VanArdslePage
