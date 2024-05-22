import axios from 'axios';

export const load = async () => {
	const grocery = await axios.get('https://epicerie-de-jose.payloadcms.app/api/grocery-list');

	const user = await axios.get('https://epicerie-de-jose.payloadcms.app/api/users');

	return { props: { grocery: grocery.data.docs[0], user: user.data.docs[0] } };
};
