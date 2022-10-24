import styled from "styled-components"

export const TransactionsContainer = styled.main`
  margin: ${(props) => props.theme.space[16]} auto 0;
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
  color: ${(props) =>
    props.variant === "income" ? props.theme.colors.green300 : props.theme.colors.red300};
`
