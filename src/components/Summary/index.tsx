import * as Icon from "phosphor-react"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { useSummary } from "../../hooks/useSummary"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {
  const { colors } = useContext(ThemeContext)
  const { summary } = useSummary()

  const formatCurrency = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <Icon.ArrowCircleUp size={36} weight="duotone" color={colors.green700} />
        </header>

        <strong>{formatCurrency.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <Icon.ArrowCircleDown size={36} weight="duotone" color={colors.red700} />
        </header>

        <strong>{formatCurrency.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Total</span>
          <Icon.Cardholder size={36} weight="duotone" color={colors.cyan700} />
        </header>

        <strong>{formatCurrency.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
