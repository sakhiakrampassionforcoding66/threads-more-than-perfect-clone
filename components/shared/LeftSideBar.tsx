"use client";

import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { SignedIn, SignOutButton, useAuth } from '@clerk/nextjs';

export default function LeftSideBar() {
  const pathName = usePathname();
  const router = useRouter();
  const { userId } = useAuth();
  
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-4 px-4">
        {sidebarLinks.map((link) => {
          const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route;

          if (link.route === '/profile') {
            link.route = `/profile/${userId}`;
          }

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && 'bg-primary-500'} hover:bg-primary-200`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
              />

              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          )
        })}
      </div>

      <div className='flex flex-row gap-4 mt-10 px-6'>
        <SignedIn>
          <SignOutButton signOutCallback={() => {
            router.push('/sign-in');
          }}>
            <div className='cursor-pointer flex'>
              <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
            </div>
          </SignOutButton>
          <p className='text-light-2 max-lg:hidden'>Logout</p>
        </SignedIn>
      </div>
    </section>
  )
}
