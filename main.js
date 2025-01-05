window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "47cd6975-ca92-4101-8391-3b2afc31508d",
        notifyButton: {
            enable: false, // Отключаем стандартную кнопку уведомлений
        },
        allowLocalhostAsSecureOrigin: true, // Разрешаем localhost для разработки
        serviceWorkerPath: "push/onesignal/OneSignalSDKWorker.js", // Путь к сервис-воркеру
        serviceWorkerParam: {
            scope: '/', // Область действия сервис-воркера
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const subscribeButton = document.getElementById('subscribe');
    console.log('Кнопка подписки:', subscribeButton);

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            console.log('subscribeButton click...');
            OneSignal.push(function() {
                OneSignal.showSlidedownPrompt();
                console.log('showSlidedownPrompt ...');
            });
        });
    } else {
        console.error("Элемент с id 'subscribe' не найден.");
    }
});