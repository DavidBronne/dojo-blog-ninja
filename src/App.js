import './App.css';

function App() {
  
  const title = 'Welccome to the new blog';
  const likes = 50;
  const link = "http://www.google.com"

  return (
    <div className="App">
     <div className="content">
       <h1>{title}</h1>
       <p>Liked {likes} times</p>
       <p>{10}</p>
       <p>{'hello'}</p>
       <p>{Math.random() * 10}</p>
       <p>{[1,2,3]}</p>
       <a href={link}> Google site</a>
     </div>
    </div>
  );
}

export default App;