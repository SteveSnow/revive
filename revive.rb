require 'sinatra'

get '/' do 
	erb :home	
end

get '/home' do
	erb :home
end

get '/locations' do
	erb :locations
end

get '/faq' do
	erb :faq
end

get '/contact' do
	erb :contact
end