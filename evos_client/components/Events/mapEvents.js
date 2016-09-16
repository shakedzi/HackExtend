import React, { Component } from 'react'
import Event from './Event'
import PlusEvent from './PlusEvent'

class MapEvents extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      events:[{eventTitle: 'Roy`s Wedding',eventPhoto: 'http://sazan.me/wp-content/uploads/2015/07/26.jpg'},
      {eventTitle: 'Roy`s Wedding',eventPhoto: 'http://sazan.me/wp-content/uploads/2015/07/26.jpg'},
      {eventTitle: 'Shaked`s Wedding',eventPhoto: 'http://sazan.me/wp-content/uploads/2015/07/26.jpg'},
      {eventTitle: 'Adi`s Wedding',eventPhoto: 'http://sazan.me/wp-content/uploads/2015/07/26.jpg'},
      {eventTitle: 'Hackextend',eventPhoto: 'http://sazan.me/wp-content/uploads/2015/07/26.jpg'},
      {eventTitle: 'Homework',eventPhoto: 'http://sazan.me/wp-content/uploads/2015/07/26.jpg'}
      ]
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          {
            this.state.events.map(function(event, j) {
              return <Event eventTitle={event.eventTitle} eventPhoto={event.eventPhoto} />
            })
          }
          <PlusEvent />
        </div>
      </div>
    );
  }
}

export default MapEvents
