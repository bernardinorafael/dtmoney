import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import * as Icon from "phosphor-react"
import { useContextSelector } from "use-context-selector"
import { Header } from "../../components/Header"
import { SearchBox } from "../../components/SearchBox"
import { Summary } from "../../components/Summary"
import { TransactionsContext } from "../../context/TransactionContext"
import {
	DeleteButton,
	PriceHighlight,
	TableTransactions,
	TransactionsContainer
} from "./styles"

export function Transactions() {
  const { transactions, handleDeleteTransaction } = useContextSelector(
    TransactionsContext,
    ({ transactions, handleDeleteTransaction }) => {
      return { transactions, handleDeleteTransaction }
    }
  )

  const formatCurrency = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })

  function handleDelete(id: string) {
    handleDeleteTransaction(id)
  }

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchBox />

        <TableTransactions>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="30%">
                    {transaction.description[0].toUpperCase() +
                      transaction.description.substring(1)}
                  </td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {formatCurrency.format(+transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>
                    {transaction.category[0].toUpperCase() + transaction.category.substring(1)}
                  </td>
                  <td>
                    {formatDistanceToNow(new Date(transaction.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td width="5%">
                    <DeleteButton type="button" onClick={() => handleDelete(transaction.id)}>
                      <Icon.Trash size={24} weight="duotone" />
                    </DeleteButton>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TableTransactions>
      </TransactionsContainer>
    </div>
  )
}
