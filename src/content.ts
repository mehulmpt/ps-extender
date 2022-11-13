// @ts-nocheck

import styles from './assets/styles.css?raw'
import globalControls from './templates/globalControls.html?raw'
import itemControls from './templates/itemControls.html?raw'
import { $, moveup, movedown, movetotop, movetobottom, moveswap, moveto, exportCsv, importCsv, selectRange, deselectRange, selectPattern, deselectPattern, deselectAll, moveselectedto, moveselectedtop, moveselectedbottom, selectNode, updateStationInfo } from './utils'

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

if (checks()) {

	window.__PSZYSET__ = true

	// add styles
	document.head.innerHTML += `
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
			case '__PSZY_ADDNOTE__': {
				const note = e.target.parentNode.parentNode.querySelector('#__PSZY_NOTE__')
				if (note.innerText.length === 0)
					note.innerText = 'Edit me'
				note.focus()
				break
			}
			case '__PSZY_NOTE__':
				// ignore click
				break
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

}
