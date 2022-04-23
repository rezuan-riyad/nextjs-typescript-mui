import React from 'react';
import Container from '@mui/material/Container';

interface PropType {
  results: Object[] | undefined,
  data: {
    name: string,
    email: string,
    phone: string
  }
}

const QueryDisplay = ({ data, results }: PropType) => {

  React.useEffect(() => {
    console.log("DATA", data)
    console.log("RESULTS STATE CHANGED: ", results)
  }, [results])

  return (
    <Container>
      <h4>Pre Fetched Data</h4>
      <p id="loadedName">NAME: {data.name}</p>
      <p>EMAIL: {data.email}</p>
      <p>PHONE: {data.phone}</p>
      <br />
      <h4>Search Results: </h4>
      {
        results ? results.map(({ name, email, phone }: any) => (
          <div key={name}>
            <p id="name">NAME: {name}</p>
            <p>EMAIL: {email}</p>
            <p>PHONE: {phone}</p>
          </div>
        )) : null
      }
    </Container>
  )
}

export default QueryDisplay;