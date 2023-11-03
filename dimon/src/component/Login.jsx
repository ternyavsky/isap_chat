import logoisap from '../ISAP.png';
import telegramlog from '../telegram1.svg';
import googlelog from '../google1.svg';
import vklog from '../vk1.svg';
import styles from './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <section className='Login'>
            <div className="Isap_logo">
                <img src={logoisap} alt="ISAP" />
            </div>
            <div className="Login__container">
                <div className="Login_form">
                    <div className="Login_title">
                        <p className='Login_title_text'>Вход в мессенджер</p>
                    </div>
                    <div className="Login_form">
                        <form action="#/">
                            <div className="Login_form__nickname">
                                <div className="nickname_title">
                                    <label for="name" className='log_lab_nick'>НИК</label>
                                    <input type="text" placeholder="Введите ваш ник"  className='log_inp_nick'/>
                                </div>
                            </div>
                            <div className="Login_form__password">
                                <div className="password_title">
                                    <label for="password" className='log_lab_pas'>ПАРОЛЬ</label>
                                    <input type="password" placeholder="Введите ваш пароль" className='log_inp_pas'/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className='Login_button'>
                        Вход в чат
                    </button>
                    <div className="Login_to_reg">
                        <a className='href_style'>
                            <Link to="/Registration">Регистрация</Link>
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
};