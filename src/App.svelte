<script>
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
		<h1>EmployeeManagement</h1>
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


<style>
	header {
		color: white;
	}

	.content-wrapper {
		overflow: hidden;
		width: 920px;
		margin: 0 auto;
	}

	.employees-list table {
		background-color: white;
		width: 100%;
		border-collapse: collapse;
		border-radius: 5px;
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
</style>