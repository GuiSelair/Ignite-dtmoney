import { Container, Content } from './styles';

import LogoImg from '../../assets/logo.svg'

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dtmoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}

export default Header;