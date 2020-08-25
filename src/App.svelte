<script>
	import Modal from "./Modal.svelte";
	import repositories from "./repository";
	const employees = repositories.employees.getAll();

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
					<tr>
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

<!--<Modal>
	<input type="text" />
</Modal>-->

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
</style>