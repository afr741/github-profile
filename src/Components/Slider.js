import React, {Component} from 'react';


import Slider from 'react-slick';


class SliderComponent extends Component {



      render() {
        var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

        return (

          <div className="SliderComponent">
          <h1>SLider is here</h1>


          <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      </div>
);
}
}

export default SliderComponent;
