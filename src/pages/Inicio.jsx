
import Seccion from "../components/Seccion"
import Btn from "../components/Btn"
import Head from "../components/Head"
import Cards from "../components/Cards"
import Carrusel from "../components/Carrusel"
import style from "../styles/Hero.module.css"
import Bigcons from "../components/Bigcons"


function Inicio (){
    
    return(
        <>
            <Head title="Inicio" />
            <main className="flex items-center justify-center">
                <div className={style.hero}>
                    <h1 className="entrada font-hero text-[2.4rem] md:text-5xl xl:text-7xl font-black text-white text-center md:text-left">Solicita tu crédito de libranza sin importar reportes en centrales!</h1>
                    <p className="entrada font-light text-3xl mt-3 text-center text-pro-yellow">Cómodos plazos y aprobación oportuna</p>
                    <div className="entrada md:my-0 mb-10 md:mx-0 mx-auto">
                        <Btn />
                    </div>
                    <svg className="w-full absolute bottom-[-2px] md:hidden left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f1f5f9" fillOpacity="1" d="M0,0L1440,224L1440,320L0,320Z"></path>
                    </svg>
                </div>
            </main>
            
            <div className="flex items-center px-5 justify-center mt-[calc(90vh+20px)]">
                <Seccion />
            </div>
            <div className="my-20">
                <Bigcons />
            </div>
            <section>
                <Carrusel />
            </section>
            <div className="flex justify-center px-5 my-11">
                <Cards />
            </div>
        </>
    )
}

export default Inicio