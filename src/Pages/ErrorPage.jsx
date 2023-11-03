import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='text-center'>
      <h2 className="text-4xl">Error</h2>
      <Link to='/'><button className='btn btn-ghost'>GO HOME</button></Link>
    </div>
  )
}
