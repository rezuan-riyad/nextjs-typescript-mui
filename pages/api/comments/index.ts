import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments"

type HandlerFunction = (req: NextApiRequest, res: NextApiResponse) => void;

const Handler: HandlerFunction = (req, res) => {
  if(req.method == 'GET'){
    res.status(200).json({ comments: comments })
  } else if(req.method == 'POST'){
    const comment = req.body.comment
    const newComment = {
      id: Date.now(),
      text: comment
    }
    comments.push(newComment)
    res.status(201).json(newComment)
  }
}

export default Handler;