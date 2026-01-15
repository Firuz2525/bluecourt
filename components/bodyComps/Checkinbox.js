import { useState } from "react";
import Loading from "../Loading";
import { v4 } from "uuid";
import sendMessageToTelegram from "../msgToBot";
import { PostingData } from "../firebase/getPost";

export default function Checkinbox() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [child, setChild] = useState("");
  const [adult, setAdult] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (
      from === "" ||
      to === "" ||
      name === "" ||
      contact === "" ||
      adult === ""
    ) {
      alert("Complete name and contact please!");
      return;
    }
    if (child === "") {
      setChild(Number(0));
    }
    const firstDay = new Date(from);
    const lastDay = new Date(to);
    if (firstDay > lastDay) {
      alert("Pick the date correctly please!");
      return;
    }
    const order = {
      id: v4(),
      from,
      to,
      child,
      adult,
      name,
      contact,
    };
    setShowInput(!showInput);
    setLoading(true);
    try {
      PostingData("checkins", order);
      alert("Successfully checked in, we will contact you soon!");
      setFrom("");
      setTo("");
      setChild("");
      setAdult("");
      setName("");
      setContact("");
      setLoading(false);
      sendMessageToTelegram(
        `Order: ${name} just checked in! Contact:${contact} From:${from} to:${to}, adults:${adult} and children:${child}.`
      );
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <div id="checkinbox" className="checkinbox">
        <div className="container-md py-5">
          <div className="row">
            <div className="letterspace text-white">CHECK NOW</div>
            <div className="display-5 logo text-light">Search Rooms</div>
          </div>
          {/* <Toast /> */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="my-3 chkn d-md-flex d-sm-flex flex-sm-column flex-md-row justify-content-between">
                <input
                  type="date"
                  id="checkin"
                  className="checkin"
                  placeholder="CHECK-IN: "
                  name="date"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
                <input
                  type="date"
                  id="checkout"
                  className="checkin"
                  placeholder="CHECK-OUT: "
                  name="date"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
                <input
                  type="number"
                  id="adults"
                  placeholder=" ADULTS: "
                  name="number"
                  value={adult}
                  onChange={(e) => {
                    if (e.target.value >= 1) {
                      setAdult(Number(e.target.value));
                    } else {
                      setAdult("");
                    }
                  }}
                />
                <input
                  type="number"
                  id="children"
                  placeholder=" CHILDREN: "
                  name="number"
                  value={child}
                  onChange={(e) => {
                    if (e.target.value >= 1) {
                      setChild(Number(e.target.value));
                    } else {
                      setChild("");
                    }
                  }}
                />

                <input
                  type="button"
                  id="checkout"
                  className="checkinbtn"
                  value="CHECK NOW"
                  name="number"
                  onClick={() => {
                    if (from !== "" || to !== "" || adult !== "") {
                      setShowInput(!showInput);
                    } else {
                      alert("Complete the dates and number of people please!");
                    }
                  }}
                />
              </div>
              {showInput && (
                <div className="my-3 chkn d-md-flex d-sm-flex flex-sm-column flex-md-row justify-content-between">
                  <input
                    type="text"
                    id="name"
                    placeholder=" Name: "
                    name="number"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    id="contact"
                    placeholder=" Email or Phone#: "
                    name="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <input
                    type="button"
                    id="confirm"
                    className="checkinbtn"
                    value="CONFIRM"
                    name="confirm"
                    onClick={handleSubmit}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
