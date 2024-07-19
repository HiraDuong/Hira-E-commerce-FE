import Content from "../components/Content";
import { useUser } from "../contexts/UserContext";
const Home = () => {
  const {user} = useUser();
  console.log(user);
    return (
    <Content>
      <div className="h-svh">
        <h1>Home</h1>
      </div>
      </Content>
    );
  };
  
  export default Home;