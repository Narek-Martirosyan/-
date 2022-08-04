import bckg from './img/background.jpg';
let counter = 0;

const gameHandler = (
    print,
    index,
    images,
    idContainer,
    setIdContainer,
    setPrint,
    openedImageContainer,
    setOpenedImageContainer
) => {
    print[index].image = images[index].image;
    print[index].id = images[index].id;
    print[index].class = 'one-item disable';
    idContainer.push(images[index].id);
    setIdContainer([...idContainer]);
    const firstImageId = idContainer[idContainer.length - 1];
    const secondImageId = idContainer[idContainer.length - 2];
    setPrint([...print]);

    counter += 1;
    if (counter % 2 === 0) {
        if (firstImageId !== secondImageId) {
            for (let i = 0; i < print.length; i++) {
                if (print[i].class !== 'one-item disabled') {
                    print[i].class = 'one-item disable'
                }
            }
            setTimeout(() => {
                for (let i = 0; i < print.length; i++) {
                    if (print[i].id === firstImageId || print[i].id === secondImageId) {
                        print[i].image = bckg;
                        print[i].class = 'one-item enable';
                        setPrint([...print]);
                    }
                    if (print[i].class !== 'one-item disabled') {
                        print[i].class = 'one-item enable';
                    }
                }
            }, 1000);
        } else {
            for (let i = 0; i < print.length; i++) {
                if (images[i].id === firstImageId || images[i].id === secondImageId) {
                    print[i].class = 'one-item disabled';
                    openedImageContainer.push(print[i]);
                    setOpenedImageContainer([...openedImageContainer]);
                }
            }
        }
    }
}

export default gameHandler
