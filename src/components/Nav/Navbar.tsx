import React from 'react'
import AppBar from '@mui/material/AppBar';
import {
  Box, Container, InputBase, List, Button,
  ListItem, SwipeableDrawer, Toolbar, Typography, IconButton
} from '@mui/material';
import Link from 'next/link';
import CustomToolbar from '../../styledComponets/CutomToolbar';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import styles from './styles.module.css';
import cloth from '../../../public/cloth.jpeg';
import ImageLayer from '../../styledComponets/ImageLayer';
import Bar from '../../styledComponets/Bar';
import { useRouter } from 'next/router';

import { useSession, signIn, signOut } from "next-auth/react"

const Topbar = () => {
  return (
    <CustomToolbar variant="dense">
      <Container sx={{
        display: "flex",
        justifyContent: "space-between",
        width: 1
      }}>
        <Box>
          <Typography variant='subtitle2'>contact@host.com</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap"
        }}>
          <Link href="https://www.facebook.com">
            <BsFacebook className={styles.iconStyle} />
          </Link>
          <Link href="https://www.instagram.com">
            <BsInstagram className={styles.iconStyle} />
          </Link>
          <Link href="https://www.twitter.com">
            <BsTwitter className={styles.iconStyle} />
          </Link>
          <Link href="https://www.youtube.com">
            <BsYoutube className={styles.iconStyle} />
          </Link>
        </Box>
      </Container>
    </CustomToolbar>
  )
}

const NavOnDrawer = () => {
  const items = [
    { title: 'Home', pathname: "/" },
    { title: 'Men', pathname: "/men" },
    { title: 'Women', pathname: "/women" },
    { title: 'Kids', pathname: "/kids" },
    { title: 'Others', pathname: "/others" }]

  const router = useRouter();

  React.useEffect(() => {

  }, [])

  return (
    <Box sx={{ minWidth: "300px" }}>
      <ImageLayer height={150} url="/cloth.jpeg" />
      <List>
        {items.map(item => (
          <Link href="/">
            <ListItem button
              sx={{
                height: "40px",
                padding: 0,
                marginLeft: ".5rem",
                marginRight: ".5rem",
                width: "inherit"
              }}>
              <Bar active={router.pathname == item.pathname} />
              <Typography
                variant='subtitle1'
                sx={{ padding: "0.5rem" }}>
                {item.title}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
}

const NavItems = () => {
  const items = [
    { title: 'Home', pathname: "/" },
    { title: 'Blog', pathname: "/blog" },
    { title: 'Dashboard', pathname: "/dashbord" },
    { title: 'Login', pathname: "/login" }]

  return (
    <Box sx={{ display: "flex" }}>
      {
        items.map(item => (
          <Box key={item.title}>
            <Link href={item.pathname}>
              <Typography
                variant="subtitle2"
                sx={{ marginLeft: "1rem", cursor: "pointer" }}>
                {item.title}
              </Typography>
            </Link>
          </Box>
        ))
      }
    </Box>
  )
}

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <div>
      <Topbar />
      <AppBar position='static'>
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <IconButton onClick={() => setOpenDrawer(true)}>
                <FiMenu style={{ color: "white" }} />
              </IconButton>
              <SwipeableDrawer
                open={openDrawer}
                anchor="left"
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
              >
                <NavOnDrawer />
              </SwipeableDrawer>
            </Box>
            <NavItems />
          </Toolbar>
        </Container>
      </AppBar>
    </div >
  )
}