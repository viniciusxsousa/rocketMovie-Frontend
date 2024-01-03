import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Content } from "./styles";

import { FaStar, FaRegStar, FaClock } from 'react-icons/fa'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonTxt } from '../../components/ButtonTxt'
import { Tag } from '../../components/Tag'

export function Details(){
    const [data, setData] = useState('');
    
    const navigate = useNavigate();
    const params = useParams();

    async function handlerDelete() {
        const confirmer = confirm('Realmente deseja excluir esse filme ?');

        if(confirmer) {
            await api.delete(`/movie/${params.id}`);
            navigate('/');
        }
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movie/${params.id}`);
            setData(response.data);
        }

        fetchMovie();
    }, [])

    const star = data.rating;

    let startCompleted = [];
    let startNotCompleted = [];

    for(let i = 0; i < star; i++) {
        startCompleted.push(i);
    }

    for(let i = (5 - star); i > 0; i--) {
        startNotCompleted.push(i);
    }

    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonTxt title='voltar' icon to='/'/>

                    <div className="title">
                        <h2>{data.title}</h2>

                        { 
                          startCompleted.map((item) => (
                              <FaStar key={item}/>
                          ))
                        }

                        {
                            startNotCompleted.map((item) => (
                                <FaRegStar key={item}/>
                            ))
                        }

                    </div>

                    <div className="time">
                        <FaClock /> 
                        <p>{data.updated_at}</p>
                    </div>

                    { data.tags && 
                        data.tags.map((tag) => (
                            <Tag 
                                key={tag.id}
                                title={tag.name} 
                                brown
                            />
                        ))
                    }

                    <p>{data.description}</p> 

                    <Button title='Excluir' onClick={handlerDelete}/>

                </Content>
            </main>

        </Container>
    )
}