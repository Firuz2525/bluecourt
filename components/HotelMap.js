import React from "react";

export default function DynamicGoogleMap({ lat = 39.651726, lng = 66.979777 }) {
  // Construct the dynamic Google Maps Embed URL
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1085.8095782220123!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!5e0!3m2!1sen!2sjp!4v1785148653108!5m2!1sen!2sjp`;
  function createGoogleMap2zLabel(latDms, lngDms) {
    // Join the DMS coordinates with a space
    const text = `${latDms} ${lngDms}`;

    // Convert to UTF-8 Bytes
    const encoder = new TextEncoder();
    const textBytes = encoder.encode(text);

    // Wrap in Protobuf field header (tag 1, wire type 2 = string length prefix)
    const protobufHeader = [0x0a, textBytes.length];
    const fullPayload = new Uint8Array([...protobufHeader, ...textBytes]);

    // Convert to Base64 string
    let binary = "";
    fullPayload.forEach((byte) => (binary += String.fromCharCode(byte)));
    return btoa(binary);
  }

  // Usage Example:
  const label = createGoogleMap2zLabel(lat, lng);
  console.log(label);
  // Output: MznCsDM5JzA3LjciTiA2NsKwNTgnNDQuNiJF
  return (
    <iframe
      src={mapSrc}
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Hotel Location Map"
    />
  );
}
