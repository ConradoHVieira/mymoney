import styled from 'styled-components'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { useState } from 'react';

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

  return ( 
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}>
                    <h2>Nova Transação</h2>
                </Modal>
      <GlobalStyle />
    </>
  )
}
 
}
