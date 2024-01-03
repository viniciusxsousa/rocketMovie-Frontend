import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Content, Textarea } from "./styles";

import { Header } from '../../components/Header'
import { ButtonTxt } from '../../components/ButtonTxt'
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { TagItens } from "../../components/TagItens";

export function New() {
    const [markers, setMarkers] = useState([]);
    const [newMarkers, setNewMarkers] = useState("");

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    function handleAddMarkers() {
        setMarkers(prevState => [...prevState, newMarkers]);
        setNewMarkers('');
    }

    function handleDeleteMarker(deleted) {
        setMarkers(prevState => prevState.filter(marker => marker !== deleted));
    }

    async function handleCreateMovie() {
        if(!title) {
            return alert('Título é obrigatório.');
        }

        if(!rating) {
            return alert('A nota é obrigatório.');
        }

        if(!description) {
            return alert('A descrição é obrigatória.');
        }

        if(newMarkers) {
            return alert('Há um marcador no campo que não foi salvo.');
        }

        await api.post('/movie', {
            title,
            description,
            rating,
            tags: markers
        });

        alert('Filme cadastrado com sucesso');
        navigate('/')
    }

    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonTxt icon title='voltar' to='/'/>

                    <h2>Novo Filme</h2>

                    <div className="inputs">
                        <Input 
                            type='text' 
                            placeholder='Título'
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input 
                            type='number' 
                            placeholder='Sua nota (de 0 a 5)'
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

                    <h3>Marcadores</h3>

                    <div className="marcadores">

                        {markers.map((marker, index) => (
                            <TagItens 
                                key={index}
                                value={marker}
                                onClick={() => {handleDeleteMarker(marker)}}
                            />
                        ))}

                        <TagItens 
                            value={newMarkers}
                            placeholder='Novo Marcador' 
                            isNew
                            onChange={e => setNewMarkers(e.target.value)}
                            onClick={handleAddMarkers}
                        />
                    </div>

                    <div className="buttons">
                        <Button title='Excluir filme' isBlack/>
                        <Button title='Salvar alterações' onClick={handleCreateMovie}/>
                    </div>

                </Content>
            </main>

        </Container>
    )
}