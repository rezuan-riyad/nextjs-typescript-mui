import { Container, Toolbar, Typography } from '@mui/material';

type User = {
  username: string,
  id: string
}

const Navbar = ({ username, id }: User) => {
  return (
    <Toolbar>
      <Container>
        <Typography variant='h4'>Hello {username}</Typography>
        <Typography variant='subtitle1'>Your id is {id}</Typography>
      </Container>
    </Toolbar>
  )
}

export default Navbar;