<script>
	import Modal from "./Modal.svelte";
	import repositories from "./repository";
	import { STUDIES } from "./utils/random-person";	
	const employees = repositories.employees.getAll();
	
	let showModal = false;
	let selectedEmployee;

	function formatDate(date) {		
		if (date === null) {
			return "–";
		}

		return date.toLocaleDateString();
	}

	function formatBoolean(bool) {
		if (bool) {
			return "Yes";
		} else {
			return "No";
		}
	}

	function formatDecimal(decimalNumber) {
		return (Math.round(decimalNumber * 100) / 100).toFixed(2);
	}

	function formatDateIso(date) {
		if (date == null) {
			return "";
		}

		return date.toISOString().substr(0, 10);
	}

	function onEmployeeClicked(employee) {
		console.log(employee);
		showModal = true;
		selectedEmployee = employee;
	}

	function onModalClosed() {
		showModal = false;
	}

	console.log(employees);
</script>

<div class="content-wrapper">
	<header>
		<h1>
			EmployeeManagement
			<span class="subtitle">by the Ausy Trainees</span>
		</h1>
	</header>	

	<div class="employees-list">
		<table>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Department</th>
					<th>Position</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th class="centered">Manager</th>
					<th class="centered">Active</th>
				</tr>
			</thead>
	
			<tbody>
				{#each employees as employee}
					<tr on:click="{() => onEmployeeClicked(employee)}">
						<td>{employee.firstName}</td>
						<td>{employee.lastName}</td>
						<td>&ndash;</td>
						<td>&ndash;</td>
						<td>{formatDate(employee.startDate)}</td>
						<td>{formatDate(employee.endDate)}</td>
						
						<td class="centered boolean-value" class:yes="{employee.isManager}">{formatBoolean(employee.isManager)}</td>
						<td class="centered boolean-value" class:yes="{employee.isActive}">{formatBoolean(employee.isActive)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<footer>
		&copy; 2020 The Trainees at <a href="https://www.ausy.com/en/the-group/locations/romania" target="_blank">Ausy Technologies Romania</a>.<br />
		Icons provided by <a href="https://icons8.com/" target="_blank">Icons8</a>. Powered by <a href="https://svelte.dev/" target="_blank">Svelte</a>.
	</footer>
</div>

<a href="#" class="action-button">
	<span>
		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAATklEQVRIiWNgGAVUBkcZGBgO09KC/1BMNGCikUNGLRjJFhxlQCRFbBgG8KlBySfoFvyjgqNJyifYNI9mtFEL6GwBC4nqjzBQmM5HAQYAAEhLGN/HFZxZAAAAAElFTkSuQmCC"/>
	</span>
</a>

{#if showModal}
<Modal on:close={onModalClosed}>
	<form>
		<div class="row">
			<label>
				First Name: 
				<input type="text" placeholder="First Name" value="{selectedEmployee.firstName}" required />
			</label>

			<label>
				Last Name:
				<input type="text" placeholder="Last Name" value="{selectedEmployee.lastName}" required />
			</label>
		</div>

		<div class="row">
			<label>
				Start Date:
				<input type="date" value="{formatDateIso(selectedEmployee.startDate)}" required />
			</label>

			<label>
				End Date:
				<input type="date" value="{formatDateIso(selectedEmployee.endDate)}" />
			</label>
		</div>

		<div class="row">
			<label>
				Department:
				<select>
					<option value="1">ASD</option>
				</select>
			</label>

			<label>
				Job Category:
				<select>
					<option value="1">ASD</option>
				</select>
			</label>
		</div>		

		<div class="row">			
			<label>
				Telephone:
				<input type="tel" value="{selectedEmployee.telephone}" required />
			</label>

			<label>
				E-mail:
				<input type="email" value="{selectedEmployee.email}" />
			</label>
		</div>

		<div class="row">
			<label>
				Birthday:
				<input type="date" value="{formatDateIso(selectedEmployee.birthday)}" required />
			</label>

			<label>
				Num. children:
				<input type="number" value="{selectedEmployee.noChildren}" required />
			</label>			
		</div>

		<div class="row">
			<label>
				Salary:
				<input type="number" step="0.01" class="no-spinner" value="{formatDecimal(selectedEmployee.salary)}" required />
			</label>

			<label>
				Social Security Number:
				<input type="number" class="no-spinner" value="{selectedEmployee.socialSecurityNumber}" required />
			</label>
		</div>

		<div class="row">
			<label>
				Studies:
				<input type="text" list="studies" value="{selectedEmployee.studies}" />
			</label>

			<label>
				Postal Code:
				<input type="number" class="no-spinner" value="{selectedEmployee.postalCode}" required />
			</label>

			<datalist id="studies">
				{#each STUDIES as study}
					<option value="{study}" />
				{/each}
			</datalist>
		</div>

		<div class="row three-cols">
			<label>
				<input type="checkbox" checked="{selectedEmployee.isActive}" />
				Active
			</label>

			<label>
				<input type="checkbox" checked="{selectedEmployee.isManager}" />
				Manager
			</label>

			<label>
				<input type="checkbox" checked="{selectedEmployee.hasDrivingLicense}" />
				Has driving license
			</label>
		</div>

		<div class="row">
			<label class="full-row">
				Address:
				<textarea value="{selectedEmployee.address}" required></textarea>
			</label>
		</div>
	</form>
</Modal>
{/if}

<style>
	header {
		color: white;
	}

	h1 {
		display: table;
	}

	h1 .subtitle {
		display: block;
		font-size: 0.45em;
		font-weight: 400;
		opacity: 0.5;
		text-align: right;
	}

	.content-wrapper {
		width: 920px;
		margin: 0 auto;
	}

	.employees-list table {
		background-color: white;
		width: 100%;
		border-collapse: collapse;
		border-radius: 5px;
		box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
	}

	.employees-list table th,
	.employees-list table td {
		padding: 0.5em;
		border-bottom: 1px solid rgb(229, 229, 229);
	}

	.employees-list table th {
		color: rgb(57, 66, 91);
		text-transform: uppercase;
		text-align: left;
		border-bottom: 1px solid rgb(204, 204, 204);
	}

	/* Remove the border of the last row. */
	.employees-list tr:last-child td {
		border-bottom: 0;
	}

	/* Add a left padding only to the first column */
	.employees-list th:first-child,
	.employees-list td:first-child {
		padding-left: 0.75em;
	}

	/* Add a right padding only to the last column */
	.employees-list th:last-child,
	.employees-list td:last-child {
		padding-right: 0.75em;
	}

	.employees-list .centered {
		text-align: center;
	}

	.boolean-value {
		text-transform: uppercase;
		font-size: 0.8em;
		font-weight: 600;
		color: red;
	}

	.boolean-value.yes {
		color: green;
	}

	.employees-list tbody tr:hover {
		cursor: pointer;
		background-color: #c0242e;		
	}

	.employees-list tbody tr:hover,
	.employees-list tbody tr:hover .boolean-value {
		color: white;
	}

	footer {
		font-size: 0.8em;
		color: rgb(205, 207, 214);
		margin-top: 2em;
	}

	footer a {
		color: rgb(205, 207, 214);
	}

	.action-button {
		display: block;
		background-color: #c0242e;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		position: fixed;
		right: 1.5em;
		bottom: 1.5em;
		box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
		color: white;
		text-decoration: none;
		text-align: center;	
		transition-property: background-color;
		-webkit-transition-duration: 0.5s;
		-moz-transition-duration: 0.5s;
		-o-transition-duration: 0.5s;
		-ms-transition-duration: 0.5s;
		transition-duration: 0.5s;
		transition-timing-function: linear;	
	}

	/*
		Vendor prefixes
		-webkit- 		Chrome, Safari, versiunile mai noi de Opera
		-moz- 			Firefox
		-o- 			versiunile mai vechi de Opera
		-ms- 			IE, MS Edge
	*/
	.action-button:hover {
		background-color: #E0444E;
	}
	.action-button:active {
		transform: scale(1.05);
		/* transform: translateY(3px); */
	}

	.action-button span {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 2em;
		transform: translate(-50%, -50%);
	}

	.action-button span img {
		filter: invert(1);
	}

	form .row {
		overflow: auto;
		padding: 0.25em 0;
	}

	form .row label {
		display: block;
		width: 50%;
		float: left;
		font-size: 0.85em;
		text-transform: uppercase;
		color: rgb(57, 66, 91);
		font-weight: bold;
	}

	form .row.three-cols label {
		width: 33.33%;
	}

	form .row input,
	form .row select,
	form .row textarea {
		display: block;
		width: 80%;
		box-sizing: border-box;
	}

	form .row input[type="checkbox"] {
		display: inline-block;
		width: auto;
	}

	form .row .full-row {
		width: 100%;
	}

	form .row .full-row textarea {
		width: 90%;
	}

	form input.no-spinner::-webkit-outer-spin-button,
	form input.no-spinner::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	form input.no-spinner {
		-moz-appearance: textfield;
	}
</style>