import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments"

type HandlerFunction = (req: NextApiRequest, res: NextApiResponse) => void;

const handler: HandlerFunction = (req, res) => {
  const commentId = req.query.commentId;

  if (req.method === 'GET' && typeof (commentId) === "string") {
    const comment = comments.find(comment => comment.id === parseInt(commentId))
    res.status(200).json(comment)
  }
  else if (req.method === 'DELETE' && typeof (commentId) === "string") {
    const deletedComment = comments.find(
      comment => comment.id === parseInt(commentId)
    )
    const index = comments.findIndex(
      comment => comment.id === parseInt(commentId)
    )
    comments.splice(index, 1)
    res.status(200).json(deletedComment)
  }
}

export default handler;