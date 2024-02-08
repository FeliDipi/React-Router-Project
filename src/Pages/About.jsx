import { Link } from "../Link.jsx"

export const About = () =>
{
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://media.licdn.com/dms/image/C4D03AQHGyt1GMQwKgQ/profile-displayphoto-shrink_200_200/0/1644949412793?e=1712793600&v=beta&t=64xmhu1HTYdJGcbZAwHYO8utmLl_yoHYVbl7eiNYNFo" alt="Nicolás Felipe Dipierro" />
        <p>About Page React Router Example</p>
      </div>
      <Link to="/">About Me</Link>
    </>
  )
}