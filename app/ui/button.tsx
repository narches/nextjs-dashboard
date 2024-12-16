import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex items-center bg-blue-500 hover:bg-blue-400 active:bg-blue-600 aria-disabled:opacity-50 px-4 rounded-lg h-10 font-medium text-sm text-white transition-colors aria-disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
        className,
      )}
    >
      {children}
    </button>
  );
}
