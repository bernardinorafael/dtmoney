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

export const SummaryCard = styled.div`
  background: ${(props) => props.theme.colors.gray700};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: ${(props) => props.theme.space[4]};
  user-select: none;

  header {
    align-items: center;
    color: ${(props) => props.theme.colors.gray100};
    display: flex;
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.colors.gray500};
      font-size: ${(props) => props.theme.fontSizes.xl};
      padding-bottom: ${(props) => props.theme.space[1]};
    }
  }

  strong {
    display: table;
    font-size: ${(props) => props.theme.fontSizes["5xl"]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-top: ${(props) => props.theme.space[4]};
  }
`
