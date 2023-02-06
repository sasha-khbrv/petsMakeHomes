import Contacts from "./blocks/Contacts";
import FirstScreen from "./blocks/FirstScreen";
import Participants from "./blocks/Participants";
import Program from "./blocks/Program";
import Schedule from "./blocks/Schedule";
import Sponsors from "./blocks/Sponsors";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <FirstScreen />
      <Program />
      <Participants />
      <Schedule />
      <Sponsors />
      <Contacts />
    </>
  );
}

export default App;
