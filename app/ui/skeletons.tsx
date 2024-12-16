// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="bg-gray-200 rounded-md w-5 h-5" />
        <div className="bg-gray-200 ml-2 rounded-md w-16 h-6 font-medium text-sm" />
      </div>
      <div className="flex justify-center items-center bg-white px-4 py-8 rounded-xl truncate">
        <div className="bg-gray-200 rounded-md w-20 h-7" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="bg-gray-100 mb-4 rounded-md w-36 h-8" />
      <div className="bg-gray-100 p-4 rounded-xl">
        <div className="items-end gap-2 md:gap-4 grid grid-cols-12 sm:grid-cols-13 bg-white mt-0 p-4 rounded-md h-[410px]" />
        <div className="flex items-center pt-6 pb-2">
          <div className="bg-gray-200 rounded-full w-5 h-5" />
          <div className="bg-gray-200 ml-2 rounded-md w-20 h-4" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row justify-between items-center border-gray-100 py-4 border-b">
      <div className="flex items-center">
        <div className="bg-gray-200 mr-2 rounded-full w-8 h-8" />
        <div className="min-w-0">
          <div className="bg-gray-200 rounded-md w-40 h-5" />
          <div className="bg-gray-200 mt-2 rounded-md w-12 h-4" />
        </div>
      </div>
      <div className="bg-gray-200 mt-2 rounded-md w-12 h-4" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="bg-gray-100 mb-4 rounded-md w-36 h-8" />
      <div className="flex flex-col justify-between bg-gray-100 p-4 rounded-xl grow">
        <div className="bg-white px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center pt-6 pb-2">
          <div className="bg-gray-200 rounded-full w-5 h-5" />
          <div className="bg-gray-200 ml-2 rounded-md w-20 h-4" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 mt-6">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative py-3 pr-3 pl-6 whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 rounded-full w-8 h-8"></div>
          <div className="bg-gray-100 rounded w-24 h-6"></div>
        </div>
      </td>
      {/* Email */}
      <td className="px-3 py-3 whitespace-nowrap">
        <div className="bg-gray-100 rounded w-32 h-6"></div>
      </td>
      {/* Amount */}
      <td className="px-3 py-3 whitespace-nowrap">
        <div className="bg-gray-100 rounded w-16 h-6"></div>
      </td>
      {/* Date */}
      <td className="px-3 py-3 whitespace-nowrap">
        <div className="bg-gray-100 rounded w-16 h-6"></div>
      </td>
      {/* Status */}
      <td className="px-3 py-3 whitespace-nowrap">
        <div className="bg-gray-100 rounded w-16 h-6"></div>
      </td>
      {/* Actions */}
      <td className="py-3 pr-3 pl-6 whitespace-nowrap">
        <div className="flex justify-end gap-3">
          <div className="bg-gray-100 rounded w-[38px] h-[38px]"></div>
          <div className="bg-gray-100 rounded w-[38px] h-[38px]"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="bg-white mb-2 p-4 rounded-md w-full">
      <div className="flex justify-between items-center border-gray-100 pb-8 border-b">
        <div className="flex items-center">
          <div className="bg-gray-100 mr-2 rounded-full w-8 h-8"></div>
          <div className="bg-gray-100 rounded w-16 h-6"></div>
        </div>
        <div className="bg-gray-100 rounded w-16 h-6"></div>
      </div>
      <div className="flex justify-between items-center pt-4 w-full">
        <div>
          <div className="bg-gray-100 rounded w-16 h-6"></div>
          <div className="bg-gray-100 mt-2 rounded w-24 h-6"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="bg-gray-100 rounded w-10 h-10"></div>
          <div className="bg-gray-100 rounded w-10 h-10"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="bg-gray-50 p-2 md:pt-0 rounded-lg">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg font-normal text-left text-sm">
              <tr>
                <th scope="col" className="px-4 py-5 sm:pl-6 font-medium">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pt-2 pr-6 sm:pr-6 pb-4 pl-3"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
