import { useContext, useEffect, useRef, useState } from "react";
// import { auth } from "../../config/firebase-config";
import { v4 } from "uuid";
import { PostingData, emptyMyDocument } from "../firebase/getPost";
import sendMessageToTelegram from "../msgToBot";
import { PlaySound } from "../Notification/NotifySound";
import { StatusAdmin } from "../../pages/_app";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";

export default function ChatBox() {
  const { ok } = useContext(StatusAdmin);
  const [show, setShow] = useState(false);
  const [msgText, setMsgText] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [msgId, setMsgId] = useState("");

  useEffect(() => {
    if (isAdmin === false) {
      setMsgId(v4());
    }
  }, []);
  const handleMsgToFirebase = () => {
    if (msgText.trim() !== "") {
      const msgServer = {
        id: msgId,
        text: msgText,
        isdispatch: isAdmin,
        createdAt: serverTimestamp(),
      };
      setMsgText("");
      sendMessageToTelegram(`chat: ${msgText}`);
      PostingData("chatbox", msgServer);
    }
  };
  // realtime fetching
  const messagesRef = collection(db, "chatbox");
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      // where("id", "==", msgId),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data() });
      });
      setMsgs(messages);
      if (isAdmin && messages.length > 0) {
        setMsgId(messages[messages.length - 1].id);
      }
    });

    return () => unsuscribe();
  }, []);

  //push with enter msg text
  const messageContainerRef = useRef();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMsgToFirebase();
    }
  };
  useEffect(() => {
    // Ensure messageContainerRef.current is defined before attempting to access scrollHeight
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
    if (msgId === msgs[msgs.length - 1]?.id) PlaySound();
  }, [msgs]);

  return (
    <div className="chatbox">
      {ok && (
        <>
          <span
            className="badge rounded-pill bg-success cursorpointer mx-2"
            onClick={() => {
              setIsAdmin(true);
              if (msgs.length > 0) {
                setMsgId(msgs[msgs.length - 1].id);
              }
            }}
          >
            get
          </span>
          <span
            className="badge rounded-pill bg-danger cursorpointer"
            onClick={() => {
              setMsgId("");
              setIsAdmin(true);
              setMsgs([]);
              emptyMyDocument();
            }}
          >
            delete
          </span>
        </>
      )}
      {!show ? (
        <button onClick={() => setShow(!show)} className="chat-container">
          <i className="fas fa-paper-plane sitecolor fs-4"></i>
        </button>
      ) : (
        <div className="chat-container">
          <span
            onClick={() => setShow(!show)}
            className="position-absolute top-0 start-0 translate-middle"
          >
            <i className="rounded-circle px-1 border bg-secondary cursorpointer text-light fas fa-times"></i>
          </span>
          <div className="chattext" ref={messageContainerRef}>
            <div className="chat-message dispatch">
              Welcome! dispatcher is here...
            </div>

            {msgs.map((msg, i) => {
              if (msg.id === msgId && !isAdmin) {
                return (
                  <div
                    key={i}
                    className={`chat-message ${
                      msg.isdispatch ? "dispatch" : "client"
                    }`}
                  >
                    {msg.text}
                  </div>
                );
              }
              if (isAdmin) {
                return (
                  <div
                    key={i}
                    className={`chat-message cursorpointer ${
                      msg.isdispatch ? "dispatch" : "client"
                    }`}
                    onClick={() => setMsgId(msg.id)}
                  >
                    {msg.text}{" "}
                    <span className="text-dark">- {msg?.id.substr(-3)}</span>
                  </div>
                );
              }
            })}
          </div>

          <div className="input-group">
            <input
              id="msg"
              className="form-control"
              type="text"
              placeholder={`${
                isAdmin ? msgId?.substr(-3) : "Type your message..."
              }`}
              value={msgText}
              onChange={(e) => setMsgText(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <span
              onClick={handleMsgToFirebase}
              className="btn input-group-text sitebackcolor"
              role="button"
            >
              <i className="fas fa-paper-plane"></i>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
