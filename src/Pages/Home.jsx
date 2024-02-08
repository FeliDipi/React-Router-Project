import { Link } from "../Link.jsx"

export const Home = () =>
{
  return (
    <>
      <h1>Home</h1>
      <p>Home Page React Router Example</p>
      <Link to="/about">About Me</Link>
    </>
  )
}