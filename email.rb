require 'sendgrid-ruby'

class ContactRevive

	def initialize(message,recipient=nil)
		@recipient=recipient
		@message=message	
	end

	def Send()
	
		client = SendGrid::Client.new do |c|
    	c.api_key = ENV['SENDGRID_API_KEY']
		end
	
  		mail= SendGrid::Mail.new do |m|
  		m.to = 'snowst10@gmail.com'
  		m.from = @recipient
  		m.subject = 'Hey Steve!'
  		m.text = @message
		end
	res = client.send(mail)
	end
end
