
import { Container, Content } from './styles';

import LogoImg from '../../assets/logo.svg'

interface IHeader {
  onNewTransactionModalOpen: () => void;
}

const Header = ({ onNewTransactionModalOpen }: IHeader) => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dtmoney" />
        <button type="button" onClick={onNewTransactionModalOpen}>Nova transação</button>
      </Content>
    </Container>
  );
}

export default Header;