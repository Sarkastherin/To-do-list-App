import './TodoCounter.css';
function TodoCounter({completed, total}) {
    return <h2 className="subtitle">Has completado {completed} de {total}</h2>;
}
export { TodoCounter };
