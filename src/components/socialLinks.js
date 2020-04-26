import React from "react"
import { Row } from "reactstrap"

import "../styles/App.scss"

const SocialLinks = () => (
  <Row className="links">
    <ul className="row">
      <li className="mt-2">
        <a
          href="https://www.linkedin.com/in/mohammad-faizan-azim-8a84b1142/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin " aria-hidden="true"></i>
          <div className="link-content">Linkedin</div>
        </a>
      </li>

      <li className="mt-2">
        <a
          href="https://github.com/mdfaizan7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github" aria-hidden="true"></i>
          <div className="link-content">Github</div>
        </a>
      </li>
      <li className="mt-2">
        <a
          href="mailto: faizaanazim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-google" aria-hidden="true"></i>
          <div className="link-content">
            Gmail <div className="small">faizaanazim@gmail.com</div>
          </div>
        </a>
      </li>
      <li className="mt-2">
        <a
          href="https://www.instagram.com/md_faizan7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram " aria-hidden="true"></i>
          <div className="link-content">Instagram</div>
        </a>
      </li>
    </ul>
  </Row>
)

export default SocialLinks
