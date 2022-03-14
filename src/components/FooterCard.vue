<template>
	<div class="footer">
		<div class="footer-header">
			<h3>Profitability calculator</h3>
			<p>
				You earn bitcoins. When BTC exchange rate goes up, your profit
				automatically increases.
			</p>
		</div>
		<div class="footer-main">
			<div class="footer-card">
				<p>low-end</p>
				<div><img src="../assets/img/low-end.png" alt="low-end" /></div>
				<div>
					<p>$9,004.21</p>
				</div>
			</div>
			<div class="footer-card">
				<p>mid-shelf</p>
				<div><img src="../assets/img/mid-shelf.png" alt="mid-shelf" /></div>
				<div>
					<p>$9,004.21</p>
				</div>
			</div>
			<div class="footer-card">
				<p>hight-end</p>
				<div><img src="../assets/img/high-end.png" alt="hight-end" /></div>
				<div>
					<p>$9,004.21</p>
				</div>
			</div>
			<div class="footer-card">
				<p>7x GPU</p>
				<div><img src="../assets/img/Max-GPU.png" alt="7x-GPU" /></div>
				<div>
					<p>$9,004.21</p>
				</div>
			</div>
		</div>
		<div class="footer-description">
			<p>
				Crypto exchange rates are independent of GamerHash operations, the
				estimation is purely for illustrative purposes
			</p>
		</div>
		<a href="https://gamerhash.com/pl" class="footer-button">
			<img src="../assets/img/calc.png" alt="calc" />
			<span>Check how much your setup will earn</span>
		</a>
	</div>
</template>

<script>
export default {
	name: 'FooterCard',
};
</script>

<style lang="scss" scoped>
$display-flex: flex;
$justify-content: center;
$align-items: center;
$text-align: center;
$text-color: #f9f9f9;
$text-color-2: #c1c1c1;

.footer {
	height: 100vh;
	.footer-header {
		h3 {
			margin-bottom: 20px;
			padding-top: 150px;
			text-align: $text-align;
			color: $text-color;
			font-size: 30px;
		}
		p {
			margin: 20px 0 30px 0;
			text-align: $text-align;
			color: $text-color-2;
			font-size: 18px;
		}
	}
	.footer-main {
		display: $display-flex;
		justify-content: $justify-content;
		.footer-card {
			width: 280px;
			height: 280px;
			margin: 10px 10px 10px 10px;
			background: #1f222740 0% 0% no-repeat padding-box;
			box-shadow: -7px -7px 10px #272b3140;
			border-radius: 10px;

			p {
				margin-top: 20px;
				text-align: $text-align;
				color: $text-color;
				font-size: 18px;
			}
			div {
				text-align: $text-align;
				p {
					font-weight: 700;
					color: #f41f33;
					font-size: 23px;
				}
			}
		}
	}
	.footer-description {
		margin-top: 20px;
		text-align: $text-align;
		color: $text-color-2;
	}
	.footer-button {
		margin: 50px auto;
		display: $display-flex;
		align-items: $align-items;
		width: 280px;
		height: 90px;
		border: 1px solid #737373;
		border-radius: 10px;
		text-decoration: none;
		cursor: pointer;

		img {
			width: 60px;
			height: 60px;
			margin: 20px;
		}
		span {
			font-size: 18px;
			color: $text-color;
		}
	}
}
</style>
