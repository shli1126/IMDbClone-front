import './UserWatchList.css'
const UserWatchList = ({movies}) => {
    const columnCount = 3;
    return (
        <div className="card-grid">
            {movies.map((movie) => {
                 // Log movie genres here
                return (
                    <div key={movie.imdbId} className="card-grid-item">
                        <div className="card" style={{ width: '15rem'}}>
                            <img src={movie.poster} className="card-img-top" alt="poster" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <div className="card-text">
                                    <h6>Genres: </h6>
                                    {
                                        Array.isArray(movie.genres)
                                        ? movie.genres.map((g, index) => (
                                            <li key={index}>{g}</li>
                                        ))
                                        : "Genres not available"}
                                </div>
                                <a href={movie.trailerLink} className="btn btn-primary">
                                    See Trailer
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default UserWatchList;
