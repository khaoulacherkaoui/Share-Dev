import "./message.css";
import { format } from "timeago.js";
import { useSelector } from 'react-redux'
  
export default function Message({ message, own}) {
  const user = useSelector(state => state.auth.user);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={
            user.avatar
              ? user.avatar
              :"person/noAvatar.png"
          }alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
