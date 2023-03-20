import Head from "../components/Head"
import Politica from "../components/Politica"

const Privacidad = () => {
  return (
    <>
      <Head title="Politica TyC" />
      <section className="md:flex-row md:items-center flex flex-col gap-5 md:gap-10 md:w-full px-5">
        <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl text-pro-blue font-black text-center md:text-start">Te compartimos nuestros <span className="md:text-7xl text-pro-blue2">Términos y condiciones</span></h1>
            <p className="text-2xl font-light mt-4 text-center text-slate-700 md:text-start">En Proactivo podemos ayudarte a lograr tus objetivos</p>
          </div>
          <div className="md:w-1/2 entrada">
            <Politica />
          </div>
      </section>
    </>
  )
}

export default Privacidad