import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex items-center bg-blue-600 hover:bg-blue-500 px-4 rounded-lg h-10 font-medium text-sm text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="md:block hidden">Create Invoice</span>{' '}
      <PlusIcon className="md:ml-4 h-5" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="hover:bg-gray-100 p-2 border rounded-md"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

// export function DeleteInvoice({ id }: { id: string }) {
//   const handleDelete = async (formData: FormData) => {
//     try {
//       // Call deleteInvoice with the id
//       const result = await deleteInvoice(id);
//       console.log(result.message); // Handle success message if needed
//     } catch (error) {
//       console.error("Failed to delete invoice:", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault(); // Prevent form's default submission
//         const formData = new FormData(e.currentTarget);
//         handleDelete(formData);
//       }}
//     >
//       <button type="submit" className="hover:bg-gray-100 p-2 border rounded-md">
//         <span className="sr-only">Delete</span>
//         <TrashIcon className="w-4" />
//       </button>
//     </form>
//   );
// }

