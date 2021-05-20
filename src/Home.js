import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState('Eliot');
    const [age, setAge] = useState('10')
   
    const handleCLick = () => {
        setName('Coucou')
        setAge(11)
    }
    

    return ( 
        <div className="home">
            <h1>Home</h1>
            <p>{name} is {age} months old</p>
            <button onClick={handleCLick}>Click me</button>
        </div>
     );
}
 
export default Home;