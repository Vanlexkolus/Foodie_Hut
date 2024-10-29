import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Subscrube to me</h2>
      <Button>Subscrube</Button>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
