import React from "react"
import Loadable from "@loadable/component"

const steps = [
  "I'm a Student 🎓",
  "I'm a Programmer 💻",
  "Coding is my passion 🔥",
  "I'm a ☕ lover",
  "I'm a Thinker 💡",
  "I love challenges",
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
