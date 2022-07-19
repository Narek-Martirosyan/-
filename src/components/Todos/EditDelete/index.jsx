import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { editTodo, deleteTodo, initialTodo } from '../../../features/todo-app/todoAppSlice';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export default function EditDelete({ index, list }) {
  const dispatch = useDispatch();
  const initialList = useSelector(initialTodo);

  function edittodo() {
    const itemTitle = list[index].title;
    let initialIndex = null;

    for (let i = 0; i < initialList.length; i++) {
      if (initialList[i].title === itemTitle) {
        initialIndex = i;
      }
    }

    Swal.fire({
      title: 'Enter editing text',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      inputValue: list[index].title,
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        dispatch(editTodo({
          initialIndex,
          result: result.value
        }))
        Swal.fire({
          title: 'Happy Hacking'
        })
      }
    })
  }

  function deletetodo() {
    const itemTitle = list[index].title;
    let initialIndex = null;

    for (let i = 0; i < initialList.length; i++) {
      if (initialList[i].title === itemTitle) {
        initialIndex = i;
      }
    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTodo(initialIndex))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <Stack direction={'row'} spacing={1}>
      <IconButton onClick={edittodo} sx={{
        color: 'white',
        '&:active': {
          color: 'red'
        }
      }}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={deletetodo} sx={{
        color: 'white',
        '&:active': {
          color: 'red'
        }
      }}>
        <DeleteForeverIcon />
      </IconButton>
    </Stack>
  )
}
