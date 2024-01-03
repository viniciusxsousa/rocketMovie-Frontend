import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

const AuthContext = createContext({});

function AuthProvider({children}) {
    const [data, setData] = useState({});

    async function singIn({email, password}) {
        try {
            const response = await api.post("/sessions", { email, password });
            const {token, user} = response.data;

            localStorage.setItem("@rocketmovie:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovie:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({token, user});

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            }
        } 

    }

    function logout() {
        localStorage.removeItem("@rocketmovie:user");
        localStorage.removeItem("@rocketmovie:token");

        setData({});
    }

    async function updateProfile({user, avatarFile}) {
        try {

            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append('avatar', avatarFile);

                const response = await api.patch('/user/avatar', fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put('/user', user);
            localStorage.setItem("@rocketmovie:user", JSON.stringify(user));

            setData({ user, token: data.token});
            alert('Perfil atualizado com sucesso.');
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível atualizar os dados.');
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovie:token");
        const user = localStorage.getItem("@rocketmovie:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    },[]);

    return (
        <AuthContext.Provider value={{ 
          singIn, 
          updateProfile,
          logout,
          user: data.user
          }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const data = useContext(AuthContext);

    return data;
}

export { AuthProvider, useAuth }