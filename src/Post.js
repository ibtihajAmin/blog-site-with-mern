import { format } from "date-fns";
export default function Post({ title, summary, cover, content, createdAt }) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2021/11/facebook-meta-rotate-pattern.jpg?w=1390&crop=1"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a href="http://localhost:3000/" className="author">
            David Malan
          </a>
          <time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
