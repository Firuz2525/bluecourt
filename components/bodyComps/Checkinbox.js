import { useState } from "react";
import Loading from "../Loading";
import { v4 } from "uuid";
import { PostingData } from "../firebase/getPost";
import { useTranslations } from "next-intl";
import BookingSuccessModal from "../BookingSuccessModal";
import RoomSelectionList from "../RoomSelectionList";
import DatePicker from "../DatePicker";
import GuestPicker from "./GuestPicker";

export default function Checkinbox() {
  const t = useTranslations("Checkinbox");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [child, setChild] = useState("");
  const [adult, setAdult] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatedBookingId, setGeneratedBookingId] = useState("");
  // console.log(from, to, child, adult);
  // --- ROOM SELECTION STATE INTEGRATION ---
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Custom handler when a row item is clicked
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleSubmit = async () => {
    if (
      from === "" ||
      to === "" ||
      name === "" ||
      contact === "" ||
      adult === ""
    ) {
      alert(t("alertIncomplete"));
      return;
    }
    // console.log(child);
    if (child === "") {
      setChild("0");
    }
    const firstDay = new Date(from);
    const lastDay = new Date(to);
    if (firstDay > lastDay) {
      alert(t("alertDates"));
      return;
    }
    if (!selectedRoom) {
      alert(t("alertRoomSelect"));
      return;
    }
    const uniqueId = `BC-${Math.floor(1000 + Math.random() * 9000)}`;
    const order = {
      id: v4(),
      from,
      to,
      child,
      adult,
      name,
      contact,
      uniqueId,
      roomId: selectedRoom.id,
      roomName: selectedRoom.name,
      pricePerNight: selectedRoom.price,
      createdAt: new Date(),
    };
    setShowInput(!showInput);
    setLoading(true);
    try {
      console.log(order);
      PostingData("checkins", order);
      setGeneratedBookingId(uniqueId);
      setIsModalOpen(true);
      setSelectedRoom(null);
      setFrom("");
      setTo("");
      setChild("");
      setAdult("");
      setName("");
      setContact("");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <>
      <div id="checkinbox" className="checkinbox p-2 p-md-4">
        <div className="container-md py-4">
          <div className="row mb-4 text-center text-md-start">
            <div className="letterspace mb-1">{t("checkNow")}</div>
            <div className="display-5 logo text-light">{t("searchRooms")}</div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="chkn-wrapper mb-4">
                <div className="chkn d-flex flex-column flex-md-row gap-2">
                  {/* <input
                    type="date"
                    id="checkin"
                    className="checkin"
                    placeholder={t("placeholderCheckIn")}
                    name="date"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                  <input
                    type="date"
                    id="checkout"
                    className="checkin"
                    placeholder={t("placeholderCheckOut")}
                    name="date"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  /> */}
                  {/* CHECK IN INPUT */}
                  <DatePicker
                    label="check in:"
                    value={from}
                    onChange={(date) => setFrom(date)}
                  />
                  <DatePicker
                    label="check out:"
                    value={to}
                    onChange={(date) => setTo(date)}
                  />
                  <GuestPicker
                    label="Guests"
                    singularLabel="Adult"
                    pluralLabel="Adults"
                    value={adult}
                    onChange={(count) => setAdult(count)}
                    min={1}
                    max={9}
                  />
                  <GuestPicker
                    label="Children"
                    singularLabel="Child"
                    pluralLabel="Children"
                    value={child}
                    onChange={(count) => setChild(count)}
                    min={1}
                    max={9}
                  />
                  {/* <input
                    type={from ? "date" : "text"}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e)  => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    id="checkin"
                    className="checkin"
                    placeholder={t("placeholderCheckIn")}
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  /> */}

                  {/* CHECK OUT INPUT */}
                  {/* <input
                    type={to ? "date" : "text"}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    id="checkout"
                    className="checkin"
                    placeholder={t("placeholderCheckOut")}
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  /> */}
                  {/* <input
                    type="number"
                    id="adults"
                    placeholder={t("placeholderAdults")}
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
                    placeholder={t("placeholderChildren")}
                    name="number"
                    value={child}
                    onChange={(e) => {
                      if (e.target.value >= 1) {
                        setChild(Number(e.target.value));
                      } else {
                        setChild("");
                      }
                    }}
                  /> */}
                  {/* ADULTS SELECT */}
                  {/* <select
                    className="selection"
                    id="adults"
                    value={adult}
                    onChange={(e) => setAdult(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      {t("placeholderAdults")}
                    </option>
                    {[...Array(9)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select> */}

                  {/* CHILDREN SELECT */}
                  {/* <select
                    id="children"
                    className="selection"
                    value={child}
                    onChange={(e) => setChild(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      {t("placeholderChildren")}
                    </option>
                    {[...Array(9)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select> */}

                  <input
                    type="button"
                    id="checkout"
                    className="checkinbtn px-4"
                    value={t("checkNowBtn")}
                    name="number"
                    onClick={() => {
                      if (from !== "" || to !== "" || adult !== "") {
                        setShowInput(!showInput);
                      } else {
                        alert(t("alertDatesAndPeople"));
                      }
                    }}
                  />
                </div>
              </div>

              {showInput && (
                <>
                  <div className="chkn-wrapper mb-4">
                    <div className="chkn d-flex flex-column flex-md-row gap-2">
                      <input
                        type="text"
                        id="name"
                        placeholder={t("placeholderName")}
                        name="number"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="text"
                        id="contact"
                        placeholder={t("placeholderContact")}
                        name="number"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                      <input
                        type="button"
                        id="confirm"
                        className="checkinbtn px-4"
                        value={t("confirmBtn")}
                        name="confirm"
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>

                  {/* 1. ROOM SELECTION STEP */}
                  <RoomSelectionList
                    selectedRoomId={selectedRoom ? selectedRoom.id : null}
                    onSelectRoom={handleRoomSelect}
                    onConfirmSelection={handleSubmit}
                  />
                </>
              )}
            </>
          )}
        </div>

        {/* --- MODAL PLACEMENT INTEGRATION --- */}
        <BookingSuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          bookingId={generatedBookingId}
        />
      </div>
    </>
  );
}
