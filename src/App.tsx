import { ThemeProvider } from "styled-components"
import { TransactionProvider } from "./context/TransactionContext"
import { Transactions } from "./pages/Transactions"
import { GlobalStyles } from "./styles/global"
import theme from "./styles/theme/theme"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <TransactionProvider>
        <GlobalStyles />
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}
