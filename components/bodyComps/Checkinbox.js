import { useState } from "react";
import Loading from "../Loading";
import { v4 } from "uuid";
import { PostingData } from "../firebase/getPost";
import { useTranslations } from "next-intl"; // Added import
import BookingSuccessModal from "../BookingSuccessModal";
import RoomSelectionList from "../RoomSelectionList";

export default function Checkinbox() {
  const t = useTranslations("Checkinbox"); // Initialize translations
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
      alert(t("alertIncomplete")); // Translated alert
      return;
    }
    console.log(child);
    if (child === "") {
      setChild("0");
    }
    const firstDay = new Date(from);
    const lastDay = new Date(to);
    if (firstDay > lastDay) {
      alert(t("alertDates")); // Translated alert
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
      PostingData("checkins", order);
      setGeneratedBookingId(uniqueId);
      setIsModalOpen(true);
      setSelectedRoom(null);
      // alert(t("alertSuccess")); // Translated alert
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
      <div id="checkinbox" className="checkinbox">
        <div className="container-md py-5">
          <div className="row">
            <div className="letterspace text-white">{t("checkNow")}</div>
            <div className="display-5 logo text-light">{t("searchRooms")}</div>
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
                />
                <input
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
                />

                <input
                  type="button"
                  id="checkout"
                  className="checkinbtn"
                  value={t("checkNowBtn")}
                  name="number"
                  onClick={() => {
                    if (from !== "" || to !== "" || adult !== "") {
                      setShowInput(!showInput);
                    } else {
                      alert(t("alertDatesAndPeople")); // Translated alert
                    }
                  }}
                />
              </div>
              {showInput && (
                <>
                  <div className="my-3 chkn d-md-flex d-sm-flex flex-sm-column flex-md-row justify-content-between">
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
                      className="checkinbtn"
                      value={t("confirmBtn")}
                      name="confirm"
                      onClick={handleSubmit}
                    />
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
