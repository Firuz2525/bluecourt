import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="text-dark">
      <Triangle
        height="80"
        width="80"
        color="black"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <div>L O A D I N G . . .</div>
    </div>
  );
}
