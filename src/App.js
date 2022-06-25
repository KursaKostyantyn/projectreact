import './App.css';
import Character from './components/Character';

function App() {
  return (
      <div className="App">
        <div className='container'>
          <Character
              id={1}
              name={'Rick Sanchez'}
              status={'Alive'}
              species={'Human'}
              gender={'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
          />
          <Character
              id={2}
              name={'Morty Smith'}
              status={'Alive'}
              species={'Human'}
              gender={'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
          />
          <Character
              id={3}
              name={'Summer Smith'}
              status={'Alive'}
              species={'Human'}
              gender={'Female'}
              image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
          />
        </div>
        <div className='container'>
          <Character
              id={4}
              name={'Beth Smith'}
              status={'Alive'}
              species={'Human'}
              gender={'Female'}
              image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
          />
          <Character
              id={5}
              name={'Jerry Smith'}
              status={'Alive'}
              species={'Human'}
              gender={'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
          />
          <Character
              id={6}
              name={'Abadango Cluster Princess'}
              status={'Alive'}
              species={'Alien'}
              gender={'Female'}
              image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
          />
        </div>

      </div>
  );
}

export default App;
