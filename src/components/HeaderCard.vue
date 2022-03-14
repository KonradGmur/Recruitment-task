<template>
	<div>
		<nav class="nav">
			<div class="nav-log">
				<div class="nav-log-1">
					<span>G</span>
				</div>
				<div class="nav-log-2">
					<span>H</span>
				</div>
			</div>
			<div class="nav-logo"><span>GAMERHASH</span></div>
			<div class="nav-button ms-auto">
				<button @click="navigateSignIn('/login')">Log In</button>
			</div>
		</nav>
		<main class="main">
			<div class="main-dark">
				<div class="main-logo">
					<img src="../assets/img/mining.png" alt="logo" />
				</div>
				<div class="main-worker">
					<img src="../assets/img/worker.png" alt="logo-worker" />
				</div>
				<div class="main-description">
					<div class="main-earning">
						<img src="../assets/img/chart.png" alt="chart" />
						<a href="https://gamerhash.com/pl">how much can i earn</a>
					</div>
					<div class="main-pick">
						<img src="../assets/img/pick.png" alt="pick" />
						<a href="https://gamerhash.com/pl">how to mine?</a>
					</div>
					<div class="main-basket">
						<img src="../assets/img/basket.png" alt="basket" />
						<a href="https://gamerhash.com/pl">buy devices</a>
					</div>
				</div>
				<div class="main-desc">
					<p>what can I do with earned funds?</p>
				</div>
				<a href="#main-card" class="main-arrow">
					<img src="../assets/img/arrow.png" alt="arrow" />
				</a>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: 'HeaderCard',
	methods: {
		navigateSignIn(routeName) {
			this.$router.push({ path: routeName });
		},
	},
};
</script>

<style lang="scss" scoped>
$nav-color: #fff;
$main-text-color: #737373;
$d-flex: flex;
$justify-content: center;
$cursor: pointer;
$position: absolute;
.nav {
	width: 1210px;
	height: 70px;
	margin: 0 auto;

	.nav-log {
		display: grid;
	}

	.nav-log-1,
	.nav-log-2 {
		grid-column: 1;
		grid-row: 2;
	}

	.nav-log-1 {
		margin: 0 auto;
		margin-top: 5px;
		font-size: 30px;
		color: #dd1531;
	}

	.nav-log-2 {
		margin: 0 auto;
		margin-top: 16px;
		font-size: 17px;
		color: #dd1531;
	}

	.nav-logo {
		margin: 20px 0 0 10px;
		font-weight: 700;
		color: #dd1531;
		font-size: 25px;
		span {
			font-weight: 700;
			color: $nav-color;
		}
	}
	.nav-button {
		margin-top: 10px;

		button {
			width: 80px;
			height: 48px;
			background-color: #171a1f;
			color: $nav-color;
			border: 1px solid $main-text-color;
			border-radius: 5px;
			font-size: 14px;
		}
	}
}
.main {
	margin-top: 60px;
	.main-dark {
		height: 1000px;
		.main-worker {
			position: $position;
			top: 12%;
			left: 64%;
		}
		.main-description {
			display: $d-flex;
			position: $position;
			top: 66%;
			left: 19%;

			.main-earning {
				color: $main-text-color;
				font-size: 28px;

				a {
					text-decoration: none;
					color: $main-text-color;
					cursor: $cursor;
					font-size: 32px;
				}

				img {
					margin: 15px;
				}
			}
			.main-pick {
				color: $main-text-color;
				font-size: 28px;

				a {
					text-decoration: none;
					color: $main-text-color;
					cursor: $cursor;
				}

				img {
					margin: 15px;
				}
			}
			.main-basket {
				color: $main-text-color;
				font-size: 28px;

				a {
					text-decoration: none;
					color: $main-text-color;
					cursor: $cursor;
				}

				img {
					margin: 15px;
				}
			}
		}
		.main-desc {
			display: $d-flex;
			justify-content: $justify-content;
			margin: 20px;
			color: $main-text-color;
			font-size: 20px;
		}
		.main-arrow {
			display: $d-flex;
			justify-content: $justify-content;
			margin: 70px 0 70px 0;
			cursor: $cursor;
		}
	}
}
</style>
