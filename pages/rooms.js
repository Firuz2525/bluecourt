import Footer from "../components/Footer";
import Header from "../components/Header";
import RoomPage from "../components/RoomPage";

export default function Rooms() {
  return (
    <>
      <Header />
      <RoomPage />
      <Footer />
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
