import React from 'react'
import Form from '../form/Form'

interface Props {
    lang:string,
    toggleLang:()=>void
}

const Card = ({lang,toggleLang}: Props) => {
    return (
        <div className="card">
            <Form lang={lang} toggleLang={toggleLang} />
        </div>
    )
}

export default Card
