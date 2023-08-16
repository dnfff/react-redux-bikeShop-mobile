import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from "react-redux"

import s from './Footer.module.scss'

export const Footer = () => {
    const language = useSelector((state) => state.app.language)
    const navigate = useNavigate()
    const location = useLocation()

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            loctext.catalog = "Каталог"
            loctext.about = "О сервисе"
            loctext.support = "Поддержка"
        } else if (language == "en") {
            loctext.catalog = "Catalog"
            loctext.about = "About us"
            loctext.support = "Support"
        }
        return loctext
    }

    const text = setLocale()

    return (
        <div className={s.wrapper}>
            <div className={s.wisible_part}>

                <div className={location.pathname == "/main" ? s.menu_item_active : s.menu_item} onClick={()=> navigate("/main")}>
                    <div className={s.image}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 19.2C27 17.0461 25.2539 15.3 23.1 15.3C20.946 15.3 19.2 17.0461 19.2 19.2C19.2 21.3539 20.946 23.1 23.1 23.1C25.2539 23.1 27 21.3539 27 19.2Z"  strokeWidth="1.5"/>
                            <path d="M12.7 19.2V17.25C12.7 14.7982 12.7 13.5736 11.9382 12.8118C11.1764 12.05 9.9518 12.05 7.5 12.05H6.72C6.2377 12.05 5.9959 12.05 5.7918 12.0656C4.55741 12.1627 3.39818 12.6971 2.52263 13.5726C1.64709 14.4482 1.1127 15.6074 1.0156 16.8418C1 17.0459 1 17.289 1 17.77C1 17.8909 1 17.952 1.0039 18.0014C1.02805 18.3102 1.16167 18.6003 1.38071 18.8193C1.59974 19.0383 1.88978 19.172 2.1986 19.1961C2.27566 19.2002 2.35285 19.2015 2.43 19.2H12.7ZM12.7 19.2H19.2" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M10.75 19.2C10.75 20.2344 10.3391 21.2263 9.60767 21.9577C8.87628 22.6891 7.8843 23.1 6.84995 23.1C5.81561 23.1 4.82363 22.6891 4.09224 21.9577C3.36084 21.2263 2.94995 20.2344 2.94995 19.2M14 4.90001H14.6864C16.2503 4.90001 17.0316 4.90001 17.6595 5.28871C18.2887 5.67611 18.6384 6.37551 19.3365 7.77431L23.1 15.3M21.9859 12.7L22.8712 12.0474C23.2131 11.7952 23.3847 11.6704 23.503 11.5053C23.584 11.3937 23.6467 11.27 23.6889 11.1387C23.75 10.945 23.75 10.7331 23.75 10.3093C23.75 9.50591 23.75 9.10551 23.5784 8.80521C23.4632 8.60378 23.2962 8.43681 23.0948 8.32161C22.7958 8.15001 22.3928 8.15001 21.5907 8.15001H19.85"  strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M23.1 23.1C25.2539 23.1 27 21.3539 27 19.2C27 17.0461 25.2539 15.3 23.1 15.3C20.946 15.3 19.2 17.0461 19.2 19.2C19.2 21.3539 20.946 23.1 23.1 23.1Z"  strokeWidth="1.5"/>
                        </svg>
                    </div>

                    <p className={s.title}>{text.catalog}</p>
                </div>

                <div className={location.pathname == "/about" ? s.menu_item_active : s.menu_item} onClick={()=> navigate("/about")}>
                    <div className={s.image}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 12V18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.95 10.5C14.3642 10.5 14.7 10.1642 14.7 9.75C14.7 9.33579 14.3642 9 13.95 9C13.5357 9 13.2 9.33579 13.2 9.75C13.2 10.1642 13.5357 10.5 13.95 10.5Z" fill="#202020"/>
                        </svg>
                    </div>

                    <p className={s.title}>{text.about}</p>
                </div>

                <div className={location.pathname == "/support" ? s.menu_item_active : s.menu_item} onClick={()=> navigate("/support")}>
                    <div className={s.image}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.9231 17.8462H22.4615C22.8696 17.8462 23.2609 17.6841 23.5494 17.3956C23.8379 17.107 24 16.7157 24 16.3077V14C24 13.592 23.8379 13.2007 23.5494 12.9122C23.2609 12.6236 22.8696 12.4615 22.4615 12.4615H20.9231C20.7191 12.4615 20.5234 12.5426 20.3791 12.6869C20.2349 12.8311 20.1538 13.0268 20.1538 13.2308V17.0769C20.1538 17.2809 20.2349 17.4766 20.3791 17.6209C20.5234 17.7651 20.7191 17.8462 20.9231 17.8462ZM20.9231 17.8462V19C20.9231 19.8161 20.5989 20.5987 20.0219 21.1757C19.4448 21.7528 18.6622 22.0769 17.8462 22.0769M5.53846 12.4615H7.07692C7.28094 12.4615 7.47659 12.5426 7.62085 12.6869C7.76511 12.8311 7.84615 13.0268 7.84615 13.2308V17.0769C7.84615 17.2809 7.76511 17.4766 7.62085 17.6209C7.47659 17.7651 7.28094 17.8462 7.07692 17.8462H5.53846C5.13044 17.8462 4.73912 17.6841 4.4506 17.3956C4.16209 17.107 4 16.7157 4 16.3077V14C4 13.592 4.16209 13.2007 4.4506 12.9122C4.73912 12.6236 5.13044 12.4615 5.53846 12.4615Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.0769 12.4615V10.9231C7.0769 9.08696 7.8063 7.32605 9.10463 6.02772C10.403 4.72939 12.1639 4 14 4C15.8361 4 17.597 4.72939 18.8953 6.02772C20.1937 7.32605 20.9231 9.08696 20.9231 10.9231V12.4615M15.9231 20.1538C16.4331 20.1538 16.9222 20.3565 17.2829 20.7171C17.6435 21.0777 17.8461 21.5669 17.8461 22.0769C17.8461 22.587 17.6435 23.0761 17.2829 23.4367C16.9222 23.7974 16.4331 24 15.9231 24H13.6154C13.1053 24 12.6162 23.7974 12.2555 23.4367C11.8949 23.0761 11.6923 22.587 11.6923 22.0769C11.6923 21.5669 11.8949 21.0777 12.2555 20.7171C12.6162 20.3565 13.1053 20.1538 13.6154 20.1538H15.9231Z"  strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    </div>

                    <p className={s.title}>{text.support}</p>
                </div>
            </div>
        </div>
    )
}