import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/App.css'
import TopNavbar from "./TopNavbar";
import MainDisplay from "./MainDisplay";
import {useState} from "react";

function App() {
    const [contactState, setContactState] = useState(false)
    const toggleContacts = () => {
        setContactState(prev => (!prev))
    }
    return (
      <div className="App">
          <TopNavbar toggleContacts={toggleContacts}/>
          <MainDisplay contactState={contactState}/>
      </div>
    );
}

export default App;
