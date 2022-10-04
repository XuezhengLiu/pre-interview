import '../../css/PromtSection.css'

function PromtSection (props) {
  const { icon, spanAbove, spanBelow } = props
  return (
    <div class="promotSection">
      <div className='iconContainer'>
        <img src={icon} alt="" />
      </div>
      <div className='textContainer'>
        <span>{spanAbove}</span>
        <span>{spanBelow}</span>
      </div>
    </div>
  )
}

export default PromtSection