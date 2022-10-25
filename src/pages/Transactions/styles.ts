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
  border-spacing: 0 ${(props) => props.theme.space[2]};

  td {
    padding: ${(props) => props.theme.space[6]} ${(props) => props.theme.space[8]};
    background: ${(props) => props.theme.colors.gray700};

    &:first-child {
      border-top-left-radius: ${(props) => props.theme.radii.sm};
      border-bottom-left-radius: ${(props) => props.theme.radii.sm};
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

export const DeleteButton = styled.button`
  background: transparent;
  border-radius: ${(props) => props.theme.radii.sm};
  border: 0;
  color: ${(props) => props.theme.colors.gray500};
  font-size: 0;
  outline: 0;
  padding: ${(props) => props.theme.space[2]};

  &:focus {
		color: ${(props) => props.theme.colors.red500};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.red500};
  }

  &:hover {
    background: ${(props) => props.theme.colors.gray800};
    transition: background-color 0.3s;
  }
`
