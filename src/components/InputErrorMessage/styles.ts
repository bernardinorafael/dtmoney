import styled from "styled-components"

export const SpanElement = styled.span`
  color: ${(props) => props.theme.colors.red500};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`
