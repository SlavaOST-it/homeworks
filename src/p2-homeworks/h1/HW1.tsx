import React from 'react'

import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";


const messageData = {
    avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00',
}

const alternativeData = {
    avatar: 'https://all-t-shirts.ru/goods_images/ru104010IITG0e4c07bd33caa272a1bde66a83b90410f.jpg',
    name: 'Slava',
    message: 'Да, все работает. Летим дальше!',
    time: '22:05',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>

            <AlternativeMessage
                avatar={alternativeData.avatar}
                name={alternativeData.name}
                message={alternativeData.message}
                time={alternativeData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
