import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image alt='logo' src={'/logo.svg'} width={50} height={50}></Image>
			<h1 className='font-SpaceGrotesk text-4xl font-bold'>Sammi</h1>
		</Link>
	)
}

export default Logo
