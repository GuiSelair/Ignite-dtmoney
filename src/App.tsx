import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import GlobalStyles from "./styles/GlobalStyles";


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyles/>
      <Header 
        onNewTransactionModalOpen={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal 
        isNewTransactionModalOpen={isNewTransactionModalOpen} 
        onNewTransactionModalClose={handleCloseNewTransactionModal}
      />
      
    </>
  );
}

