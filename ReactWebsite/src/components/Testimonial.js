import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';

const Testimonial = () => {
  return (
    <section class="pn_reviews my-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center pb-5">Reviews of our valuable users</h1>
          </div>

          <div class="col-md-12 col-lg-4">
            <div class="pn_testimonial_box mt-4">
              <p class="text-justify">
                The Application has proved to be a really important assest in my
                journey as a farmer. Right from the sowing season upto the
                harvesting, we get a lot of information regarding best farmig
                practices.
              </p>

              <div class="row pt-3">
                <div class="col-md-6 pn_review_profile">
                  <img
                    src="https://desklib.com/static/src/assets/images/v2/profile_1.svg"
                    class="border-radius-12 float-right"
                    alt="client"
                  />{' '}
                  <span> Ishan Bhandari </span>{' '}
                </div>
                <div class="col-md-6 pn_review_rating d-flex justify-content-end">
                  {' '}
                  5 &nbsp;{' '}
                  <img
                    class="image-radius aligncenter"
                    src="https://desklib.com/static/src/assets/images/v2/star_rating.svg"
                    alt="client stars"
                  />{' '}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="pn_testimonial_box mt-4">
              <p class="text-justify">
                What I like the most in this Application is the idea behind
                helping our actual heroes, our Annadata, who are often neglected
                from the mainstream techology benefits.
              </p>
              <div class="row pt-3">
                <div class="col-md-6 pn_review_profile">
                  <img
                    src="https://desklib.com/static/src/assets/images/v2/profile_2.svg"
                    class="border-radius-12 float-right"
                    alt="client"
                  />{' '}
                  <span> Gina Lantina </span>{' '}
                </div>
                <div class="col-md-6 pn_review_rating d-flex justify-content-end">
                  {' '}
                  4 &nbsp;{' '}
                  <img
                    class="image-radius aligncenter"
                    src="https://desklib.com/static/src/assets/images/v2/star_rating.svg"
                    alt="client stars"
                  />{' '}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="pn_testimonial_box mt-4">
              <p class="text-justify">
                The Application comes really handy with both the mobile and the
                web application. The best thing about them is that they support
                multiple native languages which was a prime concern till now.
              </p>
              <div class="row pt-3">
                <div class="col-md-6 pn_review_profile">
                  <img
                    src="https://desklib.com/static/src/assets/images/v2/profile_3.svg"
                    class="border-radius-12 float-right"
                    alt="client"
                  />{' '}
                  <span> Bhavesh </span>{' '}
                </div>
                <div class="col-md-6 pn_review_rating d-flex justify-content-end">
                  {' '}
                  5 &nbsp;{' '}
                  <img
                    class="image-radius aligncenter"
                    src="https://desklib.com/static/src/assets/images/v2/star_rating.svg"
                    alt="stars"
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
