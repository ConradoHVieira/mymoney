import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number,
    title: string,
    amount: number,
    category: string,
    createdAt: string,
    type: string
}

// interface TransactionInput {
    //     title: string,
    //     amount: number,
    //     category: string,
    //     createdAt: string,
    //     type: string
    // }

    type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
    
    interface TransactionsProviderProps {
        children: ReactNode
    }
    
    interface TransactionsContextData {
        transactions: Transaction[],
        createTransaction: (transaction: TransactionInput) => Promise<void>
    }

    //Criada para contornar erro na TransactionsContext, definindo o contexto, retorna void pois a função createTransaction não retorna nada
    
    export const TransactionsContext = createContext<TransactionsContextData>(
        {} as TransactionsContextData
        )
    
    export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {

       const response = await api.post('/transactions', {...transactionInput, 
    createdAt: new Date})
       const { transaction } = response.data

       setTransactions([
        ...transactions,
        transaction
       ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
    
            {children}
    
        </TransactionsContext.Provider>
    )
}

