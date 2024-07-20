import Head from 'next/head'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Home.module.css'
import AccordeonItem from '../components/accordeonItem/AccordeonItem';
import ContactForm from '../components/contactForm/ContactForm';
import MemCard from '../components/employee/memCard';
import React, { useEffect, useRef } from 'react'
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogoThin } from "react-icons/pi";
import { textAnimation, textAnimation2, textAnimation3 } from '../components/animations';

const Home = (props) => {

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  const formRef = useRef();
  const goForm = async () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <>
      <Head>
      
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="oG9xkUteH1P1UUd-Ndav9KI5fuJr_SCrgYYVMlkhh8A" />
        <meta name="description"
          content="Современное агентство недвижимости в Москве. Путеводитель в поиске качественной недвижимости. Полное сопровождение сделок связанных с недвижимостью. Недвижимость в Москве и Подмосковье." />
        <meta name="keywords"
          content="агентство недвижимости Москва, Аренда недвижимости Москва, поиск жилья Москва, аренда Москва, элитная недвижимость Москва, аренда элитной недвижимости Москва, снять квартиру Москва, снять офис Москва, офис Москва, агентство недвижимости, недвижимость, поиск недвижимости, поиск жилья, аренда, аренда недвижимости, аренда помещений, сдать недвижимость, купить квартиру, купить помещение, Агентства недвижимости в Москве, выбрать агентство недвижимости, риэлторы агентства, брокер, риэлтор" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <title>Investment Corporation.Надежное агентство недвижимости в Москве.</title>
      </Head>
      <div className={styles.mainBlock} ref={props.mainRef} id='main'>
        <Image src={'/media/back10.jpg'} width={1080} height={1920} alt="" srcSet="" />
        <div className={styles.mainText}>
          <motion.h1 initial={'hidden'}
            whileInView={'visible'} custom={3} variants={textAnimation3}>INVESTMENT CORPORATION</motion.h1>
          <motion.p initial={'hidden'}
            whileInView={'visible'} custom={6} variants={textAnimation3}>ваш персональный помощник <br></br>в поиске <span>лучшей недвижимости</span></motion.p>
        </div>

      </div>
      <div className={styles.AppWrapper}>

        <div className={styles.aboutBlock} ref={props.aboutRef} id='about'>
          <h1> О НАС</h1>
          <motion.div initial={'hidden'}
            whileInView={'visible'} transition={{ duration: 1.5 }} className={styles.aboutWrapper}>
            <div className={styles.aboutText}>
              <p>INVESTMENT CORPORATION - это надёжное и современное агентство недвижимости, построенное на экспертном подходе, честности и доверии.</p>
              <motion.p custom={2} variants={textAnimation}><span>Мы всегда находимся на стороне клиента, рассказывая объективно обо всех достоинствах и недостатках рынка недвижимости.</span></motion.p>
              <motion.p custom={3} variants={textAnimation}>
                Благодаря профессионализму специалистов <span>INVESTMENT CORPORATION</span>, мы способны учесть все пожелания наших клиентов и подобрать лучшее для Вас решение.</motion.p>
            </div>

            <Image src={'/media/gifs/housegifcrop.gif'} unoptimized alt='gifImage' width={500} height={500} />
          </motion.div>

        </div>

        <div className={styles.team} ref={props.teamRef} id='team'>
          <h1> КОМАНДА</h1>
          <div className={styles.teamWrapper}>
            <MemCard image={'/media/photo/elen2.jpg'} animation={textAnimation} about={'Основатель компании'} name={'Елена Григорян'} custom={3} aboutText={'"Мы современная компания, создающая тренды и нацеленная на результат. Мы дружная, сплоченная команда единомышленников, влюбленных в свое дело! Наша цель - развитие и рост."'} />
            <MemCard image={'/media/photo/Анастасия.jpg'} animation={textAnimation2} about={'Руководитель отдела офисной недвижимости'} name={'Анастасия Краморенко'} custom={5} aboutText={'"Ключ к успеху в сфере недвижимости - это не только знание рынка, но и умение понимать потребности людей. Мы стремимся к тому, чтобы каждый клиент стал нашим постоянным партнером и возвращался к нам снова и снова."'} />
            <MemCard image={'/media/photo/Асатрян Ева.jpeg'} animation={textAnimation} about={'Руководитель отдела офисной недвижимости'} name={'Ева Асатрян'} custom={5} aboutText={'"Недвижимость - это комплексная и динамическая сфера. Не существует универсального рецепта успеха. Важно изучать, анализировать, быть готовым к изменениям. И мы Вам с этим поможем!"'} />
            <MemCard image={'/media/photo/Валерия Главная.jpeg'} animation={textAnimation2} about={'Руководитель отдела торговых помещений'} name={'Валерия Главная'} custom={3} aboutText={'"Брокер - это очень интересная, многогранная профессия, которая при должном усердии непременно ведет к успеху и высокому уровню заработка. А наша команда готова обучить всем необходимым навыкам и помочь развиваться в сфере недвижимости."'} />
          </div>
        </div>

        <motion.div className={styles.services} ref={props.servicesRef} id='services' initial={'hidden'}
          whileInView={'visible'} viewport={{ amount: 0.2 }}>
          <h1> НАШИ УСЛУГИ</h1>
          <div className={styles.servicesWrapper}>
            <div className={styles.servicesText}>
              <div className={styles.serviceType}><span>1</span><motion.p custom={1} variants={textAnimation3}>Переговоры с потенциальными покупателями или арендаторами недвижимости</motion.p></div>
              <div className={styles.serviceType}><span>2</span><motion.p custom={2} variants={textAnimation3}>Проведение просмотров объектов недвижимости</motion.p></div>
              <div className={styles.serviceType}><span>3</span><motion.p custom={3} variants={textAnimation3}>Ведение полного цикла сделки от подбора объекта до заключения договора</motion.p></div>
              <div className={styles.serviceType}><span>4</span><motion.p custom={4} variants={textAnimation3}>Ведение документации по сделкам с недвижимостью</motion.p></div>
            </div>
            <video width="400" autoPlay={true} muted playsInline loop style={{ pointerEvents: "none" }}>
              <source src='/media/investVideo.mp4' type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <div className={styles.searchingBest} ref={props.searchRef} id='search'>
          <h1> ПОДБОР ЛУЧШЕЙ НЕДВИЖИМОСТИ</h1 >
          <div className={styles.searchingWrapper}>
            <Slider {...settings}>
              <div>
                <div className={styles.slideText}>
                  <h4>Аренда офисов класса A, А+ и B+</h4>
                  <p>Площадь от 30 м.<sup>2</sup></p>
                </div>
                <a href='https://wa.me/+79031684670'><Image src={'/media/mc1.jpg'} height={1000} width={1000} alt="" /></a>
              </div>
              <div>
                <div className={styles.slideText}>
                  <h4>Продажа офисов класса A, A+ и B+</h4>
                  <p>Площадь от 30 м.<sup>2</sup></p>
                </div>
                <a href='https://wa.me/+79031684670'><Image src={'/media/mc2.jpg'} height={1000} width={1000} alt="" /></a>
              </div>
              <div>
                <div className={styles.slideText}>
                  <h4>Ритейл</h4>
                  <p>Площадь от 10 до 10'000 м.  <sup>2</sup></p>
                </div>
                <a href='https://wa.me/+79031684670'><Image src={'/media/mc3.jpg'} height={1000} width={1000} alt="" /></a>
              </div>
            </Slider>
            <div className={styles.searchText}>
              <p > Получить персонализированную подборку по вашим параметрам</p >
              <button onClick={() => goForm()}>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
          </div>
        </div>

        <div className={styles.accordeon} ref={props.accordeonRef} id='accordeon'>
          <h1> ВОПРОС - ОТВЕТ</h1 >
          <div className={styles.accorderonWrapper}>
            <AccordeonItem headText={'Почему стоит обратиться в агентство недвижимости INVESTMENT CORPORATION?'} descrText={'Мы предоставляем качественные услуги в сфере консалтинга по операциям с коммерческой недвижимостью для собственников, потребителей и инвесторов. Наша общественная миссия - помочь большему количеству клиентов, найти оптимальные решения вопросов, связанных с недвижимостью, обеспечить максимальную выгоду и удобство сделки, а также сделать рынок консалтинговых, брокерских услуг цивилизованным и прозрачным.'} />
            <AccordeonItem headText={'Почему выгодно сотрудничать с агентством?'} descrText={'Наше агентство сотрудничает только с надежными арендодателями и собственниками. Мы гордимся нашей командой профессиональных брокеров, ведь опыт каждого от 3-х до 10 лет, а в нашем портфолио множество успешно реализованных сделок с лучшими компаниями страны.'} />
            <AccordeonItem headText={'В чем заключается наша работа?'} descrText={'Мы будем сопровождать Вас на всем пути сделки: от выявления запроса до подписания документов. Клиент получает максимально комфортные условия, начиная от привлекательной цены, заканчивая максимальной оперативностью в решении вопросов.'} />
          </div>
        </div>

        <div className={styles.contacts} ref={props.contactsRef} id='contacts'>
          <h1>  КОНТАКТЫ</h1>
          <div className={styles.contactsWrapper}>
            <div className={styles.leftSide}>
              <div className={styles.top}>
                <div className={styles.head}>
                  <h2>Мы всегда на связи!</h2>
                  <p>Мы готовы ответить на все интересующие Вас вопросы</p>
                </div >
                <div className={styles.mail}>
                  <CiMail size={65} />
                  <p>Email: <span>investment.corporation@invest-corp.ru</span></p>
                </div >
                <div className={styles.phone}>
                  <CiPhone size={65} />
                  <p>Телефон: <span>+7 (903) 168-46-70</span></p>
                </div >
              </div>
              <div className={styles.bottom}>
                <div className={styles.socials}>
                  <h2>Социальные сети</h2>
                  <div className={styles.socIcons}>
                    <a href='https://wa.me/+79031684670' target='blank'><PiWhatsappLogoThin size={35} /></a>
                    <a href='https://www.instagram.com/invest__corp/' target='blank'><IoLogoInstagram size={35} /></a>
                    <a href='https://t.me/Investcorpro' target='blank'><PiTelegramLogoThin size={35} /></a>
                  </div>
                </div>
              </div>

            </div>

            <div className={styles.rightSide} ref={formRef}>
              <ContactForm />
            </div>

          </div>
        </div>
      </div>

    </>

  )
}

export default Home;
