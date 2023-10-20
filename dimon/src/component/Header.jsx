import logoisap from '../ISAP.png';
import google from '../google.svg';
import telegram from '../telegram.svg';
import vk from '../vk.svg';
import styles from './Header.css';

export default function Header() {
  return (
    <header>
      <div className="Header">
        <div className="header__container">
          <div className="Header_logo">
            <img src={logoisap} alt="" />
          </div>
          <div className="Header_text__container">
            <div className="header_text1">
              <h1>Новый ISAP мессенджер</h1>
            </div>
            <div className="header_text2">
              <h3>Ты все еще не с нами?</h3>
            </div>
            <div className="header_text3">
              <h2>Скорее присоединяйся к нам!</h2>
            </div>
          </div>
          <div className="Header_button__container">
            <a href="#pool" className="Header_button">
              Подробнее
            </a>
          </div>
          <div className="Header_social_icons">
            <div className="Header_icon_google">
              <a href="#">
                <img src={google} alt="" />
              </a>
            </div>
            <div className="Header_icon_telegram">
              <a href="#">
                <img src={telegram} alt="" />
              </a>
            </div>
            <div className="Header_icon_vk">
              <a href="#">
                <img src={vk} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}