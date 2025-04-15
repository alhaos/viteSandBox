import './Button.css'

function handleClick() {
  console.log('Click')
}

export default function Button({ children }) {
  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  )
}
