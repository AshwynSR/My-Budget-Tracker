import { AppContext } from "../contexts/AppContext"
import { useContext } from "react"

export default function Remaining(){

    const { budget, expenses} = useContext(AppContext);
    const totalExpense = expenses.reduce(function(total, item){
        return total += item.cost;
    }, 0)

    const alertType = (totalExpense <= budget) ? "alert-success" : "alert-danger";

    return(
        <div className={`alert + ${alertType}`}>
            <span>Remaining: ${budget - totalExpense}</span>
        </div>
    )
}