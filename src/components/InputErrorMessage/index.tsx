import { SpanElement } from "./styles"

interface InputErrorMessageProps {
  children: string
}

export function InputErrorMessage({ children }: InputErrorMessageProps) {
  return <SpanElement>{children}</SpanElement>
}
