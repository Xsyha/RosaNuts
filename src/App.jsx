import logo from './logo.svg';
import './App.css';

import { Button } from './components/Button'
import { Layout } from './modules/Layout/componets';

function App() {
  return( 
    <Layout>
      <Button text={'button'} color={'red'}/>
      <Button text={'button'} color={'green'} disabled/>
      <Button text={'button'} color={'violet'}/>
    </Layout>
  );
};

export default App;
