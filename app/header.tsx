"use client"
// import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
// import { useEffect, useState } from "react";

// import { Button } from "./ui/button";
// import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RootHeader = () => {
//   const [showSignIn, setShowSignIn] = useState(false);



  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Hirrd Logo" height={40} width={80}/>
        </Link>

        <div className="flex gap-8">
          {/* <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn> */}
           <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
           {/* <Button variant="outline" >
              Login
            </Button> */}
        </div>
      </nav>

      {/* {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          
        >
          
        </div>
      )} */}
    </>
  );
};

export default RootHeader;
