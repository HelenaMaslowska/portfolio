import React from 'react'
import Header from './components/Header.js';
import { Outlet } from "react-router-dom"

export default function Layout() {
	return (
		<div>
			<Header />
			<main> <Outlet /> </main>
		</div>
	)
}
