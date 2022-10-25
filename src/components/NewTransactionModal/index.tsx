import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import { useContext } from "react"
import { Controller, useForm } from "react-hook-form"
import { ThemeContext } from "styled-components"
import { useContextSelector } from "use-context-selector"
import * as z from "zod"
import { TransactionsContext } from "../../context/TransactionContext"
import { InputErrorMessage } from "../InputErrorMessage"
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

const newTransactionFormSchema = z.object({
  description: z.string().min(1, "Campo obrigatório!"),
  price: z.number({ invalid_type_error: "Campo obrigatório!" }),
  category: z.string().min(1, "Campo obrigatório"),
  type: z.enum(["income", "outcome"]),
})

type NewTransactionFormInput = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.createTransactions
  })

  const { colors } = useContext(ThemeContext)

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewTransactionFormInput>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { type: "income" },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInput) {
    const { category, description, price, type } = data

    await createTransactions({
      type,
      price,
      category,
      description,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <DialogCloseButton asChild>
          <Icon.X weight="duotone" size={32} />
        </DialogCloseButton>

        <Dialog.Title>Nova transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
            <Input
              autoFocus
              type="text"
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
            <ButtonNewTransaction type="submit">Cadastrar</ButtonNewTransaction>
          ) : (
            <ButtonSubmittingNewTransaction disabled={isSubmitting} type="button">
              <Icon.CircleNotch color={colors.gray900} size={24} weight="bold" />
              Cadastrar
            </ButtonSubmittingNewTransaction>
          )}
        </form>
      </DialogContent>
    </Dialog.Portal>
  )
}
