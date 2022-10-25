import * as Icon from "phosphor-react"
import styled, { keyframes } from "styled-components"

export const SearchContainer = styled.form`
  display: flex;
  gap: ${(props) => props.theme.space[4]};

  input {
    background: ${(props) => props.theme.colors.gray900};
    border-radius: ${(props) => props.theme.radii.sm};
    border: 0;
    color: ${(props) => props.theme.colors.gray300};
    flex: 1;
    outline: 0;
    padding: ${(props) => props.theme.space[4]};

    &:focus::-webkit-input-placeholder {
      color: transparent;
      transition: color 0.2s;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.gray500};
    }
  }

  button {
    align-items: center;
    background: transparent;
    border-radius: ${(props) => props.theme.radii.sm};
    border: 1px solid ${(props) => props.theme.colors.cyan500};
    color: ${(props) => props.theme.colors.cyan500};
    display: flex;
    gap: ${(props) => props.theme.space[3]};
    outline: 0;
    padding: ${(props) => props.theme.space[4]};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.colors.gray700};
    }
  }
`

const spinnerLoading = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

export const IconSpinner = styled(Icon.CircleNotch)`
  animation: ${spinnerLoading} 1.5s infinite;
`
