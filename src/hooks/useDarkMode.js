import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';
import { visitFunctionBody } from 'typescript';


export const useDarkMode = (key, initialValue) =>{
const [dark, setDark] = useLocalStorage(key, initialValue);

    useEffect(() =>{
        if (dark === true){
        document.body.classList.add('dak-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
            
    }, [dark])

    return[dark, setDark]


}