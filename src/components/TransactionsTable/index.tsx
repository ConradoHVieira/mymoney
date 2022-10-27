import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "../TransactionsTable/styles";


export function TransactionsTable() {
   useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
   }, [])
   
    return (
        <Container>
            <table>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            Compra de Mercadoria
                        </td>
                        <td className="withdraw">
                            - R$12.000,00
                        </td>
                        <td>
                            Saída
                        </td>
                        <td>
                            26/09/2022
                        </td>
                    
                    </tr>    
                    <tr>

                        <td>
                            Salário
                        </td>
                        <td className="deposit">
                            R$24.000,00
                        </td>
                        <td>
                            Entrada
                    
                        </td>
                        <td>
                            03/10/2022
                        </td>
                    </tr>
                    
                   
                </tbody>
            </table>
        </Container>
    )
}