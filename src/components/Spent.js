import { AppContext } from "../contexts/AppContext"
import { useContext } from "react"

export default function Spent(){

    const { expenses } = useContext(AppContext);
    const totalExpense = expenses.reduce(function(total, item){
        return total += item.cost;
    }, 0)

    return(
        <div className="alert alert-info">
            <span>Spent so far: ${totalExpense}</span>
        </div>
    )
}