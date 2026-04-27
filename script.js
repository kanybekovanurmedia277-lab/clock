function updateTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("date").textContent = `${day}.${month}.${year}`;
}

// ар бир секунд сайын жаңыланат
setInterval(updateTime, 1000);

// биринчи жолу дароо көрсөтөт
updateTime();