import styles from '../component/Chat.css'
import crab from '../crab.jpg'
import zebra from '../zebra.jpg'
import trash from '../trash.png'
import sound from '../sound.png'
import par_user from '../par_user.png'

export default function Chat() {
    window.onscroll = function () {
        window.scrollTo(0, 0);
    }
    return (
        <section className='Chat'>
            <div className="Chat_menu">
                <div className="Profile_Search">
                    <div className="Profile_icon">
                        <img src={crab} alt="" />
                    </div>
                    <div className="Search">
                        <input type="text" placeholder='Поиск..' className='Chat_search' />
                    </div>
                </div>
                <div className="Users_Groups">
                    <div className="User">
                        <div className="User_img">
                            <img src={zebra} alt="" />
                            <div className="User_img_status"></div>
                        </div>
                        <div className="user_line__container">
                            <div className="user_line1">
                                <div className="username">
                                    <p className='username__text'>Demix</p>
                                </div>
                                <div className="User_settings">
                                    <div className="user_circle"></div>
                                    <div className="user_circle"></div>
                                    <div className="user_circle"></div>
                                </div>
                            </div>
                            <div className="user_line2">
                                <div className="user_message">
                                    <div className="user_message__text">
                                        <p style={{ fontSize: "24px", fontWeight: "500" }}>message</p>
                                    </div>
                                </div>
                                <div className="User_message__time">
                                    <p style={{ fontSize: "24px", fontWeight: "500" }}>00:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="User">
                        <div className="User_img">
                            <img src={zebra} alt="" />
                            <div className="User_img_status"></div>
                        </div>
                        <div className="user_line__container">
                            <div className="user_line1">
                                <div className="username">
                                    <p className='username__text'>Demix</p>
                                </div>
                                <div className="User_settings">
                                    <div className="user_circle"></div>
                                    <div className="user_circle"></div>
                                    <div className="user_circle"></div>
                                </div>
                            </div>
                            <div className="user_line2">
                                <div className="user_message">
                                    <div className="user_message__text">
                                        <p style={{ fontSize: "24px", fontWeight: "500" }}>message</p>
                                    </div>
                                </div>
                                <div className="User_message__time">
                                    <p style={{ fontSize: "24px", fontWeight: "500" }}>00:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="User">
                        <div className="User_img">
                            <img src={zebra} alt="" />
                            <div className="User_img_status"></div>
                        </div>
                        <div className="user_line__container">
                            <div className="user_line1">
                                <div className="username">
                                    <p className='username__text'>Demix</p>
                                </div>
                                <div className="User_settings">
                                    <div className="user_circle"></div>
                                    <div className="user_circle"></div>
                                    <div className="user_circle"></div>
                                </div>
                            </div>
                            <div className="user_line2">
                                <div className="user_message">
                                    <div className="user_message__text">
                                        <p style={{ fontSize: "24px", fontWeight: "500" }}>message</p>
                                    </div>
                                </div>
                                <div className="User_message__time">
                                    <p style={{ fontSize: "24px", fontWeight: "500" }}>00:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Chat_Bar">
                <div className="Status_bar">
                    <div className="Status_bar_but">
                        <div className="user__container">
                            <div className="Status_icon">
                                <img src={zebra} alt="" />
                            </div>
                            <div className="Username">
                                <p className='Username_text'>Demix</p>
                                <div className="status">
                                    <div className="online"></div>
                                    <p className='online_text'>online</p>
                                </div>
                            </div>
                        </div>
                        <div className="parametres__container">
                            <div className="User_parametres">
                                <div className="status_circle"></div>
                                <div className="status_circle"></div>
                                <div className="status_circle"></div>
                            </div>
                            <div className="parametres__content" id="myDropDown">
                                <ul type="none">
                                    <li><a href="#/"><img src={trash} alt="#" className='parimg' /> Удалить чат</a></li>
                                    <li><a href="#/"><img src={sound} alt="#" className='parimg' />Выключить уведомления</a></li>
                                    <li><a href="#/"><img src={par_user} alt="#" className='parimg' />Посмотреть профиль</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Chat_area"></div>
                <div className="Chat_inp"></div>
            </div>
        </section >
    )
}