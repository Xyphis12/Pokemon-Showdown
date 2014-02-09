/*********************************************************************************
*  Join Messages
* This file uses key:value pairs to specify a join message for each channel
* To add a message, simple create a new pair in the form of 'channel': 'message'.
*
* The protocol-doc.md file documents many aspects of the chat protocol, 
* including using HTML in a message.
*
* If you change this file, and want the changes to take effect, 
* Simply type the command: /hotpatch chat as an admin in the chat, and it should 
* either crash or load.
* 
* The Fallback message is just "Welcome To <channelname>" with some HTML markup
**/
exports.joinmsg = {
	'lobby': '|html|<div class="infobox" style="border-color:blue"><center>' +'<b><u>Welcome to the Lobby!</u></b><br />' +'</em></blockquote></div></font></center>',
	'development': 'Development',
	'staff': 'Welcome, staff memebers!'
};
