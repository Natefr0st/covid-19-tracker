import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

/**
 * @description Sends GET Request to https://covid19.mathdro.id/api
 * @returns {Object}
 */
export const fetchData = async (country) => {
	let changeableUrl = url;

	if (country) {
		changeableUrl = `${url}/countries/${country}`;
	}

	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeableUrl);

		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		return error;
	}
};

/**
 * @description Sends GET Request to https://covid19.mathdro.id/api/daily
 * @returns {Array}
 */
export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);

		return data.map(({ confirmed, deaths, reportDate: date }) => ({
			confirmed: confirmed.total,
			deaths: deaths.total,
			date,
		}));
	} catch (error) {
		return error;
	}
};

/**
 * @description Sends GET Request to https://covid19.mathdro.id/api/countries
 * @returns {Array}
 */
export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name);
	} catch (error) {
		return error;
	}
};
