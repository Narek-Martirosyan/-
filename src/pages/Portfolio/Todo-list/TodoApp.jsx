import './style.scss';
import { searchHandler } from '../../../features/todo-app/todoAppSlice';
import { useSelector } from "react-redux";
import Checkbox from '../../../components/Todos/Checkbox';
import EditDelete from '../../../components/Todos/EditDelete';
import AddTodo from '../../../components/Todos/AddTodo';
import Counter from '../../../components/Todos/Counter';
import SearchTodo from '../../../components/Todos/SearchTodo';

export default function TodoApp() {
    const list = useSelector(searchHandler);

    return (
        <>
            <div className='todo-app'>
                <div style={{ display: 'flex' }}>
                    <SearchTodo />
                    <AddTodo />
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={item.title + '-' + index} className='todo-app-item'>
                            <div className='check-title'>
                                <Checkbox index={index} list={list} />
                                <span>{item.completed ? <del>{item.title}</del> : item.title}</span>
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