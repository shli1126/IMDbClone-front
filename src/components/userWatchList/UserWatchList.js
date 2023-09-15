const UserWatchList = ({movies}) => {

    return (
        <div>
            {
                movies.map((movie) => {
                    return (
                        <div key={movie.imdbId}>
                            <h3>{movie.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default UserWatchList;
