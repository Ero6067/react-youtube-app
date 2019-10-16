import axios from "axios";

const KEY = "AIzaSyDsBL_adE_-cgGBVI9Qc3onV7QMYTHjLFg";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
