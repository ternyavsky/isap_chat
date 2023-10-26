import logoisap from '../ISAP.png';
import telegramlog from '../telegram1.svg';
import googlelog from '../google1.svg';
import vklog from '../vk1.svg';
import styles from './Registration.css';
import { Link } from 'react-router-dom';

export default function Registration() {
    return (
        <section className='Reg'>
            <div className="Isap_logo">
                <img src={logoisap} alt="ISAP" />
            </div>
            <div className="Reg__container">
                <div className="Reg_form">
                    <div className="Reg_title">
                        <p className='Reg_title_text'>Регистрация</p>
                    </div>
                    <div className="Reg_form">
                        <form action="#/">
                            <div className="Reg_form__nickname">
                                <div className="nickname_title">
                                    <label for="name">НИК</label>
                                    <input type="text" placeholder="Придумайте ваш ник" />
                                </div>
                            </div>
                            <div className="Reg_form__password">
                                <div className="password_title">
                                    <label for="password">ПАРОЛЬ</label>
                                    <input type="password" placeholder="Придумайте ваш пароль" />
                                </div>
                                <div className="reg_password_title">
                                    <label for="password">ПОВТОРИТЕ ПАРОЛЬ</label>
                                    <input type="password" placeholder="Повторите ваш пароль" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className='reg_button'>
                        Вход в чат
                    </button>
                    <div className="reg_to_log">
                        <a className='href_style'>
                            <Link to="/Login">Уже имеете аккаунт?</Link>
                        </a>
                    </div>
                    <div className="Icons">
                        <a href="#/">
                            <img src={googlelog} alt="" />
                        </a>
                        <a href="#/">
                            <img src={telegramlog} alt="" />
                        </a>
                        <a href="#/">
                            <img src={vklog} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}