import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import { SingIn } from '../pages/SingIn';
import { SingUp } from '../pages/SingUp';

export function AuthRoutes(){
    const user = localStorage.getItem("@rocketmovie:user");

    return(
        <Routes>
            <Route path='/' element={<SingIn/>}/>
            <Route path='/create' element={<SingUp/>} />

            {!user && <Route path='*' element={<Navigate to="/"/>}/>}
        </Routes>
    )
}