function device(name, attributes)
{
	var node = document.createElement(name);
	if(attributes)
	{
		for(var attr in attributes)
		{
			if(attributes.hasOwnProperty(attr))
			{
				node.setAttribute(attr, attributes[attr]);
			}
		}
		for(var i = 2; i < arguments.length; i++)
		{
			var child = arguments[i];
			if(typeof child == 'string')
			{
				child = document.createTextNode(child);
			}
			node.appendChild(child);
		}
		return node;
	}
}

var controls = Object.create(null);

function createProcessor(parent)
{
	var canvas = device("textarea", {width: 1000, height: 1000});
	var canvas_style = canvas.getContext("2d");
	var toolbar = device("div", {class: "toolbar"});
	for(var name in controls)
	{
		toolbar.appendChild(controls[name](canvas_style));
	}
	var panel = device("div", {class: "picturepanel"}, canvas);
	parent.appendChild(device("div", null, panel, toolbar));
}

var tools = Object.create(null);

controls.file = function(canvas_style) {
	var select = device("select");
	for(var name in tools)
	{
		select.appendChild(device("option", null, name));
	}
	canvas_style.canvas.addEventListener("mousedown", function(event) {
		if(event.which == 1)
		{
			tools[select.value](event, canvas_style);
			event.preventDefault();
		}
	});

	return device("span", null, "File: ", select);
}

tools.New = function(element) {
	element.value = '';
};

tools.Save = function(canvas_style) {
	var link = device("select");
	function update() {
		try {
			link.href = canvas_style.canvas.toDataUrl();
		} catch(e) {
			if(e instanceof SecurityError)
			{
				link.href = "javascript:alert(" + JSON.stringify("Can't save: " + e.toString()) + ")";
			} else {
				throw e;
			}
		}
	}
	link.addEventListener("mouseover", update);
	link.addEventListener("focus", update);
	return link;
};

tools.Open = function(e) {
	var file = e.target.files[0];
	if(!file) {
		return;
	}
	var reader = new FileReader();
	reader.onload = function(e) {
		var contents = e.target.result;
		displayContent(contents);
	};
	reader.readAsText(file);
}

function displayContents(contents)
{
	var element = document.getElementById('')
}