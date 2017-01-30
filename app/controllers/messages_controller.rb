class MessagesController < ApplicationController
  def new
    text = params[:text] || 'Hello from Rails!'
    type = params[:type] || :notice
    respond_to do |format|
      format.html { redirect_to root_url, flash: {type => text } }
    end
  end

  def display
  end
end
