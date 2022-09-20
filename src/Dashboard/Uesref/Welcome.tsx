

import { useEffect, useRef } from "react"

export default function Welcome() {
    const paraRef = useRef<null | HTMLParagraphElement>(null)
    useEffect(() => {
        console.log(paraRef.current?.innerHTML) // Hello World
      })
    return <p ref={paraRef}>Hello</p>
  }
