import { Route, Routes } from "react-router-dom";
import EntityPreview from "./EntityPreview";
import Home from "./Home";
import IonResourcePreview from "./IonResourcePreview.jsx";
import BillboardPreview from "./BillboardPreview";
import MapPinsPreview from "./MapPinsPreview";

function ResiumView() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entity" element={<EntityPreview />} />
        <Route path="/ion" element={<IonResourcePreview />} />
        <Route path="/billboard" element={<BillboardPreview />} />{" "}
        <Route path="/mapPins" element={<MapPinsPreview />} />
      </Routes>
    </>
  );
}

export default ResiumView;