import * as Dialog from "@radix-ui/react-dialog"
import {
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "./styles"

import * as Icon from "phosphor-react"

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <DialogCloseButton asChild>
          <Icon.X weight="duotone" size={32} />
        </DialogCloseButton>

        <Dialog.Title>Nova transação</Dialog.Title>

        <form>
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <TransactionTypeContainer>
            <TransactionTypeButton variant="income" value="income">
              <Icon.ArrowCircleUp size={36} weight="duotone" />
              <span>Entrada</span>
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <Icon.ArrowCircleDown size={36} weight="duotone" />
              <span>Saída</span>
            </TransactionTypeButton>
          </TransactionTypeContainer>

          <button type="submit">Cadastrar</button>
        </form>
      </DialogContent>
    </Dialog.Portal>
  )
}
