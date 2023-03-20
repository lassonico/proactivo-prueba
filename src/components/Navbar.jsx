import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../img/TextoLogo.svg"
import flor from "../img/flor.svg"
import Boton from './Boton'
import IconsRRSS from './IconsRRSS'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

  const [ arrows, setArrow ] = useState(false)
  const [ scroll, setScroll ] = useState(false)
  const location = useLocation();

  const scroller = () => {
    if(scrollY >  10){
      setScroll(true)
    }
    if(scrollY === 0){
      setScroll(false)
    }
  }
  window.addEventListener('scroll', scroller)
  
  const cambio = () => {
    setArrow( arrows => !arrows)
  }
  const handleClick = () => {
    setArrow(false)
  }
  
  return (
    <>
        <section className={`${location.pathname === '/' ? 'bg-transparent' : 'bg-gradient-to-b from-pro-blue to-pro-blue2 shadow-md shadow-gray-400'} ${ scroll && location.pathname === '/' ? 'shadow-md shadow-slate-400 bg-gradient-to-b from-pro-blue to-pro-blue2 duration-[.1s]' : 'bg-transparent'} posicion mx-auto md:h-auto h-[56px] px-2 fixed top-[-1px] left-0 w-screen z-10`}>
          <nav className='md:h-10 md:py-10 md:flex md:justify-between items-center w-full'>
            <div className='flex justify-between items-center'>
              <div onClick={handleClick} className="flex items-center fixed top-0 left-0 md:relative mt-2 md:mt-0 z-[100] ">
                <Link to="/"><img src={flor} alt="Imagen logotipo" className='w-9 md:w-12'/></Link>
                <img className='w-[45%] md:w-[60%]' src={logo} alt="Imagen texto del logotipo"/>
              </div>
              <div className='md:hidden fixed top-3 right-3 z-50 active:outline-none focus:outline-none hover:outline-none' onClick={cambio}>
                <Boton arrows={arrows}/>
              </div>
            </div>
            <div className={`${styles.navbar} ${ arrows ? styles.active : ''} w-full`}>
              <Link
                onClick={handleClick}
                to="/contacto"
                className={`${location.pathname === '/contacto' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Contáctanos
              </Link>
              <Link
                onClick={handleClick}
                to="/nosotros"
                className={`${location.pathname === '/nosotros' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Nosotros
              </Link>
              <Link
                onClick={handleClick}
                to="/testimonios"
                className={`${location.pathname === '/testimonios' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Testimonios
              </Link>
              <Link
                onClick={handleClick}
                to="/servicios"
                className={`${location.pathname === '/servicios' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Servicios
              </Link>
              <Link
                onClick={handleClick}
                to="/simulador"
                className={`${location.pathname === '/simulador' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Cotizador
              </Link>
              <Link
                onClick={handleClick}
                to="/"
                className={`${ arrows ? styles.links : styles.linksEnd }`}
              >Inicio
              </Link>
              <div className={`md:hidden border-t-[1px] border-[#7ed6df] ${ arrows ? styles.links : styles.linksEnd }`}>
                <IconsRRSS justify={`justify-start`} />
              </div>
            </div>
          </nav>
        </section>
    </>
  )
}

export default Navbar