import './fixedBrokenTodo.scss';
import 'animate.css';
import { useState } from 'react';

export const FixedBrokenTodo = () => {
    const [animate_1, setAnimate_1] = useState("fixed-broken-todo-title");
    const [animate_2, setAnimate_2] = useState("fixed-broken-todo-title");
    const [animate_3, setAnimate_3] = useState("fixed-broken-todo-title");
    const [animate_4, setAnimate_4] = useState("fixed-broken-todo-title");
    const [animate_5, setAnimate_5] = useState("fixed-broken-todo-title");
    const [animate_6, setAnimate_6] = useState("fixed-broken-todo-title");

    window.addEventListener('scroll', function() {
        if (this.scrollY > 400 && this.scrollY < 500) {
            setAnimate_1("fixed-broken-todo-title animate__animated animate__rubberBand animate__slow");
        } else if (this.scrollY > 800 && this.scrollY < 900) {
            setAnimate_2("fixed-broken-todo-title animate__animated animate__rubberBand animate__slow");
        } else if (this.scrollY > 950 && this.scrollY < 1050) {
            setAnimate_3("fixed-broken-todo-title animate__animated animate__rubberBand animate__slow");
        } else if (this.scrollY > 1500 && this.scrollY < 1600) {
            setAnimate_4("fixed-broken-todo-title animate__animated animate__rubberBand animate__slow");
        } else if (this.scrollY > 2000 && this.scrollY < 2100) {
            setAnimate_5("fixed-broken-todo-title animate__animated animate__rubberBand animate__slow");
        } else if (this.scrollY > 2400) {
            setAnimate_6("fixed-broken-todo-title animate__animated animate__rubberBand animate__slow");
        }
    })

    return (
        <div className="fixed-broken-todo">
            <h2 className="fixed-broken-todo-title animate__animated animate__rubberBand animate__slow">About broken project</h2>

            <p className='fixed-broken-todo-text'>That project was created for the React coding interview.
                When I ended my React courses, my teacher sent me this project to fix all bugs.
                The application was intentionally broken, and there were following six critical issues that I had to fix:
            </p>

            <ol className='fixed-broken-todo-bugs'>
                <li>Fix an ability to display all tasks.</li>
                <li>Fix a layout, checkboxes should be listed in a column.</li>
                <li>Fix an ability to add a new task.</li>
                <li>Fix an ability to toggle a task.</li>
                <li>Fix an ability to delete a task.</li>
                <li>Fix an ability to count completed tasks.</li>
            </ol>

            <p className='fixed-broken-todo-text'>
                You can clone this broken application and try yourself.
                Just open <a href="https://github.com/andrewborisov/broken-react-todo-application-context-api"
                    target={'_blank'} rel='noreferrer'>this link</a> --&gt; copy HTTPS code --&gt; run terminal --&gt;
                enter "git clone URL" command, then run project and try to fix bugs.
            </p>

            <h2 className={animate_1}>Fix an ability to display all tasks</h2>

            <p className='fixed-broken-todo-text'>
                To fix this bug you just need to add todo's array in main use state value.
            </p>

            <code className='fixed-broken-todo-examples-block'>
                <h3 className='fixed-broken-todo-examples-block-example'>example</h3>
                <pre>
                    const todosTemplate = [
                    <br />  <span>&#10100;</span>
                    <br />      id: 0,
                    <br />      label:'Fix an ability to display all tasks',
                    <br />      checked: false
                    <br />  <span>&#10101;</span>
                    <br />] <br />
                    const [todos, setTodos] = React.useState(todosTemplate);
                </pre>
            </code>

            <h2 className={animate_2}>Fix a layout, checkboxes should be listed in a column.</h2>

            <p className='fixed-broken-todo-text'>
                To fix this bug you need to add a straightforward CSS command. There isn't some logic.
                Just add "flex-direction: column" in the "todo-list.scss" file.
            </p>

            <h2 className={animate_3}>Fix an ability to add a new task.</h2>

            <p className='fixed-broken-todo-text'>Following function must be in "todo-form.jsx" file</p>

            <code className='fixed-broken-todo-examples-block'>
                <h3 className='fixed-broken-todo-examples-block-example'>example</h3>
                <pre>
                    const handleSubmit = (e, value) =&gt; <span>&#10100;</span>
                    <br />  e.preventDefault();
                    <br />
                    <br />  if (value.trim()) <span>&#10100;</span>
                    <br />      setTodos([
                    <br />          ...todos,
                    <br />          <span>&#10100;</span>
                    <br />              id: todos.length ? todos[todos.length - 1].id + 1 : 0,
                    <br />              label: value,
                    <br />              checked: false,
                    <br />          <span>&#10101;</span>,
                    <br />      ]);
                    <br />      setTask('');
                    <br />      <span>&#10101;</span>
                    <br />  <span>&#10101;</span>;
                </pre>
            </code>

            <h2 className={animate_4}>Fix an ability to toggle a task.</h2>

            <p className='fixed-broken-todo-text'>Following function must be in "todo-list.jsx" file</p>

            <code className='fixed-broken-todo-examples-block'>
                <h3 className='fixed-broken-todo-examples-block-example'>example</h3>
                <pre>
                    <br />const toggleCheck = (index, e) =&gt; <span>&#10100;</span>
                    <br />  todos[index].checked = e.target.checked ? e.target.checked
                    <br />      : !todos[index].checked;
                    <br />      setTodos([...todos]);
                    <br />  <span>&#10101;</span>;
                    <br />
                    <br />const handleKeyUp = (e, index) =&gt; <span>&#10100;</span>
                    <br />  if (e.keyCode === 13) <span>&#10100;</span>
                    <br />      toggleCheck(index, e);
                    <br />  <span>&#10101;</span>
                    <br /><span>&#10101;</span>;
                </pre>
            </code>

            <h2 className={animate_5}>Fix an ability to delete a task.</h2>

            <p className='fixed-broken-todo-text'>Following function must be in "todo-list.jsx" file</p>

            <code className='fixed-broken-todo-examples-block'>
                <h3 className='fixed-broken-todo-examples-block-example'>example</h3>
                <pre>
                    const handleDelete = (id) =&gt; <span>&#10100;</span>
                    <br />  todos.forEach((todo, index) =&gt; <span>&#10100;</span>
                    <br />      if (todo.id === id) <span>&#10100;</span>
                    <br />          todos.splice(index, 1);
                    <br />          setTodos([...todos]);
                    <br />      <span>&#10101;</span>
                    <br />  <span>&#10101;</span>);
                    <br /><span>&#10101;</span>;
                </pre>
            </code>

            <h2 className={animate_6}>Fix an ability to count completed tasks.</h2>

            <p className='fixed-broken-todo-text'>Following function must be in "todo-results.jsx" file</p>

            <code className='fixed-broken-todo-examples-block'>
                <h3 className='fixed-broken-todo-examples-block-example'>example</h3>
                <pre>
                    let count = 0;
                    <br />const calculateChecked = () =&gt; <span>&#10100;</span>
                    <br />  todos.forEach((todo) =&gt; <span>&#10100;</span>
                    <br />      if (todo.checked) <span>&#10100;</span>
                    <br />          count += 1;
                    <br />      <span>&#10101;</span>
                    <br />  <span>&#10101;</span>);
                    <br />  return count;
                    <br /><span>&#10101;</span>;
                </pre>
            </code>

            <p className='fixed-broken-todo-text'>
                That's all. If you want to see how I fixed this broken to-do app, you can clone and see the codes 
                following  <a href="https://github.com/Narek-Martirosyan/fixed-broken-ToDo" target={'_blank'} rel='noreferrer'>this link</a>.
            </p>

        </div>
    )
}