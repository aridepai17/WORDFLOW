export default function Layout(props) {
  console.log(props)
  const { children } = props
  return (
    <>
      <header>
        <h1 className="text-gradient">WordFlow</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <small>Created by</small>
        <a target="_blank" href="https://github.com/aridepai17/WORDFLOW">
          <img alt="pfp" src="https://avatars.githubusercontent.com/u/163564671?v=4"/>
          <p>@aridepai17</p>
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  )
}