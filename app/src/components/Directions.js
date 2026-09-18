import React, { Component } from 'react';
import _ from '../common/i18n'

class Directions extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    evt.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const statusClass = this.state.isOpen ? '' : 'hidden';
    return (
      <div className={`directions ${statusClass}`}>
        <h3 onClick={this.onClick}><span className='arrow'></span>{_("Directions")}</h3>
        <div className='direction-content'>
          <p>{_("Connect at least 5 high-contrast objects in 3 or more photos to their corresponding locations on the map.")}</p>
          <p>{_("First, load the GCP file and images:")}</p>
          <ol>
            <li>
              <span className='tc'><span className='circled'>1</span></span>
              <span className='tc'>{
                _(`
                  USING THE LEFT DROP ZONE: Upload a GCP file containing a list of the 
                  names of the high-contrast objects, latitude, longitude, and elevation 
                  separated by commas. The first line should be the coordinate reference 
                  system identifier (CRS). I.e. 'EPSG:4326'.
                  `.trim().replace(/\s+/g, ' ')
                )
              }</span></li>
            <li>
              <span className='tc'><span className='circled'>2</span></span>
              <span className='tc'>{
                _(`
                  USING THE RIGHT DROP ZONE: Upload a sample of images (jpeg or png) used in
                  the photogrammetry task that clearly show the high-contrast markers specified
                  in the GCP file in step (1).
                  `.trim().replace(/\s+/g, ' ')
                )
              }</span></li>
          </ol>
          <p>{_("Then, for each image, select the image. And for each marker in the image:")}</p>
          <ol>
            <li>
              <span className='tc'><span className='circled'>3</span></span>
              <span className='tc'>{
                _("USING IMAGE ON THE LEFT: Set a point on the visible marker.")
              }</span>
            </li>
            <li>
              <span className='tc'><span className='circled'>4</span></span>
              <span className='tc'>{
                _("USING THE MAP ON THE RIGHT: With the image point still selected, select the corresponding map marker.")
              }</span>
            </li>
            <li>
              <span className='tc'><span className='circled'>5</span></span>
              <span className='tc'>{
                _(`
                  REPEAT steps 3 and 4 as needed (at least until the constraints are
                  achieved). If a mistake is made, delete the invalid points and redo
                  as necessary.
                  `.trim().replace(/\s+/g, ' ')
                )
              }</span>
            </li>
          </ol>
          <p>{_("Finally:")}</p>
          <ol>
            <li>
              <span className='tc'><span className='circled'>6</span></span>
              <span className='tc'>{
                _(`
                  EXPORT NEW GCP FILE: Generate a new GCP file using the export button at the top
                  left. Download the file in your browser or copy and paste into a new file on your
                  computer.
                  `.trim().replace(/\s+/g, ' ')
                )
              }</span>
            </li>
            <li>
              <span className='tc'><span className='circled'>7</span></span>
              <span className='tc'>{
                _(`
                  USING THE NEW GCP FILE: Include this file in a new photogrammetry task along
                  with the necessary images.
                  `.trim().replace(/\s+/g, ' ')
                )
              }</span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Directions;