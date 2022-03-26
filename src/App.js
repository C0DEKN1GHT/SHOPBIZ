import './App.css';
import VegList from './components/VegList';
import ProductList from './components/ProductList';
import Nav from './components/Nav';

function App() {

  return (
    <div style={{ backgroundColor: "#fffff0" }}>
      <Nav />
      <VegList />
      <ProductList />
    </div>
  );
}

export default App;
