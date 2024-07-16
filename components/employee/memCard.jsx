import React from 'react';
import cmedia from './memCard.module.css';
import { motion } from "framer-motion";

const MemCard = (props) => {
    return (
        <motion.div className={cmedia.memCard} initial={'hidden'}
            whileInView={'visible'} custom={props.custom} variants={props.animation}>
            <img src={props.image} alt="team1" />
            <div className={cmedia.memText}>
                <div className={cmedia.memHead}>
                    <h4>{props.name}</h4>
                    <p><span>{props.about}</span></p>
                </div>
                <p>{props.aboutText}</p>
            </div>
        </motion.div>
    )
}

export default MemCard