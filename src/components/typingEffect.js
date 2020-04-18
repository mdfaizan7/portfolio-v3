import React from "react"
import Loadable from "@loadable/component"

const steps = [
  "I'm a Student 🎓",
  "I'm a Programmer 💻",
  "I'm a ☕ lover",
  "I'm a pretty fast learner and always intrested in learning new technologies 🤓",
  "I'm a Thinker 💡",
  "Coding is my passion 🔥",
  "I think one of my values is the ability to resolve problems",
  "I'm a Developer ♨️",
  "I'm a Rapper (wannabe)",
]

const ReactTypingEffect = Loadable(() => import("react-typing-effect"))

export default () => (
  <ReactTypingEffect
    text={steps}
    eraseDelay={1200}
    speed={60}
    typingDelay={500}
  />
)
