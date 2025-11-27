// common.js

// session 有效時間（毫秒） 30 分鐘
const SESSION_TIMEOUT = 30 * 60 * 1000;

function setSession() {
    const now = Date.now();
    localStorage.setItem("login_time", now);
}

function isSessionValid() {
    const loginTime = localStorage.getItem("login_time");
    if (!loginTime) return false;

    const now = Date.now();
    return now - loginTime <= SESSION_TIMEOUT;
}

function logout() {
    localStorage.removeItem("login_time");
    location.href = "login.html";
}

// 重新計算活動時間
function refreshSession() {
    if (isSessionValid()) {
        setSession();
    }
}
