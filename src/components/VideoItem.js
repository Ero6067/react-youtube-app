import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.description}
			/>
			<div className="content">
				<div className="header white-text">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
