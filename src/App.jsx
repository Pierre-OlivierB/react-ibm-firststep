import "./bootstrap.min.css";

function App() {
  return (
    <div className=" container bg-secondary">
      <h2 className="text-warning">Contenu</h2>
      <ul className="list-group bg-secondary">
        <li className="list-group-item bg-secondary rounded border border-primary">
          Partie 1
        </li>
        <li className="list-group-item bg-secondary rounded border border-primary">
          Partie 2
        </li>
        <li className="list-group-item bg-secondary rounded border border-primary">
          Partie 3
        </li>
        <li className="list-group-item bg-secondary rounded border border-primary">
          Partie 4
        </li>
      </ul>
    </div>
  );
}

export default App;
