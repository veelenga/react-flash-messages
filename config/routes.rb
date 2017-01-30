Rails.application.routes.draw do
  get 'new', to: 'messages#new'
  get '/', to: 'messages#display'
  root to: 'messages#display'
end
