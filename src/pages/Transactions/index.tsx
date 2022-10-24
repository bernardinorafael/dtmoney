import { Header } from "../../components/Header"
import { SearchBox } from "../../components/SearchBox"
import { Summary } from "../../components/Summary"
import { TransactionsContainer, TableTransactions, PriceHighlight } from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchBox />

        <TableTransactions>
          <tbody>
            <tr>
              <td width="50%"> Desenvolvimento de software</td>
              <td>
                <PriceHighlight variant="income">&nbsp;&nbsp;R$ 500,00</PriceHighlight>
              </td>
              <td>Vendas</td>
              <td>13/04/22</td>
            </tr>

            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 500,00</PriceHighlight>
              </td>
              <td>Vendas</td>
              <td>13/04/22</td>
            </tr>
          </tbody>
        </TableTransactions>
      </TransactionsContainer>
    </div>
  )
}
