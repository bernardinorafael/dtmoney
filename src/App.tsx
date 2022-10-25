import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { TransactionProvider } from "./context/TransactionContext"
import { RoutersPage } from "./routers/routers"
import { GlobalStyles } from "./styles/global"
import theme from "./styles/theme/theme"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <TransactionProvider>
        <GlobalStyles />

        <BrowserRouter>
          <Header />
          <RoutersPage />
        </BrowserRouter>
      </TransactionProvider>
    </ThemeProvider>
  )
}
