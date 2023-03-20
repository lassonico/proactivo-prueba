import { Toast } from 'flowbite-react'

function Toasty() {
  return (
    <div className="space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
        <Toast>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#7bc62d" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l5 5l10 -10" />
    </svg>
    </div>
    <div className="ml-3 text-sm font-normal">
      Tus datos han sido enviados correctamente!
    </div>
    <Toast.Toggle />
  </Toast>
    </div>
  )
}

export default Toasty