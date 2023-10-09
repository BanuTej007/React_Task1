import './App.css';
import Counter from './components/word';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

echo "# react1" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:BanuTej007/react1.git
git push -u origin main