import { useEffect, useState } from 'react'

const useDarkMode = () => {
	const [theme, setTheme] = useState(localStorage.theme)

	const colorTheme = theme === 'dark-mode' ? null : 'dark-mode'

	useEffect(() => {
		const root = document.body
		root.classList.remove(colorTheme)
		root.classList.add(theme)
		localStorage.setItem('theme', theme)
	}, [theme, colorTheme])

	return [colorTheme, setTheme]
}

export default useDarkMode
