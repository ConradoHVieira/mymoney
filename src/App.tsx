import styled from 'styled-components'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';

const Title = styled.h1`
color: #8257e6;
font-size: 64px;
`

Modal.setAppElement('#root')


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)

  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard /> 
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />
      <GlobalStyle />
 
    </TransactionsProvider>
  )
}


 