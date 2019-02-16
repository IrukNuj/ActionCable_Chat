App.room = App.cable.subscriptions.create("RoomChannel", {
    connected: function () {
    },

    disconnected: function () {
    },

    received: function (data) {
    },

    speak: function (message) {
        return this.perform('speak', { message: message });
    }
});