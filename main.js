window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "47cd6975-ca92-4101-8391-3b2afc31508d",
        // safari_web_id: 'ВАШ_SAFARI_WEB_ID', // Если применимо
        notifyButton: {
            enable: true, // Показывать кнопку уведомлений
        },
        allowLocalhostAsSecureOrigin: true, // Разрешить localhost для разработки
    });
});

// Кнопка подписки
const subscribeButton = document.getElementById('subscribe');

subscribeButton.addEventListener('click', () => {
    OneSignal.push(function() {
        OneSignal.showSlidedownPrompt();
    });
});

