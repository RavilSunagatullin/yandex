import './globals.css'
import { Metadata } from 'next'
import React from 'react'

import {Header} from '@/app/components/Header/Header'
import {Footer} from '@/app/components/Footer/Footer'

export const metadata:Metadata = {
	title: 'Pindie',
	description: 'Портал инди-игр от студентов Яндекс Практикума',
}

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
		<body>
		<Header/>
		{children}
		<Footer/>
		</body>
		</html>
	)
}
