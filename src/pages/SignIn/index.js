import React, { Component } from 'react';
import './styles.css';
import Logo from '../../assets/logo.png';
import {loginPost} from "../../services/api";

class SignIn extends Component {
	state = {
		email: '',
		password: '',
		visibilityPassword: 'password',
		error: ''
	};

	handleSignIn = async (e) => {
		e.preventDefault();
		const { history } = this.props;
		const {email, password } = this.state;
		if (!email || !password) {
			this.setState({ error: 'Preencha todos os dados para se logar' });
		} else {
			if (loginPost(email,password)){
				history.push("/Food");
				console.log("push");
			}
		}
	};

	handlePasswordVisibility = () => {
		if (this.state.visibilityPassword === 'password') {
			this.setState({ visibilityPassword: 'text' });
		} else {
			this.setState({ visibilityPassword: 'password' });
		}
	};

	render() {
		return (
			<div className="conatiner">
				<img className="logo" src={Logo} alt="orange logo" />
				<form>
					{this.state.error && <p className="error">{this.state.error}</p>}
					<p className="textLogin"> Email </p>
					<input
						type="email"
						placeholder="seunome@email.com"
						onChange={(e) => this.setState({ email: e.target.value })}
					/>
					<div>
						<p className="textLogin">Password</p>
						<input
							type={this.state.visibilityPassword}
							placeholder="Password"
							onChange={(e) => this.setState({ password: e.target.value })}
						/>
					</div>
					<label className="control control-checkbox">
						Mostrar senha.
						<input type="checkbox" onClick={this.handlePasswordVisibility} />
						<div className="control_indicator"></div>
					</label>

					<p className="account">Problemas com sua conta?</p>
					<button className="login" type="submit" onClick={this.handleSignIn}>
						Acessar
					</button>
					<div className="separator">
						<p> ou </p>
					</div>
					<button className="register">Cadastrar</button>
					<div className="bottom">
						<pre className="bottom">Termos de uso - Política de privacidade </pre>
						<span>.</span>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
