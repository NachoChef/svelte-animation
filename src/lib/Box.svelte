<script>
	import { drag } from './drag';
</script>

<div class="box" use:drag />

<style>
	.box {
		background: var(--primary);
		box-shadow: var(--level-2);
		height: 100px;
		width: 100px;
	}
</style>
