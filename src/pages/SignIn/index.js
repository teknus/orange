import React, { Component } from 'react';
import './styles.css';
import Logo from '../../assets/logo.png';
import background from '../../assets/bg.jpg';
import { loginPost } from '../../services/api';

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
		const { email, password } = this.state;
		if (!email || !password) {
			this.setState({ error: 'Preencha todos os dados para se logar.' });
		} else {
			loginPost(email, password).then((value) => {
				if (value) {
					history.push('/Food');
				} else {
					this.setState({error:"Erro de autenticação."})
				}
			});
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
			<div className="LoginPage">
				<div className="logo">
					<img src={Logo} alt="orange logo" />
				</div>
				<form>
					{this.state.error && <p className="error">{this.state.error}</p>}
					<div>
						<p className="textLogin"> Email </p>
						<input
							className="mail"
							type="email"
							placeholder="seunome@email.com"
							onChange={(e) => this.setState({ email: e.target.value })}
						/>
					</div>
					<div>
						<p className="textLogin">Password</p>
						<input
							className="lock"
							type={this.state.visibilityPassword}
							placeholder="Password"
							onChange={(e) => this.setState({ password: e.target.value })}
						/>
					</div>
					<label className="control control-checkbox">
						Mostrar senha.
						<input type="checkbox" onClick={this.handlePasswordVisibility} />
						<div className="control_indicator" />
					</label>

					<p className="account">Problemas para acessar sua conta?</p>
					<button className="login" type="submit" onClick={this.handleSignIn}>
						Acessar
					</button>
					<div className="separator">
						<p> ou </p>
					</div>
					<button className="register">Cadastrar</button>
					<div className="bottom">
						<pre className="bottom">Termos de uso - Política de privacidade </pre>
					</div>
				</form>
				<img className="backgroundimg" src={background} />
			</div>
		);
	}
}

export default SignIn;
