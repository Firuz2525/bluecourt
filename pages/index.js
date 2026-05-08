import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage />
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
