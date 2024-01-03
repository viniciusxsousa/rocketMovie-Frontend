import { Container } from './styles';

import { FaStar, FaRegStar } from 'react-icons/fa'

import { Tag } from '../Tag';

export function Card({data, id}){
    const star = data.rating;
    let starCompleted = [];
    let starNotCompleted = [];

    for(let i = 0; i < star; i++) {
        starCompleted.push(i);
    }

    for(let i = (5 - star); i > 0; i--) {
        starNotCompleted.push(i);
    }

    return(
        <Container to={`/details/${id}`}>
            <h3>{data.title}</h3>

            <div>

                {starCompleted.map((item) => (
                    <FaStar key={item}/>
                ))}

                {starNotCompleted.map((item)=> (
                    <FaRegStar key={item}/>
                ))}
                
            </div>

            <p>{data.description}</p>

            {data.tags.map((tag) => (
                <Tag 
                    key={tag.id}
                    title={tag.name}
                />
            ))}

        </Container>
    )
}