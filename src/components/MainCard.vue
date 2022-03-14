<template>
	<div>
		<main class="main">
			<div class="main-card" id="main-card">
				<div class="main-animation">
					<div class="main-wheel"></div>
					<p>GAMERCOIN (GHX)</p>
					<span>{{ copiedText }}</span>
					<button
						v-clipboard:copy="copiedText"
						v-clipboard:success="onCopy"
						v-clipboard:error="onError"
					>
						<img src="../assets/img/notebook.png" alt="notebook-copy" />
					</button>
				</div>
				<div class="main-btn">
					<a href="https://gamerhash.com/pl">
						<img src="../assets/img/fox.png" alt="fox" />
						<span>Add to MetaMask</span>
					</a>
				</div>
			</div>
			<div class="main-description">
				<h3>We are creating GamerCoin (GHX) - native token for gamers!</h3>
				<p>
					GamerCoin is a token of GamerHash platform - it's the last puzzle of
					gaming ecosystem and fuel which makes 500.00 users life easier. Gamers
					will have many ways to earn GHX trough mining or entertainment on the
					platform. Keeping tokens in the wallet will bring many benefits &
					spending GHX in the Marketplace will open special offers.
					<strong>It's a game changer for gaming generation!</strong>
				</p>
			</div>
		</main>
		<footer class="main-footer">
			<h3>We are creating GamerCoin (GHX) - native token for gamers!</h3>
			<p>
				GamerCoin is a token of GamerHash platform - it's the last puzzle of
				gaming ecosystem and fuel which makes 500.00 users life easier.
				<br />
				Gamers will have many ways to earn GHX trough mining or entertainment on
				the platform. Keeping tokens in the wallet will bring many benefits &
				spending GHX in the Marketplace will open special offers. <br />
				<strong>It's a game changer for gaming generation!</strong>
			</p>
			<div class="main-select">
				<v-select
					:options="options"
					label="title"
					class="select"
					v-model="selected"
				>
					<template slot="option" slot-scope="option">
						<img :src="option.img" class="img" />
						{{ option.title }}
						<span class="name">{{ option.name }}</span>
						<span class="price">{{ option.price }}</span>
					</template>
				</v-select>
			</div>
		</footer>
	</div>
</template>

<script>
import vSelect from 'vue-select';
export default {
	name: 'MainCard',
	components: { vSelect },
	data() {
		return {
			copiedText: '0x728f30fa2f100742c7949d1961804fa8e0b1387d',
			selected: '',
			options: [
				{
					id: 1,
					img: 'https://kasynopl.com/wp-content/uploads/2020/09/bitcoin-300x300.png',
					title: 'bitcoin (BTC)',
					name: '0.48 BTC',
					price: '3 925.36 USD',
					value: 'BTC',
				},
				{
					id: 2,
					img: 'https://ekantor.pl/wp-content/uploads/2018/06/Litecoin-ltc.png',
					title: 'litecoin (LTC)',
					name: '0.68 LTC',
					price: '125.43 USD',
					value: 'LTC',
				},
				{
					id: 3,
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdg5U1POyAwQZOgN7wL_SPD59CcAO8b6nmQ&usqp=CAU',
					title: 'ethereum (ETC)',
					name: '0.58 ETC',
					price: '1 925.36 USD',
					value: 'ETC',
				},
			],
		};
	},
	methods: {
		onCopy(e) {
			this.copiedText = e.text;
			console.log(`Text: ${this.copiedText}`);
		},
		onError(e) {
			console.log(`Failed to copy text : ${e.text}`);
		},
	},
};
</script>

<style lang="scss" scoped>
$bg-tx-color: #fff;
$text-color: #737373;
$btn-bg-color: #181b1f;
$p-text-color: #2c3138;

.main {
	margin-left: 150px;
	height: 400px;
	.main-card {
		position: absolute;
		top: 110%;
		width: 480px;
		height: 480px;
		border-radius: 10px;
		background-color: #26292e;
		.main-animation {
			width: 480px;
			height: 370px;

			button {
				border: none;
				background-color: #26292e;
			}

			.main-wheel {
				width: 256px;
				height: 256px;
				margin: 0 auto;
				border-radius: 50%;
				margin-top: 70px;
				margin-bottom: 10px;
				background-color: $bg-tx-color;
			}
			p {
				margin: 20px;
				font-weight: 700;
				text-align: center;
				color: $bg-tx-color;
			}
			span {
				color: $text-color;
				margin: 0 20px 0 40px;
				font-style: italic;
			}
		}
		.main-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60px;
			background-color: $btn-bg-color;
			border-radius: 0 0 10px 10px;

			a {
				width: 240px;
				height: 40px;
				text-align: center;
				background-color: $btn-bg-color;
				color: $bg-tx-color;
				border: 1px solid $text-color;
				border-radius: 5px;
				text-decoration: none;
			}
		}
	}
	.main-description {
		margin: 80px 0px 80px 600px;
		width: 500px;

		h3 {
			margin: 20px 50px 20px 0;
		}
		p {
			font-size: 18px;
			color: $text-color;
			strong {
				color: $p-text-color;
			}
		}
	}
}
.main-footer {
	margin: 0 auto 150px auto;
	width: 800px;

	h3 {
		margin: 20px 150px 20px 150px;
	}
	p {
		font-size: 18px;
		color: $text-color;
		word-break: break-all;
		strong {
			color: $p-text-color;
		}
	}
	.main-select {
		display: flex;
		justify-content: center;
		margin-top: 40px;

		.select {
			width: 355px;
			height: 32px;
			font-size: 14px;

			.img {
				width: 25px;
				height: 25px;
				margin-right: 5px;
			}
			.name {
				margin: 0 10px 0 10px;
			}
			.price {
				float: right;
				color: #737373;
			}
		}
	}
}
</style>
