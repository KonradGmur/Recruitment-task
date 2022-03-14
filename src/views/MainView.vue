<template>
	<div>
		<div class="header-container">
			<div class="header-wrapper">
				<HeaderCard />
			</div>
		</div>
		<div class="main-container">
			<div class="main-wrapper">
				<MainCard />
			</div>
		</div>
		<div class="footer-container">
			<div class="footer-wrapper">
				<FooterCard />
			</div>
		</div>
	</div>
</template>

<script>
import HeaderCard from '@/components/HeaderCard.vue';
import MainCard from '@/components/MainCard.vue';
import FooterCard from '@/components/FooterCard.vue';

export default {
	name: 'HomeView',
	components: {
		HeaderCard,
		MainCard,
		FooterCard,
	},
};
</script>

<style lang="scss" scoped>
$width-container: 1920px;
$width-wrapper: 1517px;
$margin-wrapper: 0 auto;
.header-container {
	width: 1920px;
	background: transparent
		radial-gradient(closest-side at 50% 48%, #2c3138 0%, #171a1f 100%) 0% 0%
		no-repeat padding-box;

	.header-wrapper {
		width: $width-wrapper;
		margin: $margin-wrapper;
	}
}
.main-container {
	width: $width-container;
	background: #f9f9f9 0% 0% no-repeat padding-box;
	.main-wrapper {
		width: $width-wrapper;
		margin: 0 auto;
	}
}

.footer-container {
	width: $width-container;
	background: transparent
		radial-gradient(closest-side at 50% 48%, #2c3138 0%, #171a1f 100%) 0% 0%
		no-repeat padding-box;
	.footer-wrapper {
		width: $width-wrapper;
		margin: 0 auto;
	}
}
</style>
