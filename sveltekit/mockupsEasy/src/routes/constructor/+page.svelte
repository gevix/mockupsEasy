<script>
	import { actions } from './+page.server';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#each data.props.tasks as task}
    <h1>{task.title}</h1>
	<form action="?delete&id={task.id}">
    	<button >Delete</button>
	</form>
{/each}

<form method="POST">
	<label>
		Task
		<input name="title" type="string">
	</label>
	<button>Add task</button>
</form>