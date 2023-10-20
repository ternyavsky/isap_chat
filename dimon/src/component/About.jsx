import { useState } from 'react'
import styles from '../component/About.css'


export default function About(){
const [CheckboxState, SetCheckboxState] = useState(false)

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

    return(
        <>
        <div className="About__container">
            <div className="About_text_title">
                <p className='About_text_title_h1'>С нами удобнее!</p>
            </div>
            <div className="About_text">
                <div className="atext1">
                <p className='atext1_p'>1. Наш сайт ориентирован на узкий круг людей.</p>
                <p>Данный сайт предназначен в первую очередь для студентов, которые обучаются в Липецком Металлургическом колледже.</p>
                </div>
                <div className="atext1">
                <p className='atext1_p'>2. Сайт находится на стадии разработки.</p>
                <p>С развитием сайта будут появляться новые функции для более удобного общения с пользователями</p>
                </div>
            </div>
            <div className="About_agree_rules">
                <div class="checkbox_remember">
                        <input id='one' type='checkbox' onClick={() => SetCheckboxState( CheckboxState => !CheckboxState)}/>
                        <label for='one'>
                            <span></span>
                            Мы не несем отвественности за ущерб, который нанесли вам другие пользователи.
                            <ins>Мы не несем отвественности за ущерб, который нанесли вам другие пользователи.</ins>
                     </label>
                 </div>
                </div>
                {
                CheckboxState === false ?
                ( 

            <div className="About_button" id='pool'>
             
                
            <div className="Header_button2" >
                Войти в чат
            </div>
        </div>
            )
            : (
            <div className="About_button" id='pool'>

                <button className="Header_button">
                    <a href="https://github.com/ternyavsky/terny/blob/main/src/components/Header.tsx">Войти в чат</a>
                </button>
            </div>
            )
            
                }
        </div>
        </>
    )
}