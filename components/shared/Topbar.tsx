import Link from 'next/link';
import Image from 'next/image';
import { OrganizationSwitcher, SignedIn, SignOutButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

export default function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className='flex items-center gap-4'>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={28}
          height={28}
        />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>
          Threads
        </p>
      </Link>

      <div className='flex items-center gap-1'>
        {/* TODO: Notification icon which displays a dropdown menu with the contents in the activity link */}
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='cursor-pointer flex'>
                <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            }
          }}
        />
      </div>
    </nav>
  )
}