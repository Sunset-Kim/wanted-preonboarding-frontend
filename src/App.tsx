import Route from "./router/Route";
import Router from "./router/Router";
import About from "./views/About";
import Root from "./views/Root";

function App() {
  return (
    <div className="App">
      <Router>
        <Route to="/" element={<Root />} />
        <Route to="/about" element={<About />} />
      </Router>
    </div>
  );
}

export default App;
