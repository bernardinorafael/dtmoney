import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.gray900};
  padding: ${(props) => props.theme.space[8]} 0 ${(props) => props.theme.space[30]};
  user-select: none;
`

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 ${(props) => props.theme.space[6]};
  width: 100%;

  > div {
    align-items: center;
    display: flex;
    gap: ${(props) => props.theme.space[2]};

    strong {
      font-size: ${(props) => props.theme.fontSizes["2xl"]};
    }
  }
`

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme.colors.cyan500};
  border-radius: ${(props) => props.theme.radii.sm};
  border: none;
  color: ${(props) => props.theme.colors.gray900};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  height: 50px;
  padding: 0 ${(props) => props.theme.space[5]};

  &:hover {
    background: ${(props) => props.theme.colors.cyan700};
    transition: background-color 0.3s;
  }
`
