import axios from "axios";

const KEY2 = "AIzaSyBomULBjbXYlHvAU3KW9ZNbQbZtBDxeGZI";
const KEY = "AIzaSyCzkOFspqaCjVC6L7OgTaLygT1TQdqCrzA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
