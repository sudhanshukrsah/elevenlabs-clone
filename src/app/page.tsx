import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
export default function HomePage(){

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background font-bold">
      <h1> Welcome To ElevenLabs! </h1>
      <div>
        <OrganizationSwitcher/>
        <UserButton />
      </div>
    </div>

  );
}