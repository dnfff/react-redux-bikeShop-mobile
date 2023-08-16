import { useSelector } from "react-redux"
import { Footer } from '../footer/Footer'
import s from './Support.module.scss'
import support_logo from './../../static/images/support_logo.png'
import supportlogo from '../../static/images/logohelper.svg'

import { useNavigate } from 'react-router-dom'

export const Support = () => {
    const language = useSelector((state) => state.app.language)
    const navigate = useNavigate()

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            loctext.title = "Перейти в чат с поддержкой"
            loctext.subtitle = "Вы в любой момент можете вернуться в приложение, чтобы продолжить"
            loctext.button = "Написать менеджеру"
        } else if (language == "en") {
            loctext.title = "Go to chat with support"
            loctext.subtitle = "You can return to the app at any time to continue"
            loctext.button = "Write to the manager"
        }
        return loctext
    }

    const text = setLocale()

    return (
        <>
        <div className={s.wrapper} onClick={() => navigate("/")}>
            <div className={s.info}>
                <img src={supportlogo} alt="Support" />

                <div>{text.title}</div>
                <div className={s.subtitle}>{text.subtitle}</div>
            </div>


            <div className={s.bottom}>
                <div className={s.button}>{text.button}</div>
            </div>
        </div>
        <Footer />
        </>
    )
}