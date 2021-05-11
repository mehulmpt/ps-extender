function checks() {
	if (location.hostname !== 'psd.bits-pilani.ac.in') {
		alert('Only works on http://psd.bits-pilani.ac.in')
		return false
	}

	if (!location.pathname.includes('StudentStationPreference.aspx')) {
		alert('You need to be on Fill Station Prefrence page')
		return false
	}

	if (window.__PSZYSET__ === true) {
		alert('Already ran here once. Please refresh')
		return false
	}

	return true
}

function $(selector) {
	const elems = document.querySelectorAll(selector)
	return elems.length === 1 ? elems[0] : [...elems]
}

if (checks()) {

	const PSZYIcons = {
		sendToTop: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M24 32h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24H24C10.7 104 0 93.3 0 80V56c0-13.3 10.7-24 24-24zm232 424V320h87.7c17.8 0 26.7-21.5 14.1-34.1L205.7 133.7c-7.5-7.5-19.8-7.5-27.3 0L26.1 285.9C13.5 298.5 22.5 320 40.3 320H128v136c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24z"></path></svg>',
		sendToBottom: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zM128 56v136H40.3c-17.8 0-26.7 21.5-14.1 34.1l152.2 152.2c7.5 7.5 19.8 7.5 27.3 0l152.2-152.2c12.6-12.6 3.7-34.1-14.1-34.1H256V56c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24z"></path></svg>',
		moveUp: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>',
		moveDown: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>',
		info: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>'
	}

	const styles = `
        div#__PSZY_CONTROLS__ {
			flex: 0 0 auto;
            display: flex;
            justify-content: flex-end;
            align-items: center;
			order: 4;
			gap: 10px;
        }
        div#__PSZY_CONTROLS__>div {
            font-size: 12px;
            background: #418aca;
            color: white;
            padding: 8px;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            border-radius: 50%;
            align-items: center;
            cursor: pointer;
        }

		ul#sortable_nav>li {
			display: flex;
			gap: 15px;
            align-items: center;
		}

		ul#sortable_nav>li .sortable-number {
			flex: 0 0 auto;
			order: 1;
			margin-left: -60px;
			float: none;
		}

		ul#sortable_nav>li .uiicon {
			margin: 0px;
			order: 2;
		}

		ul#sortable_nav>li .spacer {
			flex: 1 1 auto;
			order: 3;
		}

		ul#sortable_nav>li input.accomo {
			flex: 0 0 auto;
			order: 5;
			float: none;
			margin: 0;
			width: 15px;
			height: 15px;
		}

        ul#sortable_nav>li:first-child div#__PSZY_CONTROLS__ #__PSZY_MOVEUP__ {
            display: none;
        }

        ul#sortable_nav>li:first-child div#__PSZY_CONTROLS__ #__PSZY_TOP__ {
            display: none;
        }

        ul#sortable_nav>li:last-child div#__PSZY_CONTROLS__ #__PSZY_MOVEDOWN__ {
            display: none;
        }

        ul#sortable_nav>li:last-child div#__PSZY_CONTROLS__ #__PSZY_BOTTOM__ {
            display: none;
        }

		ul#sortable_nav>li:not(:hover) div#__PSZY_CONTROLS__{
			display: none;
		}

        div#__PSZY_CONTROLS__ div#__PSZY_SWAP__ {
            border-radius: 10px;
            width: auto;
        }

        div#__PSZY_CONTROLS__ div#__PSZY_MOVETO__ {
            border-radius: 10px;
            width: auto;
        }

        div#__PSZY_CONTROLS__ div#__PSZY_MOVERANGE__ {
            border-radius: 10px;
            width: auto;
        }

        div#__PSZY_CONTROLS__ svg {
            width: 15px;
            height: 15px;
        }

        @keyframes bg {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }

        .glow {
            animation: bg 0.4s linear;
        }
    `

	const styleTag = document.createElement('style')
	styleTag.innerHTML = styles

	window.__PSZYSET__ = true

	// disable default sorting library
	const script = document.createElement('script')
	script.innerHTML = `$('#sortable_nav').sortable('destroy'); $('#sortable_nav').enableSelection();`
	document.head.appendChild(script)

	// add styles
	document.head.appendChild(styleTag)

	// add controls
	const controls = `
	<div class="spacer">&nbsp;</div>
    <div id="__PSZY_CONTROLS__">
        <div id="__PSZY_MOVEUP__" title="Move 1 up">${PSZYIcons.moveUp}</div>
        <div id="__PSZY_MOVEDOWN__" title="Move 1 down">${PSZYIcons.moveDown}</div>
        <div id="__PSZY_TOP__" title="Send to top">${PSZYIcons.sendToTop}</div>
        <div id="__PSZY_BOTTOM__" title="Send to bottom">${PSZYIcons.sendToBottom}</div>
        <div id="__PSZY_SWAP__" title="Swap">Swap</div>
        <div id="__PSZY_MOVETO__" title="Move to">Move to</div>
        <div id="__PSZY_MOVERANGE__" title="Move range above a given selection">moveRange</div>
        <div id="__PSZY_PBANK__" title="open problem bank">${PSZYIcons.info}</div>
    </div>`

	const lis = $('#sortable_nav > li')

	lis.forEach((li) => (li.innerHTML += controls))
	// document.body.innerHTML=iFrameForProblemBank+document.body.innerHTML
	document.addEventListener('click', checkPSZYClicks, false)

	var temp=0

	function checkPSZYClicks(e) {
		switch (e.target.id) {
			case '__PSZY_MOVEUP__':
				moveup(e.target.parentNode.parentNode)
				break
			case '__PSZY_MOVEDOWN__':
				movedown(e.target.parentNode.parentNode)
				break
			case '__PSZY_TOP__':
				movetotop(e.target.parentNode.parentNode)
				break
			case '__PSZY_BOTTOM__':
				movetobottom(e.target.parentNode.parentNode)
				break
			case '__PSZY_SWAP__':
				moveswap(e.target.parentNode.parentNode)
				break
			case '__PSZY_MOVETO__':
				moveto(e.target.parentNode.parentNode)
				break
			case '__PSZY_MOVERANGE__':
				moverange(e.target.parentNode.parentNode)
				break
			case '__PSZY_PBANK__':
				let stid = e.target.parentNode.parentNode.querySelector('.spanclass.uiicon').attributes.spn.value
				fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
					"headers": {
						"accept": "application/json, text/javascript, */*; q=0.01",
						"accept-language": "en-US,en;q=0.9",
						"cache-control": "no-cache",
						"content-type": "application/json; charset=UTF-8",
						"pragma": "no-cache",
						"x-requested-with": "XMLHttpRequest"
					},
					"referrer": "http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx",
					"referrerPolicy": "strict-origin-when-cross-origin",
					"body": `{StationId: \"${stid}\" }`,
					"method": "POST",
					"mode": "cors",
					"credentials": "include"
				}).then(response => response.json())
				.then(data => JSON.parse(data.d)[0])
				.then(data => window.open(`StationproblemBankDetails.aspx?CompanyId=${data.CompanyId}&StationId=${data.StationId}&BatchIdFor=${data.BatchIdFor}&PSTypeFor=${data.PSTypeFor}`, "_blank"))
				break
		}
	}

	function moveswap(node) {
		const nextNodeNum = parseInt(prompt('Enter station# to swap with'), 10)
		const list = $('#sortable_nav li')

		debugger
		if (isNaN(nextNodeNum) || nextNodeNum < 1) {
			return alert('Enter a valid number')
		}

		if (list.length < nextNodeNum) {
			return alert('Not enough stations. Try a smaller number')
		}

		const otherNode = list[nextNodeNum - 1]

		debugger

		if (otherNode === node) {
			return alert('Same station')
		}

		if (otherNode.nextSibling !== node) {
			const nextNode = otherNode.nextSibling
			otherNode.parentNode.insertBefore(otherNode, node)
			node.parentNode.insertBefore(node, nextNode)
			glow(node, otherNode)
		} else {
			const nextNode = node.nextSibling
			node.parentNode.insertBefore(node, otherNode)
			otherNode.parentNode.insertBefore(otherNode, nextNode)
			glow(otherNode, node)
		}

		correctRanks()
	}
	function moverange(node){
		const endNodeNum = parseInt(prompt('Enter station# till which range to be made'), 10)
		const list = $('#sortable_nav li')

		debugger
		if (isNaN(endNodeNum) || endNodeNum < 1) {
			return alert('Enter a valid number')
		}

		if (list.length < endNodeNum) {
			return alert('Not enough stations. Try a smaller number')
		}

		const endNode = list[endNodeNum - 1]

		debugger
		const begNodeNum = parseInt(node.querySelector('.sortable-number span').innerText)
		const refNodeNum = parseInt(prompt('Enter station# above(or below) which to move the selected range'), 10)
		debugger
		if (isNaN(refNodeNum) || refNodeNum < 1) {
			return alert('Enter a valid number')
		}

		if (list.length < refNodeNum) {
			return alert('Not enough stations. Try a smaller number')
		}
		if (begNodeNum<= refNodeNum && refNodeNum<=endNodeNum) {
			return alert('Cannot Move selected range on given PS staion. Try again with other value outside of selection.' )
		}

		const refNode = list[refNodeNum - 1]

		debugger
		// if reference node above selection
		if(refNodeNum<begNodeNum){
			//for each node in range move up begNodeNum-refNodeNum+1
			for(var i=begNodeNum-1;i<=endNodeNum-1;i++){
				noOfMoveUps=begNodeNum-refNodeNum
				while(noOfMoveUps!==0){
					moveup(list[i])
					noOfMoveUps--
				}
			}

		}
		// else
		else{
			// for each node in selected range move down
			for(var j=endNodeNum-1;j>=begNodeNum-1;j--){
				noOfMoveDowns=refNodeNum-endNodeNum
				while(noOfMoveDowns!==0){
					movedown(list[j])
					noOfMoveDowns--
				}
			} 
		}

	}

	function moveup(node) {
		const prevNode = node.previousSibling
		glow(prevNode, node)
		node.parentNode.insertBefore(node, prevNode)
		correctRanks()
	}

	function movedown(node) {
		const nextNode = node.nextSibling
		glow(nextNode, node)
		node.parentNode.insertBefore(nextNode, node)
		correctRanks()
	}

	function movetotop(node) {
		const prevNode = node.parentNode.querySelector('li:first-child')
		glow(node)
		node.parentNode.insertBefore(node, prevNode)
		correctRanks()
	}

	function movetobottom(node) {
		glow(node)
		node.parentNode.appendChild(node)
		correctRanks()
	}

	function moveto(node) {
		const newNodePos = parseInt(prompt('Enter preference#'), 10)
		const list = $('#sortable_nav li')
		const currentNodePos = list.indexOf(node)

		if (isNaN(newNodePos) || newNodePos < 1) {
			return alert('Enter a valid number')
		}
		if (list.length < newNodePos) {
			return alert('Not enough stations. Try a smaller number')
		}

		const newNode = currentNodePos>newNodePos ? list[newNodePos - 1] : list[newNodePos]

		if (newNode === node) {
			return alert('Same station')
		}

		glow(node)
		node.parentNode.insertBefore(node, newNode)
		correctRanks()
	}

	function glow(...nodes) {
		nodes.forEach((node) => {
			node.classList.add('glow')
			setTimeout(() => {
				node.classList.remove('glow')
			}, 400)
		})
	}

	function correctRanks() {
		$('#sortable_nav > li').forEach((li, index) => {
			li.querySelector('.sortable-number span').innerText = index + 1
			li.querySelector('.spanclass.uiicon').attributes.cls.value = index + 1
		})
	}
}
