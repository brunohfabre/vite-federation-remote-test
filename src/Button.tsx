import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      type='button'
      style={{ 
        height: 40, 
        padding: '0 16px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'blue', 
        color: 'white' 
      }}
    >
      {children}
    </button>
  )
}