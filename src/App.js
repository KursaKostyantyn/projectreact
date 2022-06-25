import './App.css';
import Character from './components/Character'


function App() {
    return (
        <div className="App">
            <Character
                name={'Bart'}
                desc={'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. '}
                photo={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
            />


            <Character
                name={'Homer'}
                desc={'Homer Jay Simpson (born May 12, 1956)[36] is the main protagonist of The Simpsons series (or show).'}
                photo={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            />


            <Character
                name={'Marge'}
                desc={'Marjorie Jacqueline "Marge" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family. '}
                photo={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
            />


            <Character
                name={'Lisa'}
                desc={'Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
                photo={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
            />


            <Character
                name={'Maggie'}
                desc={'Margaret Evelyn[10] Lenny "Maggie" Simpson[11] (born January 12, 1989) is the 1-year old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'}
                photo={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
            />


        </div>
    );
}


export default App;
