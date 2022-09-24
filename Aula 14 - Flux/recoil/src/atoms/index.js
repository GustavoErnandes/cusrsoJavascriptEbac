import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        "nome": 'Gustavo',
        "email": 'gustavo@email.com'
    }
})