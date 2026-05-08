import Footer from "../components/Footer";
import Header from "../components/Header";
import Imgcollection from "../components/Imgcollection";

export default function Gallery() {
  return (
    <>
      <Header />
      <Imgcollection />
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
