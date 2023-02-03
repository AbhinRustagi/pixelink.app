import { Global, css } from '@emotion/react'

const styles = css`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		color: #343434;
		background: #fefefe;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`

export const GlobalStyles = () => <Global styles={styles} />
