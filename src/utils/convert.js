export const convertFtoC = (fTemp) => {
    return Math.round((fTemp - 32) * 5 / 9);
}

export const convertMPHtoKMH = (MPHspeed) => {
	return Number((MPHspeed * 1.609344).toFixed(2));
}
