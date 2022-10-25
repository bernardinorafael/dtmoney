import { useContext, useEffect, useState } from "react"
import { app } from "../../services/axios"
import * as Icon from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import {
  ButtonNewTransaction,
  ButtonSubmittingNewTransaction,
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  Input,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "./styles"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { InputErrorMessage } from "../../components/InputErrorMessage"
import { ThemeContext } from "styled-components"
import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../../context/TransactionContext"

interface Transaction {
  category: string
  description: string
  price: number
  type: "income" | "outcome"
  created_at: Date
}

interface EditTransactionPageProps {
  id?: string
  toggleModalState?: () => void
}

const newTransactionFormSchema = z.object({
  description: z
    .string()
    .min(1, "Campo obrigatório!")
    .max(65, "Número máximo de 65 caracteres permitidos!"),
  price: z.number({ invalid_type_error: "Campo obrigatório!" }),
  category: z.string().min(1, "Campo obrigatório"),
  type: z.enum(["income", "outcome"]),
})

type NewTransactionFormInput = z.infer<typeof newTransactionFormSchema>

export function EditTransactionPage({ id, toggleModalState }: EditTransactionPageProps) {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })
  const { colors } = useContext(ThemeContext)
  const [transaction, setTransaction] = useState<Transaction | null>(null)

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<NewTransactionFormInput>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {},
  })

  useEffect(() => {
    app.get(`/transactions/${id}`).then((response) => setTransaction(response.data))
  }, [id])

  async function handleUpdateTransaction(data: NewTransactionFormInput) {
    const { category, description, price, type } = data

    const response = await app.patch(`/transactions/${id}`, {
      category,
      description,
      price,
      type,
      created_at: new Date(),
    })

    setTransaction(response.data)
		toggleModalState!()
    fetchTransactions()
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <DialogCloseButton onClick={() => reset()} asChild>
          <Icon.X weight="duotone" size={32} />
        </DialogCloseButton>

        <Dialog.Title>Edite a transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleUpdateTransaction)}>
          <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
            <Input
              autoFocus
              type="text"
              maxLength={66}
              defaultValue={transaction?.description}
              placeholder="Descrição"
              {...register("description")}
              error={!!errors.description?.message}
            />

            {errors.description?.message && (
              <InputErrorMessage>{errors.description.message}</InputErrorMessage>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
            <Input
              type="number"
              placeholder="Preço"
              defaultValue={transaction?.price}
              error={!!errors.price?.message}
              {...register("price", { valueAsNumber: true })}
            />

            {errors.price?.message && (
              <InputErrorMessage>{errors.price.message}</InputErrorMessage>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
            <Input
              type="text"
              placeholder="Categoria"
              defaultValue={transaction?.category}
              {...register("category")}
              error={!!errors.category?.message}
            />
            {errors.category?.message && (
              <InputErrorMessage>{errors.category.message}</InputErrorMessage>
            )}
          </div>

          <Controller
            name="type"
            control={control}
            defaultValue={transaction?.type}
            render={({ field }) => {
              return (
                <TransactionTypeContainer onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton variant="income" value="income">
                    <Icon.ArrowCircleUp size={36} weight="duotone" color={colors.green500} />
                    <span>Entrada</span>
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <Icon.ArrowCircleDown size={36} weight="duotone" color={colors.red500} />
                    <span>Saída</span>
                  </TransactionTypeButton>
                </TransactionTypeContainer>
              )
            }}
          />

          {!isSubmitting ? (
            <ButtonNewTransaction type="submit">Salvar</ButtonNewTransaction>
          ) : (
            <ButtonSubmittingNewTransaction disabled={isSubmitting} type="button">
              <Icon.CircleNotch color={colors.gray900} size={24} weight="bold" />
              Salvar
            </ButtonSubmittingNewTransaction>
          )}
        </form>
      </DialogContent>
    </Dialog.Portal>
  )
}
