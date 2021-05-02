import React from 'react'

function Word({ selectedWord, correctLetters }){
    return (
        <div className="word"  >
            {selectedWord.split('').map( (letter, i) => {

                if (correctLetters.includes(letter.toLowerCase())) {
                    return (<span className="letter" key={i} >{letter.toUpperCase()}</span>);
                }
                
                if (letter === " "){
                    return (<span className="space" key={i} >-</span>);
                }

                return (<span className="letter" key={i} ></span>);
            })}
        </div>
    )
}

export default Word
