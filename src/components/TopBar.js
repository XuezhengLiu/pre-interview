import React from 'react'
import '../css/TopBar.css'
import LoginImg from '../icons/user.png'

const TopBar = () => {
  return (
    <div className='tbContainer'>
      <div className='bestStore'>The Best Online Store</div>
      <div className='login'>
        <div className='socialIcon'>
          <ul>
            <li>
              <a href="https://www.facebook.com/" title="facebook">
                <i class="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" title="twitter">
                <i class="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/" title="linkedin">
                <i class="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" title="youtube">
                <i class="fab fa-youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" title="instagram">
                <i class="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className='loginIcon'>
          <img src={LoginImg} alt="" />
          Login
        </div>
      </div>
    </div>
  )
}

export default TopBar