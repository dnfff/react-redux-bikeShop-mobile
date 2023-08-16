import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { Footer } from '../footer/Footer'
import { setCategory } from "./../../redux/appState/AppSlice.js"

import s from './Main.module.scss'
import { CatItem } from './catalogItem/CatItem'


export const Main = () => {
    const dispatch = useDispatch()
    const language = useSelector((state) => state.app.language)
    const dataset = useSelector((state) => state.dataset)

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            loctext.title = "Выберите тип скутера"
        } else if (language == "en") {
            loctext.title = "Choose the type of scooter"
        }
        return loctext
    }

    const text = setLocale()


    return (
        <>
        <div className={s.wrapper}>
            <div className={s.title}>{text.title}</div>
            <div className={s.items} >
                <CatItem dataset={dataset.mini.items} type={dataset.mini.type} whodrive={dataset.whodrive}/>
                <CatItem dataset={dataset.highways.items} type={dataset.highways.type}/>
                <CatItem dataset={dataset.luxe.items} type={dataset.luxe.type}/>
            </div>

            
        </div>
        <Footer />
        </>
    )
}