import * as Icon from "phosphor-react"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { useSummary } from "../../hooks/useSummary"
import { SummaryCard, SummaryCardTotal, SummaryContainer } from "./styles"

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
        <strong>{formatCurrency.format(summary.income)}</strong>
        <Icon.ArrowCircleUp size={40} weight="duotone" color={colors.green700} />
      </SummaryCard>

      <SummaryCard>
        <strong>{formatCurrency.format(summary.outcome)}</strong>
        <Icon.ArrowCircleDown size={40} weight="duotone" color={colors.red700} />
      </SummaryCard>

      <SummaryCardTotal summaryAmount={summary.total}>
        <strong>
          {summary.total > 0 && "+"}
          {formatCurrency.format(summary.total)}
        </strong>
        <Icon.Coins
          size={40}
          weight="duotone"
          color={summary.total < 0 ? colors.red500 : colors.green500}
        />
      </SummaryCardTotal>
    </SummaryContainer>
  )
}
