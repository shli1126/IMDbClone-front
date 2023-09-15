import './UserWatchList.css'
const UserWatchList = ({movies}) => {
    const columnCount = 3; // You can adjust the number of columns per row as needed
    return (
        <div className="card-grid">
            {movies.map((movie) => {
                 // Log movie genres here
                return (
                    <div key={movie.imdbId} className="card-grid-item">
                        <div className="card" style={{ width: '15rem' }}>
                            <img src={movie.poster} className="card-img-top" alt="poster" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">
                                    {movie.genres}
                                    {/*{console.log(typeof(movie.genres))}*/}
                                    {/*{*/}
                                    {/*    Array.isArray(movie.genres)*/}
                                    {/*    ? movie.genres.map((g, index) => (*/}
                                    {/*        <p key={index}>{g}</p>*/}
                                    {/*    ))*/}
                                    {/*    : "Genres not available"}*/}
                                </p>
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
