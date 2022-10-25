import { ReactNode, useEffect, useState, useCallback } from "react"
import { v4 as uuid } from "uuid"
import { createContext } from "use-context-selector"
import { app } from "../services/axios"

interface TransactionProviderProps {
  children: ReactNode
}

interface createTransactionsProps {
  description: string
  price: number
  category: string
  type: "income" | "outcome"
}

interface Transactions {
  category: string
  created_at: Date
  description: string
  id: string
  price: number
  type: "income" | "outcome"
}

interface TransactionsContextType {
  transactions: Transactions[]

  createTransactions: (data: createTransactionsProps) => Promise<void>
  fetchTransactions: (query?: string) => Promise<void>
  handleDeleteTransaction: (id?: string) => void
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function handleDeleteTransaction(id?: string) {
    await app.delete(`/transactions/${id}`)

    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await app.get("/transactions", {
      params: {
        _sort: "created_at",
        _order: "desc",
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransactions = useCallback(async (data: createTransactionsProps) => {
    const { category, description, price, type } = data

    const response = await app.post("/transactions", {
      type,
      price,
      category,
      id: uuid(),
      description,
      created_at: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransactions,
        handleDeleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
