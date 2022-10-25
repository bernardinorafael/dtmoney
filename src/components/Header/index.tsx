import * as Dialog from "@radix-ui/react-dialog"
import imageLogo from "../../assets/logotipo.svg"
import { NewTransactionModal } from "../NewTransactionModal"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img width={50} src={imageLogo} alt="" />
          <strong>ig.money</strong>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              {/* <Icon.Plus size={24} weight="bold" /> */}
              <span>Cadastrar</span>
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
