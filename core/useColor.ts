import { useState } from "react"

export default function useColor() {

    const [color, setColor] = useState('green')

    return {
        color,
        setColor
    }
}