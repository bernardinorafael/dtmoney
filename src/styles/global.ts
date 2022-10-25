import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:focus {
		box-shadow: 0 0 0 3px ${(props) => props.theme.colors.cyan500};
		outline: none;
	}

	body {
		-webkit-font-smoothing: antialiased;
		background: ${(props) => props.theme.colors.gray800};
		color: ${(props) => props.theme.colors.gray100};
	}

	body, input, textarea, button, select {
		font-family: ${(props) => props.theme.fonts.default};
		font-size: ${(props) => props.theme.fontSizes.md};
		font-weight: ${(props) => props.theme.fontWeight.regular};
	}

	button {
		cursor: pointer;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar {
		width: ${(props) => props.theme.space[2]};
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.colors.gray700};
		border-radius: ${(props) => props.theme.radii.sm};
	}
`
