import React from 'react';

const VideoSection = (props) => {
	return (
    <div className="p-video-section">
      <div className="overlay"></div>

			<video className="p-video" loop autoPlay muted>

				<source src={props.source} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
		    <img  alt="Your browser does not support the <video> tag" title="Your browser does not support the <video> tag" />
			</video>
    </div>
	);
}

export default VideoSection;
