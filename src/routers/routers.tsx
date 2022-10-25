import { Routes, Route } from "react-router-dom"
import { EditTransactionPage } from "../pages/EditTransactionPage"
import { Transactions } from "../pages/index.transactions"
export function RoutersPage() {
  return (
    <Routes>
      <Route path="/" element={<Transactions />} />
      <Route path="/:id" element={<EditTransactionPage />} />
    </Routes>
  )
}
