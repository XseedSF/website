import React from 'react';
import logo from '../../images/xseedLogo.png';
import video1 from '../../videos/xseed720.mp4';

const VideoPlayer = () => {
	return (
		<div id="video-home">
      <div className="overlay"></div>

			<video className="video" loop autoPlay muted>
				{ /* <source src={video1} type='video/webm;codecs="vp8, vorbis"' /> */ }
				<source src={video1} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
			    <img src={logo} alt="Your browser does not support the <video> tag" title="Your browser does not support the <video> tag" />
			</video>

      <div id="cover" className="cover hiddenCover"></div>
    </div>
	)
}
export default VideoPlayer;
