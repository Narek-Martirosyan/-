import './style.scss';
import { useSelector, useDispatch } from "react-redux";
import { initialTodo, numState, clearCompleted } from "../../../features/todo-app/todoAppSlice";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Button from '@mui/material/Button';

export default function Counter() {
    const num = useSelector(numState);
    const list = useSelector(initialTodo);
    const dispatch = useDispatch();
    return (
        <div className='counter'>
            <strong>Completed {num}/{list.length}</strong>
            <div className='clear-all-completed' onClick={() => dispatch(clearCompleted())}>
                <Button
                    title='Clear all completed'
                    sx={{
                        '&:active': {
                            color: 'red'
                        }
                    }}>
                    Clear all completed
                    <ClearAllIcon />
                </Button>
            </div>

        </div>
    )
}
