import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import s from './Wait.module.scss'

import wait_svg from './../../static/images/wait.svg'


export const Wait = () => {
    const navigate = useNavigate()
    const language = useSelector((state) => state.app.language)

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            loctext.title = "Ожидайте пожалуйста"
            loctext.subtitle = "Сейчас мы опрашиваем сервисы проката. Обычно это занимает не более 3-х минут. Можете закрыть приложение"
            loctext.price = "Закрыть приложение"
        } else if (language == "en") {
            loctext.title = "Please wait"
            loctext.subtitle = "Now we are interviewing rental services. This usually takes no more than 3 minutes. You can close the application"
            loctext.price = "Close the application"
        }
        return loctext
    }

    const text = setLocale()

    return (
        <div className={s.wrapper} onClick={() => navigate("/main")}>
            <div className={s.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12H3M3 12L9.75 5M3 12L9.75 19" stroke="#202020" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div className={s.info}>
                <img src={wait_svg} alt="Ожидание" />
                <div>{text.title}</div>
                <div className={s.subtitle}>{text.subtitle}</div>
            </div>


            <div className={s.footer}>
                <div className={s.button}>{text.price}</div>
            </div>
        </div>
    )
}