<script>
	import Modal from "./Modal.svelte";
	import ActionButton from "./components/ActionButton.svelte";
	import EmployeeList from "./components/EmployeeList.svelte";
	
	import { STUDIES } from "./utils/random-person";	
	
	import repositories from "./repository";
    const employees = repositories.employees.getAll();

	let showModal = false;
	let selectedEmployee;

	function formatDecimal(decimalNumber) {
		return (Math.round(decimalNumber * 100) / 100).toFixed(2);
    }

	function formatDateIso(date) {
		if (date == null) {
			return "";
		}

		return date.toISOString().substr(0, 10);
	}

	function onEmployeeClicked(e) {
		const employee = e.detail.employee;
		showModal = true;
		selectedEmployee = employee;
	}

	function onModalClosed() {
		showModal = false;
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

	footer {
		font-size: 0.8em;
		color: rgb(205, 207, 214);
		margin-top: 2em;
	}

	footer a {
		color: rgb(205, 207, 214);
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