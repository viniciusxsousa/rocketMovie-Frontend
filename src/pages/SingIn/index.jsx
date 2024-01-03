import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

import { Container, Form, BackgroundImg } from './styles'

import { Link } from 'react-router-dom'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'


export function SingIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { singIn } = useAuth();

    function handleSingIn () {
        singIn({email, password});
    }


    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

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

                <Button type='button' title='Entrar' onClick={handleSingIn}/>

                <ButtonTxt title='Criar conta' to='/create' />

            </Form>
            <BackgroundImg/>
        </Container>
    )
}