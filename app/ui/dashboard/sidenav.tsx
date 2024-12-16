import NavLinks from '@/app/ui/dashboard/nav-links';
import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';
 
export default function SideNav() {
  return (
    <div className="flex flex-col px-3 md:px-2 py-4 h-full">
      // ...
      <div className="flex flex-row md:flex-col justify-between space-x-2 md:space-x-0 md:space-y-2 grow">
        <NavLinks />
        <div className="md:block hidden bg-gray-50 rounded-md w-full h-auto grow"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex md:flex-none justify-center md:justify-start items-center gap-2 bg-gray-50 hover:bg-sky-100 md:px-3 p-3 md:p-2 rounded-md h-[48px] font-medium text-sm hover:text-blue-600 grow">
            <PowerIcon className="w-6" />
            <div className="md:block hidden">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}