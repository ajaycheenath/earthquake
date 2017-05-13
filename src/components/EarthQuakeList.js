import React, { Component } from 'react';
import RightDrawer from "../uic/RightDrawer";
import appStyle from "../css/app.css";
import Header from "../uic/Header";
import Content from "../uic/Content";
import {toDateTime} from "../config/Utils";
class EarthQuakeList extends Component {

  render() {
      const {earthquakePlaces} = window;
      const {show, showEarthQuakeOnMap, onClose, selectedID, earthquakes} = this.props;
        return (
          <RightDrawer show={show} onClose={onClose}>
            <Header >Showing all {earthquakes.length} earthquakes</Header>
            <Content>
              {earthquakes.map( (earthquake, index) => {
                const {coords1, coords2, id} = earthquake;
                const cardStyle = (id == selectedID) ? appStyle.infoCardSelected : appStyle.infoCard;
                return (
                  <div key={index} className={cardStyle} onClick={() => showEarthQuakeOnMap(id)}>
                    <div><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>{earthquake.place}</div>
                    <div><span className={appStyle.title}>Magnitude: </span>{earthquake.magnitude}</div>
                    <div><span className={appStyle.title}>Time: </span>{toDateTime(earthquake.time)}</div>
                  </div>
                );
              })}
            </Content>
          </RightDrawer>
      );
  }
}

export default EarthQuakeList;
