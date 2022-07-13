import Swal from 'sweetalert2';

export default function checkWinner(items, setItems, sum, setSum, setOneItemClass, setXorO) {
    const winSteps = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winSteps.length; i++) {
        if (items[winSteps[i][0]].title === 'X' && items[winSteps[i][1]].title === 'X' && items[winSteps[i][2]].title === 'X') {
            setTimeout(() => {
                Swal.fire({
                    title: 'Winner is X',
                    confirmButtonText: 'Play Again',
                }).then((result) => {
                    if (result.isConfirmed) {
                        setItems([
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' }
                        ]);
                    } else {
                        setOneItemClass('one-item disabled');
                    }
                });
                setSum(1);
                setOneItemClass('one-item');
                setXorO(true);
            }, 100);
            setOneItemClass('one-item disabled');
            return;
        }

        if (items[winSteps[i][0]].title === 'O' && items[winSteps[i][1]].title === 'O' && items[winSteps[i][2]].title === 'O') {
            setTimeout(() => {
                Swal.fire({
                    title: 'Winner is O',
                    confirmButtonText: 'Play Again',
                }).then((result) => {
                    if (result.isConfirmed) {
                        setItems([
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' },
                            { title: '' }
                        ])
                    } else {
                        setOneItemClass('one-item disabled');
                    }
                });
                setSum(1);;
                setOneItemClass('one-item');
                setXorO(true);
            }, 100);
            setOneItemClass('one-item disabled');
            return;
        }
    }

    if (sum === 9) {
        setTimeout(() => {
            Swal.fire({
                title: 'No one won',
                confirmButtonText: 'Play Again',
            }).then((result) => {
                if (result.isConfirmed) {
                    setItems([
                        { title: '' },
                        { title: '' },
                        { title: '' },
                        { title: '' },
                        { title: '' },
                        { title: '' },
                        { title: '' },
                        { title: '' },
                        { title: '' }
                    ])
                } else {
                    setOneItemClass('one-item disabled');
                }
            });
            setSum(1);;
            setOneItemClass('one-item');
            setXorO(true);
        }, 100);
        setOneItemClass('one-item disabled');
        return;
    }
}
