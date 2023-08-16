import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

import s from './First.module.scss'
import logo_outer from '../../static/images/logo2.svg'
import logo_outerbg from '../../static/images/logo2bg.svg'
import logo_inner from '../../static/images/logo_inner.png'
import logo from '../../static/images/Logo.svg'

import logov from './../../static/video/logo.mp4'


  

export const First = () => {
    const navigate = useNavigate()
    const [load, setLoad] = useState(true)

    function codeAddress() {
        setLoad(true)
    }
    window.onload = codeAddress;

    function navigatBeforeLoader () {
        setTimeout(() => {
            navigate("/second")
        }, 2000)
    }
    navigatBeforeLoader();

    return (
        <div className={s.wrapper} onClick={() => navigate("/second")} >
            {
                load && (
                    <>
                        <div className={s.image_div}>
                            <div className={s.logofirst}>
                                <img className={s.logofirst1} src={logo_outer} alt="Иконка загрузки" />
                                <div className={s.logofirst2}  />
                            </div>
                            {/* <video src={logov} autoPlay loop muted/> */}
                        </div>

                        <div className={s.title}>
                            <p>Платформа для аренды байков</p>
                            <p>Сервис с прозрачной системой выбора</p>
                        </div>
                    </>
                )
            }
        </div>
    )
}