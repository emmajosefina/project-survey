import React from 'react'
// import { nameInput } from './FirstQuestion'

const SecondQuestion = ({
    nameInput, 
    nextPage, 
    backPage
}) => {

    const onEmailInputChange = ('')
    const emailInput = ('')

    return (

        <>
        <p>Alright <span className="username">{nameInput}</span>,</p>
        <label htmlFor="email">What's your email address?</label>

        <input
        id="name"
        type="text"
        placeholder="Email"
        value={emailInput}
        onChange={onEmailInputChange}
         />

        <div>
        <button className="btn" onClick={nextPage}>Next!
        </button>

        <button className="btn" onClick={backPage}>
            <span role="img" aria-label="back arrow emoji">↩️</span> Go back
        </button>
        </div>
        </>
    )
}


export default SecondQuestion