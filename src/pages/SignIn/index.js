import React, { Component } from 'react';

import { Form, FormContainer, LoginButton, RegisterButton, Container } from './styles';

class SignIn extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		error: ''
	};

	handleSignIn = (e) => {
		e.preventDefault();
		alert('Eu vou te registrar');
	};

	render() {
		return (
			<Container>
				<FormContainer>
					<Form onSubmit={this.handleSignIn}>
						<input
							type="email"
							placeholder="Endereço de e-mail"
							onChange={(e) => this.setState({ email: e.target.value })}
						/>
						<input
							type="password"
							placeholder="Senha"
							onChange={(e) => this.setState({ password: e.target.value })}
						/>
						<LoginButton type="submit">Acessar</LoginButton>
						<hr />
						<RegisterButton>Cadastrar grátis</RegisterButton>
					</Form>
				</FormContainer>
			</Container>
		);
	}
}

export default SignIn;
