import { useEffect, useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { db } from "../config/firebase-config";
import { collection, getDocs, writeBatch } from "firebase/firestore";
import Loading from "./Loading";

export default function OrderTakePage() {
  const tableRef = useRef(null);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // New: Tracks if the DOM is ready

  const checkinRef = collection(db, "checkins");
  const getCheckins = async () => {
    setLoading(true);
    try {
      const data = await getDocs(checkinRef);
      const fileteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }));
      setLoading(false);
      setCheckins(fileteredData);
      setTimeout(() => setIsLoaded(true), 500);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  const deleteAllCheckins = async () => {
    // 1. Create the condition: Only proceed if the user clicks 'OK'
    const isConfirmed = window.confirm(
      "Are you sure you want to delete ALL check-in records? This action cannot be undone."
    );

    if (isConfirmed) {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(checkinRef);

        // Check if there is actually anything to delete
        if (querySnapshot.empty) {
          alert("The database is already empty.");
          setLoading(false);
          return;
        }

        const batch = writeBatch(db);
        querySnapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });

        await batch.commit();

        // 2. Success Alert
        alert("All records have been successfully cleared.");

        setCheckins([]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        // 3. Error Alert
        alert("Failed to delete records. Check your permissions.");
        setLoading(false);
      }
    } else {
      // User clicked 'Cancel'
      console.log("Delete action cancelled by user.");
    }
  };
  useEffect(() => {
    getCheckins();
  }, []);

  return (
    <div className="container mt-5">
      {!loading ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Hotel Check-ins</h3>
            <div className="btn-group">
              {/* FIX: Only render the Excel component if isLoaded is true 
                and the tableRef actually has the table in it.
              */}
              {isLoaded && tableRef.current && checkins.length > 0 ? (
                <DownloadTableExcel
                  filename={`Checkins_${new Date().toLocaleDateString()}`}
                  sheet="Checkins"
                  currentTableRef={tableRef.current}
                >
                  <button className="btn btn-outline-success">
                    <i className="fas fa-file-excel me-2"></i> Export to Excel
                  </button>
                </DownloadTableExcel>
              ) : (
                <button className="btn btn-outline-secondary" disabled>
                  Preparing Excel...
                </button>
              )}

              <button
                onClick={deleteAllCheckins}
                className="btn btn-outline-danger ms-2"
              >
                <i className="fas fa-trash-alt me-2"></i> Clear All Data
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table
              ref={tableRef}
              className="table table-striped table-bordered align-middle"
            >
              <thead className="table-dark">
                <tr>
                  <th scope="col" style={{ width: "50px" }}>
                    #
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">From</th>

                  <th scope="col">To</th>

                  <th scope="col">RoomName</th>
                  <th scope="col">Booking-Id</th>
                  <th scope="col">Room-Id</th>
                  <th scope="col">Price</th>

                  <th scope="col" className="text-center">
                    Adult
                  </th>
                  <th scope="col" className="text-center">
                    Child
                  </th>
                </tr>
              </thead>
              <tbody>
                {checkins.length > 0 ? (
                  checkins.map((check, i) => (
                    <tr key={check.id || i}>
                      <td className="fw-bold">{i + 1}</td>
                      <td>{check.name || "N/A"}</td>
                      <td>{check.contact || "N/A"}</td>
                      <td>{check.from || "N/A"}</td>
                      <td>{check.to || "N/A"}</td>
                      <td>{check.roomName || "N/A"}</td>
                      <td>{check.uniqueId || "N/A"}</td>
                      <td>{check.roomId || "N/A"}</td>
                      <td>{check.pricePerNight || "N/A"}</td>
                      <td className="text-center">{check.adult ?? 0}</td>
                      <td className="text-center">{check.child ?? 0}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-muted">
                      No check-ins found in the database.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
