import React from 'react'

const Header = ({ question }) => {
    return (
        <div className="header">
          <h1>Hangman</h1>
          <p>{question}</p>
        </div>
    )
}
export default Header
