import ExpenseItem from "./ExpenseItem"
import { AppContext } from "../contexts/AppContext"
import { useContext } from "react"

export default function ExpenseList(){

    const {expenses} = useContext(AppContext);
    return(
        <ul className="list-group">
            {expenses.map(expense => (
                <ExpenseItem 
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </ul>
    )
}