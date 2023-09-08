import { useState, useContext } from "react"
import { AppContext } from "../contexts/AppContext";
import { v4 as uuidv4} from "uuid";

export default function AddExpense(){

    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        }
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        })
        setName('')
        setCost('')
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div class="row mb-3">
                    <label for="name" class="col-sm-1 col-form-label">Name</label>
                    <div class="col-sm-5">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="name" 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="cost" class="col-sm-1 col-form-label">Cost</label>
                    <div class="col-sm-5">
                        <input 
                        type="number" 
                        class="form-control" 
                        id="cost" 
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                        required
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}