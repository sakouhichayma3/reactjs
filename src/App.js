{/* importation de stylesheet du boostrap */}
import 'bootstrap/dist/css/bootstrap.min.css';
{/* importation de nos composants */}
import Formulo from './composant/Formulo';
import Carous from './composant/Carous';
function App() {
  return (
    <>
    {/*l'insertionou l'appel de nos composants */}
    <Carous/>
    <Formulo/>
    <h1>hello word</h1></>
  );
}

export default App;
