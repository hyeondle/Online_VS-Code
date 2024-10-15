# Online_VS-Code
provide online visual studio code (web based) IDE and simple coding test

<details>
  <summary>Manual</summary>
  
<details>
  
  <summary>  EN</summary>

  
  ### How to Use
### How to Use
1. Move to the directory where `docker-compose.yml` is located.

2. Create a `.env` file (refer to `env.txt` for guidance).
   ```
   ENTRY_KEY : Initial entry screen key
   PASSWORD : Password required for root access when providing a workspace with code-server (since the user is root, this is currently disabled)
   ```
![2](https://github.com/user-attachments/assets/a10f2910-d1d9-4bdd-8489-21e24af00aca)

3. In the terminal, enter `docker-compose up --build -d` (`-d` is optional).

![1](https://github.com/user-attachments/assets/16fff7f3-e856-488c-9bca-88ad0b228041)

4. Once the containers are up, enter `docker ps` in the terminal.

![3](https://github.com/user-attachments/assets/12afdce7-786b-43fb-9cec-d28f29c1e86e)

![4](https://github.com/user-attachments/assets/6c2d6e1f-287f-4a09-a9ac-8713f3e809e9)

![5](https://github.com/user-attachments/assets/43b7807f-df01-4890-a769-01a716f52238)

5. If all 4 containers are running successfully as shown, it is successful.
6. Access `localhost`.

![6](https://github.com/user-attachments/assets/bbaf08eb-f5d5-43e3-abcd-60caa2c0353d)

7. Enter the `ENTRY_KEY` set in the environment variable in the `Enter ENTRY_KEY` field.
8. Log in. If you do not have an existing account, enter your ID and password, then click `Sign up` followed by `Login`.

![7](https://github.com/user-attachments/assets/995463b8-8609-4aa4-a3c0-fefcf11838e7)

9. Upon signing up, the following message will be displayed. If the ID is already taken, the signup will fail.

![8](https://github.com/user-attachments/assets/f384ea21-6c3a-4daf-86d2-70458802f09b)

10. After logging in, the following page will appear.

![9](https://github.com/user-attachments/assets/73d97db7-a365-4559-bede-b73b2654066c)

11. Click the `Create` button.

![10](https://github.com/user-attachments/assets/38df0518-db92-4e49-a02e-1f9dc4de5364)

12. This message indicates that the workspace directory has been successfully created.
13. Click the `Code Editor` button.
14. If VS Code appears as shown, it is successful.

![11](https://github.com/user-attachments/assets/ce63fb1f-c80c-42bb-80fa-dce07d158bcc)

15. The terminal can be set to display as follows.

![12](https://github.com/user-attachments/assets/a3f4d79f-98b7-4813-a3bd-93ac00759f02)

16. Alternatively, drag up from the bottom to make it visible.
17. Hello World!

![13](https://github.com/user-attachments/assets/ff9e2f7e-157c-4ace-8ec8-d4f1a68b2c91)

![14](https://github.com/user-attachments/assets/69e3a4b7-f4ca-499b-bb5d-2145627a9ff5)

18. Modify and use it to suit your preferences.

    
</details>

<details>
  
  <summary>KR</summary>

  
  ### How to Use
1. `docker-compose.yml`이 위치한 곳으로 작업 위치를 옮깁니다.

2. `.env` 파일을 생성합니다. (`env.txt`를 참고하여 작성하여 주시면 됩니다)
   ```
   ENTRY_KEY : 초기 입장화면 키
   PASSWORD : code-server에서 워크스페이스를 제공 할 때, 루트로 접근시 필요한 비밀번호 (사용자가 root이므로 비활성화 된 상태입니다)
   ```
![2](https://github.com/user-attachments/assets/a10f2910-d1d9-4bdd-8489-21e24af00aca)

3. 터미널에서 `docker-compose up --build -d`를 입력합니다. (`-d`는 생략 가능)

![1](https://github.com/user-attachments/assets/16fff7f3-e856-488c-9bca-88ad0b228041)

4. 다음과 같은 상태가 되었다면 터미널에 `docker ps`를 입력합니다.

![3](https://github.com/user-attachments/assets/12afdce7-786b-43fb-9cec-d28f29c1e86e)

![4](https://github.com/user-attachments/assets/6c2d6e1f-287f-4a09-a9ac-8713f3e809e9)

![5](https://github.com/user-attachments/assets/43b7807f-df01-4890-a769-01a716f52238)

5. 위와 같이 4개가 정상적으로 실행되고 있다면 성공입니다.
6. `localhost`에 접속합니다.

![6](https://github.com/user-attachments/assets/bbaf08eb-f5d5-43e3-abcd-60caa2c0353d)

7. `Enter ENTRY_KEY`에 환경변수로 설정한 `ENTRY_KEY`를 입력합니다.
8. 로그인을 합니다. 기존 아이디가 없다면 아이디와 패스워드를 입력 후, `Sign up`, `Login`을 차례대로 눌러줍니다.

![7](https://github.com/user-attachments/assets/995463b8-8609-4aa4-a3c0-fefcf11838e7)

9. 회원가입 시 다음과 같은 메세지가 출력됩니다. 중복된 아이디를 입력할 시 회원가입이 실패합니다.

![8](https://github.com/user-attachments/assets/f384ea21-6c3a-4daf-86d2-70458802f09b)

10. 로그인 후 다음과 같은 페이지가 나옵니다.

![9](https://github.com/user-attachments/assets/73d97db7-a365-4559-bede-b73b2654066c)

11. `Create` 버튼을 눌러줍니다.

![10](https://github.com/user-attachments/assets/38df0518-db92-4e49-a02e-1f9dc4de5364)

12. 해당 문구는 작업 디렉토리가 생성되었다는 문구입니다.
13. `Code Editor` 버튼을 클릭합니다.
14. 다음과 같이 VS Code가 보인다면 성공입니다.

![11](https://github.com/user-attachments/assets/ce63fb1f-c80c-42bb-80fa-dce07d158bcc)

15. 터미널의 경우 다음과 같이 보이게 설정할 수 있습니다.

![12](https://github.com/user-attachments/assets/a3f4d79f-98b7-4813-a3bd-93ac00759f02)

16. 혹은 아래에서 위로 드래그해도 보입니다.
17. Hello World!

![13](https://github.com/user-attachments/assets/ff9e2f7e-157c-4ace-8ec8-d4f1a68b2c91)

![14](https://github.com/user-attachments/assets/69e3a4b7-f4ca-499b-bb5d-2145627a9ff5)

18. 자신의 입맛에 맞게 수정해서 사용하시면 됩니다.


</details>

  
<details>
  
  <summary>JP</summary>

  
  ### 使用方法
1. `docker-compose.yml`があるディレクトリに移動します.

2. `.env`ファイルを作成します（`env.txt`を参考にしてください）
   ```
   ENTRY_KEY : 初期エントリースクリーンキー
   PASSWORD : code-serverでワークスペースを提供する際、ルートアクセスに必要なパスワード（ユーザーがrootであるため、現在は無効になっています）
   ```
![2](https://github.com/user-attachments/assets/a10f2910-d1d9-4bdd-8489-21e24af00aca)

3. ターミナルで`docker-compose up --build -d`を入力します（`-d`は省略可能）

![1](https://github.com/user-attachments/assets/16fff7f3-e856-488c-9bca-88ad0b228041)

4. コンテナが起動したら、ターミナルで`docker ps`を入力します.

![3](https://github.com/user-attachments/assets/12afdce7-786b-43fb-9cec-d28f29c1e86e)

![4](https://github.com/user-attachments/assets/6c2d6e1f-287f-4a09-a9ac-8713f3e809e9)

![5](https://github.com/user-attachments/assets/43b7807f-df01-4890-a769-01a716f52238)

5. 4つのコンテナが正常に実行されていることを確認できれば成功です.
6. `localhost`にアクセスします.

![6](https://github.com/user-attachments/assets/bbaf08eb-f5d5-43e3-abcd-60caa2c0353d)

7. 環境変数に設定した`ENTRY_KEY`を`Enter ENTRY_KEY`フィールドに入力します.
8. ログインします。既存のアカウントがない場合、IDとパスワードを入力し、`Sign up`をクリックした後に`Login`をクリックします.

![7](https://github.com/user-attachments/assets/995463b8-8609-4aa4-a3c0-fefcf11838e7)

9. サインアップ時に次のメッセージが表示されます。IDが既に存在する場合、サインアップは失敗します.

![8](https://github.com/user-attachments/assets/f384ea21-6c3a-4daf-86d2-70458802f09b)

10. ログイン後、次のページが表示されます.

![9](https://github.com/user-attachments/assets/73d97db7-a365-4559-bede-b73b2654066c)

11. `Create`ボタンをクリックします.

![10](https://github.com/user-attachments/assets/38df0518-db92-4e49-a02e-1f9dc4de5364)

12. このメッセージは、ワークスペースディレクトリが正常に作成されたことを示します.
13. `Code Editor`ボタンをクリックします.
14. VS Codeが次のように表示されれば成功です.

![11](https://github.com/user-attachments/assets/ce63fb1f-c80c-42bb-80fa-dce07d158bcc)

15. ターミナルは次のように設定して表示できます.

![12](https://github.com/user-attachments/assets/a3f4d79f-98b7-4813-a3bd-93ac00759f02)

16. または、下から上にドラッグして表示することもできます.
17. Hello World!

![13](https://github.com/user-attachments/assets/ff9e2f7e-157c-4ace-8ec8-d4f1a68b2c91)

![14](https://github.com/user-attachments/assets/69e3a4b7-f4ca-499b-bb5d-2145627a9ff5)

18. 自分の好みに合わせて修正して使用してください.

  
</details>

</details>

<details>
  <summary>Readme</summary>
<details>
  <summary>English Version</summary>

  ### System Overview (3 Containers + 1 DB Container)
1. **Frontend (JavaScript)**
   - Provides login and registration pages.
   - Provides the appropriate VS Code editor environment upon user login.
   - Sends user information to the backend during registration.

2. **Backend (Django)**
   - **Login**: Verifies the user's login information and provides the appropriate VS Code environment.
   - **Registration**: Stores user information in the database and creates a new VS Code interface.

3. **Code Server (Code-Server)**
   - Provides the web version of VS Code.
   - Provides individual coding environments for each user.


### 1. Frontend Configuration (JavaScript)
- **Login Page**
  - Accepts user ID and password to authenticate via server.
  - Redirects to the user's unique VS Code environment upon successful authentication.

- **Registration Page**
  - Collects user ID, password, and name to send to the server.
  - Automatically creates a VS Code environment upon successful registration.

- **Main Page**
  - Redirects to the user's unique workspace after successful login.
  - **Workspace Creation**: Requests code-server to create a personal directory (workspace) for each user.
  - **Workspace Access**: Allows users to access their personal workspace directory.

### 2. Backend Configuration (Django)
- **REST API**
  - **Initial Authorization API**: Authenticates the user upon initial entry with a simple entry key.
  - **Registration API**: Stores user information in the PostgreSQL database and assigns a unique user ID.
  - **Login API**: Authenticates the user and returns their unique user ID upon request.

### 3. Code Server Configuration (Code-server)
- **VS Code Environment**
  - Creates a VS Code workspace directory for the user upon request.
  - Returns the directory path when a specific user requests their created workspace.

### Backend API Documentation

#### Registration API
- **URL**: `/register`
- **Method**: `POST`
- **Request Body**: 
  ```json
  {
    "login": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `201 Created`:
    ```json
    {
      "user": {
        "id": "int",
        "login": "string",
        "nickname": "string"
      }
    }
    ```
  - `400 Bad Request`: `"Validation Error: ..."` or `"User registration failed due to a database error."`

#### Login API
- **URL**: `/login`
- **Method**: `POST`
- **Request Body**: 
  ```json
  {
    "login": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `200 OK`:
    ```json
    {
      "token": "string"
    }
    ```
  - `401 Unauthorized`: `"Invalid credentials"`

#### Workspace URL Retrieval API
- **URL**: `/workspace-url`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`: Workspace URL string
  - `401 Unauthorized`: `"Unauthorized"`
  - `500 Internal Server Error`: `"Flask API request failed: ..."`

#### User ID Retrieval API
- **URL**: `/user-id`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`: User ID string
  - `401 Unauthorized`: `"Unauthorized"`

#### User Information Retrieval API
- **URL**: `/me`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`:
    ```json
    {
      "user": {
        "id": "int",
        "login": "string",
        "nickname": "string"
      }
    }
    ```

#### Entry Key Validation API
- **URL**: `/check-entry-key`
- **Method**: `GET`
- **Request Parameter**: `entry_key` (string)
- **Response**:
  - `200 OK`: `{"status": "success"}`
  - `400 Bad Request`: `{"status": "failed"}`

### Code-Server API Documentation

#### Workspace Creation API
- **URL**: `/create-workspace`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "user_id": "string"
  }
  ```
- **Response**:
  - `200 OK`:
    ```json
    {
      "message": "Workspace created successfully",
      "user_id": "string"
    }
    ```
  - `400 Bad Request`: `"User ID not provided"`
  - `500 Internal Server Error`: `"Error details"`

#### Workspace Retrieval API
- **URL**: `/return-workspace`
- **Method**: `GET`
- **Request Parameter**: `user_id` (string)
- **Response**:
  - `200 OK`:
    ```json
    {
      "workspace": "string"
    }
    ```
  - `404 Not Found`: `"Workspace not found"`

#### Health Check API
- **URL**: `/`
- **Method**: `GET`
- **Response**:
  - `200 OK`: `{"message": "OK"}`

### Additional Considerations
1. **Initial Access**: It is recommended to add measures such as attempt limits to the initial entry code input screen to prevent brute-force attacks.
2. **Django Related**: While JWT tokens are being used, there are instances where they are exposed in the URL, which should be avoided for security.
3. **Code-Server**: Currently running as root, which should be changed to the 'coder' user. However, since supervisor is being used, a more fundamental solution is needed.
4. **Frontend Button Inputs and Page Formatting**: Minor adjustments are needed for button inputs and page formatting across different pages to improve user experience.

### How to Add Features
1. **Code Server**
   - Although Python 3 is already installed, if additional compilation or settings are needed, modify the Dockerfile to add the required installations.
   - If you want to provide default files after the user creates a directory (e.g., test problems), create the files first, and then modify the Flask server's `def create_workspace():` API to copy-paste those files into the new workspace.

2. **Backend**
   - To add additional APIs beyond the existing ones, create a new app in Django following the standard Django practices. JWT tokens are handled in `main`, while login-related features are in `account`.

3. **Frontend**
   - Refer to `src/core/component.js`.
   - Since the application mimics an SPA (Single Page Application), add the required elements in `App.js`, and import new components to add new pages.
   - For templates, instead of writing directly in HTML, create a folder to collect styles and import them as needed (e.g., `LoginStyle.js` is used in `Login.js`).

</details>

<details>
  <summary>한국어 버전</summary>

### 시스템 개요 (3개의 컨테이너 + 1개의 DB 컨테이너)
1. **프론트엔드 (JavaScript)**
   - 로그인 및 회원가입 페이지 제공.
   - 사용자가 로그인하면 적절한 VS Code 에디터 환경을 제공.
   - 회원가입 시 사용자 정보를 백엔드로 전송.

2. **백엔드 (Django)**
   - **로그인**: 사용자의 로그인 정보를 확인하고 적절한 VS Code 환경을 제공.
   - **회원가입**: 사용자 정보를 데이터베이스에 저장하고 새로운 VS Code 인터페이스를 생성.

3. **코드 서버 (Code-Server)**
   - 웹 버전의 VS Code 제공.
   - 각 사용자에게 독립적인 코딩 환경 제공.

### 1. 프론트엔드 구성 (JavaScript)
- **로그인 페이지**
  - 사용자 ID와 비밀번호를 입력하여 서버에서 인증.
  - 인증 성공 시 사용자 고유의 VS Code 환경으로 리다이렉트.

- **회원가입 페이지**
  - 사용자 ID, 비밀번호, 이름을 수집하여 서버로 전송.
  - 회원가입 성공 시 자동으로 VS Code 환경 생성.

- **메인 페이지**
  - 로그인 성공 후 사용자 고유의 워크스페이스로 리다이렉트.
  - **워크스페이스 생성**: 코드 서버에 요청을 보내 각 사용자에게 개별 디렉토리(워크스페이스) 생성.
  - **워크스페이스 접근**: 사용자가 자신의 개별 워크스페이스 디렉토리에 접근할 수 있도록 제공.

### 2. 백엔드 구성 (Django)
- **REST API**
  - **초기 인증 API**: 간단한 인증 키로 초기 접근 시 사용자 인증.
  - **회원가입 API**: 사용자 정보를 PostgreSQL 데이터베이스에 저장하고 고유한 사용자 ID 할당.
  - **로그인 API**: 사용자를 인증하고 요청 시 고유한 사용자 ID를 반환.

### 3. 코드 서버 구성 (Code-server)
- **VS Code 환경**
  - 사용자가 요청할 때 VS Code 워크스페이스 디렉토리 생성.
  - 특정 사용자가 생성된 워크스페이스를 요청하면 디렉토리 경로 반환.

### 백엔드 API 문서

#### 회원가입 API
- **URL**: `/register`
- **Method**: `POST`
- **Request Body**: 
  ```json
  {
    "login": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `201 Created`:
    ```json
    {
      "user": {
        "id": "int",
        "login": "string",
        "nickname": "string"
      }
    }
    ```
  - `400 Bad Request`: `"Validation Error: ..."` 또는 `"User registration failed due to a database error."`

#### 로그인 API
- **URL**: `/login`
- **Method**: `POST`
- **Request Body**: 
  ```json
  {
    "login": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `200 OK`:
    ```json
    {
      "token": "string"
    }
    ```
  - `401 Unauthorized`: `"Invalid credentials"`

#### 워크스페이스 URL 조회 API
- **URL**: `/workspace-url`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`: 워크스페이스 URL 문자열
  - `401 Unauthorized`: `"Unauthorized"`
  - `500 Internal Server Error`: `"Flask API request failed: ..."`

#### 사용자 ID 조회 API
- **URL**: `/user-id`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`: 사용자 ID 문자열
  - `401 Unauthorized`: `"Unauthorized"`

#### 사용자 정보 조회 API
- **URL**: `/me`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`:
    ```json
    {
      "user": {
        "id": "int",
        "login": "string",
        "nickname": "string"
      }
    }
    ```

#### 엔트리 키 확인 API
- **URL**: `/check-entry-key`
- **Method**: `GET`
- **Request Parameter**: `entry_key` (string)
- **Response**:
  - `200 OK`: `{"status": "success"}`
  - `400 Bad Request`: `{"status": "failed"}`

### 코드 서버 API 문서

#### 워크스페이스 생성 API
- **URL**: `/create-workspace`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "user_id": "string"
  }
  ```
- **Response**:
  - `200 OK`:
    ```json
    {
      "message": "Workspace created successfully",
      "user_id": "string"
    }
    ```
  - `400 Bad Request`: `"User ID not provided"`
  - `500 Internal Server Error`: `"Error details"`

#### 워크스페이스 조회 API
- **URL**: `/return-workspace`
- **Method**: `GET`
- **Request Parameter**: `user_id` (string)
- **Response**:
  - `200 OK`:
    ```json
    {
      "workspace": "string"
    }
    ```
  - `404 Not Found`: `"Workspace not found"`

#### 헬스 체크 API
- **URL**: `/`
- **Method**: `GET`
- **Response**:
  - `200 OK`: `{"message": "OK"}`

### 추가적인 고려사항
1. **초기 접근**: 초기 인증 코드 입력 화면에서 회수 제한 등과 같은 대책을 추가하여 무작위 대입 공격을 방지하는 것이 좋습니다.
2. **Django 관련**: JWT 토큰이 URL에 그대로 노출되는 경우가 있으므로 이를 숨겨서 보안을 강화해야 합니다.
3. **코드 서버**: 현재 root로 실행되고 있으나, 'coder' 사용자로 변경하는 것이 필요합니다. 하지만, supervisor를 사용 중이므로 이에 대한 보다 근본적인 해결책이 필요합니다.
4. **프론트엔드 버튼 입력 및 페이지 포맷 조정**: 페이지 간 버튼 입력 및 포맷 조정을 위한 자잘한 수정이 필요합니다.

### 기능 추가 방법
1. **코드 서버**
   - Python 3은 이미 설치되어 있지만, 추가적인 컴파일 또는 설정이 필요한 경우 Dockerfile을 수정하여 필요한 설치를 추가하십시오.
   - 사용자가 디렉토리를 생성한 후 기본 파일을 제공하고 싶다면(예: 테스트 문제 제공), 해당 파일을 미리 생성하고 Flask 서버의 `def create_workspace():` API에서 해당 파일을 복사-붙여넣기하도록 설정할 수 있습니다.

2. **백엔드**
   - 기존 API 외에 추가적인 API를 작성하려면 Django에서 새로운 앱을 생성하고 표준 Django 방식에 따라 추가하면 됩니다. JWT 토큰은 `main`에, 로그인 관련 기능은 `account`에 있습니다.

3. **프론트엔드**
   - `src/core/component.js`를 참고하십시오.
   - 기본적으로 SPA(단일 페이지 애플리케이션)를 모방하였으므로 필요한 요소를 `App.js`에 추가하고, 새로운 페이지를 만들고자 할 경우 해당 컴포넌트를 import하여 추가하십시오.
   - 템플릿은 HTML로 직접 작성하지 않고, 양식을 모아두는 폴더를 생성한 후 import하는 형식으로 작성할 수 있습니다(예: `LoginStyle.js`를 `Login.js`에서 사용).

</details>

<details>
  <summary>日本語バージョン</summary>

  ### システム概要 (3つのコンテナ + 1つのDBコンテナ)
1. **フロントエンド (JavaScript)**
   - ログインと登録ページの提供。
   - ユーザーがログインすると適切なVS Codeエディター環境を提供。
   - 登録時にユーザー情報をバックエンドに送信。

2. **バックエンド (Django)**
   - **ログイン**: ユーザーのログイン情報を確認し、適切なVS Code環境を提供。
   - **登録**: ユーザー情報をデータベースに保存し、新しいVS Codeインターフェイスを生成。

3. **コードサーバー (Code-Server)**
   - VS Codeのウェブ版を提供。
   - 各ユーザーに独立したコーディング環境を提供。

### 1. フロントエンド構成 (JavaScript)
- **ログインページ**
  - ユーザーIDとパスワードを入力してサーバーで認証。
  - 認証成功時にユーザー固有のVS Code環境にリダイレクト。

- **登録ページ**
  - ユーザーID、パスワード、名前を収集し、サーバーに送信。
  - 登録成功時に自動でVS Code環境を生成。

- **メインページ**
  - ログイン成功後、ユーザー固有のワークスペースにリダイレクト。
  - **ワークスペース生成**: コードサーバーにリクエストを送り、各ユーザーに個別のディレクトリ（ワークスペース）を生成。
  - **ワークスペースアクセス**: ユーザーが自分の個別ワークスペースディレクトリにアクセスできるように提供。

### 2. バックエンド構成 (Django)
- **REST API**
  - **初期認証API**: 簡単な認証キーで初回アクセス時にユーザーを認証。
  - **登録API**: ユーザー情報をPostgreSQLデータベースに保存し、固有のユーザーIDを割り当て。
  - **ログインAPI**: ユーザーを認証し、リクエスト時に固有のユーザーIDを返却。

### 3. コードサーバー構成 (Code-server)
- **VS Code環境**
  - ユーザーのリクエスト時にVS Codeワークスペースディレクトリを生成。
  - 特定のユーザーが生成されたワークスペースをリクエストするとディレクトリパスを返却。

### バックエンドAPIドキュメント

#### 登録API
- **URL**: `/register`
- **Method**: `POST`
- **Request Body**: 
  ```json
  {
    "login": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `201 Created`:
    ```json
    {
      "user": {
        "id": "int",
        "login": "string",
        "nickname": "string"
      }
    }
    ```
  - `400 Bad Request`: `"Validation Error: ..."` または `"User registration failed due to a database error."`

#### ログインAPI
- **URL**: `/login`
- **Method**: `POST`
- **Request Body**: 
  ```json
  {
    "login": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `200 OK`:
    ```json
    {
      "token": "string"
    }
    ```
  - `401 Unauthorized`: `"Invalid credentials"`

#### ワークスペースURL取得API
- **URL**: `/workspace-url`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`: ワークスペースURL文字列
  - `401 Unauthorized`: `"Unauthorized"`
  - `500 Internal Server Error`: `"Flask API request failed: ..."`

#### ユーザーID取得API
- **URL**: `/user-id`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`: ユーザーID文字列
  - `401 Unauthorized`: `"Unauthorized"`

#### ユーザー情報取得API
- **URL**: `/me`
- **Method**: `GET`
- **Authentication**: `AuthBearer()`
- **Response**:
  - `200 OK`:
    ```json
    {
      "user": {
        "id": "int",
        "login": "string",
        "nickname": "string"
      }
    }
    ```

#### エントリーキー確認API
- **URL**: `/check-entry-key`
- **Method**: `GET`
- **Request Parameter**: `entry_key` (string)
- **Response**:
  - `200 OK`: `{"status": "success"}`
  - `400 Bad Request`: `{"status": "failed"}`

### コードサーバーAPIドキュメント

#### ワークスペース生成API
- **URL**: `/create-workspace`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "user_id": "string"
  }
  ```
- **Response**:
  - `200 OK`:
    ```json
    {
      "message": "Workspace created successfully",
      "user_id": "string"
    }
    ```
  - `400 Bad Request`: `"User ID not provided"`
  - `500 Internal Server Error`: `"Error details"`

#### ワークスペース取得API
- **URL**: `/return-workspace`
- **Method**: `GET`
- **Request Parameter**: `user_id` (string)
- **Response**:
  - `200 OK`:
    ```json
    {
      "workspace": "string"
    }
    ```
  - `404 Not Found`: `"Workspace not found"`

#### ヘルスチェックAPI
- **URL**: `/`
- **Method**: `GET`
- **Response**:
  - `200 OK`: `{"message": "OK"}`

### 追加の考慮事項
1. **初期アクセス**: 初期認証コード入力画面で回数制限などの対策を追加してブルートフォース攻撃を防ぐことが推奨されます。
2. **Django関連**: JWTトークンがURLにそのまま露出する場合があるため、それを隠してセキュリティを強化する必要があります。
3. **コードサーバー**: 現在rootとして実行されていますが、'coder'ユーザーに変更する必要があります。ただし、supervisorを使用しているため、これに関するより根本的な解決策が必要です。
4. **フロントエンドボタン入力およびページフォーマット調整**: ページ間のボタン入力およびフォーマットの調整のための細かな修正が必要です。

### 機能追加方法
1. **コードサーバー**
   - Python 3はすでにインストールされていますが、追加のコンパイルや設定が必要な場合は、Dockerfileを修正して必要なインストールを追加してください。
   - ユーザーがディレクトリを生成した後、基本的なファイルを提供したい場合（例: テスト問題の提供）、そのファイルを先に生成し、Flaskサーバーの `def create_workspace():` APIでそのファイルをコピー・ペーストするように設定できます。

2. **バックエンド**
   - 既存のAPI以外に追加のAPIを作成したい場合は、Djangoで新しいアプリを生成し、標準のDjango手法に従って追加してください。JWTトークンは`main`に、ログイン関連機能は`account`にあります。

3. **フロントエンド**
   - `src/core/component.js`を参照してください。
   - 基本的にSPA（シングルページアプリケーション）を模倣しているため、必要な要素を`App.js`に追加し、新しいページを作成する場合はそのコンポーネントをimportして追加してください。
   - テンプレートはHTMLで直接作成するのではなく、フォームをまとめたフォルダを作成し、importする形式で作成できます（例: `LoginStyle.js`を`Login.js`で使用）。

</details>

</details>
