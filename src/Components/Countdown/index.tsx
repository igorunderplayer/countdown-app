import React, { useEffect, useState } from 'react'
import './styles.css'

interface Props {
    count: number
}

const Countdown: React.FC<Props> = ({ count }) => {
    const [actual, setActual] = useState(count);
    useEffect(() => {
        setInterval(() => {
            setActual(value => {
                if(value > 0)
                    return value - 1
                else
                    return 0
            })
        }, 1000)
    }, [])
    
    return (
        <div className="Countdown">
        {actual}
        </div>
    )
}

export default Countdown