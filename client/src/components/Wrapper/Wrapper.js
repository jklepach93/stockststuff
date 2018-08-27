// import React, { Component } from 'react';
// import "./Wrapper.css";
// import Home from "../Home";
// import YouTube from 'react-youtube';
// // import StockProfile from "../StockProfile";

// class Wrapper extends Component {
//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.mute();
//   }
//   _onEnd(event) {
//     event.target.playVideo();
//   }
//   render() {
//     const videoOptions = {
//       playerVars: { // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//         controls: 0,
//         rel: 0,
//         showinfo: 0
//       }

      
//       _onEnd(event) {
//         event.target.playVideo();
//       }
      
//       render() {
       
//         const videoOptions = {
          
//           playerVars: { // https://developers.google.com/youtube/player_parameters
//             autoplay: 1,
//             controls: 0,
//             rel: 0,
//             showinfo: 0
//           }
//         };
      
//         return (
//           <div className="wrapper">
      
//       <Home/>
      
 

//             <div className="video-background">
//               <div className="video-foreground">
//                 <YouTube
//                   videoId="HyYpY69Zk6Y"
//                   opts={videoOptions}
//                   className="video-iframe"
//                   onReady={this._onReady}
//                   onEnd={this._onEnd}
//                 />
//               </div>
//             </div>

//         </div>
//       </div>
//     )
//   }
// };

// export default Wrapper;