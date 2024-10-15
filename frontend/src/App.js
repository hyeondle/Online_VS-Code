// ./src/App.js

import Login from "./pages/Login.js";
import Main from "./pages/Main.js";

class App {
    constructor() {
        this.state = {
            locate: window.location.pathname,
            entry: this.getCookie("entry") === "1" ? 1 : 0,
            login: parseInt(sessionStorage.getItem("login")) || 0,
            authed: 0,
            visitor: 1,
        };

        this.root = document.querySelector(".app");
        const ObjectForDI = { $parent: this.root, setState: this.setState.bind(this), state: this.state };

        this.LoginPage = new Login(ObjectForDI);
        this.MainPage = new Main(ObjectForDI, this.navigateToWorkspace.bind(this));  // navigateToWorkspace 전달
        if (this.state.entry === 1) {
            this.render();
            this.initPopStateEvent();
        }
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        sessionStorage.setItem("entry", this.state.entry);
        sessionStorage.setItem("login", this.state.login);
        this.render();
    }

    render() {
        this.root.innerHTML = "";
        const { locate, entry, login, workspaceUrl } = this.state;

        if (entry === 0) {
            // Entry가 필요한 경우
            document.querySelector(".app").innerHTML = "<h1>Access Restricted</h1><p>Please refresh the page and enter the access code correctly.</p>";
        } else if (login === 0 && locate === "/src/pages/Login") {
            // 로그인이 되지 않았을 경우
            this.LoginPage.renderSequnce(this.state);
        } else if (login === 1 && locate === "/src/pages/Main") {
            // 메인 페이지 렌더링
            this.MainPage.renderSequnce(this.state);
        } else {
            // 기본적으로 로그인 페이지로 돌아가게 함
            this.LoginPage.renderSequnce(this.state);
        }

        // 브라우저 히스토리 업데이트
        this.historyRouterPush(locate);
    }

    historyRouterPush(locate) {
        if (window.location.pathname !== locate) {
            window.history.pushState({}, "", locate);
        }
    }

    initPopStateEvent() {
        window.addEventListener("popstate", () => {
            const entryFromCookie = this.getCookie("entry") === "1" ? 1 : 0;
            const updatedState = { locate: window.location.pathname, entry: entryFromCookie };
            this.setState(updatedState);
        });
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return "";
    }

    navigateToWorkspace(workspaceUrl) {
        // 워크스페이스 URL을 상태에 저장하고 페이지 전환
        this.setState({ workspaceUrl: workspaceUrl, locate: "/workspace" });
    }

}

window.app = new App();