import React from "react";
import axios, { AxiosProgressEvent } from "axios";

const UploadProgress = () => {
	async function getImage() {
		await axios.get(
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyO3HtWpgHfRviBRio0bJPt28Hp37da908kgdClR9jRg&s",
			{
				onUploadProgress: function (
					progressEvent: AxiosProgressEvent
				) {
					
					if (progressEvent.progress)
						console.log(Math.floor(progressEvent.progress * 100));
				},
			}
		);
	}

	return (
		<div>
			<button
				className="bg-blue-500 rounded-lg px-11 py-2"
				onClick={getImage}
			>
				get image
			</button>
		</div>
	);
};

export default UploadProgress;
