import TextField from './components/textField';
import Header from './components/header';
import Cards from './components/cards';

const App = () => (
  <>
    <Header links={[
      {name: 'Home', url: '/'}, 
      {name: 'Blog', url: '/blog'}, 
      {name: 'About', url: '/about'}]}/>
    <TextField type="date">Nombre:</TextField>
    <Cards cards={
      [
        {
          title : 'Coca Cola',
          description: 'Esta es una bebida gaseosa con mucha azucar',
          price: 3000,
          image: '/vite.svg'
        },
        {
          title : 'Papitas',
          description: 'Este es un mekato',
          price: 3500,
          image: '/vite.svg'
        }
      ]
    }
  />
  </>
);

export default App;