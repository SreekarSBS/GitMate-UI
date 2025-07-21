import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const ClerkAuth = () => {
  return (
    <>
      <SignedOut redirectUrl="/auth">
        <SignInButton redirectUrl="/auth"/>
      </SignedOut>
      <SignedIn redirectUrl="/">
        <UserButton redirectUrl="/"/>
      </SignedIn>
    </>
  );
}

export default ClerkAuth