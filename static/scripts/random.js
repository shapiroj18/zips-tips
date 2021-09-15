function writeRandomTip(jsonTips) {
    var tipsSection = document.createElement('div');

    const randTipVal = Math.floor(Math.random() * jsonTips.length);
    var tip = document.createElement('div');

    var tipTitle = document.createElement('h2');
    tipTitle.appendChild(document.createTextNode(jsonTips[randTipVal].title));
    tip.appendChild(tipTitle);

    var tipBody = document.createElement('p');
    let tipText = jsonTips[randTipVal].tiptxt;
    splitText = tipText.split('<p>');
    if (splitText.length > 1) {
        for (let i = 0; i < splitText.length; i++) {
            let tipSplit = document.createElement('p');
            tipSplit.appendChild(document.createTextNode(splitText[i]));
            tipBody.appendChild(tipSplit);
        }
    } else {
        tipBody.appendChild(document.createTextNode(jsonTips[randTipVal].tiptxt));
    }
    tip.appendChild(tipBody);
    tipsSection.appendChild(tip);

    return tipsSection;
}



function loadJsonFromFile(filePath) {
  jQuery.when(
			$.getJSON(filePath)
		).done( function(respJson) {
			document.getElementById('tips').appendChild(writeRandomTip(respJson))
	});
}

loadJsonFromFile('static/scripts/data.json')
