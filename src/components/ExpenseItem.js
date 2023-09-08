import { TiDelete } from "react-icons/ti"
import { AppContext } from "../contexts/AppContext"
import { useContext } from "react"


export default function ExpenseItem(props){

    const { dispatch } = useContext(AppContext);

    const onDelete = () =>{
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        })
    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <h4>
                <span className="badge bg-primary rounded-pill" >${props.cost}</span>
                <TiDelete size="2em" onClick={onDelete} />
            </h4>
        </li>
    )
}