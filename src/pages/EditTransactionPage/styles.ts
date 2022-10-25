import styled, { css, keyframes } from "styled-components"
import * as RadioGroup from "@radix-ui/react-radio-group"
import * as Dialog from "@radix-ui/react-dialog"

const contentShow = keyframes`
	0% {
		opacity: 0;
		transform: translate(-50%, -50%) scale(0.1);
	}

	100% {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  inset: 0;
  position: fixed;
  width: 100vw;
`

export const DialogContent = styled(Dialog.Content)`
  align-items: flex-start;

  background: ${(props) => props.theme.colors.gray800};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 1px solid ${(props) => props.theme.colors.gray700};
  box-shadow: 10px 10px 36px -7px rgba(0, 0, 0, 0.5);
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  gap: ${(props) => props.theme.space[6]};
  min-width: 32rem;
  padding: ${(props) => props.theme.space[10]};
  position: fixed;

  form {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[4]};
    width: 100%;
  }
`

export const DialogCloseButton = styled(Dialog.Close)`
  border-radius: ${(props) => props.theme.radii.sm};
  cursor: pointer;
  padding: ${(props) => props.theme.space[1]};
  position: absolute;
  right: 15px;
  top: 15px;

  &:hover {
    background: ${(props) => props.theme.colors.gray700};
    transition: background-color 0.3s;
  }
`

export const EditProjectPageContainer = styled.main`
  border: 1px solid #fff;

  align-items: flex-start;
  animation: 0.2s ${contentShow} ease-in-out;
  background: ${(props) => props.theme.colors.gray800};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 1px solid ${(props) => props.theme.colors.gray700};
  box-shadow: 10px 10px 36px -7px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[6]};
  left: 50%;
  min-width: 32rem;
  padding: ${(props) => props.theme.space[10]};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[4]};
    width: 100%;
  }
`

interface InputProps {
  error: boolean
}

export const Input = styled.input<InputProps>`
  background: ${(props) => props.theme.colors.gray900};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 0;
  color: ${(props) => props.theme.colors.gray300};
  padding: ${(props) => props.theme.space[4]};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray400};
  }

  &[type="number"] {
    &::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  ${(props) =>
    props.error === true &&
    css`
      outline: 1px solid ${props.theme.colors.red500} !important;

      &:focus {
        box-shadow: 0 0 0 3px ${props.theme.colors.red500};
      }
    `}
`

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  gap: ${(props) => props.theme.space[4]};
  grid-template-columns: repeat(2, 1fr);
  margin-top: ${(props) => props.theme.space[2]};
`

interface TransactionTypeButtonProps {
  variant: "income" | "outcome"
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  align-items: center;
  background: ${(props) => props.theme.colors.gray900};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 2px solid transparent;
  color: ${(props) => props.theme.colors.gray100};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.md};
  gap: ${(props) => props.theme.space[4]};
  justify-content: center;
  padding: ${(props) => props.theme.space[2]};

  &:focus {
    box-shadow: none;
  }

  &[data-state="unchecked"]:hover {
    border: 1px solid
      ${(props) =>
        props.variant === "income" ? props.theme.colors.green500 : props.theme.colors.red500};

    transition: border 0.3s;
  }

  &[data-state="checked"] {
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.variant === "income" ? props.theme.colors.green500 : props.theme.colors.red500};
  }
`

export const ButtonNewTransaction = styled.button`
  background: ${(props) => props.theme.colors.cyan500};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 0;
  color: ${(props) => props.theme.colors.gray900};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  height: 58px;
  margin-top: ${(props) => props.theme.space[4]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.cyan700};
    transition: background-color 0.3s;
  }
`

const spinnerLoading = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

export const ButtonSubmittingNewTransaction = styled.button`
  align-items: center;
  background: ${(props) => props.theme.colors.cyan500};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 0;
  color: ${(props) => props.theme.colors.gray900};
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  gap: ${(props) => props.theme.space[2]};
  height: 58px;
  justify-content: center;
  margin-top: ${(props) => props.theme.space[4]};
  position: relative;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    animation: ${spinnerLoading} 1.5s infinite;
    position: absolute;
    right: 10px;
  }
`
