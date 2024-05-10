import Image from "next/image";
import LandingIcon from '../../../public/icon/landingAbstract.png'
import Header from "@/components/header";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen relative">
      <Header classname={cn('sm:absolute left-0 top-0 w-full')} />
      <main className="flex h-full w-full justify-between">
        {children}
        <div className="flex h-full w-full sticky top-0 items-center justify-center bg-sky-1 max-lg:hidden">
          <div>
            <Image
              src={LandingIcon}
              alt="Auth image"

              className="rounded-l-xl object-contain"
            />
          </div>
        </div>
      </main>
    </div>

  );
}
