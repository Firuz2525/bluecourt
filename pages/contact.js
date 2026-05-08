import Getintouch from "../components/Getintouch";
export default function Contact() {
  return (
    <div>
      <Getintouch />
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
