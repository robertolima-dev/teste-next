import useColor from '@/core/useColor'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function MenuErrado() {

    const router = useRouter()

    const { color } = useColor()

    console.log(color)

    return (
        <Fragment>

            <div style={{ display: 'flex', background: color, color: '#FFF', padding: '20px', width: '100%', justifyContent: 'center' }}>
                <div style={{ margin: '0 5px'}} onClick={() => router.push('/teste-componente-1')}>Correto</div>
                <div style={{ margin: '0 5px'}} onClick={() => router.push('/teste-componente-2')}>Errado</div>
            </div>

        </Fragment>
    )
}
