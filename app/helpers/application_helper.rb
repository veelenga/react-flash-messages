module ApplicationHelper
  def flash_messages
    flash.map { |type, text| { id: text.object_id, type: type, text: text } }
  end
end
