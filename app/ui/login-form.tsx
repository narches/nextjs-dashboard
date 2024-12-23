'use client';


import { authenticate } from '@/app/lib/actions';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
    AtSymbolIcon,
    ExclamationCircleIcon,
    KeyIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import { useActionState } from 'react';
import { Button } from './button';




export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 bg-gray-50 px-6 pt-8 pb-4 rounded-lg">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="block mt-5 mb-3 font-medium text-gray-900 text-xs"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="block border-gray-200 py-[9px] pl-10 border rounded-md w-full text-sm placeholder:text-gray-500 outline-2 peer"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="top-1/2 left-3 absolute w-[18px] h-[18px] text-gray-500 peer-focus:text-gray-900 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="block mt-5 mb-3 font-medium text-gray-900 text-xs"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="block border-gray-200 py-[9px] pl-10 border rounded-md w-full text-sm placeholder:text-gray-500 outline-2 peer"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="top-1/2 left-3 absolute w-[18px] h-[18px] text-gray-500 peer-focus:text-gray-900 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto w-5 h-5 text-gray-50" />
        </Button>
        <div className="flex items-end space-x-1 h-8" aria-live="polite" aria-atomic="true">
          {errorMessage && (
              <>
                <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                <p className="text-red-500 text-sm">{errorMessage}</p>
              </>
            )}
        </div>
      </div>
    </form>
  );
}
