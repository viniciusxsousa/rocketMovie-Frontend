import { Container } from './styles'

import { FiSearch } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Link } from 'react-router-dom'
import { useAuth } from  '../../hooks/auth'
import { useNavigate } from 'react-router-dom';

import { Input } from '../Input'
import { api } from '../../services/api';

export function Header({search}){
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleLogout() {
        navigate('/');
        logout();
    }

    return(
        <Container>
            <h1>RocketMovies</h1>
            
            <Input 
                icon={FiSearch} 
                type='text' 
                placeholder='Pesquise pelo título'
                onChange={(e) => {
                    search(e.target.value)
                }}
            />

            <div className='profile'>                
                <span onClick={handleLogout} >
                    <strong>{user.name}</strong>
                    sair
                </span>
                    <Link to='/profile'>
                        <img src={avatarUrl} alt={user.name} />
                    </Link>
            </div>
        </Container>
    )
}