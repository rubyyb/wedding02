// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const MASTER_KEY = "qwer1234"; // 마스터키 설정

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtt1T1yMD7j8qZMFisbriKny9s0z-_2MY",
  authDomain: "wedding02.firebaseapp.com",
  databaseURL:
    "https://wedding02-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding02",
  storageBucket: "wedding02.appspot.com",
  messagingSenderId: "926965385014",
  appId: "1:926965385014:web:7be4f1729c1e393f721597",
  measurementId: "G-CZW5CY1MT5",
};

// Firebase 초기화 (단일 인스턴스 유지)
const app = initializeApp(firebaseConfig);

// Database 초기화
const database = getDatabase(app);

// 내보내기
// 방명록 작성 함수
export function submitGuestbook(name, message, password, callback) {
  if (name && message && password) {
    const newMessageRef = push(ref(database, "guestbook"));
    set(newMessageRef, {
      name: name,
      message: message,
      password: password, // 비밀번호 저장
      timestamp: Date.now(),
    })
      .then(() => {
        if (callback) callback(true);
      })
      .catch((error) => {
        console.error("Error writing to database:", error);
        if (callback) callback(false);
      });
  } else {
    console.warn("All fields are required!");
    if (callback) callback(false);
  }
}

// 방명록 목록 표시 함수
export function listGuestbook(callback) {
  onValue(ref(database, "guestbook"), (snapshot) => {
    const messages = snapshot.val();
    if (messages) {
      const formattedMessages = Object.entries(messages)
        .map(([id, msg]) => ({
          id, // 항목 식별자 추가
          ...msg,
          timestamp: new Date(msg.timestamp).toLocaleString(), // 읽기 쉽게 변환
          rawTimestamp: msg.timestamp, // 정렬용 원래 timestamp 저장
        }))
        .sort((a, b) => b.rawTimestamp - a.rawTimestamp); // 내림차순 정렬
      callback(formattedMessages);
    } else {
      callback([]); // 데이터가 없을 경우 빈 배열 반환
    }
  });
}

// 방명록 데이터 표시 함수
export function displayGuestbookWithCustomPagination(messages) {
  const itemsPerPage = 4; // 한 페이지에 표시할 항목 수
  const pagesPerGroup = 3; // 한 번에 표시할 페이지 버튼 수
  const totalItems = messages.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationContainer = document.getElementById("pagination-container");
  const guestbookList = document.getElementById("guestbook-list");

  let currentPage = 1;

  // 페이지네이션 버튼 렌더링
  function renderPagination() {
    paginationContainer.innerHTML = ""; // 초기화

    const currentGroup = Math.ceil(currentPage / pagesPerGroup);
    const startPage = (currentGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(currentGroup * pagesPerGroup, totalPages);

    // 이전 그룹 버튼
    const prevGroupButton = document.createElement("button");
    prevGroupButton.textContent = "이전";
    prevGroupButton.disabled = startPage === 1;
    prevGroupButton.addEventListener("click", () => {
      if (startPage > 1) {
        currentPage = startPage - 1;
        renderGuestbookItems();
        renderPagination();
      }
    });
    paginationContainer.appendChild(prevGroupButton);

    // 페이지 번호 버튼
    for (let i = startPage; i <= endPage; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.className = i === currentPage ? "active" : "";
      pageButton.addEventListener("click", () => {
        currentPage = i;
        renderGuestbookItems();
        renderPagination();
      });
      paginationContainer.appendChild(pageButton);
    }

    // 다음 그룹 버튼
    const nextGroupButton = document.createElement("button");
    nextGroupButton.textContent = "다음";
    nextGroupButton.disabled = endPage === totalPages;
    nextGroupButton.addEventListener("click", () => {
      if (endPage < totalPages) {
        currentPage = endPage + 1;
        renderGuestbookItems();
        renderPagination();
      }
    });
    paginationContainer.appendChild(nextGroupButton);
  }

  // 방명록 항목 렌더링
  function renderGuestbookItems() {
    guestbookList.innerHTML = ""; // 초기화
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = messages.slice(start, end);

    currentItems.forEach((msg) => {
      const item = document.createElement("div");
      item.className = "guestbook-item";
      item.innerHTML = `
            <p><strong>${msg.name}</strong> - ${msg.timestamp}</p>
            <p>${msg.message}</p>
            <button class="delete-button" onclick="openDeleteModal('${msg.id}')">X</button>
          `;
      guestbookList.appendChild(item);
    });
  }

  // 초기 렌더링
  renderGuestbookItems();
  renderPagination();
}

// 방명록 삭제 함수
export function deleteGuestbook(id, password, callback) {
  const itemRef = ref(database, `guestbook/${id}`);
  onValue(
    itemRef,
    (snapshot) => {
      const item = snapshot.val();

      // 마스터키 검증
      if (password === MASTER_KEY) {
        remove(itemRef)
          .then(() => callback(true))
          .catch((error) => {
            console.error("Error deleting item with master key:", error);
            callback(false);
          });
      }
      // 개별 비밀번호 검증
      else if (item && item.password === password) {
        remove(itemRef)
          .then(() => callback(true))
          .catch((error) => {
            console.error("Error deleting item:", error);
            callback(false);
          });
      } else {
        callback(false); // 비밀번호 불일치 또는 항목 없음
      }
    },
    { onlyOnce: true }
  );
}
