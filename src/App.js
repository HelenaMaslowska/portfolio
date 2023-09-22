import logo from './logo.svg';
import './App.css';

// to run this app on website, you need to 
// npm run deploy
/*
  git add .
  git commit -m "Configure React app for deployment to GitHub Pages"
  git push origin master
*/
// master - contain source code
// gh-pages - contain distributable version of the React app

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hihi
     	</a>
 </header>
    </div>
  );
}

export default App;
