'use client'

import { Spinner } from "flowbite-react"

function loading() {
  return (
    <div className="bg-white w-full h-svh flex justify-center items-center">

    <Spinner size='lg' color='warning'  aria-label="Default status example" />;
</div>  )
}

export default loading