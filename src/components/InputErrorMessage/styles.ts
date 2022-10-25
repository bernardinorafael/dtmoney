import styled from "styled-components"

export const SpanElement = styled.span`
  color: ${(props) => props.theme.colors.red500};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  font-size: ${(props) => props.theme.fontSizes.sm};
`
