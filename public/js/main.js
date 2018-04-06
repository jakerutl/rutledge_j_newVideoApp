const myApp = {
  //some non-BM functionality would go here
  movieGenres(data, genres){
    genres.forEach((genre, index) => {
      myApp.vm.genres.push({
        name : genre,
        movies : data.filter(movie => movie.genre_name === genre)
      })
    })
  },

   vm : new Vue({
    el : "#app",

    data : {
      message : "welcome to my Netflix ripoff!",
      genres : []// these get populated from the function at the top of the file
    },

    methods : {

    },

    delimiters : ["${", "}"]

  })
}

myApp.movieGenres(appData.movies, ["Family", "Action", "Fantasy"]);
