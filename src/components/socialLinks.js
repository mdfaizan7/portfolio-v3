import React from "react"
import "../styles/App.scss"

const SocialLinks = () => {
  return (
    <div className="social-links">
      <ul>
        <li>
          <a href="#">
            <i class="fab fa-facebook" aria-hidden="true"></i>- Facebook
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter" aria-hidden="true"></i>- Twitter
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-google-plus" aria-hidden="true"></i>- Google{" "}
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram " aria-hidden="true"></i>- Instagram
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
