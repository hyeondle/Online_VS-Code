// ./src/pages/Login.js

import Component from "../core/Component.js";

export default class Login extends Component {
    constructor(ObjectForDI) {
        super(ObjectForDI.$parent, ObjectForDI.setState, ObjectForDI.state);
    }

    template() {
        return `
            <div class="login-container">
                <div class="card" style="width: 18rem; margin: 0 auto; margin-top: 100px; padding: 20px;">
                    <h1 class="text-center">Login</h1>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button class="btn btn-primary btn-block login-btn">Login</button>
                    <button class="btn btn-secondary btn-block signup-btn">Sign Up</button>
                    <button class="btn btn-info btn-block visitor-btn">Visitor</button>
                </div>
            </div>
        `;
    }

    setEvent() {
        const loginButton = this.$parent.querySelector(".login-btn");
        if (loginButton) {
            loginButton.onclick = () => this.login();
        }

        const signupButton = this.$parent.querySelector(".signup-btn");
        if (signupButton) {
            signupButton.onclick = () => this.signup();
        }

        const visitorButton = this.$parent.querySelector(".visitor-btn");
        if (visitorButton) {
            visitorButton.onclick = () => this.visitAsGuest();
        }
    }

    signup() {
        const username = this.$parent.querySelector("#username").value;
        const password = this.$parent.querySelector("#password").value;

        if (username && password) {
            // 회원가입 요청을 백엔드에 보냄
            fetch('http://localhost:8000/api/account/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: username,
                    password: password
                }),
            })
            .then(response => {
                if (response.ok) {
                    alert("회원가입 성공! 로그인 해주세요.");
                } else {
                    throw new Error('Registration failed');
                }
            })
            .catch(error => {
                alert("회원가입 실패!");
                console.error(error);
            });
        } else {
            alert("Please enter both username and password");
        }
    }

    // 로그인 성공 후 토큰을 localStorage에 저장
	login() {
		const username = this.$parent.querySelector("#username").value;
		const password = this.$parent.querySelector("#password").value;

		if (username && password) {
			fetch('http://localhost:8000/api/account/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					login: username,
					password: password
				}),
			})
			.then(response => {
				if (response.ok) {
					return response.json();  // 토큰을 반환받음
				} else {
					throw new Error('Login failed');
				}
			})
			.then(data => {
				if (data.token) {
					console.log(`Received Token: ${data.token}`);  // 토큰을 출력하여 확인
					localStorage.setItem("token", data.token);  // 토큰을 localStorage에 저장
					this.setState({ login: 1, locate: "/src/pages/Main" });  // 메인 페이지로 이동
				} else {
					throw new Error('No token received');
				}
			})
			.catch(error => {
				alert("로그인 실패!");
				console.error(error);
			});
		} else {
			alert("Please enter both username and password");
		}
	}



    visitAsGuest() {
        sessionStorage.setItem("visitor", 1);
        this.setState({ visitor: 1, locate: "/src/pages/Main" });
    }
}
