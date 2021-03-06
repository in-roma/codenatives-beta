import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/api/users';
const apiNewUser = apiEndPoint + '/newadmin';

function elementUrl(id) {
	return `${apiEndPoint}/${id}`;
}

export function getElements() {
	return http.get(apiEndPoint);
}

export function getOneElement(elementId) {
	return http.get(elementUrl(elementId));
}

export function putOneElement(id, element) {
	const body = { ...element };
	return http.put(elementUrl(id), body);
}

export function postOneElement(element) {
	return http.post(apiEndPoint, element);
}

export function postOneElementAdmin(element) {
	return http.post(apiNewUser, element);
}


export function register(user) {
	return http.post(apiEndPoint, user);
}

export function deleteElement(id) {
	return http.delete(elementUrl(id));
}
