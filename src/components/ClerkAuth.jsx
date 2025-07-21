import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const ClerkAuth = () => {
  return (
    <>
      <SignedOut >
        <SignInButton />
      </SignedOut>
      <SignedIn >
        <UserButton />
      </SignedIn>
    </>
  );
}

export default ClerkAuth