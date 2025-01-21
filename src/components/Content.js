import React from 'react';
import WeatherWidget from './WeatherWidget';

function Content() {
  return (
    <content className="App-content">
        <div className="container">
          <div class="App-content" id="section1">
              <h2>Section 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

        {/* The reason this div is comented is because it duplicated the box */}
          {/* <div class="weather-widget"> */}
              <WeatherWidget/>
          {/* </div>   */}
        </div>

        <div class="App-content-with-bg" id="section2">
            <h2>Section 2</h2>
            <p>This section has a background image with opacity.</p>
        </div>

        <div class="App-content" id="section3">
            <h2>Section 3</h2>
            <p>This section uses a solid background color with transparency.</p>
        </div>
    </content>
  );
}

export default Content;