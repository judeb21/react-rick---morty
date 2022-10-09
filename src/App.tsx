import React, { Fragment, Suspense, useContext, useEffect } from "react";
import { fetchDataAction, toggleFavAction } from "./Action";
import { Store } from "./Store";

const EpisodeList = React.lazy(() => import("./EpisodesList"))

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  // Checks if episodes exist when application is run if not run the endpoint
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  }

  return (
    <Fragment>
      <header className="header">
        <h1>Rick and morty</h1>
        <p>Pick your favorite episodes:
          <span>Fav item: {state.favorites.length}</span>
        </p>
      </header>

      <Suspense fallback={ <div>Loading...</div>} >
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
}

export default App;
