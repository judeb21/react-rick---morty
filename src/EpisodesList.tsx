import { IEpisode } from "./interfaces";

function EpisodeList(props: any) {
  const { episodes, toggleFavAction, favorites, store } = props;
  const { state, dispatch } = store
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image && episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favorites.find(
              (fav: IEpisode) => fav.id === episode.id
            )
              ? "Remove favorite"
              : "Add favorite"}
          </button>
        </section>
      </section>
    );
  })
}

export default EpisodeList;
