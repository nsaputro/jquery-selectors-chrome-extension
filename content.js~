/*
 * jQuery Selectors Chrome extension
 *
 * Copyright (c) 2010 Nugroho Saputro
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id$
 */

$(function() {

	$("<style> \
	.jq_selected  { \
		 border-width:1px; border-style:solid;border-color:red; background-color:yellow \
	 } \
	</style>").appendTo("head");


	chrome.extension.onRequest.addListener(
	  function(request, sender, sendResponse) {

	    if (request.selector != null) {
	      $(".jq_selected").removeClass("jq_selected");

	      var objs = $(request.selector);
	      var errmessage = "";
	      var result = "__NO_RESULT__"; //no result
	      var size = -1;

	      if (request.show_selection) {
		objs.addClass("jq_selected");
	      }

	      if (request.expression && request.expression != "") {
		 	 
		 try {
		   var expresult;

		   eval("expresult = " + request.expression);

		    if (expresult instanceof jQuery) {
			  if (request.show_selection) {
			    expresult.addClass("jq_selected");
			  }
		          size = expresult.size();
		     } else {
			  result = "" + expresult;
		     }
		 } catch(err) {
		     errmessage = "Invalid expression: " + err.message;
		 }

	      }

	      if (size == -1) {
		size = objs.size();
	      }

	      sendResponse({selected: size, error : errmessage, result: result});
	    }
	    else {
	      sendResponse({selected: 0, error : "No selectors are specified"});
	    }
	});

});
