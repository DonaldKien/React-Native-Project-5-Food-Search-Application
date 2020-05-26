import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer mydNoMPwBl9Qa8SG0PlS67M-uN8cZYHMGaBDlf0fUkkP2y14j7Nrs3iiXWUxeWeBoc-t5fDvWXVqqHQQT8zCex7Jv71cHtfMJa56AbvYJcDvi0uDtWnF2vaUYbq_XnYx`
    }
});