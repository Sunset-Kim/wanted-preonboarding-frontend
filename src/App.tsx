import Route from "./router/Route";
import Router from "./router/Router";
import About from "./views/About";
import Push from "./views/Push";
import Root from "./views/Root";

function App() {
  return (
    <div className="App">
      <Router>
        <Route to="/" element={<Root />} />
        <Route to="/about" element={<About />} />
        <Route to="/asd" element={<Push />} />
      </Router>
    </div>
  );
}

export default App;
