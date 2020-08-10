import React from 'react'

function Letters({ correctLetters, wrongLetters, setLetter }){
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    return (
        <div className="letters"  >
            {letters.map( (letter) => {
                if (wrongLetters.includes(letter)) {
                    return <span className="wrong">{letter.toUpperCase()}</span>
                } else if (correctLetters.includes(letter)) {
                    return <span className="correct">{letter.toUpperCase()}</span>
                } else {
                    return <a onClick={setLetter.bind(this, letter.toLowerCase())} href="javascript:;" >{letter.toUpperCase()}</a>
                }
            })}
        </div>
    )
}

export default Letters
