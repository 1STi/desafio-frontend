class CapitalsView extends View {

	constructor(element) {
		super(element);
	}

	template(model) {

		if(model.status > 200) {
			return `
				<div style="text-align: center; font-size: 1.5em; margin-top: 30px; color: red">
					<h5>${model.status} - ${model.message}</5>
				</div>
			`;
		}

		let tbody = '';
		for(let i = 0; i < model.length; i++) {
			tbody += `
				<tr class="capital__btn" onclick="weatherController.loadCard(event, ${i})">
					<td>${model[i].forecast[0].low}°</td>
					<td>${model[i].forecast[0].high}°</td>
					<td>${model[i].location.name}</td>
				</tr>
			`;
		}
		let table = `
			<table class="capitals__table">
				<thead>
					<tr>
						<th>Min</th>
						<th>Máx</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					${tbody}
				</tbody>
			</table>
		`;

		if(model.length > 6)
			table += table;

		return table;
	}
}