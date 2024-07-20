import React, { useState } from 'react';
import cmedia from './header.module.css';
import { FiAlignJustify } from 'react-icons/fi';
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const Header = (props) => {
    const router = useRouter()
    const [burger, setBurger] = useState(true);

    const clickBurger = () => {
        setBurger(!burger);
    }

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -100 },
    }

    const onHref = (e, url) => {
        e.preventDefault();
        router.push(url)
        setBurger(!burger)
    };

    return (
        <div className={cmedia.header}>
            <div className={cmedia.wrapper}>
                <FiAlignJustify size={25} color='white' onClick={() => clickBurger()} />
                <div className={cmedia.logo}>
                    <Image
                        src="/media/logo/Investment corporation3.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"

                    />
                </div>
            </div>
            <div className={`${burger ? cmedia.burger : cmedia.burger_active}`}>
                <div className={cmedia.menuWrapper}>
                    <motion.nav className={cmedia.menu} animate={!burger ? "open" : "closed"}
                        variants={variants}>
                        <li onClick={(event) => onHref(event, '/#main')}><h1>INVESTMENT CORPORATION</h1></li>
                        <li onClick={(event) => onHref(event, '/#about')}>О нас</li>
                        <li onClick={(event) => onHref(event, '/#team')}>Команда</li>
                        <li onClick={(event) => onHref(event, '/#services')}>Услуги</li>
                        <li onClick={(event) => onHref(event, '/#search')}>Подбор недвижимости</li>
                        <li onClick={(event) => onHref(event, '/#accordeon')}>Вопрос-ответ</li>
                        <li onClick={(event) => onHref(event, '/#contacts')}>Контакты</li>
                    </motion.nav>
                    <div className={cmedia.but}>
                        <FiX size={25} color='white' onClick={() => clickBurger()} />
                    </div>
                </div>
                <div className={cmedia.consult}>
                    <p><span>+7 (903) 168-46-70</span></p>
                    <p><span>investment.corporation@invest-corp.ru</span></p>
                </div>

            </div>

        </div>
    )
}

export default Header