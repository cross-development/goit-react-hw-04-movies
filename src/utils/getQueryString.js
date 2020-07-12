//Утилита для получения значения строки запроса с юрл
import queryString from 'query-string';

export default function getQueryString(string) {
	return queryString.parse(string);
}
