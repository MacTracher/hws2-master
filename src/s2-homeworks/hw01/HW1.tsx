import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import avatar1 from './avatar1.jpg'


/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

export type UserType = {
    avatar: string
    avatar1?: string
    name: string
}

export type TextType = {
    text: string
    time: string
}

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: TextType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar1, // можно менять
        name: 'Dimoo',  // можно менять
    },
    message: {
        text: 'Привіт Олег, я хотів попросити пробачення, за те що я хуйовий барбер, і я завжди стриг тебе спеціально хуйово, соррі бро, і за сніжку тоже, я хуєсос ще той, чорт, уебан, чмо, і музика в мене хуйова, ну так мама сказал', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Oleg', // можно менять
    },
    message: {
        text: 'Привіт Дімас, да ладно я завжди це знав, все ок бро, і музика в тебе норм  ; )', // можно менять
        time: '22:01', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Olegram</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
