import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

interface ITransaction {
  title: string;
  id: number;
  amount: number;
  createdAt: string;
  category: string;
  type: "deposit" | "withdraw";
}

export function TransactionTable() {
  const [transactions, setTransaction] = useState<ITransaction[]>([]);

  useEffect(() => {
    async function initialRequest() {
      const { data } = await api.get('/transactions');
      setTransaction(data.transactions);
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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="title">
                {transaction.title}
              </td>
              <td className={transaction.type === "deposit" ? "income" : "outcome"}>{new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}