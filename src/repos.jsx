import * as React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Repos() {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.github.com/users/francisudeji/repos")
      .then((res) => res.json())
      .then((userRepos) => {
        setRepos(userRepos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">PROFILE</Link>
        <Link to="/repos">REPOS</Link>
      </nav>

      <section>
        <h1>Repos:</h1>
        <ul>
          {repos.length > 0 &&
            repos.slice(0, 5).map((repo) => {
              return (
                <li key={repo.name}>
                  <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
                </li>
              );
            })}
        </ul>
        <Outlet />
      </section>
    </div>
  );
}
