import { Fragment } from 'react'
import { useRouter } from 'next/router'


interface IProps {
    activeCorreto:boolean
    activeErrado: boolean
}

export default function LinkMenu({ activeCorreto, activeErrado }: IProps) {

    const router = useRouter()

    return (
        <Fragment>

            <div style={{ margin: '0 5px', borderBottom: activeCorreto ? '1px solid white' : 'none'}} onClick={() => router.push('/teste-componente-1')}>Correto</div>
            <div style={{ margin: '0 5px', borderBottom: activeErrado ? '1px solid white' : 'none'}} onClick={() => router.push('/teste-componente-2')}>Errado</div>

        </Fragment>
    )
}
