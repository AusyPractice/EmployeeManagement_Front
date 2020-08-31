<script>	
	import ActionButton from "./components/ActionButton.svelte";
	import EmployeeList from "./components/EmployeeList.svelte";
	import AddEditEmployee from "./components/AddEditEmployee.svelte";

	import repositories from "./repository";
    const employees = repositories.employees.getAll();

	let showModal = false;
	let selectedEmployee;	

	console.log(employees);

	function onEmployeeClicked(e) {
		const employee = e.detail.employee;
		showModal = true;
		selectedEmployee = Object.assign({}, employee);
	}

	function onModalClosed() {
		showModal = false;
		employees = employees;
	}
	
	function onModalSubmitted() {
		console.log(selectedEmployee);
	}
</script>

<div class="content-wrapper">
	<header>
		<h1>
			EmployeeManagement
			<span class="subtitle">by the Ausy Trainees</span>
		</h1>
	</header>	

	<EmployeeList employees="{employees}" on:click="{onEmployeeClicked}" />

	<footer>
		&copy; 2020 The Trainees at <a href="https://www.ausy.com/en/the-group/locations/romania" target="_blank">Ausy Technologies Romania</a>.<br />
		Icons provided by <a href="https://icons8.com/" target="_blank">Icons8</a>. Powered by <a href="https://svelte.dev/" target="_blank">Svelte</a>.
	</footer>
</div>

<ActionButton />

{#if showModal}
<AddEditEmployee {selectedEmployee} on:close={onModalClosed} on:submit={onModalSubmitted} />
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

	footer {
		font-size: 0.8em;
		color: rgb(205, 207, 214);
		margin-top: 2em;
	}

	footer a {
		color: rgb(205, 207, 214);
	}	
</style>