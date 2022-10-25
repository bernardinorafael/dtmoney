import styled from "styled-components"

export const TransactionsContainer = styled.main`
  margin: ${(props) => props.theme.space[16]} auto ${(props) => props.theme.space[6]};
  max-width: 1120px;
  padding: 0 ${(props) => props.theme.space[6]};
  width: 100%;
`

export const TableTransactions = styled.table`
  width: 100%;
  border-collapse: separate;
  margin-top: ${(props) => props.theme.space[6]};
  border-spacing: 0 ${(props) => props.theme.space[4]};

  td {
    padding: ${(props) => props.theme.space[4]} ${(props) => props.theme.space[4]};
    background: ${(props) => props.theme.colors.gray700};

    &:first-child {
      border-top-left-radius: ${(props) => props.theme.radii.sm};
      border-bottom-left-radius: ${(props) => props.theme.radii.sm};
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }

    &:last-child {
      border-top-right-radius: ${(props) => props.theme.radii.sm};
      border-bottom-right-radius: ${(props) => props.theme.radii.sm};
    }
  }
`

interface PriceHighlightProps {
  variant: "income" | "outcome"
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  border-radius: ${(props) => props.theme.radii.sm};
  background: ${(props) =>
    props.variant === "income" ? props.theme.colors.green700 : props.theme.colors.red700};

  color: ${(props) => props.theme.colors.white500};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  padding: ${(props) => props.theme.space[2]};
`

export const ActionButtonContainer = styled.td`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const DeleteButton = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.gray500};
  font-size: 0;
  outline: 0;
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.radii.sm};

  &:hover {
    background: ${(props) => props.theme.colors.gray800};
    transition: background-color 0.3s;
  }
`

export const EditTransactionButton = styled.a`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.gray500};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  outline: 0;
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.radii.sm};

  &:hover {
    background: ${(props) => props.theme.colors.gray800};
    transition: background-color 0.3s;
  }
`
