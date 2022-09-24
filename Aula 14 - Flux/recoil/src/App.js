import './App.css';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState } from './atoms';

function App() {
  const User = useRecoilValue(userState);
  const [user, setUser] = useRecoilState(userState);

  return (
    <> 
      <h2>Olá, {User.nome}.</h2>
      <h4>{User.email}</h4>
      <input 
        value={user.nome} 
        placeholder="Digite seu nome"
        onChange={ (e) => setUser({...user,"nome": e.target.value})}
      />
      <input
        value={user.email}
        placeholder="Digite seu email"
        onChange={ (e) => setUser({...user,"email": e.target.value})}
      />
    
    </>
  );
}

export default App;
