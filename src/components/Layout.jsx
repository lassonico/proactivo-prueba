import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Speener from './Speener'

export default function Layout() {
  return (
    <section className=''> 
        <Navbar />
          <Suspense fallback={<Speener />}>
            <div className='mt-20 md:mt-36'>
              <Outlet />
            </div>
              <Footer />
        </Suspense>
    </section>
  )
}