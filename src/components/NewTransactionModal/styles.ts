import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"
import styled, { keyframes } from "styled-components"

const contentShow = keyframes`
	0% {
		opacity: 0;
		transform: translate(-10%, -100%) scale(.55);
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
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[4]};

    input {
      background: ${(props) => props.theme.colors.gray900};
      border-radius: ${(props) => props.theme.radii.sm};
      border: 0;
      color: ${(props) => props.theme.colors.gray300};
      padding: ${(props) => props.theme.space[4]};

      &::placeholder {
        color: ${(props) => props.theme.colors.gray500};
      }

      &[type="number"] {
        &::-webkit-inner-spin-button {
          appearance: none;
        }
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      margin-top: ${(props) => props.theme.space[4]};
      background: ${(props) => props.theme.colors.cyan500};
      border-radius: ${(props) => props.theme.radii.sm};
      font-size: ${(props) => props.theme.fontSizes.lg};
      color: ${(props) => props.theme.colors.gray900};
      font-weight: ${(props) => props.theme.fontWeight.semibold};

      &:not(:disabled):hover {
        background: ${(props) => props.theme.colors.cyan700};
        transition: background-color 0.3s;
      }
    }
  }
`

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`

interface TransactionTypeButtonProps {
  variant: "income" | "outcome"
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme.colors.gray900};
  color: ${(props) => props.theme.colors.gray100};
  padding: ${(props) => props.theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.lg};
  gap: ${(props) => props.theme.space[4]};
  cursor: pointer;
  border: 0;
  border-radius: ${(props) => props.theme.radii.sm};

  svg {
    color: ${(props) =>
      props.variant === "income" ? props.theme.colors.green700 : props.theme.colors.red700};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme.colors.gray700};
    transition: background-color 0.3s;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.colors.white500};
    background: ${(props) =>
      props.variant === "income" ? props.theme.colors.green700 : props.theme.colors.red700};

    svg {
      color: ${(props) => props.theme.colors.white500};
    }
  }
`

export const DialogCloseButton = styled(Dialog.Close)`
  border-radius: ${(props) => props.theme.radii.sm};
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: ${(props) => props.theme.space[1]};

  &:hover {
    background: ${(props) => props.theme.colors.gray700};
    transition: background-color 0.3s;
  }
`
