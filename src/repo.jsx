import * as React from "react";
import { useParams } from "react-router-dom";

export default function Repo() {
  const { repoName } = useParams();
  const [repo, setRepo] = React.useState([]);

  React.useEffect(() => {
    console.log(repoName);
    fetch(`https://api.github.com/repos/francisudeji/${repoName}`)
      .then((res) => res.json())
      .then((userRepo) => {
        setRepo(userRepo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [repoName]);

  return (
    <section>
      <h1>Repo:</h1>
      <pre>{JSON.stringify(repo, null, 2)}</pre>
    </section>
  );
}
