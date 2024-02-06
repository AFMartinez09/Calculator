import '../stylesheets/Button.css';

function OperatorButton({ handlerClick, children }) {

  const isOperator = value => {
    return isNaN(value) && (value != '=') && (value != '.');
  }

  return (
    <button
    className={`button-container ${isOperator(children) ? 'operator' : ''}`.trim()}
    onClick={() => handlerClick(children)}>  
      {children}
    </button>
  )
}

export default OperatorButton;

{/*'' antes estaba null pero si uno quiere que no haya nada se hace de esta manera ya que en la consola Chrome, podemos ver cómo aparece la clase con la palabra operator (antes salía null bajo la condicion) y se debe de recordar que para usar otro metodo (como trim) se debe de hacer de esta manera */}
// se maneja props.children porque con este es quien va a traer la info para que pueda ser ejecutada
// se coloca () => para que esta funcion pueda ser ejecutada por medio del eventlistener (onClick) (es una funcion que llama a otra funcion)
