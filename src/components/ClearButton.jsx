import '../stylesheets/Clear-button.css';

const ClearButton = ({ handlerClear, children }) => {
  return (
    <button className='clear-button' 
    onClick={handlerClear}>
        {children}
    </button>
  )
}

export default ClearButton;