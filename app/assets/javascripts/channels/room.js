App.room = App.cable.subscriptions.create("RoomChannel", {
    connected: function () {
    },

    disconnected: function () {
    },

    received: function (data) {
        // alert(data['message']);
        const chat = document.getElementById('add-content');
        const newMessage = document.createElement('p');
        newMessage.innerText = data['message'];
        chat.insertBefore(newMessage, chat.firstChild);
    },

    speak: function (message) {
        return this.perform('speak', { message: message });
    }
});