import { useState } from 'react'
import myMoneyLogo from '../../assets/myMoneyLogo.svg'


import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={myMoneyLogo} alt="my money" />
                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
              
            </Content>

        </Container>
    )
}