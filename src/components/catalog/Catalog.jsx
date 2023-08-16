import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
// import Calendar from 'react-calendar'

import { setColor, setName, setDateAt, setDateTo, setRelease, setHelmet, setAbs, setKeyless } from './../../redux/appState/Dataset'
import s from './Catalog.module.scss'

// import 'react-calendar/dist/Calendar.css'; 
import './Calendar.css'

import Calendar from 'moedim';


export const Catalog = () => {
    const language = useSelector((state) => state.app.language)
    const dataset = useSelector((state) => state.dataset)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [question, setQuestion] = useState(false)
    const [num, setNum] = useState(0)
    const [calendarView1, setCalendarView1] = useState(false)
    const [isSetCalendar1, setIsSetCalendar1] = useState(false)
    const [date_at, setDate_at] = useState(new Date())
    dispatch(setDateAt(date_at))

    const [calendarView2, setCalendarView2] = useState(false)
    const [isSetCalendar2, setIsSetCalendar2] = useState(false)
    const [date_to, setDate_to] = useState(new Date())
    dispatch(setDateTo(date_to))

    const getD = date_to.getDate()
    const getM = date_to.getMonth();
    const getY = date_to.getFullYear();
    const getD2 = date_at.getDate()
    const getM2 = date_at.getMonth();
    const getY2 = date_at.getFullYear();

    console.log(isSetCalendar2);

    // function valueData () {
    //    setDate_to


    //    return
    // }

    const [value, setValue] = useState(new Date())

    var current_dataset = {}

    if (dataset.selected_bike.type == "mini") {
        current_dataset = dataset.mini.items
    } else if (dataset.selected_bike.type == "highways") {
        current_dataset = dataset.highways.items
    } else if (dataset.selected_bike.type == "luxe") {
        current_dataset = dataset.luxe.items
    }

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            switch (dataset.selected_bike.type) {
                case 'mini':
                    loctext.head_title = "Мини скутеры"
                    break
                case 'highways':
                    loctext.head_title = "Шоссейные"
                    break
                case 'luxe':
                    loctext.head_title = "Премиум"
                    break
            }
            loctext.subtitle = "Изображение рекламного объекта может отличаться от реального"
            loctext.period = "Срок аренды"
            loctext.date_at = "Дата начала аренды"
            loctext.date_to = "Завершение аренды"
            loctext.date = "дд.мм.гг"
            loctext.release = "Год выпуска"
            loctext.from = "от"
            loctext.color = "Цвет"
            loctext.white = "Белый"
            loctext.red = "Красный"
            loctext.blue = "Синий"
            loctext.black = "Черный"
            loctext.yellow = "Желтый"
            loctext.bright = "Яркий"
            loctext.count_helmet = "Количество шлемов"
            loctext.one_helmet = "Один шлем"
            loctext.two_helmet = "Два шлема"
            loctext.no_helmet = "Не нужно"
            loctext.additional_options = "Доп.опции"
            loctext.keyless_access = "Бесключевой доступ"
            loctext.send_location = "Отправить локацию"
        } else if (language == "en") {
            switch (dataset.selected_bike.type) {
                case 'mini':
                    loctext.head_title = "Mini scooters"
                    break
                case 'highways':
                    loctext.head_title = "Highways"
                    break
                case 'luxe':
                    loctext.head_title = "Premium"
                    break
            }
            loctext.subtitle = "The image of the advertising object may differ from the real one"
            loctext.period = "Rental period"
            loctext.date_at = "Rental start date"
            loctext.date_to = "Completion of the lease"
            loctext.date = "dd.mm.yy"
            loctext.release = "Year of release"
            loctext.from = "from"
            loctext.color = "Color"
            loctext.white = "White"
            loctext.red = "Red"
            loctext.blue = "Blue"
            loctext.black = "Black"
            loctext.yellow = "Yellow"
            loctext.bright = "Bright"
            loctext.count_helmet = "Number of helmets"
            loctext.one_helmet = "One helmet"
            loctext.two_helmet = "Two helmets"
            loctext.no_helmet = "No need"
            loctext.additional_options = "Additional options"
            loctext.keyless_access = "Keyless access"
            loctext.send_location = "Send location"
        }
        return loctext
    }

    const text = setLocale()

    function increment(number) {
        if (number == current_dataset.length - 1) {
            number = 0
            return number
        } else {
            return number + 1
        }
    }

    function decrement(number) {
        if (number == 0) {
            number = current_dataset.length - 1
            return number
        } else {
            return number - 1
        }
    }


    dispatch(setName(current_dataset[num].name))

    window.addEventListener('scroll', function() {
        setQuestion(false)
    });

    const [selectedDate, setSelectedDate] = useState()

    return (
        <>
        <div className={s.head_title} onClick={() => navigate("/main")}>
            <div className={s.header_absolute}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12H3M3 12L9.75 5M3 12L9.75 19" stroke="#202020" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{text.head_title}</span>
            </div>

        </div>


        <div className={s.wrapper} onClick={() => setQuestion(false)}>
            
            <div className={s.wrapper_inner}>
                <div className={s.image}>

                    <div className={s.arrows}>
                        <div className={s.arrow} onClick={(e) => {
                        e.stopPropagation()
                        setNum(decrement(num))
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.4446 14.8886L7.55569 9.99973L12.4446 5.11084" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>          
                        </div>
                        <div className={s.arrow} onClick={(e) => {
                        e.stopPropagation()
                        setNum(increment(num))
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                <path d="M7.97925 16.0413L13.0209 10.9997L7.97925 5.95801" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>        
                        </div>
                    </div>
                    <div className={s.bikes_swaiper}>
                        <div className={s.active}>{current_dataset[num].name}</div>
                    </div>
                    


                    <img src={current_dataset[num].img} alt="Bike" />
                </div>
                <div className={s.image_attention}>
                    <span>*</span>
                    <span>{text.subtitle}</span>
                </div>
    
            </div>


            <div className={s.wrapper_inner}>
                <div className={s.title_with_question}>
                    <span>{text.period}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" onClick={(e) => {
                        e.stopPropagation()
                        setQuestion(!question)
                        }}>
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                    <div className={question ? s.question : s.question_none}><span>Обратите внимание!</span> Чем дольше срок, тем ниже цена. Если вы планируете арендовать байк на длительный срок, но не определились с точными датами, рекомендуем указать срок аренды на один месяц</div>
                </div>

                <div className={s.calendar}>
                    <div className={s.half}>
                        <div className={s.calendar_item} onClick={() => setCalendarView1(!calendarView1)}>
                            <div className={s.c_title}>{text.date_at}</div>
                            <div className={calendarView1 ? s.input_active: s.input}>
                                <span className={isSetCalendar1 ? s.active_text : ""}>
                                    {isSetCalendar1 ? `${getD2}.${getM2}.${getY2}`: text.date}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M17.4167 3.6665H4.58333C3.57081 3.6665 2.75 4.48732 2.75 5.49984V18.3332C2.75 19.3457 3.57081 20.1665 4.58333 20.1665H17.4167C18.4292 20.1665 19.25 19.3457 19.25 18.3332V5.49984C19.25 4.48732 18.4292 3.6665 17.4167 3.6665Z" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.6666 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.33337 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.75 9.1665H19.25" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                        </div>

                        <div className={s.calendar_item} onClick={() => setCalendarView2(!calendarView2)}>
                            <div className={s.c_title}>{text.date_to}</div>
                            <div className={calendarView2 ? s.input_active: s.input}>
                                <span className={isSetCalendar2 ? s.active_text : ""}>
                                    {isSetCalendar2 ? `${getD}.${getM}.${getY}`: text.date}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M17.4167 3.6665H4.58333C3.57081 3.6665 2.75 4.48732 2.75 5.49984V18.3332C2.75 19.3457 3.57081 20.1665 4.58333 20.1665H17.4167C18.4292 20.1665 19.25 19.3457 19.25 18.3332V5.49984C19.25 4.48732 18.4292 3.6665 17.4167 3.6665Z" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.6666 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.33337 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.75 9.1665H19.25" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={calendarView1 ? s.calendar_wrapper: s.calendar_wrapper_none} onClick={() =>{ 
                                // setCalendarView1(false)
                                setIsSetCalendar1(true)
                            }}>
                            <Calendar onChange={setDate_at} locale = {language == "ru" ? 'RU' : "en"} value={date_at} />

                    </div>

                    <div className={calendarView2 ? s.calendar_wrapper: s.calendar_wrapper_none} onClick={() =>{ 
                                // setCalendarView2(false)
                                setIsSetCalendar2(true)
                            }}>
                            <Calendar onChange={setDate_to} value={date_to} locale='ru'/>
                    </div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.release}</span>
                </div>

                <div className={s.items_flex_start}>
                    <div className={dataset.selected_bike.release === "2023" ? s.active : ''} onClick={() => dispatch(setRelease("2023"))}>2023</div>
                    <div className={dataset.selected_bike.release === "2022" ? s.active : ''} onClick={() => dispatch(setRelease("2022"))}>{text.from} 2022</div>
                    <div className={dataset.selected_bike.release === "2020" ? s.active : ''} onClick={() => dispatch(setRelease("2020"))}>{text.from} 2020</div>
                    <div className={dataset.selected_bike.release === "2018" ? s.active : ''} onClick={() => dispatch(setRelease("2018"))}>{text.from} 2018</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.color}</span>
                </div>
                

                <div className={s.items_flex_start}>
                    <div className={dataset.selected_bike.color === "white" ? s.active : ''} onClick={() => dispatch(setColor("white"))}>{text.white}</div>
                    <div className={dataset.selected_bike.color === "red" ? s.active : ''} onClick={() => dispatch(setColor("red"))}>{text.red}</div>
                    <div className={dataset.selected_bike.color === "blue" ? s.active : ''} onClick={() => dispatch(setColor("blue"))}>{text.blue}</div>
                </div>

                <div className={s.items_flex_start}>
                    <div className={dataset.selected_bike.color === "black" ? s.active : ''} onClick={() => dispatch(setColor("black"))}>{text.black}</div>
                    <div className={dataset.selected_bike.color === "yellow" ? s.active : ''} onClick={() => dispatch(setColor("yellow"))}>{text.yellow}</div>
                    <div className={dataset.selected_bike.color === "bright" ? s.active : ''} onClick={() => dispatch(setColor("bright"))}>{text.bright}</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.count_helmet}</span>
                </div>

                <div className={s.items_flex_start}>
                    <div className={dataset.selected_bike.helmet_count === "one_helmet" ? s.active : ''} onClick={() => dispatch(setHelmet("one_helmet"))}>{text.one_helmet}</div>
                    <div className={dataset.selected_bike.helmet_count === "two_helmet" ? s.active : ''} onClick={() => dispatch(setHelmet("two_helmet"))}>{text.two_helmet}</div>
                    <div className={dataset.selected_bike.helmet_count === "no_helmet" ? s.active : ''} onClick={() => dispatch(setHelmet("no_helmet"))}>{text.no_helmet}</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.additional_options}</span>
                </div>
                

                <div className={s.items_flex_start}>
                    <div className={dataset.selected_bike.options.abs ? s.active : ''} onClick={() => dispatch(setAbs(!dataset.selected_bike.options.abs))}>ABS</div>
                    <div className={dataset.selected_bike.options.keyless_access ? s.active : ''} onClick={() => dispatch(setKeyless(!dataset.selected_bike.options.keyless_access))}>{text.keyless_access}</div>
                </div>
            </div>
        </div>

        <div className={s.footer}>
            <div className={s.footer_inner} onClick={() => navigate("/wait")}>
                <div className={isSetCalendar2 && isSetCalendar1 ? "" : s.disactive}>{text.send_location}</div>
            </div>
        </div>
        </>
    )
}