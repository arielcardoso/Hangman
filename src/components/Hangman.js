import React from 'react'

const Hangman = ({ wrongLetters }) => {
  const errors = wrongLetters.length
  return (
    <svg height="232" width="200" className="hangman-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="30" y1="230" x2="90" y2="230" />
      <line x1="60" y1="50" x2="90" y2="20" />

      {/* <!-- Head --> */}
      {errors > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {/* <!-- Body --> */}
      {errors > 1 &&
        <line x1="140" y1="90" x2="140" y2="140" />
      }
      {/* <!-- Arms --> */}
      {errors > 2 &&
        <line x1="140" y1="95" x2="115" y2="122" />
      }
      {errors > 3 &&
        <line x1="140" y1="95" x2="165" y2="122" />
      }
      {/* <!-- Legs --> */}
      {errors > 4 &&
        <line x1="140" y1="138" x2="120" y2="170" />
      }
      {errors > 5 &&
        <line x1="140" y1="138" x2="160" y2="170" />
      }
    </svg>
  )
}

export default Hangman