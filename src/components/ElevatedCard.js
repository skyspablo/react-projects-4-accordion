import React, {useEffect, useState} from 'react'
import css from "./ElevatedCard.module.css"

export const ElevatedCard = (props) => {
    return (
        <article className={css["sisdom-ecard"]}>
            {props.children}
        </article>
    )
}

export const Accordion = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect( () => {

    },[isOpen])

    const content = isOpen ? <div className={css["sisdom-ecard-content"]}>{props.children}</div> : "";
    const toggleOpen = () => {
        setIsOpen( !isOpen )
    }

    return (
        <>
            <div className={css["sisdom-ecard-title"]}>
                <h2>{props.title ?? 'title'}</h2>
                <div className={css["sisdom-ecard-title-icon"]} onClick={ () => toggleOpen() }>{isOpen ? "-" : "+"}</div>
            </div>
            {content}
        </>
    )
}
