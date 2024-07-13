import React from 'react'
import cmedia from './footer.module.css';
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogoThin } from "react-icons/pi";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={cmedia.footer}>
            <div className={cmedia.footerWrapper}>
                <div className={cmedia.logo}>

                    <Image
                        src="/media/logo/Investment corporation.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        style={cmedia.logoimg}

                    />
                </div>
                <div className={cmedia.company}>
                    <h3>Компания</h3>
                    <ul>
                        <li>О нас</li>
                        <li>Команда</li>
                        <li>Наши услуги</li>
                        <li>Вопрос-ответ</li>
                    </ul>
                </div>
                <div className={cmedia.contacts}>
                    <h3>Контакты</h3>
                    <p>Email: <span>investment.corporation@invest-corp.ru</span></p>
                    <p>Телефон: <span>+7 (903) 168-46-70</span></p>
                </div>
                <div className={cmedia.socials}>
                    <h3>Социальные сети</h3>
                    <a href='https://wa.me/+79031684670' target='blank'><PiWhatsappLogoThin size={35} /></a>
                    <a href='https://www.instagram.com/invest__corp/' target='blank'><IoLogoInstagram size={35} /></a>
                    <a href='https://t.me/Investcorpro' target='blank'><PiTelegramLogoThin size={35} /></a>
                </div>
                <div className={cmedia.privacy}>
                    <p>
                        Отправляя сообщение в мессенджеры, я подтверждаю, что даю конкретное, предметное, информированное, сознательное и однозначное Согласие на обработку моих персональных данных, и полностью ознакомился и согласен с <a href="/privacy">Пользовательским соглашением, Политикой обработки персональных данных и файлов Cookie</a>
                    </p>
                    <br />
                    <p>
                        Вся представленная информация на сайте не является публичной офертой
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer