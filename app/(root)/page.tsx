import HeroSection from "@/components/home-page/hero-section";
import { getCurrentUser } from "@/data/users";

export default async function Home() {
     const user = await getCurrentUser();
     return (
          <>
               <HeroSection user={user} />
          </>
     );
}
