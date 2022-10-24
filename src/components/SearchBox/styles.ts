import styled from "styled-components"

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

    &::placeholder {
      color: ${(props) => props.theme.colors.gray500};
    }
  }

  button {
    align-items: center;
    background: transparent;
    border-radius: ${(props) => props.theme.radii.full};
    border: 1px solid ${(props) => props.theme.colors.cyan500};
    color: ${(props) => props.theme.colors.cyan500};
    display: flex;
    gap: ${(props) => props.theme.space[3]};
    outline: 0;
    padding: ${(props) => props.theme.space[4]};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.colors.cyan700};
      border: 1px solid transparent;
      color: ${(props) => props.theme.colors.gray900};
    }
  }
`
