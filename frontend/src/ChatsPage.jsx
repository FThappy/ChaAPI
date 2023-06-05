import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
        
      <PrettyChatWindow
        projectId='453b5e35-8686-4395-8897-19fc50e50c9e'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;