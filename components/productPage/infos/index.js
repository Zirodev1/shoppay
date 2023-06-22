import { Rating } from "@mui/material";

export default function Infos() {
  return (
    <div>
      <div>
        <Rating name="simple-controlled" value={2} /> {/* You can change the value as you need */}
      </div>
    </div>
  );
}
