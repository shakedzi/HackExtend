import React, { Component } from 'react';
require('rc-slider/assets/index.css');
import Rcslider from 'rc-slider';

class CreateEvent extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      chair: {name: "roy",photo: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
      reminder: false
    }
     this.changetoTrue = this.changetoTrue.bind(this);
     this.changetoFalse = this.changetoFalse.bind(this);
  }

  changetoTrue(){
    this.setState({reminder:true})
  }

  changetoFalse(){
    this.setState({reminder:false})
  }

  render() {
    return (
      <div className="createEvent">
        <img src={this.state.chair.photo} alt={this.state.chair.name} title={this.state.chair.name} className="img-responsive"/>

        <div className="input">
        Event name
          <input type="text"/>
        </div>
        <div className="radioButtonClass">
        Event type
          <label>
            <input name="radioButton" type="radio" value="Wedding" />
            Wedding
          </label>
          <label>
            <input name="radioButton" type="radio" value="Hackthon"  disabled="true"/>
            Hackthon
          </label>
          <label>
            <input name="radioButton" type="radio" value="Homework" disabled="true" />
            Homework
          </label>
        </div>
        <div className="input">
          Number of guests
          <input type="number" />
        </div>
        <div className="input">
          Group size
          <input type="number" />
        </div>
        <div className="radioButtonClass">
          <label>
          Auto reminder?
          <input name="radioButton2" type="radio" value="yes" onChange={this.changetoTrue} />
          yes
          </label>
          {
            this.state.reminder &&
              <div className="autoReminder">
              <label>
                <input name="radioButton3" type="radio" value="everyday" disabled="true"/>
                every day
              </label>
              <label>
                <input name="radioButton3" type="radio" value="everyweek" disabled="true"/>
                every week
              </label>
              </div>

          }
          <label>
          <input name="radioButton2" type="radio" value="no"  onChange={this.changetoFalse}/>
          no
          </label>
        </div>
        <div className="configuration">
          <label>
            Connections strength
            <Rcslider min={0} max={100} defaultValue={100} disabled={true}/>
          </label>
        </div>
        <div>
          <button name="button">
          OK
          </button>
        </div>
      </div>
    );
  }


}

export default CreateEvent
