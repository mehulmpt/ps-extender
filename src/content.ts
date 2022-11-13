// @ts-nocheck

import styles from './assets/styles.css?raw'
import globalControls from './templates/globalControls.html?raw'
import itemControls from './templates/itemControls.html?raw'

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

	window.__PSZYSET__ = true
	
	// add styles
	document.head.innerHTML +=`
	<style>${styles}</style>
	<link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css">
	`

	// disable default sorting library
	const script = document.createElement('script')
	script.innerHTML = `$('#sortable_nav').sortable('destroy'); $('#sortable_nav').enableSelection();`
	document.head.appendChild(script)

	// add global controls
	const divider = $('#rptlist > .hr.hr-dotted')
	divider.outerHTML = globalControls + divider.outerHTML

	// add item controls
	const lis = $('#sortable_nav > li')
	lis.forEach((li) => (li.innerHTML += itemControls))
	
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
			case '__PSZY_PBANK__': {
				let stid = e.target.parentNode.parentNode.querySelector('.spanclass.uiicon').attributes.spn.value
				let fetchBody = { StationId: stid }
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
					const parsed = JSON.parse(data.d)
					if (parsed.length > 0) {
						const w = window.open(`StationproblemBankDetails.aspx?CompanyId=${parsed[0].CompanyId}&StationId=${parsed[0].StationId}&BatchIdFor=${parsed[0].BatchIdFor}&PSTypeFor=${parsed[0].PSTypeFor}`, "_blank")
						w.onload = () => updateStationInfo(e.target.parentNode.parentNode).catch(e => console.error(e))
					} else {
						alert('No problem banks found')
					}
				})
				break
			}
			case '__PSZY_STIPEND__':
			case '__PSZY_STUDENTS__':
			case '__PSZY_PROJECTS__':
			case '__PSZY_DISCIPLINE__':
				// updateStationInfo(e.target.parentNode.parentNode)
				break
			// case '__PSZY_FETCHINFO__': {
			// 	const allNodes = getAllItems()
			// 	allNodes.forEach(n => updateStationInfo(n))
			// 	break
			// }
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

	function updateStationInfo(node) {
		const stid = node.querySelector('.spanclass.uiicon').attributes.spn.value
		const fetchBody = { StationId: stid }
		return fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
			headers: {
				"accept": "application/json, text/javascript, */*; q=0.01",
				"accept-language": "en-US,en;q=0.9",
				"content-type": "application/json; charset=UTF-8",
				"sec-gpc": "1",
				"x-requested-with": "XMLHttpRequest",
				"cache-control": "no-cache",
				"pragma": "no-cache",
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
			const parsed = JSON.parse(data.d)
			if (parsed.length === 0) throw new Error("No problem banks found for this station")
			const current = parsed[0]
			const response1 = fetch("http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx/ViewPB", {
				headers: {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"accept-language": "en-US,en;q=0.9",
					"content-type": "application/json; charset=UTF-8",
					"sec-gpc": "1",
					"x-requested-with": "XMLHttpRequest",
					"cache-control": "no-cache",
					"pragma": "no-cache",
				},
				referrer: `http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx?CompanyId=${current.CompanyId}&StationId=${current.StationId}&BatchIdFor=${current.BatchIdFor}&PSTypeFor=${current.PSTypeFor}`,
				referrerPolicy: "strict-origin-when-cross-origin",
				body: "{\"batchid\": \"undefined\" }",
				method: "POST",
				mode: "cors",
				credentials: "include"
			})
			const response2 = fetch("http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx/StationFacilitiesInfo", {
				headers: {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"accept-language": "en-US,en;q=0.9",
					"content-type": "application/json; charset=UTF-8",
					"sec-gpc": "1",
					"x-requested-with": "XMLHttpRequest",
					"cache-control": "no-cache",
					"pragma": "no-cache",
				},
				referrer: `http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx?CompanyId=${current.CompanyId}&StationId=${current.StationId}&BatchIdFor=${current.BatchIdFor}&PSTypeFor=${current.PSTypeFor}`,
				referrerPolicy: "strict-origin-when-cross-origin",
				body: "{\"StationId\": \"0\"}",
				method: "POST",
				mode: "cors",
				credentials: "include"
			})
			return Promise.all([response1, response2])
		})
		.then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
		.then(([data1, data2]) => {
			const parsed1 = JSON.parse(data1.d)
			const parsed2 = JSON.parse(data2.d)[0]
			const totStudents = parsed1?.map(p => p.TotalReqdStudents).reduce((acc, val) => acc + val) ?? '-'
			const tags = parsed1?.map(p => p.Tags.replaceAll(' ', '').replaceAll('-', '').replaceAll('Any', '')).join(',')
			node.querySelector('#__PSZY_STIPEND__ span').innerText = parsed2?.Stipend ?? '-'
			node.querySelector('#__PSZY_STUDENTS__ span').innerText = totStudents
			node.querySelector('#__PSZY_PROJECTS__ span').innerText = parsed1?.[0].TotalProject ?? '-'
			node.querySelector('#__PSZY_DISCIPLINE__ span').innerText = Array.from(new Set(tags.split(','))).filter(x => !!x).join(',') || 'Any'
		})
	}
}
