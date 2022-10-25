import { zodResolver } from "@hookform/resolvers/zod"
import * as Icon from "phosphor-react"
import { useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import * as z from "zod"
import { TransactionsContext } from "../../context/TransactionContext"
import { IconSpinner, SearchContainer } from "./styles"

const searchFormSchema = z.object({ query: z.string() })

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchBox() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })

  const {
    watch,
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({ resolver: zodResolver(searchFormSchema) })

  async function handleSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query)
    reset()
  }

  const query = watch("query")
  const isButtonSearchDisabled = !query

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register("query")} />

      <button disabled={isButtonSearchDisabled} type="submit">
        {isSubmitting ? (
          <IconSpinner weight="thin" size={24} />
        ) : (
          <Icon.MagnifyingGlass weight="duotone" size={24} />
        )}
      </button>
    </SearchContainer>
  )
}
