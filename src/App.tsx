import Contacts from "./blocks/Contacts/Contacts";
import FirstScreen from "./blocks/FirstScreen/FirstScreen";
import Participant from "./blocks/Participant/Participant";
import Program from "./blocks/Program/Program";
import Schedule from "./blocks/Schedule/Schedule";
import Sponsors from "./blocks/Sponsors/Sponsors";

function App() {
  return (
    <>
      <FirstScreen />
      <Program />
      <Participant />
      <Schedule />
      <Sponsors />
      <Contacts />
    </>
  );
}

export default App;
