
//derived from http://meiert.com/en/indices/html-elements/
var elements = [
	{ name : "a", desc : "Anchor."},
	{ name : "abbr", desc : "Abbreviation."},
	{ name : "access", desc : "Accessibility mapping."},
	{ name : "acronym", desc : "Acronym."},
	{ name : "action", desc : "Action."},
	{ name : "address", desc : "Author information."},
	{ name : "applet", desc : "Java applet."},
	{ name : "area", desc : "Client-side image map."},
	{ name : "article", desc : "â??Independentâ? section."},
	{ name : "aside", desc : "â??Auxiliaryâ? section."},
	{ name : "audio", desc : "Audio stream."},
	{ name : "b", desc : "Bold text style."},
	{ name : "base", desc : "Document base URI."},
	{ name : "basefont", desc : "Base font size."},
	{ name : "bdo", desc : "I18N: Bidi override."},
	{ name : "big", desc : "Large text style."},
	{ name : "blockcode", desc : "Code block."},
	{ name : "blockquote", desc : "Long quotation."},
	{ name : "body", desc : "Document body."},
	{ name : "br", desc : "Forced line break."},
	{ name : "button", desc : "Push button."},
	{ name : "canvas", desc : "Bitmap canvas."},
	{ name : "caption", desc : "(Table) caption."},
	{ name : "center", desc : "align center."},
	{ name : "cite", desc : "Citation."},
	{ name : "code", desc : "Code fragment."},
	{ name : "col", desc : "Table column."},
	{ name : "colgroup", desc : "Table column group."},
	{ name : "command", desc : "User-invokable command."},
	{ name : "datalist", desc : "Data list."},
	{ name : "dd", desc : "Definition description."},
	{ name : "del", desc : "Deleted text."},
	{ name : "delete", desc : "Delete."},
	{ name : "details", desc : "Additional information."},
	{ name : "dfn", desc : "Instance definition."},
	{ name : "di", desc : "Definition item."},
	{ name : "dir", desc : "Directory list."},
	{ name : "dispatch", desc : "Dispatch."},
	{ name : "div", desc : "Generic container."},
	{ name : "dl", desc : "Definition list."},
	{ name : "dt", desc : "Definition term."},
	{ name : "em", desc : "Emphasis."},
	{ name : "embed", desc : "Integration point."},
	{ name : "fieldset", desc : "Form control group."},
	{ name : "figure", desc : "Paragraph with embedded content and caption."},
	{ name : "font", desc : "Local change to font."},
	{ name : "footer", desc : "Section footer."},
	{ name : "form", desc : "Interactive form."},
	{ name : "frame", desc : "Subwindow."},
	{ name : "frameset", desc : "Window subdivision."},
	{ name : "group", desc : "Element group."},
	{ name : "h", desc : "Heading."},
	{ name : "h1", desc : "Heading."},
	{ name : "h2", desc : "Heading."},
	{ name : "h3", desc : "Heading."},
	{ name : "h4", desc : "Heading."},
	{ name : "h5", desc : "Heading."},
	{ name : "h6", desc : "Heading."},
	{ name : "handler", desc : "Handler definition."},
	{ name : "head", desc : "Document head."},
	{ name : "header", desc : "Section header."},
	{ name : "hgroup", desc : "Section heading."},
	{ name : "hr", desc : "Horizontal rule."},
	{ name : "html", desc : "Document root."},
	{ name : "i", desc : "Italic text style."},
	{ name : "iframe", desc : "Inline subwindow."},
	{ name : "img", desc : "Embedded image."},
	{ name : "input", desc : "Form control."},
	{ name : "ins", desc : "Inserted text."},
	{ name : "insert", desc : "Insert."},
	{ name : "isindex", desc : "Single line prompt."},
	{ name : "itemref", desc : "Reference item."},
	{ name : "kbd", desc : "Text to be entered."},
	{ name : "keygen", desc : "Key generator."},
	{ name : "l", desc : "Line of text."},
	{ name : "label", desc : "Form field label (XHTML 2: list label)."},
	{ name : "legend", desc : "Fieldset legend."},
	{ name : "li", desc : "List item."},
	{ name : "link", desc : "Media-independent link."},
	{ name : "listing", desc : "Listing."},
	{ name : "load", desc : "Load."},
	{ name : "map", desc : "Client-side image map."},
	{ name : "mark", desc : "Marked text."},
	{ name : "menu", desc : "Menu list."},
	{ name : "message", desc : "Message."},
	{ name : "meta", desc : "Generic meta-information."},
	{ name : "meter", desc : "Scalar measurement."},
	{ name : "model", desc : "Model."},
	{ name : "nav", desc : "Navigation links section."},
	{ name : "nl", desc : "Navigation list."},
	{ name : "noframes", desc : "Alternate container."},
	{ name : "noscript", desc : "Alternate container."},
	{ name : "object", desc : "Generic embedded object."},
	{ name : "ol", desc : "Ordered list."},
	{ name : "optgroup", desc : "Option group."},
	{ name : "option", desc : "Selectable choice."},
	{ name : "output", desc : "Output."},
	{ name : "p", desc : "Paragraph."},
	{ name : "param", desc : "Named property value."},
	{ name : "plaintext", desc : "Plain text."},
	{ name : "pre", desc : "Preformatted text."},
	{ name : "progress", desc : "Progress of a task."},
	{ name : "q", desc : "Short inline quotation."},
	{ name : "range", desc : "Range definition."},
	{ name : "rb", desc : "Ruby base."},
	{ name : "rbc", desc : "Ruby base container."},
	{ name : "rebuild", desc : "Rebuild."},
	{ name : "recalculate", desc : "Recalculate."},
	{ name : "refresh", desc : "Refresh."},
	{ name : "repeat", desc : "Repeat."},
	{ name : "reset", desc : "Reset."},
	{ name : "revalidate", desc : "Revalidate."},
	{ name : "rp", desc : "Ruby parentheses."},
	{ name : "rt", desc : "Ruby text."},
	{ name : "rtc", desc : "Ruby text container."},
	{ name : "ruby", desc : "Ruby markup."},
	{ name : "s", desc : "Strike-through text style."},
	{ name : "samp", desc : "Sample output."},
	{ name : "script", desc : "Script statements."},
	{ name : "secret", desc : "Secret input."},
	{ name : "section", desc : "Document section."},
	{ name : "select", desc : "Option selector."},
	{ name : "select1", desc : "Single select."},
	{ name : "send", desc : "Send."},
	{ name : "separator", desc : "Break."},
	{ name : "setfocus", desc : "Set focus."},
	{ name : "setindex", desc : "Set index."},
	{ name : "setvalue", desc : "Set value."},
	{ name : "small", desc : "Small text style."},
	{ name : "source", desc : "Media resource."},
	{ name : "span", desc : "Generic container."},
	{ name : "standby", desc : "Message (while loading)."},
	{ name : "strike", desc : "Strike-through text."},
	{ name : "strong", desc : "Strong emphasis."},
	{ name : "style", desc : "Style info."},
	{ name : "sub", desc : "Subscript."},
	{ name : "submit", desc : "Submit."},
	{ name : "summary", desc : "Table summary."},
	{ name : "sup", desc : "Superscript."},
	{ name : "switch", desc : "Selection."},
	{ name : "table", desc : "Table."},
	{ name : "tbody", desc : "Table body."},
	{ name : "td", desc : "Table data cell."},
	{ name : "textarea", desc : "Multi-line text field."},
	{ name : "tfoot", desc : "Table footer."},
	{ name : "th", desc : "Table header cell."},
	{ name : "thead", desc : "Table header."},
	{ name : "time", desc : "Date and/or time."},
	{ name : "title", desc : "Document title."},
	{ name : "tr", desc : "Table row."},
	{ name : "trigger", desc : "Trigger."},
	{ name : "tt", desc : "Teletype text style."},
	{ name : "u", desc : "Underlined text style."},
	{ name : "ul", desc : "Unordered list."},
	{ name : "upload", desc : "File upload."},
	{ name : "var", desc : "Variable instance."},
	{ name : "video", desc : "Video or movie."},
	{ name : "xmp", desc : "Preformatted text."}
];

