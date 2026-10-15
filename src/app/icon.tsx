import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#53b700",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 10,
              height: 18,
              background: "white",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              width: 10,
              height: 18,
              background: "rgba(255,255,255,0.85)",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
