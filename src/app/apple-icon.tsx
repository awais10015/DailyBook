import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

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
          background: "#53b700",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 48,
              height: 88,
              background: "white",
              borderRadius: 8,
            }}
          />
          <div
            style={{
              width: 48,
              height: 88,
              background: "rgba(255,255,255,0.85)",
              borderRadius: 8,
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
