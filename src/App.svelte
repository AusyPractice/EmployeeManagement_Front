<script>
	import repositories from "./repository";
	const employees = repositories.employees.getAll();
</script>

<div class="employees-list">
	<table>
	{#each employees as employee}
		<tr>
			<td>{employee.firstName}</td>
			<td>{employee.lastName}</td>			 
		</tr>
	{/each}
	</table>
</div>

<style>

</style>