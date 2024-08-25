function getPrayerTimes() {
    const city = document.getElementById('city').value;
    const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=&method=2`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            const prayerTimesDiv = document.getElementById('prayer-times');

            prayerTimesDiv.innerHTML = `
                <div class="prayer-time">الفجر: ${timings.Fajr}</div>
                <div class="prayer-time">الظهر: ${timings.Dhuhr}</div>
                <div class="prayer-time">العصر: ${timings.Asr}</div>
                <div class="prayer-time">المغرب: ${timings.Maghrib}</div>
                <div class="prayer-time">العشاء: ${timings.Isha}</div>
            `;
        })
        .catch(error => {
            console.error("حدث خطأ:", error);
            const prayerTimesDiv = document.getElementById('prayer-times');
            prayerTimesDiv.innerHTML = '<p>حدث خطأ أثناء جلب البيانات. حاول مرة أخرى.</p>';
        });
}
