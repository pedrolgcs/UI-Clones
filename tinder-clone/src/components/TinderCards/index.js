import React, { useState } from 'react';

// styles
import { Container, Tinder, Card } from './styles';

function TinderCards() {
  const [people, setPeople] = useState([
    { name: 'Steve Jobs', url: 'https://bityli.com/IaDTc' },
    {
      name: 'Mark Zuckerberg',
      url:
        'https://www.movenoticias.com/wp-content/uploads/2014/11/Mark-Zuckerberg-1.jpg',
    },
  ]);

  return (
    <Container>
      {people.map((person) => (
        <Tinder key={person.name} preventSwipe={['up', 'down']}>
          <Card image={person.url}>
            <h3>{person.name}</h3>
          </Card>
        </Tinder>
      ))}
    </Container>
  );
}

export default TinderCards;
