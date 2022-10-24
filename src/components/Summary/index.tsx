import * as Icon from "phosphor-react"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {
  const { colors } = useContext(ThemeContext)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <Icon.ArrowCircleUp size={36} weight="duotone" color={colors.green500} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <Icon.ArrowCircleDown size={36} weight="duotone" color={colors.red500} />
        </header>

        <strong>R$ 400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Total</span>
          <Icon.Cardholder size={36} weight="duotone" color={colors.cyan500} />
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
