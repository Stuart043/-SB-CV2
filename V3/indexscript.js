document.onkeyup = KeyCheck;

	function KeyCheck(e)
		{
		   var KeyID = (window.event) ? event.keyCode : e.keyCode;

		   switch(KeyID)
		   {

   			case 97:
		      window.location = "about.html";
		      break;

					case 98:
					 window.location = "Work Rigin.html";
					 break;

					 case 99:
						 window.location = "Contact.html";
						 break;

		   }
		}
