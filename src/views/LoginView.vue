<template>
	<div>
		<LoginModalCard />
	</div>
</template>

<script>
import LoginModalCard from '../components/LoginModalCard.vue';
export default {
	name: 'LoginView',
	components: {
		LoginModalCard,
	},
	data() {
		return {
			active: false,
		};
	},
	methods: {
		click() {
			this.active = !this.active;
		},
	},
};
</script>

