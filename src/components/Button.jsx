import React from 'react'

function Button({bgColor, color, size, text, borderRadius}) {
  return (
    <div>
      <button
        type='button'
      style={{ backgroudColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl` }
      >

      </button>
    </div>
  )
}

export default Button