var filters = [
	{ name : ":animated", desc : "" }, 
	{ name : ":button", desc : "" },
	{ name : ":checkbox", desc : "" },
	{ name : ":checked", desc : "" },
	{ name : ":contains(", desc : "" },
	{ name : ":disabled", desc : "" },
	{ name : ":enabled", desc : "" },
	{ name : ":file", desc : "" },
	{ name : ":header", desc : "" },
	{ name : ":hidden", desc : "" },
	{ name : ":image", desc : "" },
	{ name : ":input", desc : "" },
	{ name : ":not(", desc : "" },
	{ name : ":parent", desc : "" },
	{ name : ":password", desc : "" },
	{ name : ":radio", desc : "" },
	{ name : ":reset", desc : "" },
	{ name : ":selected", desc : "" },
	{ name : ":submit", desc : "" },
	{ name : ":text", desc : "" },
	{ name : ":visible", desc : "" },
	{ name : ":first", desc : "" },
	{ name : ":last", desc : "" },
	{ name : ":first-child", desc : "" },
	{ name : ":last-child", desc : "" },
	{ name : ":only-child", desc : "" },
	{ name : ":nth-child(", desc : "" },
	{ name : ":even", desc : "" },
	{ name : ":odd", desc : "" },
	{ name : ":eq(", desc : "" },
	{ name : ":gt(", desc : "" },
	{ name : ":lt(", desc : "" }
];

