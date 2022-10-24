import * as Dialog from "@radix-ui/react-dialog"
import imageLogo from "../../assets/logotipo.svg"
import { NewTransactionModal } from "../NewTransactionModal"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img width={60} src={imageLogo} alt="" />
          <strong>dtmoney</strong>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
