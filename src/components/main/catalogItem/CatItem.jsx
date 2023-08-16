import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

import s from './CatItem.module.scss'
import { setSelectedBike } from '../../../redux/appState/Dataset'

export const CatItem = ({dataset, type, whodrive}) => {
    const language = useSelector((state) => state.app.language)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [num, setNum] = useState(0)

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            switch (type) {
                case 'mini':
                    loctext.title = "Мини скутеры"
                    break
                case 'highways':
                    loctext.title = "Шоссейные"
                    break
                case 'luxe':
                    loctext.title = "Премиум"
                    break
            }
            switch (type) {
                case 'mini':
                    loctext.whodrive2 = "Для девушек / одиночных поездок"
                    break
                case 'highways':
                    loctext.whodrive2 = "Для путешествий вдвоем"
                    break
                case 'luxe':
                    loctext.whodrive2 = "Для поклонников ретро / семьи"
                    break
            }
            loctext.price = "от"
            loctext.subtitle = "Для девушек / одиночных поездок"
            loctext.subtitle2 = "Для путешествий вдвоем"
            loctext.subtitle3 = "Для поклонников ретро / семьи"
        } else if (language == "en") {
            switch (type) {
                case 'mini':
                    loctext.title = "Mini scooters"
                    break
                case 'highways':
                    loctext.title = "Highways"
                    break
                case 'luxe':
                    loctext.title = "Premium"
                    break
            }
            loctext.price = "from"
            loctext.subtitle = "For girls / single trips"
        }
        return loctext
    }

    const text = setLocale()

    function increment(number) {
        if (number == dataset.length - 1) {
            number = 0
            return number
        } else {
            return number + 1
        }
    }

    function decrement(number) {
        if (number == 0) {
            number = dataset.length - 1
            return number
        } else {
            return number - 1
        }
    }

    function setState(){
        dispatch(setSelectedBike(
            {
                type: type,
                name: "",
                date_at: "",
                date_to: "",
                color: "",
                helmet_count: "",
                options: {
                  abs: false,
                  keyless_access: false,
                },
                whodrive: whodrive,
            }
        ))

    }


    return (
        <div className={s.wrapper} onClick={() => {
            setState()
            navigate('/catalog')
            }}>
            <div className={s.image}>
                <div className={s.arrows}>
                    <div className={s.arrow} onClick={(e) => {
                        e.stopPropagation()
                        setNum(decrement(num))
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.4446 14.8886L7.55569 9.99973L12.4446 5.11084" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>          
                    </div>
                    <div className={s.arrow} onClick={(e) => {
                        e.stopPropagation()
                        setNum(increment(num))
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                            <path d="M7.97925 16.0413L13.0209 10.9997L7.97925 5.95801" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>        
                    </div>
                </div>
                <div className={s.bikes_swaiper}>
                    <div className={s.active}>{dataset[num].name}</div>
                </div>
                <img src={dataset[num].img} alt="Bike" />
            </div>

            <div className={s.info} onClick={() => navigate(`/catalog`)}>
                <div className={s.title_price}>
                    <span>{text.title}</span>
                    <span>{text.price} {dataset[num].price}$</span>
                </div>
                <div className={s.subtitle}>
                    <span>{text.whodrive2}</span>
                </div>
            </div>

            {/* <div className={s.characteristics}>

                <div className={s.top}>
                    <div className={s.topblock}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M8.5001 16.0832C12.4121 16.0832 15.5835 12.9119 15.5835 8.99986C15.5835 5.08783 12.4121 1.9165 8.5001 1.9165C4.58807 1.9165 1.41675 5.08783 1.41675 8.99986C1.41675 12.9119 4.58807 16.0832 8.5001 16.0832Z"  stroke-miterlimit="10"/>
                            <path d="M3.83302 13.667L7.01055 10.4895M10.208 15.375L9.04533 11.0348M14.875 10.708L10.5348 9.54533M13.167 4.33302L9.98945 7.51055M6.79166 2.625L7.95498 6.96553M2.125 7.29166L6.4649 8.45467"  stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M8.50008 10.7135C9.44639 10.7135 10.2135 9.94639 10.2135 9.00008C10.2135 8.05376 9.44639 7.28662 8.50008 7.28662C7.55376 7.28662 6.78662 8.05376 6.78662 9.00008C6.78662 9.94639 7.55376 10.7135 8.50008 10.7135Z"  stroke-miterlimit="10"/>
                        </svg>
                        <span>Пробег: <span className={s.value}>4 300 км</span></span>
                    </div>
                    <div className={s.topblock}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M13.4583 3.3335H3.54167C2.75926 3.3335 2.125 3.96776 2.125 4.75016V14.6668C2.125 15.4492 2.75926 16.0835 3.54167 16.0835H13.4583C14.2407 16.0835 14.875 15.4492 14.875 14.6668V4.75016C14.875 3.96776 14.2407 3.3335 13.4583 3.3335Z"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.3333 1.9165V4.74984"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.66675 1.9165V4.74984"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.125 7.5835H14.875"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Год выпуска: 2022</span>
                    </div>
                </div>

                <div className={s.bottom}>
                    <div className={s.bottom1block}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M20 10C20 12.7583 18.8833 15.2583 17.0833 17.0833L16.1833 16.1833C17.7667 14.5833 18.75 12.4167 18.75 10C18.75 7.59167 17.7667 5.41667 16.1833 3.81667L17.0833 2.91667C18.8833 4.74167 20 7.24167 20 10ZM16.6667 8V6.66667H14C13.2667 6.66667 12.6667 7.26667 12.6667 8V9.33333C12.6667 9.68695 12.8071 10.0261 13.0572 10.2761C13.3072 10.5262 13.6464 10.6667 14 10.6667H15.3333V12H12.6667V13.3333H15.3333C16.0667 13.3333 16.6667 12.7333 16.6667 12V10.6667C16.6667 10.313 16.5262 9.97391 16.2761 9.72386C16.0261 9.47381 15.687 9.33333 15.3333 9.33333H14V8H16.6667ZM7.01667 5C7.89167 4.475 8.90833 4.16667 10 4.16667C11.0917 4.16667 12.1083 4.475 12.9833 5H15.575C14.2083 3.46667 12.2167 2.5 10 2.5C7.78333 2.5 5.79167 3.46667 4.425 5H7.01667ZM11 10C11.5333 10 12 10.4667 12 11V12C12 12.1751 11.9655 12.3485 11.8985 12.5102C11.8315 12.672 11.7333 12.819 11.6095 12.9428C11.4857 13.0666 11.3387 13.1648 11.1769 13.2318C11.0151 13.2988 10.8418 13.3333 10.6667 13.3333H8V6.66667H10.6667C11.0203 6.66667 11.3594 6.80714 11.6095 7.05719C11.8595 7.30724 12 7.64638 12 8V9C12 9.53333 11.5333 10 11 10ZM10.6667 10.6667H9.33333V12H10.6667V10.6667ZM10.6667 8H9.33333V9.33333H10.6667V8ZM3.81667 3.81667L2.91667 2.91667C1.11667 4.74167 0 7.24167 0 10C0 12.7583 1.11667 15.2583 2.91667 17.0833L3.81667 16.1833C2.23333 14.5833 1.25 12.4167 1.25 10C1.25 7.59167 2.23333 5.41667 3.81667 3.81667ZM6 13.3333V10.6667H4.66667V13.3333H3.33333V8C3.33333 7.64638 3.47381 7.30724 3.72386 7.05719C3.97391 6.80714 4.31304 6.66667 4.66667 6.66667H6C6.73333 6.66667 7.33333 7.26667 7.33333 8V13.3333H6ZM6 9.33333V8H4.66667V9.33333H6ZM12.9833 15C12.1083 15.525 11.0917 15.8333 10 15.8333C8.94822 15.8324 7.91667 15.5443 7.01667 15H4.425C5.79167 16.5333 7.78333 17.5 10 17.5C12.2167 17.5 14.2083 16.5333 15.575 15H12.9833Z" fill="#202020"/>
                        </svg>
                            <span>ABS</span>
                        </div>
                    <div className={s.bottom2block}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M8.5 2.09375C6.88766 2.09375 5.53244 3.13766 4.98047 4.55078L5.96009 4.94922C6.36278 3.91806 7.35037 3.15625 8.5 3.15625C9.96306 3.15625 11.1562 4.34944 11.1562 5.8125V7.40625H3.1875V15.9062H13.8125V7.40625H12.2188V5.8125C12.2188 3.77037 10.5421 2.09375 8.5 2.09375ZM4.25 8.46875H12.75V14.8438H4.25V8.46875Z" fill="#202020"/>
                            <path d="M3.98427 0.5C2.74469 0.854167 0.424895 2.2 1.0624 4.75" stroke="#202020"/>
                            <path d="M5.3125 1.5625C4.22605 1.82813 2.19285 2.8375 2.75159 4.75" stroke="#202020"/>
                        </svg>
                        <span>Бесключевой доступ: <span className={s.value}>есть</span></span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}