import Swal from 'sweetalert2';
import bckg from './img/background.jpg';

const gameOverHandler = (
    openedImageContainer,
    print,
    setPlayAgain,
    playAgain,
    shuffleCards,
    setPrint,
    images,
    setOpenedImageContainer,
    setMainBackground
) => {
    if (openedImageContainer.length === print.length) {
        setTimeout(() => {
            Swal.fire({
                title: 'Congratulations, You won!',
                text: "Do you want playing again?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, play again!',
                cancelButtonText: 'No, cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    for (let i = 0; i < print.length; i++) {
                        print[i].class = 'one-item';
                        setPlayAgain(playAgain + 1);
                        shuffleCards();
                        setPrint(images);
                        setOpenedImageContainer([]);
                        setMainBackground([
                            { id: '01', image: bckg, class: 'one-item' },
                            { id: '02', image: bckg, class: 'one-item' },
                            { id: '03', image: bckg, class: 'one-item' },
                            { id: '04', image: bckg, class: 'one-item' },
                            { id: '05', image: bckg, class: 'one-item' },
                            { id: '06', image: bckg, class: 'one-item' },
                            { id: '07', image: bckg, class: 'one-item' },
                            { id: '08', image: bckg, class: 'one-item' },
                            { id: '01', image: bckg, class: 'one-item' },
                            { id: '02', image: bckg, class: 'one-item' },
                            { id: '03', image: bckg, class: 'one-item' },
                            { id: '04', image: bckg, class: 'one-item' },
                            { id: '05', image: bckg, class: 'one-item' },
                            { id: '06', image: bckg, class: 'one-item' },
                            { id: '07', image: bckg, class: 'one-item' },
                            { id: '08', image: bckg, class: 'one-item' },
                        ])
                    }
                }
            })
        }, 500);
    }
}

export default gameOverHandler
