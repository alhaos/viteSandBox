export default function Header(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong>
        <br></br>
        <p>{props.description}</p>
      </p>
    </li>
  )
}
