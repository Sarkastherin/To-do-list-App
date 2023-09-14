import './TodoButton.css'
function TodoButton(){
    return(
        <button className="todoButton"
            onClick={(event) => {
                console.log('Le diste click')
                console.log(event.target)
                }
            }
        >
            <i className="fa-solid fa-circle-plus"></i>
        </button>
    )
}
export {TodoButton}