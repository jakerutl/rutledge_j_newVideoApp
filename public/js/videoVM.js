var myVideoApp = {
  //do more non-vm related stuff WHERE
  addReviews(data){
    //process the review data and push it into the Vue instance
    data.forEach(review => myVideoApp.vm.reviews.push(review));
  },

  vm : new Vue({
    delimiters : ["${","}"],

    el : "#video",

    data : {
        reviews : []
    },

    methods : {

    }
  })
}

myVideoApp.addReviews(appData.movies);
