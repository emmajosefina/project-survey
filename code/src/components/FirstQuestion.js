import React from 'react'


const FirstQuestion = ({ 
    nameInput, 
    onNameInputChange, 
    surnameInput,
    onSurnameInputChange,
    nextPage

}) => {

    return (
        
        <div>
            <label htmlFor="name">What's your name?</label>

            <div>
                    <input
                    id="name" 
                    type="text" 
                    placeholder="First name" 
                    value={nameInput}
                    onChange={onNameInputChange}
                    />

                    <input
                    id="name" 
                    type="text" 
                    placeholder="Surname" 
                    value={surnameInput}
                    onChange={onSurnameInputChange} 
                    />      

                <div>
                <button className="btn" type="submit" onClick={nextPage}>
                    Next question!</button>
                </div>
            </div>

       </div>
    )

}

export default FirstQuestion