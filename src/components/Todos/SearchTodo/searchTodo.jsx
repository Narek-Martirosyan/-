import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../../features/todo-app/todoAppSlice";
import TextField from '@mui/material/TextField';
import './searchTodo.scss';

export function SearchTodo() {
    const dispatch = useDispatch();

    return (
        <>
            <TextField onChange={(e) => dispatch(changeSearchValue(e.target.value))}
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                title="Text field"
                focused
                sx={{
                    mr: 5,
                    color: 'blue'
                }}
            />
        </>
    )
}
