import './todoApp.scss';
import { searchHandler } from '../../../features/todo-app/todoAppSlice';
import { useSelector } from "react-redux";
import { CheckboxInput as Checkbox } from '../../../components/Todos/Checkbox';
import { EditDelete } from '../../../components/Todos/EditDelete';
import { AddTodo } from '../../../components/Todos/AddTodo';
import { Counter } from '../../../components/Todos/Counter';
import { SearchTodo } from '../../../components/Todos/SearchTodo';
import 'animate.css';

export const TodoApp = () => {
    const list = useSelector(searchHandler);

    return (
        <>
            <div className='todo-app animate__animated animate__zoomIn'>
                <div style={{ display: 'flex' }}>
                    <SearchTodo />
                    <AddTodo />
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={item.title + '-' + index} className='todo-app-item'>
                            <div className='todo-app-item-check-title'>
                                <Checkbox index={index} list={list} id={item.title + index} />
                                <label htmlFor={item.title + index} className="todo-app-item-check-title-label">
                                    {item.completed ? <del>{item.title}</del> : item.title}
                                </label>
                            </div>
                            <EditDelete index={index} list={list} />
                        </div>
                    )
                })}
                <Counter />
            </div>
        </>
    )
}
