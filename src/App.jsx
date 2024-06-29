import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/Navbar/Header';
import Header2 from './components/Navbar/Header2';
import Divider from './components/Divider';
import Header3 from './components/Navbar/Header3';
import Header4 from './components/Navbar/Header4';

export default function App() {
  return (
    <>
      <Header/>
      <Divider/>
      <Header2/>
      <Divider/>
      <Header3/>
      <Divider/>
      <Header4/>
      {/* <Routes>
        <Route path="/" Component={Homepage}/>
      </Routes> */}
    </>
  )
}