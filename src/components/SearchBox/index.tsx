import * as Icon from "phosphor-react"
import { SearchContainer } from "./styles"

export function SearchBox() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <Icon.MagnifyingGlass weight="duotone" size={24} />
      </button>
    </SearchContainer>
  )
}
