import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
	  for (const item of values) {
	        if (item.status === 'rejected') {
		arr.push({ status: item.status, value: item.reason });
	      } else {
	      arr.push({ status: item.status, value: item.value });
            }
	    }
	      return arr;
	    });
}
