from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# POST 요청: 워크스페이스 생성
@app.route("/create-workspace", methods=["POST"])
def create_workspace():
    user_id = request.json.get("user_id")
    if not user_id:
        return jsonify({"error": "User ID not provided"}), 400

    workspace_dir = f"/home/coder/project/user_{user_id}"
    try:
        os.makedirs(workspace_dir, exist_ok=True)
        return jsonify({"message": "Workspace created successfully", "user_id": user_id})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# GET 요청: 워크스페이스 확인 및 반환
@app.route("/return-workspace", methods=["GET"])
def return_workspace():
    user_id = request.args.get("user_id")
    workspace_dir = f"/home/coder/project/user_{user_id}"
    if os.path.exists(workspace_dir):
        return jsonify({"workspace": workspace_dir})
    else:
        return jsonify({"error": "Workspace not found"}), 404

# GET 요청 : 테스트
@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"message": "OK"}), 200

if __name__ == "__main__":
    # host="0.0.0.0"는 외부에서 Flask 서버에 접근할 수 있도록 함
    app.run(host="0.0.0.0", port=5000)
