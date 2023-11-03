import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

export default function MainLayout() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <div className='px-16'>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  )
}
