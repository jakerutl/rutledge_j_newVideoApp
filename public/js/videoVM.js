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
        reviews : [],
        numStars : 3,
        review : ""
    },

    methods : {
      //do a post with all the new review stuff
      addReview(){
        //do a fetch here
        // debugger;
        let movieId = document.querySelector('.movId').textContent;

        fetch('/api',{
          method : 'post',
          headers : {
            'Accept' : 'application/json, text-plain, */*',
            'Content-type' : 'application/json'
          },
          body : JSON.stringify({
            id : movieId,
            stars : this.numStars,
            comment : this.review
          })
        })
          .then((resp) => resp.json())
          .then((data) =>{
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  })
};

myVideoApp.addReviews(appData.movies);
