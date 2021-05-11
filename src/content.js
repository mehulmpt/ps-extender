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
	const styles = `
        div#__PSZY_CONTROLS__ {
            display: flex;
            margin-top: 10px;
            justify-content: center;
            align-items: center;
        }
        div#__PSZY_CONTROLS__>div {
            margin-left: 10px;
            margin-right: 10px;
            font-size: 12px;
            background: #418aca;
            color: white;
            padding: 8px;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            border-radius: 50%;
            align-items: center;
            cursor: pointer;
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

        div#__PSZY_CONTROLS__ div#__PSZY_SWAP__ {
            border-radius: 10px;
            width: auto;
        }
        div#__PSZY_CONTROLS__ div#__PSZY_MOVERANGE__ {
            border-radius: 10px;
            width: auto;
        }
        div#__PSZY_CONTROLS__ div#__PSZY_PBANK__ {
            border-radius: 10px;
            width: auto;
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
    <div id="__PSZY_CONTROLS__">
        <div id="__PSZY_MOVEUP__" title="Move 1 up">&uarr;</div>
        <div id="__PSZY_MOVEDOWN__" title="Move 1 down">&darr;</div>
        <div id="__PSZY_TOP__" title="Send to top">&uarr;&uarr;</div>
        <div id="__PSZY_BOTTOM__" title="Send to bottom">&darr;&darr;</div>
        <div id="__PSZY_SWAP__" title="Swap">Swap</div>
        <div id="__PSZY_MOVERANGE__" title="Move range above a given selection">MOVERANGE</div>
        <div id="__PSZY_PBANK__" title="open problem bank">Open Problem Bank (Toggle off for speed)</div>
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
			case '__PSZY_MOVERANGE__':
				moverange(e.target.parentNode.parentNode)
				break
			case '__PSZY_PBANK__':
				if(temp===0){
					iframer(e.target.parentNode.parentNode)
					temp=1
				}else{
					iframeremover(e.target.parentNode.parentNode)
					temp=0
				}
				break
		}
	}
	function iframer(node){
		const iFrameForProblemBank=`<iframe id="pbank" name="pbank" src="http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx" style="height:400px;margin-top:10px; width:100%;" frameborder="1"></iframe>`
		node.innerHTML+=iFrameForProblemBank

	}
	function iframeremover(node){
		var x = node.innerHTML.indexOf("<iframe");
   		node.innerHTML = node.innerHTML.slice(0,x);
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
		})
	}
}
