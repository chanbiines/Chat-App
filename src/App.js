import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'ebc60ea0-782a-4719-96f5-01f75f94a4db';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
/*import {ChatEngine} from 'react-chat-engine';
import './App.css';
import  ChatFeed  from './components/ChatFeed';

const App=()=>{
    return(
        <ChatEngine

           height="100vh"
           projectID="ebc60ea0-782a-4719-96f5-01f75f94a4db"
           userName="ines"
           userSecret="123"
           renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    />
    );

}

export default App;
*/