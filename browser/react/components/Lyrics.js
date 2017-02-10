import React from 'react';
import { Link } from 'react-router';

const Lyrics = (props) => {

  const { text, setArtist, artistQuery, setSong, songQuery, handleSubmit } = props;

  function songChange(event) {
    setSong(event.target.value);
  }

  function artistChange(event) {
    setArtist(event.target.value);
  };

  return(
    <div className="well" style={{marginTop: '20px'}}>
      <form onSubmit={handleSubmit} className="form-horizontal" >
          <fieldset>
            <legend>Lyrics Search</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Artist</label>
              <div className="col-xs-10">
                <input
                  className='form-control'
                  placeholder="Enter artist name"
                  value={artistQuery}
                  onChange={artistChange}
                />
              </div>
              <label className="col-xs-2 control-label">Song</label>
              <div className="col-xs-10">
                <input
                  className='form-control'
                  placeholder="Enter song name"
                  value={songQuery}
                  onChange={songChange}
                />
              </div>
            </div>
            <div>
              <pre> {text || "Search Above"} </pre>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
  );
}

export default Lyrics;
