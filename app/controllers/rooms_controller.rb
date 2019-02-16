class RoomsController < ApplicationController
  def show
    @messages = Message.all.reverse_order
  end
end