//derived from http://docs.jquery.com/Core
var functions = [
//return jQuery
	{ name :"each(", desc : ""},
	{ name :"eq(", desc : ""},
	{ name :"removeData(", desc : ""},
	{ name :"html(", desc : ""},
	{ name :"text(", desc : ""},
	{ name :"after(", desc : ""},
	{ name :"before(", desc : ""},
	{ name :"insertAfter(", desc : ""},
	{ name :"insertBefore(", desc : ""},
	{ name :"wrap(", desc : ""},
	{ name :"wrapAll(", desc : ""},
	{ name :"wrapInner(", desc : ""},
	{ name :"replaceWith(", desc : ""},
	{ name :"replaceAll(", desc : ""},
	{ name :"empty(", desc : ""},
	{ name :"remove(", desc : ""},
	{ name :"clone(", desc : ""},
	{ name :"filter(", desc : ""},
	{ name :"is(", desc : ""},
	{ name :"map(", desc : ""},
	{ name :"not(", desc : ""},
	{ name :"slice(", desc : ""},
	{ name :"add(", desc : ""},
	{ name :"children(", desc : ""},
	{ name :"closest(", desc : ""},
	{ name :"contents(", desc : ""},
	{ name :"find(", desc : ""},
	{ name :"next(", desc : ""},
	{ name :"nextAll(", desc : ""},
	{ name :"offsetParent(", desc : ""},
	{ name :"parent(", desc : ""},
	{ name :"parents(", desc : ""},
	{ name :"prev(", desc : ""},
	{ name :"prevAll(", desc : ""},
	{ name :"siblings(", desc : ""},
	{ name :"andSelf(", desc : ""},
	{ name :"end(", desc : ""},
	{ name :"css(", desc : ""},
	{ name :"offset(", desc : ""},
	{ name :"offsetParent(", desc : ""},
	{ name :"position()", desc : ""},
	{ name :"scrollTop(", desc : ""},
	{ name :"scrollLeft()", desc : ""},

//return  Number
	{ name :"size()", desc : ""},
	{ name :"length", desc : ""},
	{ name :"index(", desc : ""},
//return string
	{ name :"selector", desc : ""},
//return Element
	{ name :"context", desc : ""},
	{ name :"get()", desc : ""},
//return Any
	{ name :"data(", desc : ""},
	{ name :"attr(", desc : ""},
	{ name :"addClass(", desc : ""},
	{ name :"hasClass(", desc : ""},
	{ name :"removeClass(", desc : ""},
	{ name :"toggleClass(", desc : ""},
	{ name :"html(", desc : ""},
	{ name :"text(", desc : ""},
	{ name :"val(", desc : ""},



	{ name : "show()", desc : "Displays each of the set of matched elements if they are hidden."},
	{ name : "hide(", desc : "Hides each of the set of matched elements if they are shown."},
	{ name : "toggle(", desc : "Toggle displaying each of the set of matched elements."},
	{ name : "slideDown(", desc : "Reveal all matched elements by adjusting their height and firing an optional callback after completion."},
	{ name : "slideUp(", desc : "Hide all matched elements by adjusting their height and firing an optional callback after completion."},
	{ name : "slideToggle(", desc : "Toggle the visibility of all matched elements by adjusting their height and firing an optional callback after completion."},
	{ name : "fadeIn(", desc : "Fade in all matched elements by adjusting their opacity and firing an optional callback after completion."},
	{ name : "fadeOut(", desc : "Fade out all matched elements by adjusting their opacity to 0, then setting display to none and firing an optional callback after completion."},
	{ name : "fadeTo(", desc : "Fade the opacity of all matched elements to a specified opacity and firing an optional callback after completion."},
	{ name : "animate(", desc : "A function for making custom animations."},
	{ name : "stop(", desc : "Stops all the currently running animations on all the specified elements."},

];

var selectorDataAdv = [
	{ name : "$(\"", desc : ""}
];

selectorData = elements.concat(filters);

selectorDataAdv = selectorData.concat(selectorDataAdv);

