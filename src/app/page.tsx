import { Logo } from "@/components/Logo";
import { LoginModal } from "@/components/LoginModal";

export default function Home() {
  return (
    <div>
      <Logo />
      <LoginModal />
      <h2 className="text-xxlarge">Hello World</h2>
    </div>
  );
}
