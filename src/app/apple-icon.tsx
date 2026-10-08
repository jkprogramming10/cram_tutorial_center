import { ImageResponse } from "next/og";
import { BrandRing } from "./_brand/BrandRing";

// Home-screen icon for iOS. Generated as a static PNG at build time.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff8ec",
        }}
      >
        <BrandRing size={140} />
      </div>
    ),
    size,
  );
}
