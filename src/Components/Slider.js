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

          <div>



          <Slider {...settings}>
        <div>
          <h3>{this.props.profile.name}</h3>
        </div>
        <div>
          <img src = {this.props.profile.avatar_url}/>
        </div>
        <div>
          <h3>{this.props.profile.bio}</h3>
        </div>
        <div>
          <h3>{this.props.profile.location}</h3>
        </div>
        <div>
          <h3>{this.props.profile.company}</h3>
        </div>

      </Slider>
      </div>
);
}
}

export default SliderComponent;
