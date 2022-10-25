import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import imageLogo from "../../assets/logotipo.svg"
import { NewTransactionModal } from "../NewTransactionModal"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img width={50} src={imageLogo} alt="" />
          <strong>dtmoney</strong>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              <Icon.Plus size={24} weight="bold" />
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
