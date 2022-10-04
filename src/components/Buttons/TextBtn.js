import '../../css/TextBtn.css'

function TextBtn (props) {
  const { size, text, link, weight } = props
  return (
    <div className='textBtn' style={{ fontSize: size, fontWeight: weight }}>
      <a href={link}>
        {text}
      </a>
    </div>
  )
}

export default TextBtn