import { Outlet } from 'react-router-dom';  // ✅ Outlet
import Header from './components/Header.jsx';  // ✅ Header
import './App.css';

const Root = () => {  // ✅ Root নাম
  return (
    <>
      <Header />      {/* ✅ Button এখানে */}
      <Outlet />      {/* ✅ Home/Login এখানে */}
    </>
  )
}

export default Root;  // ✅ Export