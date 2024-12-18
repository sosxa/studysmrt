import Image from "next/image";
import ColorPicker from "./components/ColorPicker";
import CenterBackground from "./components/CenterDashboard/CenterBackground";

export default function Home() {
  return (
    <div>
      <div className="absolute flex items-start w-auto h-auto">
        {/* qr code image for others to review via google form */}
        {/* <Image src="/reviewqr.png" alt="QR code to review website" width={200} height={100} /> */}
      </div>
      <div className="h-screen w-full flex items-center justify-center">
        <CenterBackground />
      </div>
    </div>
  );
}
