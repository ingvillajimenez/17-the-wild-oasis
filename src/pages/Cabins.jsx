import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

/////////////////////////////
// Setting Up Storage Buckets
function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://bhkmccdyhtrvvvgkggnh.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt="cabin-001"
      />
    </Row>
  );
}

export default Cabins;
