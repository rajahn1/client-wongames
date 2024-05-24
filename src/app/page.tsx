import { Logo } from "@/components/Logo";
import { vars } from "@/styles/theme.css";

export default function Home() {
  return (
    <div>
      <Logo textColor="white" />
      <h2 className="text-xxlarge">Hello World</h2>
    </div>
  );
}
