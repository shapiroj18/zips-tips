function writeTips(jsonTips) {
    var tipsSection = document.createElement('div');
    for (var i = 0; i < jsonTips.length; i++) {
        var tip = document.createElement('div');

        var tipTitle = document.createElement('h2');
        tipTitle.appendChild(document.createTextNode(jsonTips[i].title));
        tip.appendChild(tipTitle);

        var tipBody = document.createElement('p');
        let tipText = jsonTips[i].tiptxt;
        splitText = tipText.split('<p>');
        if (splitText.length > 1) {
            for (let i = 0; i < splitText.length; i++) {
                let tipSplit = document.createElement('p');
                tipSplit.appendChild(document.createTextNode(splitText[i]));
                tipBody.appendChild(tipSplit);
            }
        } else {
            tipBody.appendChild(document.createTextNode(jsonTips[i].tiptxt));
        }
        tip.appendChild(tipBody);
        tipsSection.appendChild(tip);
    }
    return tipsSection;
}

function loadJsonFromFile(filePath) {
  jQuery.when(
			$.getJSON(filePath)
		).done( function(respJson) {
			document.getElementById('tips').appendChild(writeTips(respJson))
	});
}
loadJsonFromFile('static/scripts/data.json')
