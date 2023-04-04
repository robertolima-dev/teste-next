import { useState } from "react"

export default function useColor() {

    const [color, setColor] = useState('blue')

    return {
        color,
        setColor
    }
}