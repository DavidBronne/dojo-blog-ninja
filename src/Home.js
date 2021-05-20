const Home = () => {
    
    const handleCLick = (e) => {
        console.log("Hello Eliot", e);   
    }

    const handleClickForMore = (name, e) => console.log('Hello ' + name , e.target);
    

    return ( 
        <div className="home">
            <h1>Home</h1>
            <button onClick={handleCLick}>Click me</button>
            <button onClick={(e) => handleClickForMore('Coucou', e)}>Click for more</button>
        </div>
     );
}
 
export default Home;