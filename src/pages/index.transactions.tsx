import * as Dialog from "@radix-ui/react-dialog"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import * as Icon from "phosphor-react"
import { useContext, useState } from "react"
import { ThemeContext } from "styled-components"
import { useContextSelector } from "use-context-selector"
import { SearchBox } from "../components/SearchBox"
import { Summary } from "../components/Summary"
import { TransactionsContext } from "../context/TransactionContext"
import { EditTransactionPage } from "./EditTransactionPage"

import {
  ActionButtonContainer,
  DeleteButton,
  EditTransactionButton,
  PriceHighlight,
  TableTransactions,
  TransactionsContainer,
} from "./styles.transactions"

export function Transactions() {
  const { colors } = useContext(ThemeContext)
  const [openModal, setOpenModal] = useState(false)

  function toggleModalState() {
    setOpenModal(!openModal)
  }

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
      <Summary />

      <TransactionsContainer>
        <SearchBox />

        <TableTransactions>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">
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
                  <ActionButtonContainer>
                    <DeleteButton type="button" onClick={() => handleDelete(transaction.id)}>
                      <Icon.Trash size={24} weight="duotone" color={colors.red500} />
                    </DeleteButton>

                    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
                      <Dialog.Trigger asChild>
                        <EditTransactionButton type="button">
                          <Icon.Pencil size={24} weight="duotone" />
                        </EditTransactionButton>
                      </Dialog.Trigger>

                      <EditTransactionPage
                        toggleModalState={toggleModalState}
                        id={transaction.id}
                      />
                    </Dialog.Root>
                  </ActionButtonContainer>
                </tr>
              )
            })}
          </tbody>
        </TableTransactions>
      </TransactionsContainer>
    </div>
  )
}
