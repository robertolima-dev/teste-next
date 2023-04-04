import MenuErrado from '@/components/MenuErrado'
import useColor from '@/core/useColor'
import { Fragment } from 'react'


export default function Home() {

    const {
        color,
        setColor
    } = useColor()

    console.log(color)

    return (
        <Fragment>

            <MenuErrado />

            <h1 style={{ textAlign: 'center', margin: '80px 0'}}>Sou o componente errado</h1>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button className="button-style"onClick={() => setColor('blue')}>Selecione a cor azul</button>
                <button className="button-style"onClick={() => setColor('green')}>Selecione a cor verde</button>
                <button className="button-style"onClick={() => setColor('grey')}>Selecione a cor cinza</button>
                <button className="button-style"onClick={() => setColor('purple')}>Selecione a cor roxa</button>
                <button className="button-style"onClick={() => setColor('black')}>Selecione a cor preta</button>
            </div>
        
        </Fragment>
    )
}
