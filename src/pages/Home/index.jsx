import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles"

import { FiPlus } from 'react-icons/fi'

import { Link } from 'react-router-dom';

import { Header } from "../../components/Header"
import { Button } from '../../components/Button'
import { Card } from "../../components/Card"

export function Home(){
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);

  function handleSearch(name) {
    setTitle(name);
  }
 
  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movie?title=${title}&tags=${tags}`);

      setMovies(response.data);
    }

    fetchMovie();
  }, [title])

  return(
    <Container>
          <Header search={handleSearch}/>

          <main>
              <div>
                  <h2>Meus Filmes</h2>
                  <Link to='/new'>
                    <Button icon={FiPlus} title='Adicionar filme'/>
                  </Link>
              </div>

              { movies.map((movie) => (
                <Card 
                  key={movie.id}
                  data={movie} 
                  id={movie.id}
                />
              ))}
          </main>
    </Container>
  )
}