import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api'

import { Container, Form, BackgroundImg } from './styles'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'

export function SingUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigate();

    function handleSignUp() {


        api.post('/user', {name, email, password})
          .then(() => {
            alert("Usuário cadastrado com sucesso.");
            navigator('/');
          })
          .catch( error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível realizar o cadastro no momento");
            }
          })

    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    icon={FiUser} 
                    type='text' 
                    placeholder='Nome' 
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    icon={FiMail} 
                    type='email' 
                    placeholder='E-mail' 
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    icon={FiLock} 
                    type='password' 
                    placeholder='Senha' 
                    onChange={e => setPassword(e.target.value)}
                />

                <Button type="button" title='Cadastrar' onClick={handleSignUp} />

                <ButtonTxt title='Voltar para o login' icon to='/'/>

            </Form>
            <BackgroundImg/>
        </Container>
    )
}