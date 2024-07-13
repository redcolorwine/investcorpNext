import React, { useState } from 'react'
import cmedia from './accordeon.module.css';
import { FiPlus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
const AccordeonItem = (props) => {

    const [acc, openAcc] = useState(false);
    const [plus, setPlus] = useState(true);
    return (
        <div className={cmedia.accordeonItem}>
            <div className={cmedia.accHeader}>
                <h2>{props.headText}</h2>
                {plus
                    ? <FiPlus size={25} onClick={() => { setPlus(false); openAcc(true); }} />
                    : <FiX size={25} onClick={() => { setPlus(true); openAcc(false); }} />
                }

            </div>
            <hr />
            <p className={`${acc ? cmedia.accActive : ''}`}>{props.descrText}</p>
        </div>

    )
}

export default AccordeonItem