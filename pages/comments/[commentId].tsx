import React from 'react'
import { comments } from "../../data/comments"

type PropType = {
  comment: {
    id: number | string,
    text: string
  }
}

const Comment = ({ comment }: PropType) => {
  return (
    <div>
      {comment.id} - {comment.text}
    </div>
  )
}
export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } }
    ],
    fallback: false
  }
}

export async function getStaticProps(context: any) {
  const { params } = context
  const { commentId } = params
  const comment = comments.find((comment) => comment.id === parseInt(commentId))
  return {
    props: {
      comment
    }
  }
}