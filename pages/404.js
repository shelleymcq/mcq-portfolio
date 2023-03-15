import Link from 'next/link'

const PageNotFound = () => {
  return (
    <>
      <div className='flex flex-col mt-20 items-center'>
        <h1>Ooops. Something went wrong</h1>
        <p className='text-cyan-600'>
          <Link href="/">Return to Shelley's Site</Link>
        </p>
      </div>
    </>
  )
}

export default PageNotFound