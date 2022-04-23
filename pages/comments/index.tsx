import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { MdDelete } from 'react-icons/md'
import { Box, IconButton, TextField, Typography } from '@mui/material';
// import HiddenMessage from '../src/components/HiddenMessage';

type CommentType = {
  id: string | number, text: string
}

const Comments: NextPage = () => {
  const [comments, setComments] = React.useState<Array<CommentType>>([])
  const [comment, setComment] = React.useState('');

  const onSetComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data: CommentType = await response.json()
    if (data) {
      setComments([...comments, data])
    }
  }

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data.comments)
  }

  const deleteComment = async (id: string | number) => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      if (data) {
        setComments([...comments.filter(c => c.id !== data.id)])
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={comment}
          onChange={onSetComment} />
        <Button type='submit'>Submit Comment</Button>
      </form>
      <Button onClick={() => fetchComments()}>Load Comments</Button>
      {
        comments ? comments.map(({ id, text }: CommentType) => (
          <div key={id}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <Typography variant='body2'>{text}</Typography>
              <IconButton onClick={() => deleteComment(id)}>
                <MdDelete />
              </IconButton>
            </Box>
            <hr />
          </div>
        )) : null
      }
    </Container >
  );
};

export default Comments;
