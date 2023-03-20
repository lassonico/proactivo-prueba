import { useState } from 'react'

import { 
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    LeadingActions,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import Modal from "../components/Modal"
import icona from '../img/bigicon1.svg'
import iconb from '../img/bigicon2.svg'
import iconc from '../img/bigicon3.svg'
import icond from '../img/bigicon4.svg'

function Bigcons() {

    const [ modal, setModal ] = useState(false)

    const modales = [
        {id: 1, titulo: 'Libranza',  texto: 'Texto de libranza'},
        {id: 2, titulo: 'Plazos',    texto: 'Texto de plazos'},
        {id: 3, titulo: 'Atencíon',  texto: 'Texto de servicio amable'},
        {id: 4, titulo: 'En línea',  texto: 'Texto de procesos en linea'}
    ]
    
    const abrirModal = (id) => {
        const modalapp = modales.filter( modal => modal === modal.id)
        setModal(true)
        console.log(modalapp)
        return modalapp
    }

    const cerrar = () => {
        setModal(false)
    }
    const leadingActions = (id) => (
        <LeadingActions>
            <SwipeAction onClick={ () => abrirModal(id) }>
                <p className="text-2xl text-center text-white bg-pro-blue2 pt-10 md:pt-24">Más</p>
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = (id) => (
        <TrailingActions>
            <SwipeAction onClick={() => abrirModal(id)}>
                <p className="text-2xl text-center text-white bg-pro-blue2 pt-10 md:pt-24">Más</p>
            </SwipeAction>
        </TrailingActions>
    )

  return (

    <section className="w-full flex flex-col justify-center items-center xl:flex-row gap-6 md:gap-5">
        { modal && <Modal cerrar={cerrar}>{modales.filter(modal => modal.id === modales.id ? (modales.texto) : '')}</Modal>}
        <div>
            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions(1)}
                >
                    <div className="flex items-center justify-center md:h-56 mr-5 flex-row-reverse md:gap-5 md:flex-col p-6 bg-white rounded-tr-full rounded-br-full gap-2 cursor-pointer relative border-l-4 border-pro-blue2">
                    <img src={iconc} alt='Imagen icono de' className='w-16 md:w-20 mx-auto'/>
                    <p className='text-pro-blue2 text-lg text-left leading-none'><span className='text-pro-blue'>Descuento de tu pensión</span>o nómina para que no te preocupes por el pago de tu cuota</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right absolute left-0 md:right-[15px]" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#C0C2C9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </div>

        <div>
            <SwipeableList>
                <SwipeableListItem
                    trailingActions={trailingActions(2)}
                >
                    <div className="flex items-center justify-center md:h-56 ml-5 md:gap-5 md:flex-col p-6 bg-white rounded-tl-full rounded-bl-full gap-2 cursor-pointer relative border-r-4 border-pro-blue2">
                        <img src={icona} alt='Imagen icono de' className='w-16 md:w-20 mx-auto'/>
                        <p className='text-pro-blue2 text-lg text-right leading-none'><span className='text-pro-blue'>Amplios plazos hasta 180 cuotas</span> para asegurarte un aplio cupo de crédito</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left absolute right-0 md:right-0" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#C0C2C9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </div>

        <div>
            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions(3)}
                >
                    <div className="flex items-center justify-center md:h-56 mr-5 flex-row-reverse md:gap-5 md:flex-col p-6 bg-white rounded-tr-full rounded-br-full gap-2 cursor-pointer relative border-l-4 border-pro-blue2">
                    <img src={iconb} alt='Imagen icono de' className='w-16 md:w-20 mx-auto'/>
                    <p className='text-pro-blue2 text-lg text-left leading-none'><span className='text-pro-blue'>Atención personalizada</span>para brindarte toda nuestra asesoría en tu solicitud de crédito</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right absolute left-0 md:right-[15px]" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#C0C2C9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </div>

        <div>
            <SwipeableList>
                <SwipeableListItem
                    trailingActions={trailingActions(4)}
                >
                    <div className="flex items-center justify-center md:h-56 ml-5 md:gap-5 md:flex-col p-6 bg-white rounded-tl-full rounded-bl-full gap-2 cursor-pointer relative border-r-4 border-pro-blue2">
                        <img src={icond} alt='Imagen icono de' className='w-16 md:w-20 mx-auto'/>
                        <p className='text-pro-blue2 text-lg text-right ml-5 leading-none'><span className='text-pro-blue'>Completamente en línea</span> para que gestiones tu solicitud desde la comodidad de tu casa</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left absolute right-0 md:right-0" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#C0C2C9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </div>
    </section>
  )
}

export default Bigcons