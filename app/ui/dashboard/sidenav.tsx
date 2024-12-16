import AcmeLogo from '@/app/ui/acme-logo';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="flex flex-col px-3 md:px-2 py-4 h-full">
      <Link
        className="flex justify-start items-end bg-blue-600 mb-2 p-4 rounded-md h-20 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40 text-white">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex flex-row md:flex-col justify-between space-x-2 md:space-x-0 md:space-y-2 grow">
        <NavLinks />
        <div className="md:block hidden bg-gray-50 rounded-md w-full h-auto grow"></div>
        <form action={async ()=> {
          'use server'; 
          await signOut();
          }}
        >
          <button className="flex md:flex-none justify-center md:justify-start items-center gap-2 bg-gray-50 hover:bg-sky-100 md:px-3 p-3 md:p-2 rounded-md w-full h-[48px] font-medium text-sm hover:text-blue-600 grow">
            <PowerIcon className="w-6" />
            <div className="md:block hidden">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
