import '../../css/BrandBtn.css'

function BrandBtn (props) {

  const { type, text, icon } = props

  return (
    <div className='brandBtn'>
      <i className={icon} style={{ fontSize: '5px' }}></i>
      <p className={type}>{text}</p>
    </div>
  )
}

export default BrandBtn