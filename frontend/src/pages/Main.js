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
                    <button class="btn btn-secondary btn-block info-btn">Info</button>
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

        const infoButton = this.$parent.querySelector(".info-btn");
        if (infoButton) {
            infoButton.onclick = () => alert("Info clicked. Implement info page navigation!");
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
    
        // JWT 토큰을 URL 파라미터로 전달
        const url = `/code-viewer.html?token=${encodeURIComponent(token)}`;
        window.open(url, '_blank');  // 새 창 열기
    }
    
}
