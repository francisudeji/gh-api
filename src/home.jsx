import * as React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    fetch("https://api.github.com/users/francisudeji")
      .then((res) => res.json())
      .then((userProfile) => {
        setProfile(userProfile);
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
        <h1>Users:</h1>
        {profile ? (
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        ) : (
          "Fetching profile..."
        )}
      </section>
    </div>
  );
}
