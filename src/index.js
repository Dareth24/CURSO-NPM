const messages = [
    'Yiner',
    'Hanzy',
    'Nicolás',
    'Yesica',
    'Laura',
    'carla',
    'ana',
    'maria'
];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = {randomMsg};