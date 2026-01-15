import Slider from "./bodyComps/Slider";
import Checkinbox from "./bodyComps/Checkinbox";
import Rooms from "./bodyComps/Rooms";
import Services from "./bodyComps/Services";
import Facilities from "./bodyComps/Facilities";
import ChatBox from "./bodyComps/ChatBox";

export default function LandingPage() {
  return (
    <>
      <main>
        {/* <ChatBox /> */}
        <Slider />
        <Checkinbox />
        <div className="hovli"></div>
        <Rooms />
        <Services />
        <Facilities />
      </main>
    </>
  );
}
