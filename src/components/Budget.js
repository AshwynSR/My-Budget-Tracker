import { AppContext } from "../contexts/AppContext"
import { useContext, useState } from "react"

export default function Budget(){

    const { budget, dispatch } = useContext(AppContext)
    const [toggle, setToggle] = useState(false);
    const [newBudget, setNewBudget] = useState(0);

    function handleEdit(){
        setToggle(previous => !previous)
    }
    function handleSave(){
        dispatch({
            type: "EDIT_BUDGET",
            payload: newBudget,
        })
        setToggle(previous => !previous)
    }

    if(!toggle){
        return(
            <div className="alert alert-secondary justify-content-between d-flex">
                <span>Budget: ${budget}</span>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary btn-sm" onClick={handleEdit}>Edit</button>   
                </div>
            </div>
        )
    } else {
        return(
            <div className="alert alert-secondary justify-content-between d-flex">
                <input class="form-control"  type="number" onChange={e => setNewBudget(e.target.value)} placeholder="Enter new budget"/>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">    
                    <button type="submit" className="btn btn-primary btn-sm" onClick={handleSave}>Save</button>   
                </div>
            </div>
        )
    }
    
}