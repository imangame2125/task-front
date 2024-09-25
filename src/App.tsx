import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Home from './pages/Home/Home';
import TimeLine from './pages/TimeLine/TimeLine';
import AssingToMe from './pages/AssignToMe/AssingToMe';
import Chat from './pages/Chat/Chat';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Navbar />
        <Main />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/assigned" element={<AssingToMe />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
