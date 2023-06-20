import { ReactNode } from "react"
import reactLogo from './assets/react.svg'

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
        backgroundColor: 'tomato', 
        color: 'white' 
      }}
    >
      {children}

      <img src={reactLogo} className="logo react" alt="React logo" width={32} height={32} />
    </button>
  )
}