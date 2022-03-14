<template>
	<div class="login">
		<div class="form">
			<form
				:class="this.errors ? 'errors' : false"
				id="app"
				@submit.prevent="handleSubmit"
				action="http://dom.elo/api/auth/"
				method="post"
			>
				<h2>Sign In</h2>
				<input
					type="Name"
					placeholder="User Name"
					id="userName"
					name="userName"
					class="form-control"
					required
					:class="{ 'is-invalid': submitted && $v.user.name.$error }"
					v-model="user.name"
					@invalid="invalidateForm"
				/>
				<div
					v-if="submitted && !$v.user.firstName.required"
					class="invalid-feedback"
				>
					First Name is required
				</div>

				<input
					type="email"
					placeholder="E-mail"
					id="email"
					name="email"
					class="form-control"
					required
					:class="{ 'is-invalid': submitted && $v.user.email.$error }"
					v-model="user.email"
					@invalid="invalidateForm"
				/>
				<div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
					<span v-if="!$v.user.email.required">Email is required</span>
					<span v-if="!$v.user.email.email">Email is invalid</span>
				</div>

				<input
					type="password"
					placeholder="Password"
					id="password"
					name="password"
					class="form-control"
					required
					:class="{ 'is-invalid': submitted && $v.user.password.$error }"
					v-model="user.password"
					@invalid="invalidateForm"
				/>
				<div
					v-if="submitted && $v.user.password.$error"
					class="invalid-feedback"
				>
					<span v-if="!$v.user.password.required">Password is required</span>
					<span v-if="!$v.user.password.minLength"
						>Password must be at least 6 characters</span
					>
				</div>

				<input
					type="password"
					placeholder="Confirm Password"
					id="confirmPassword"
					name="confirmPassword"
					class="form-control"
					required
					:class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
					v-model="user.confirmPassword"
					@invalid="invalidateForm"
				/>
				<div
					v-if="submitted && $v.user.confirmPassword.$error"
					class="invalid-feedback"
				>
					<span v-if="!$v.user.confirmPassword.required"
						>Confirm Password is required</span
					>
					<span v-else-if="!$v.user.confirmPassword.sameAsPassword"
						>Passwords must match</span
					>
				</div>
				<input type="submit" value="Submit" class="submit" />
			</form>
		</div>
	</div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
export default {
	name: 'loginModalCard',
	data() {
		return {
			user: {
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
			},
			errors: false,
			submitted: false,
		};
	},
	validations: {
		user: {
			name: { required },
			email: { required, email },
			password: { required, minLength: minLength(6) },
			confirmPassword: { required, sameAsPassword: sameAs('password') },
		},
	},
	methods: {
		invalidateForm() {
			this.errors = true;
		},
		async handleSubmit(e) {
			this.submitted = true;
			this.$v.$touch(e);
			if (this.$v.$invalid) {
				return;
			}
			await this.$store.dispatch('login', {
				name: this.user.name,
				email: this.user.email,
				password: this.user.password,
			});
			alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user));
		},
	},
};
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
	font-family: sans-serif;
}
.login {
	margin: 200px auto;
	width: 320px;
	height: 550px;
	border: 1px solid #ccc;
	background: url(https://media4.giphy.com/media/BHNfhgU63qrks/giphy.gif) center
		center no-repeat;
	background-size: cover;
	border-radius: 20px;
}
.login .form {
	width: 100%;
	height: 100%;
	padding: 15px 25px;
}
.login .form h2 {
	color: #fff;
	text-align: center;
	font-weight: normal;
	font-size: 18px;
	margin-top: 60px;
	margin-bottom: 80px;
}
.login .form input {
	width: 100%;
	height: 40px;
	margin-top: 20px;
	background: rgba(255, 255, 255, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.1);
	padding: 0 15px;
	color: #fff;
	border-radius: 5px;
	font-size: 14px;
}

.login .form .error-message {
	display: none;
	color: red;
}
form.errors {
	:invalid {
		border-color: red;
	}
}
.login .form input:focus {
	border: 1px solid rgba(255, 255, 255, 0.8);
	outline: none;
}
::-webkit-input-placeholder {
	color: #ddd;
}
.login .form input.submit {
	background: rgba(255, 255, 255, 0.9);
	color: #444;
	font-size: 15px;
	margin-top: 40px;
	font-weight: bold;
}
</style>
