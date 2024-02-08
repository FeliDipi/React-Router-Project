import Link from "../Link.jsx"

const Page404 = () =>
{
  return (
    <>
      <h1>404</h1>
      <div>
        <img style = {{width:"200px" , height:"auto"}} src="https://thenib.com/wp-content/uploads/2019/08/this-is-not-fine-004-4f0492-1.png" />
      </div>
      <Link to="/">Go Home</Link>
    </>
  )
}

export default Page404;