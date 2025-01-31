// ./src/pages/Main.js

import Component from "../core/Component.js";

export default class Main extends Component {
    constructor(ObjectForDI, navigateToWorkspace) {
        super(ObjectForDI.$parent, ObjectForDI.setState, ObjectForDI.state);
        this.navigateToWorkspace = navigateToWorkspace;  // 워크스페이스로 이동하는 함수 주입
    }

    template() {
        return `
            <div class="main-container">
                <div class="card" style="width: 18rem; margin: 0 auto; margin-top: 100px; padding: 20px;">
                    <h1 class="text-center">Main Page</h1>
                    <button class="btn btn-primary btn-block code-editor-btn">Code Editor</button>
                    <button class="btn btn-secondary btn-block create-btn">Create</button>
                    <button class="btn btn-danger btn-block logout-btn">Logout</button>
                </div>
            </div>
        `;
    }

    setEvent() {
        const codeEditorButton = this.$parent.querySelector(".code-editor-btn");
        if (codeEditorButton) {
            codeEditorButton.onclick = () => {
                this.getWorkspaceUrlAndNavigate();
            };
        }

        const createButton = this.$parent.querySelector(".create-btn");
        if (createButton) {
            createButton.onclick = () => this.createWorkspace();
        }

        const logoutButton = this.$parent.querySelector(".logout-btn");
        if (logoutButton) {
            logoutButton.onclick = () => this.logout();
        }
    }

    logout() {
        sessionStorage.removeItem("login");
        sessionStorage.removeItem("visitor");
        sessionStorage.removeItem("token");
        this.setState({ login: 0, visitor: 1, locate: "/src/pages/Login" });
    }

    getWorkspaceUrlAndNavigate() {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('로그인이 필요합니다.');
            return;
        }

        fetch('/api/account/user-id', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => response.text())
        .then(userId => {
            fetch(`/flask-api/return-workspace?user_id=${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.workspace) {
                    const workspaceUrl = decodeURIComponent(data.workspace);
                    console.log("Workspace URL:", workspaceUrl);
                    const url = `/workspace/?folder=${workspaceUrl}&token=${encodeURIComponent(token)}`;
                    window.open(url, '_blank');  // 새 창으로 워크스페이스 열기
                } else {
                    alert("워크스페이스를 찾을 수 없습니다.");
                }
            })
            .catch(error => {
                console.error("Failed to fetch workspace URL:", error);
            });
        })
        .catch(error => {
            console.error("Failed to fetch user ID:", error);
        });
    }

    createWorkspace() {
        const token = localStorage.getItem("token");  // 로그인 후 저장된 토큰 사용
        if (!token) {
            alert("로그인이 필요합니다.");
            return;
        }

        // `user_id`를 백엔드에서 가져옴
        fetch('/api/account/user-id', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => response.text())
        .then(userId => {
            fetch('http://localhost/flask-api/create-workspace', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    user_id: userId
                }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Workspace created successfully') {
                    alert("작업 디렉토리가 생성되었습니다.");
                } else {
                    throw new Error(data.error);
                }
            })
            .catch(error => {
                alert("작업 디렉토리 생성 실패!");
                console.error(error);
            });
        })
        .catch(error => {
            console.error("Failed to fetch user ID:", error);
        });
    }

}
