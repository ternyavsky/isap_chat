import styles from '../component/Chat.css'
import crab from '../crab.jpg'
import isap from '../ISAP.png'
import zebra from '../zebra.jpg'

export default function Chat(){
    window.onscroll = function () {
    window.scrollTo(0,0);
        }
    return(
        <section className='Chat'>
            <div className="Chat_menu">
            <div className="Profile_Search">
                <div className="Profile_icon">
                    <img src={crab} alt="" />
                </div>
                <div className="Search">
                    <input type="text" placeholder='Поиск..'  className='Chat_search'/>
                </div>
            </div>
            <div className="Users_Groups"></div>
                <div className="Logo__container">
                    <div className="Isap_logo">
                        <img src={isap} alt="" />
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
                    <div className="User_parametres">
                        <div className="status_circle"></div>
                        <div className="status_circle"></div>
                        <div className="status_circle"></div>
                    </div>
                </div>
            </div>
        <div className="Chat_area"></div>
        <div className="Chat_inp"></div>
        </div>
        </section>
    )
}