class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'room_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    chat_message = Message.create!(content: data['message'])
    ActionCable.server.broadcast 'room_channel', message: chat_message.content
  end
end
