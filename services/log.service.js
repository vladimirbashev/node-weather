import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		No params - show weather
		-s [CITY] to set a city
		-h help
		-t [API_KEY]to save a token
		`
	);
};

const printWeather = (res, icon) => {
	console.log(
		dedent`${chalk.bgYellow(' WEATHER ')} Weather in ${res.name}
		${icon}  ${res.weather[0].description}
		Temperature: ${res.main.temp} (feel like ${res.main.feels_like})
		Humidity: ${res.main.humidity}%
		Wind: ${res.wind.speed}
		`
	);
};

export { printError, printSuccess, printHelp, printWeather };
