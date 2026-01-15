import { useEffect, useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Loading from "./Loading";

export default function OrderTakePage() {
  const tableRef = useRef(null);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);

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
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  const deleteAllCheckins = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(checkinRef);
      const batch = writeBatch(db);
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      getCheckins();
      setCheckins([]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCheckins();
  }, []);

  return (
    <div className="container">
      {!loading ? (
        <>
          <table ref={tableRef} border="1" className="table table-striped mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Adult</th>
                <th scope="col">Child</th>
              </tr>
            </thead>
            <tbody>
              {checkins.length > 0
                ? checkins.map((check, i) => {
                    return (
                      <tr key={check.id}>
                        <td className="fw-bold">{i + 1}</td>
                        <td>{check.name}</td>
                        <td>{check.contact}</td>
                        <td>{check.from}</td>
                        <td>{check.to}</td>
                        <td>{check.adult}</td>
                        <td>{check.child}</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
          <DownloadTableExcel
            filename={`Checkins_${new Date().toString()}`}
            sheet="checkins.xls"
            currentTableRef={tableRef.current}
          >
            <button
              // onClick={deleteAllCheckins}
              className="btn btn-success"
            >
              Export to Excel
            </button>
          </DownloadTableExcel>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
