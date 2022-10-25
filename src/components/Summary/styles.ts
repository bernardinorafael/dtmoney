import styled from "styled-components"

export const SummaryContainer = styled.section`
  display: grid;
  gap: ${(props) => props.theme.space[8]};
  grid-template-columns: repeat(3, 1fr);
  margin: -5rem auto 0;
  max-width: 1120px;
  padding: 0 ${(props) => props.theme.space[6]};
  width: 100%;
`

interface SummaryCardTotalProps {
  summaryAmount: number
}

export const SummaryCardTotal = styled.div<SummaryCardTotalProps>`
  background: ${(props) => props.theme.colors.gray800};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 1px solid ${(props) => props.theme.colors.gray700};
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  padding: ${(props) => props.theme.space[6]} ${(props) => props.theme.space[6]};
  user-select: none;
  align-items: center;
  color: ${(props) => props.theme.colors.gray100};
  display: flex;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  justify-content: space-between;

  strong {
    display: table;
    font-size: ${(props) => props.theme.fontSizes["5xl"]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: ${(props) =>
      props.summaryAmount < 0 ? props.theme.colors.red500 : props.theme.colors.green500};
  }
`

export const SummaryCard = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.gray800};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 1px solid ${(props) => props.theme.colors.gray700};
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.colors.gray100};
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[6]} ${(props) => props.theme.space[6]};
  user-select: none;

  strong {
    display: table;
    font-size: ${(props) => props.theme.fontSizes["5xl"]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`
