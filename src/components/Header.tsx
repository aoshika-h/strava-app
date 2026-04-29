import { Link } from "react-router-dom"

type Props = {
  title: string
}

function Header({ title }: Props) {
  return (
    <header className="bg-orange-500 p-4 text-white">
      <h1>{title}</h1>
      <nav>
        <Link to="/">一覧</Link>
        <Link to="/dashboard">ダッシュボード</Link>
      </nav>
    </header>
  )
}

export default Header;
