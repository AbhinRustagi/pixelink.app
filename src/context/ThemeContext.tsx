import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { themeColors } from '@/theme/colors'

type ThemeOptions = 'light' | 'dark'

const ThemeContext = createContext<
	['light' | 'dark', Dispatch<SetStateAction<ThemeOptions>>]
>(['light', () => null])

export const ThemeContextProvider: React.FC<{
	children: React.ReactNode
}> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeOptions>('light')

	const buildTheme = (theme: ThemeOptions) => ({ colors: themeColors[theme] })

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			<EmotionThemeProvider theme={buildTheme(theme)}>
				{children}
			</EmotionThemeProvider>
		</ThemeContext.Provider>
	)
}

export const useThemeContext = () => useContext(ThemeContext)
