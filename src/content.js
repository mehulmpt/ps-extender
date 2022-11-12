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
		info: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>',
		scrollToTop: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"></path></svg>',
		rupee: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"/></svg>',
		students: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>',
		projects: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>',
		discipline: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M175 389.4c-9.8 16-15 34.3-15 53.1c-10 3.5-20.8 5.5-32 5.5c-53 0-96-43-96-96V64C14.3 64 0 49.7 0 32S14.3 0 32 0H96h64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32V309.9l-49 79.6zM96 64v96h64V64H96zM352 0H480h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V214.9L629.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H261.4c-38.3 0-69.4-31.1-69.4-69.4c0-12.8 3.6-25.4 10.3-36.4L320 214.9V64c-17.7 0-32-14.3-32-32s14.3-32 32-32h32zm32 64V224c0 5.9-1.6 11.7-4.7 16.8L330.5 320h171l-48.8-79.2c-3.1-5-4.7-10.8-4.7-16.8V64H384z"/></svg>',
		grade: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>'
	}

	const styles = `
		#__PSZY_INFO__,
		#__PSZY_CONTROLS__ {
			flex: 0 0 auto;
			display: flex;
			align-items: center;
			height: 24px;
		}

		#__PSZY_INFO__ {
			justify-content: flex-start;
			gap: 8px;
			order: 2;
		}

		#__PSZY_CONTROLS__ {
			justify-content: flex-end;
			gap: 10px;
			order: 5;
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
			order: 3;
		}

		.spacer {
			flex: 1 1 auto;
		}

		ul#sortable_nav>li .spacer {
			order: 4;
		}

		ul#sortable_nav>li input.accomo {
			flex: 0 0 auto;
			order: 6;
			float: none;
			margin: 0;
			width: 24px;
			height: 24px;
		}

        #sortable_nav>li:first-child div #__PSZY_MOVEUP__ ,
        #sortable_nav>li:first-child div #__PSZY_TOP__ ,
        #sortable_nav>li:last-child div #__PSZY_MOVEDOWN__ ,
        #sortable_nav>li:last-child div #__PSZY_BOTTOM__ {
            visibility: hidden;
        }

		#sortable_nav>li:not(:hover) #__PSZY_CONTROLS__{
			display: none;
		}

        #__PSZY_INFO__ svg,
        #__PSZY_CONTROLS__ svg,
		#__PSZY_GLOBAL_CONTROLS__ svg {
			display: inline;
			pointer-events: none;
            width: 1em;
            height: 1em;
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

	// global controls
	const globalControls = `
	<div id="__PSZY_GLOBAL_CONTROLS__">
		<form class="form-horizontal">
			<hr>
			<div class="form-group">
				<label class="col-md-4 control-label">Backup</label>
				<div class="col-md-4">
					<input id="__PSZY_EXPORT__" type="button" value="Export" class="btn btn-primary">
					<input id="__PSZY_IMPORT__" type="button" value="Import" class="btn btn-inverse">
					<input id="__PSZY_FILE__" type="file" accept=".csv,text/csv" style="display: none" />
				</div>
			</div>
			<hr>
			<div class="form-group">
				<label class="col-md-4 control-label">Select Range</label>
				<div class="col-md-4">
					<input id="__PSZY_RANGE__" class="form-control" type="search" placeholder="0-10,14-18,20,25">
				</div>
				<div class="col-md-4">
					<input id="__PSZY_SELECTRANGE__" type="button" value="Select" class="btn btn-primary">
					<input id="__PSZY_DESELECTRANGE__" type="button" value="Deselect" class="btn btn-inverse">
				</div>
			</div>
			<div class="form-group">
				<label class="col-md-4 control-label">Select Pattern</label>
				<div class="col-md-4">
					<input id="__PSZY_PATTERN__" class="form-control" type="search" placeholder="IT|Bengaluru (regex)">
				</div>
				<div class="col-md-4">
					<input id="__PSZY_SELECTPATTERN__" type="button" value="Select" class="btn btn-primary">
					<input id="__PSZY_DESELECTPATTERN__" type="button" value="Deselect" class="btn btn-inverse">
				</div>
			</div>
			<div class="form-group">
				<label class="col-md-4 control-label"></label>
				<div class="col-md-4">
					<input id="__PSZY_DESELECTALL__" type="button" value="Deselect All" class="btn btn-inverse">
					<span><span id="__PSZY_SELECTEDCOUNT__" >0</span> selected</span>
				</div>
			</div>
			<hr>
			<div class="form-group">
				<label class="col-md-4 control-label">Move selected to preference#</label>
				<div class="col-md-4">
					<input id="__PSZY_PREFNO__" class="form-control" type="number" value="1" min="1">
				</div>
				<div class="col-md-4">
					<input id="__PSZY_MOVESELECTED__" type="button" value="Move" class="btn btn-primary">
					<input id="__PSZY_MOVESELECTEDTOP__" type="button" value="Top" class="btn btn-inverse">
					<input id="__PSZY_MOVESELECTEDBOTTOM__" type="button" value="Bottom" class="btn btn-inverse">
				</div>
			</div>
			<hr>
			<div class="form-group">
				<label class="col-md-4 control-label"></label>
				<div class="col-md-4">
					<input id="__PSZY_FETCHINFO__" type="button" value="Fetch Info" class="btn btn-primary">
					<span>Warning: this will take a long time</span>
				</div>
			</div>
			<hr>
		</form>
		<div id="__PSZY_SCROLLTOTOP__" class="btn btn-primary btn-scroll-to-top" >${PSZYIcons.scrollToTop}</div>
	</div>`

	const divider = $('#rptlist > .hr.hr-dotted')
	divider.outerHTML = globalControls + divider.outerHTML

	// add controls
	const controls = `
	<div id="__PSZY_INFO__">
		<div id="__PSZY_STIPEND__" title="Stipend" class="btn btn-white btn-toolbar btn-xs">${PSZYIcons.rupee} <span>-</span></div>
		<div id="__PSZY_STUDENTS__" title="#students" class="btn btn-white btn-toolbar btn-xs">${PSZYIcons.students} <span>-</span></div>
		<div id="__PSZY_PROJECTS__" title="#projects" class="btn btn-white btn-toolbar btn-xs">${PSZYIcons.projects} <span>-</span></div>
		<div id="__PSZY_DISCIPLINE__" title="disciplines" class="btn btn-white btn-toolbar btn-xs">${PSZYIcons.discipline} <span>-</span></div>
		<div id="__PSZY_GRADE__" title="min cgpa" class="btn btn-white btn-toolbar btn-xs">${PSZYIcons.grade} <span>-</span></div>
	</div>
	<div class="spacer">&nbsp;</div>
	<div id="__PSZY_CONTROLS__">
		<div id="__PSZY_MOVEUP__" class="btn btn-primary btn-toolbar" title="Move 1 up">${PSZYIcons.moveUp}</div>
		<div id="__PSZY_MOVEDOWN__" class="btn btn-primary btn-toolbar" title="Move 1 down">${PSZYIcons.moveDown}</div>
		<div id="__PSZY_TOP__" class="btn btn-primary btn-toolbar" title="Send to top">${PSZYIcons.sendToTop}</div>
		<div id="__PSZY_BOTTOM__" class="btn btn-primary btn-toolbar" title="Send to bottom">${PSZYIcons.sendToBottom}</div>
		<div id="__PSZY_SWAP__" class="btn btn-primary btn-toolbar" title="Swap">${PSZYIcons.sendToBottom}<span>Swap</span></div>
		<div id="__PSZY_MOVETO__" class="btn btn-primary btn-toolbar" title="Move to">MoveTo</div>
		<div id="__PSZY_PBANK__" class="btn btn-inverse btn-toolbar" title="open problem bank">${PSZYIcons.info}</div>
	</div>`

	const lis = $('#sortable_nav > li')

	lis.forEach((li) => (li.innerHTML += controls))
	document.addEventListener('click', checkPSZYClicks, false)

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
			case '__PSZY_PBANK__':{ 
				let stid = e.target.parentNode.parentNode.querySelector('.spanclass.uiicon').attributes.spn.value
				let fetchBody = {StationId: stid}
				fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
					headers: {
						"content-type": "application/json; charset=UTF-8",
					},
					referrer: "http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx",
					referrerPolicy: "strict-origin-when-cross-origin",
					body: JSON.stringify(fetchBody),
					method: "POST",
					mode: "cors",
					credentials: "include"
				})
				.then(response => response.json())
				.then(data => {
					const parsed = JSON.parse(data.d)[0]
					window.open(`StationproblemBankDetails.aspx?CompanyId=${parsed.CompanyId}&StationId=${parsed.StationId}&BatchIdFor=${parsed.BatchIdFor}&PSTypeFor=${parsed.PSTypeFor}`, "_blank")
				})
				updateStationInfo(e.target.parentNode.parentNode).catch(e => console.error(JSON.stringify(e)))
				break
			}
			case '__PSZY_STIPEND__':
			case '__PSZY_STUDENTS__':
			case '__PSZY_PROJECTS__':
			case '__PSZY_DISCIPLINE__':
			case '__PSZY_GRADE__':
				updateStationInfo(e.target.parentNode.parentNode).catch(e => console.error(JSON.stringify(e)))
				break
			case '__PSZY_FETCHINFO__':{ 
				const allNodes = getAllItems()
				allNodes.forEach(n => updateStationInfo(n).catch(e => console.error(JSON.stringify(e))))
				break
			}
			case '__PSZY_EXPORT__':
				exportCsv()
				break
			case '__PSZY_IMPORT__':
				importCsv()
				break
			case '__PSZY_SELECTRANGE__':
				selectRange()
				break
			case '__PSZY_DESELECTRANGE__':
				deselectRange()
				break
			case '__PSZY_SELECTPATTERN__':
				selectPattern()
				break
			case '__PSZY_DESELECTPATTERN__':
				deselectPattern()
				break
			case '__PSZY_DESELECTALL__':
				deselectAll()
				break
			case '__PSZY_MOVESELECTED__':
				moveselectedto()
				break
			case '__PSZY_MOVESELECTEDTOP__':
				moveselectedtop()
				break
			case '__PSZY_MOVESELECTEDBOTTOM__':
				moveselectedbottom()
				break
			case '__PSZY_SCROLLTOTOP__':
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				})
				break
			default:
				selectNode(e.target)
				break
		}
	}

	function moveswap(node) {
		const thisPos = parseInt(node.querySelector('#spnRank').innerText)
		const otherPos = parseInt(prompt('Enter station# to swap with'), 10)
		const list = $('#sortable_nav li')
		const otherNode = list[otherPos - 1] // zero based index
		moveSelected([node], otherPos, { preserveSelection: true, recalculateRanks: false })
		moveSelected([otherNode], thisPos, { preserveSelection: true })
	}

	function getSelected() {
		return $('#sortable_nav').querySelectorAll('li.selected')
	}

	function getAllItems() {
		return $('#sortable_nav > li')
	}

	function moveselectedto() {
		moveSelected(getSelected(), parseInt($('#__PSZY_PREFNO__').value, 10))
	}

	function moveselectedtop() {
		moveSelected(getSelected(), 1)
	}

	function moveselectedbottom() {
		moveSelected(getSelected(), getAllItems().length)
	}

	function moveSelected(selection, to, { preserveSelection = false, recalculateRanks = true } = {}) {
		const listContainer = $('#sortable_nav')
		let list = getAllItems()
		// input validation
		if (selection.length == 0) {
			return alert('Select at least one station')
		}
		if (!Number.isInteger(to) || isNaN(to) || to < 1) {
			return alert('Enter a valid preference number')
		}
		if (to > list.length) {
			return alert('Not enough stations. Try a smaller number')
		}
		// move
		selection.forEach(node => {
			listContainer.removeChild(node)
		})
		list = getAllItems()
		if (to < list.length) {
			const targetNode = list[to - 1] // zero based index
			selection.forEach(node => {
				listContainer.insertBefore(node, targetNode)
			})
		} else {
			selection.forEach(node => {
				listContainer.appendChild(node)
			})
		}
		if (recalculateRanks) correctRanks()
		glow(...selection)
		if (!preserveSelection) deselectAll()
	}

	function selectNode(node) {
		// ignore clicks on any interactive element
		if (node.matches('input, a, button')) return
		// else (de)select the item
		node.closest('#sortable_nav > li')?.classList.toggle('selected')
		updateSelectedCount()
	}

	function deselectAll() {
		getSelected().forEach(node => node.classList.remove('selected'))
		updateSelectedCount()
	}

	function getRange() {
		const ranges = $('#__PSZY_RANGE__').value.split(',')
		const indices = []
		ranges.forEach(r => {
			r = r.trim()
			// matches numbers
			// insensitive to whitespace around number
			const singleNum = r.match(/^(\d+)$/m)
			if (singleNum !== null) {
				indices.push(parseInt(singleNum[1]))
				return
			}
			// matches: 10-22
			// insensitive to whitespace around number
			const numRange = r.match(/^(\d+)\W*-\W*(\d+)$/m)
			if (numRange !== null) {
				const min = parseInt(numRange[1])
				const max = parseInt(numRange[2])
				for (let i = min; i <= max; i++) {
					indices.push(i)
				}
				return
			}
		})
		return indices
	}

	function selectRange() {
		const list = getAllItems()
		getRange().forEach(i => {
			// zero based indexing
			list[i - 1].classList.add('selected')
		})
		updateSelectedCount()
	}

	function deselectRange() {
		const list = getAllItems()
		getRange().forEach(i => {
			// zero based indexing
			list[i - 1].classList.remove('selected')
		})
		updateSelectedCount()
	}

	function getPattern() {
		const pattern = $('#__PSZY_PATTERN__').value
		return new RegExp(pattern, 'im')
	}

	function selectPattern() {
		const list = getAllItems()
		const re = getPattern()
		list.forEach(n => {
			const text = n.querySelector('span.spanclass').innerText
			if (re.test(text)) {
				n.classList.add('selected')
			}
		})
		updateSelectedCount()
	}

	function deselectPattern() {
		const list = getAllItems()
		const re = getPattern()
		list.forEach(n => {
			const text = n.querySelector('span.spanclass').innerText
			if (re.test(text)) {
				n.classList.remove('selected')
			}
		})
		updateSelectedCount()
	}

	function updateSelectedCount() {
		const count = getSelected().length
		$('#__PSZY_SELECTEDCOUNT__').innerText = count.toString()
	}

	function moveup(node) {
		const newPos = parseInt(node.previousSibling.querySelector('#spnRank').innerText)
		moveSelected([node], newPos, { preserveSelection: true })
		window.scrollBy({
			top: -1 * node.offsetHeight,
			behavior: 'smooth'
		})
	}

	function movedown(node) {
		const newPos = parseInt(node.nextSibling.querySelector('#spnRank').innerText)
		moveSelected([node], newPos, { preserveSelection: true })
		window.scrollBy({
			top: node.offsetHeight,
			behavior: 'smooth'
		})
	}

	function movetotop(node) {
		moveSelected([node], 1, { preserveSelection: true })
	}

	function movetobottom(node) {
		moveSelected([node], getAllItems().length, { preserveSelection: true })
	}

	function moveto(node) {
		const newNodePos = parseInt(prompt('Enter preference#'), 10)
		moveSelected([node], newNodePos, { preserveSelection: true })
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
			li.querySelector('#spnRank').innerText = index + 1
			li.querySelector('span.spanclass').setAttribute('cls', index + 1)
		})
	}

	function exportCsv() {
		const list = getAllItems()
		const data = [['ID', 'NAME', 'ACCOMO']]
		list.forEach(n => {
			const a = n.querySelector('span.spanclass')
			const b = n.querySelector('input[type="checkbox"]')
			data.push([a.getAttribute('spn'), encodeURIComponent(a.innerText), Number(b.checked)])
		})
		const blob = new Blob([data.map(row => row.join(',')).join('\n')], { type: 'text/html', endings: 'native' })
		const url = URL.createObjectURL(blob)
		const anchor = document.createElement('a')
		anchor.href = url
		anchor.download = 'ps2_preferences.csv'
		document.body.appendChild(anchor)
		anchor.click()
		anchor.remove()
		URL.revokeObjectURL(url)
	}

	function importCsv() {
		const confirmed = confirm('WARNING: not tested when csv file becomes stale.\nClick OK to continue (unsafe).')
		if (!confirmed) return
		const picker = $('#__PSZY_FILE__')
		picker.click()
		picker.addEventListener('change', () => {
			picker.files?.[0]?.text().then(text => {
				const list = getAllItems()
				if (!text.startsWith('ID,NAME,ACCOMO')) return alert('Bad File')
				const data = text.trim().split('\n').map(s => s.trim().split(','))
				data.shift() // remove header
				data.forEach((r, i) => {
					const a = list[i].querySelector('span.spanclass')
					const b = list[i].querySelector('input[type="checkbox"]')
					const [id, name, accomo] = r
					const nameText = decodeURIComponent(name)
					a.setAttribute('spn', id)
					a.setAttribute('cname', nameText)
					a.innerText = nameText
					b.checked = Number(accomo)
				})
				correctRanks()
				console.info(`imported ${data.length} rows`)
			})
		})
	}

	async function updateStationInfo(node) {
		const stid = node.querySelector('.spanclass.uiicon').attributes.spn.value
		const fetchBody = {StationId: stid}
		const response = await fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
			headers: {
				"content-type": "application/json; charset=UTF-8"
			},
			referrer: "http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: JSON.stringify(fetchBody),
			method: "POST",
			mode: "cors",
			credentials: "include"
		})
		if (!response.ok) throw new Error(await response.json())
		const data = await response.json()
		const parsed = JSON.parse(data.d)[0]
		const response1 = await fetch("http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx/ViewPB", {
			headers: {
				"content-type": "application/json; charset=UTF-8"
			},
			referrer: `http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx?CompanyId=${parsed.CompanyId}&StationId=${parsed.StationId}&BatchIdFor=${parsed.BatchIdFor}&PSTypeFor=${parsed.PSTypeFor}`,
			referrerPolicy: "strict-origin-when-cross-origin",
			body: "{batchid: \"undefined\" }",
			method: "POST",
			mode: "cors",
			credentials: "include"
		})
		if (!response1.ok) throw new Error(await response1.json())
		const data1 = await response1.json()
		const parsed1 = JSON.parse(data1.d)[0]
		const response2 = await fetch("http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx/StationFacilitiesInfo", {
			headers: {
				"content-type": "application/json; charset=UTF-8"
			},
			referrer: `http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx?CompanyId=${parsed.CompanyId}&StationId=${parsed.StationId}&BatchIdFor=${parsed.BatchIdFor}&PSTypeFor=${parsed.PSTypeFor}`,
			referrerPolicy: "strict-origin-when-cross-origin",
			body: "{StationId: \"0\"}",
			method: "POST",
			mode: "cors",
			credentials: "include"
		})
		if (!response2.ok) throw new Error(await response2.json())
		const data2 = await response2.json()
		const parsed2 = JSON.parse(data2.d)[0]
		node.querySelector('#__PSZY_STIPEND__ span').innerText = parsed2?.Stipend ?? '-'
		node.querySelector('#__PSZY_STUDENTS__ span').innerText = parsed1?.TotalReqdStudents ?? '-'
		node.querySelector('#__PSZY_PROJECTS__ span').innerText = parsed1?.TotalProject ?? '-'
		node.querySelector('#__PSZY_DISCIPLINE__ span').innerText = Array.from(new Set((parsed1?.Tags.replaceAll(' ', '').replaceAll('Any', '') || 'Any').split(','))).join(',') 
		node.querySelector('#__PSZY_GRADE__ span').innerText = parsed1?.GeneralMinCGPA ?? '-'
	}
}
