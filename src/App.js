import './App.css';
import Layout from "./hoc/Layout/Layout";
import Day from "./components/Day/Day";


function App() {
  return (
    <div className="App">
      <Layout>
        <Day/>
      </Layout>
    </div>
  );
}

export default App;
