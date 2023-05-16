import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Postpage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  if (!postInfo) return "";
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{format(new Date(postInfo.createdAt), "MMM d, yyyy HH:mm")}</time>
      <div className="author">By {postInfo.author.username}</div>
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
    </div>
  );
}