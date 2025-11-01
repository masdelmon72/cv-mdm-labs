import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      {/* quando Google ti approva, sostituirai "1234567890" con il tuo vero slot */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5007111395758189"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <small style={{ color: "#999" }}>
        — Annuncio pubblicitario —
      </small>
    </div>
  );
};

export default AdBanner;
