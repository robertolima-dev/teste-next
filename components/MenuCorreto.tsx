import { Fragment } from 'react'
import { useRouter } from 'next/router'
import LinkMenu from './LinkMenu'


interface IProps {
    color: string
}

export default function MenuCorreto({ color }: IProps) {

    const router = useRouter()

    return (
        <Fragment>

            <div style={{ display: 'flex', background: color, color: '#FFF', padding: '20px', width: '100%', justifyContent: 'center' }}>
                <div style={{ margin: '0 5px' }} onClick={() => router.push('/teste-componente-1')}>Correto</div>
                <div style={{ margin: '0 5px' }} onClick={() => router.push('/teste-componente-2')}>Errado</div>
            </div>

        </Fragment>
    )
}
