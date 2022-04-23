import { Button, Container, TextField } from '@mui/material';
import React from 'react';

type ChangeEventType = React.ChangeEvent<HTMLInputElement>
type PropType = {
  query: string,
  setQueryResults: React.Dispatch<React.SetStateAction<Object[] | undefined>>,
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchBox = ({ query, setQuery, setQueryResults }: PropType) => {

  const onQueryChange = (e: ChangeEventType) => {
    setQuery(query => e.target.value)
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${Math.ceil(Math.random()*10)}`)
      .then((response) => response.json())
      .then((json) => {
        setQueryResults([json])
      });
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <TextField
          size='small'
          type='text'
          value={query}
          onChange={onQueryChange} />
        <Button type="submit">Search</Button>
      </form>
      <p>Searching: {query}</p>
    </Container>
  )
}

export default SearchBox;