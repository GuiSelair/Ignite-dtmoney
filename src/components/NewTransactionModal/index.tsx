import { useState, FormEvent } from 'react';
import Modal from 'react-modal';

import closeIMG from '../../assets/close.svg';
import incomeIMG from '../../assets/entradas.svg';
import outcomeIMG from '../../assets/saidas.svg';
import api from '../../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface INewTransactionModal {
  onNewTransactionModalClose: () => void;
  isNewTransactionModalOpen: boolean;
}

export function NewTransactionModal({ isNewTransactionModalOpen, onNewTransactionModalClose }: INewTransactionModal) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      value,
      type,
      category
    };
    console.log(data);

    api.post("/transactions/", data);
  };

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onNewTransactionModalClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onNewTransactionModalClose} className="react-modal-close">
        <img src={closeIMG} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input 
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => setType('deposit')}
            isChecked={type === 'deposit'}
            checkedColor='green'
          >
            <img src={incomeIMG} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isChecked={type === 'withdraw'}
            checkedColor='red'
          >
            <img src={outcomeIMG} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}