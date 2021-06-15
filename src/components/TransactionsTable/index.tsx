import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    async function initialRequest() {
      const { data } = await api.get('/transactions');
      setTransaction(data);
    }

    initialRequest();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="title">
              Desenvolvimento de website
            </td>
            <td className="income">R$1200</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          
          <tr>
            <td className="title">
              Alguel
            </td>
            <td className="outcome">- R$500</td>
            <td>Casa</td>
            <td>21/02/2021</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  );
}